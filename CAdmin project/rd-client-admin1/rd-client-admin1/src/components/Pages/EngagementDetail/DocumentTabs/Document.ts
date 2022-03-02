import { defineComponent, ref, onBeforeMount, defineAsyncComponent } from 'vue';
import VPagination from '@hennge/vue3-pagination';
import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import Helper from '@/globalFunctions/Helper';

const addform = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/AddForm/AddForm.vue'));
export default defineComponent({
  name: 'DocumentTabs',
  components: {
    VPagination,
    'add-form': addform,
  },
  props: {
    meetingId: {
      default: '',
    },
    tabCode: {
      default: '',
    },
  },
  setup(props) {
    const documentList = ref([]) as any;
    const loader = ref(false) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(0) as any;
    const meetingId = ref(props.meetingId) as any;
    const tabCode = ref(props.tabCode) as any;
    const docTypeList = ref([]) as any;
    const initformData = ref([]) as any;
    const openForm = ref(false) as any;
    const tabInfo = ref({}) as any;
    const toasterInfo = ref({}) as any;
    const isToaster = ref(false) as any;
    // List Content Api
    const listDocument = async (page: any = '') => {
      loader.value = true;
      try {
        let pagination = '';
        if (currentPage.value !== '') {
          pagination = '?page=' + currentPage.value + '&limit=' + 10;
        }

        const param = meetingId.value + '/' + tabCode.value + pagination;
        const res = await ServiceEngagement.engTabList(param);
        if (res.is_success) {
          documentList.value = res.result;
          totalPages.value = res.total_count ? res.total_count : 0;
        } else {
          documentList.value = [];
        }
        console.log('Tab Result', res);
      } catch (error) {
        documentList.value = [];
      }
      loader.value = false;
    };

    // Document Type List
    const listDocumentType = async () => {
      const res = await ServiceEngagement.docTypeList();
      if (res.is_success && res.result && res.result.length !== 0) {
        docTypeList.value = res.result;
        formatDropdown();
      }
      console.log('listDocumentType', docTypeList.value);
    };

    // Init form
    const initilizeForm = async (value: any = '') => {
      initformData.value = [
        {
          id: 0,
          label: 'Document Name',
          disable: true,
          hidden: value ? false : true,
          param: 'file_name',
          type: 'text',
          required: false,
          value: value ? value.document_name : '',
          dropdownvalue: docTypeList.value,
          errorMsg: 'Document Type is Required',
        },
        {
          id: 1,
          label: 'Document Type',
          disable: false,
          param: 'document_type',
          type: 'dropdown',
          required: true,
          value: value ? value.document_type_id : '',
          dropdownvalue: docTypeList.value,
          errorMsg: 'Document Type is Required',
        },
        {
          id: 2,
          label: 'Upload Document',
          disable: false,
          required: value && value.document_file ? false : true,
          param: 'files',
          type: 'fileupload',
          value: '',
          file: value ? value.document_file : '',
          errorMsg: 'Document is required',
        },
      ];
      openForm.value = true;
    };

    // Close Notes
    const cloeForm = async (event: any = '') => {
      console.log('emit event', event);
      openForm.value = false;
      if (event !== '') {
        isToaster.value = true;
        if (event.apiStatus) {
          toasterInfo.value.success = true;
        } else {
          toasterInfo.value.success = false;
        }
        if (event.message) {
          toasterInfo.value.msg = event.message;
        } else {
          toasterInfo.value.msg = event.result;
        }
        loader.value = true;
        await listDocument();
        loader.value = false;
        setTimeout(async () => {
          isToaster.value = false;
        }, 2000);
      }
    };

    // On Before mount Function
    onBeforeMount(async () => {
      await listDocumentType();
      await listDocument();
    });

    // Common Format For Dropdown
    const formatDropdown = async () => {
      docTypeList.value = Helper.commonFormatForDropdown(docTypeList.value, 'name');
    };

    return {
      documentList,
      currentPage,
      totalPages,
      meetingId,
      tabCode,
      loader,
      listDocumentType,
      docTypeList,
      formatDropdown,
      initilizeForm,
      initformData,
      openForm,
      tabInfo,
      cloeForm,
      toasterInfo,
      isToaster,
      listDocument,
    };
  },
  methods: {
    bindData(data: any) {
      if (data) {
        return data;
      } else {
        return '---';
      }
    },

    download(downloadUrl: any) {
      console.log('downloadUrl', downloadUrl);

      if (downloadUrl) {
        const url = downloadUrl;
        const exportElement = document.createElement('a');
        exportElement.href = url;
        exportElement.target = '_blank';
        exportElement.click();
      }
    },

    openAddForm(value: any) {
      console.log('value', value);
      this.tabInfo = {
        title: 'ADD NEW DOCUMENT',
        endPoint: '/' + this.tabCode,
        method: 'post',
        meeting: this.meetingId,
        from: 'document',
      };
      this.initilizeForm();
    },

    editForm(value: any) {
      console.log('value', value);
      this.tabInfo = {
        title: 'EDIT DOCUMENT',
        endPoint: '/' + this.tabCode + '/' + value.id,
        method: 'put',
        meeting: this.meetingId,
        from: 'editdocument',
      };
      this.initilizeForm(value);
    },
  },
});
