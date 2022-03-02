/* eslint-disable vue/no-dupe-keys */
import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import { defineComponent, ref, onBeforeMount, defineAsyncComponent } from 'vue';
import VPagination from '@hennge/vue3-pagination';

const Notes = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/NotesTabs/Notes.vue'));
const Task = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/TaskTabs/Task.vue'));
const TabHeading = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/TabHeading/TabHeading.vue'));

const addform = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/AddForm/AddForm.vue'));

export default defineComponent({
  name: 'Caterer',
  inheritAttrs: false,
  components: {
    'notes-page': Notes,
    'task-page': Task,
    'tab-heading': TabHeading,
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
    tabTittle: {
      default: '',
    },
    categoryIdNotes: {
      default: '',
    },
    categoryIdTask: {
      default: '',
    },
    meetingStatus: {
      default: '',
    },
    addCaterEnable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      openspkTab: 1,
    };
  },
  setup(props) {
    const catererList = ref([]) as any;
    const imgError = ref(1) as any;
    const activeTab = ref(1) as any;
    const tabHeading = ref(1) as any;
    const reLoadeHeading = ref(1) as any;
    const loader = ref(false) as any;
    const tabCode = ref(props.tabCode) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(0) as any;
    const meetingId = ref(props.meetingId) as any;
    const tabTittle = ref(props.tabTittle) as any;
    const tabListName = ref([]) as any;
    const categoryIdNotes = ref(props.categoryIdNotes) as any;
    const categoryIdTask = ref(props.categoryIdNotes) as any;
    const catererStatus = ref([]) as any;
    const showdelete = ref(false) as any;
    const showlocations = ref(false) as any;
    const submitted = ref(false) as any;
    const caterId = ref(false) as any;
    const toasterInfo = ref({}) as any;
    const isToaster = ref(false) as any;
    const tabInfo = ref({}) as any;
    const openForm = ref(false) as any;
    const initformData = ref([]) as any;
    const isAddForm = ref(true) as any;
    // List  Caterer Api
    const listCaterer = async (page: any = '') => {
      loader.value = true;
      try {
        let pagination = '';
        if (page) {
          pagination = '?page=' + page + '&limit=' + 10;
        }

        const param = meetingId.value + '/' + tabCode.value + pagination;
        const res = await ServiceEngagement.engTabList(param);
        if (res.is_success) {
          totalPages.value = res.total_count ? res.total_count : 0;
          catererList.value = res.result;
        } else {
          catererList.value = [];
        }
        console.log('Response', res);
      } catch (error) {
        catererList.value = [];
      }
      loader.value = false;
    };

    // Tab Change Event

    const tabChange = async (tabvalue: any) => {
      console.log('tabChange', tabvalue);
      reLoadeHeading.value += 1;
      activeTab.value = tabvalue;
      if (activeTab.value === 1) {
        currentPage.value = 1;
        await listCaterer();
      }
    };

    // On Before mount Function
    onBeforeMount(async () => {
      tabListName.value = [
        { id: 1, tabTittle: 'Caterer' },
        { id: 2, tabTittle: 'Notes' },
        { id: 3, tabTittle: 'Tasks' },
      ];
      await listCaterer();
      await listCatererStatus();
    });

    // List Caterer Status
    const listCatererStatus = async (status: any = '') => {
      // loader.value = true
      console.log('status', status);
      let param = '';
      param = 'caterers/statuses?status=' + status;
      console.log('param', param);

      try {
        const res = await ServiceEngagement.profile('get', param);
        console.log('listCatererStatus', res);
        if (res.result && res.result.length !== 0) {
          catererStatus.value = res.result;
        } else {
          catererStatus.value = [];
        }
      } catch (error) {
        catererStatus.value = [];
      }
      // loader.value = true
    };

    const listStatus = async (status: any = '') => {
      listCatererStatus(status);
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
        currentPage.value = 1;
        await listCaterer();
        loader.value = false;
        setTimeout(async () => {
          isToaster.value = false;
        }, 2000);
      }
    };

    // Init Forms
    const initilizeForm = async (value: any = '') => {
      openForm.value = true;
      isAddForm.value = false;
      // document.body.classList.add('overflow-hidden')
      initformData.value = [
        {
          id: 0,
          label: 'Caterer Name',
          required: true,
          disable: false,
          param: 'caterer_name',
          type: 'text',
          value: '',
          errorMsg: 'Caterer Name is required',
        },
        {
          id: 1,
          label: 'Address 1',
          required: true,
          disable: false,
          param: 'address',
          type: 'textarea',
          value: '',
          errorMsg: 'Address is required',
        },
        {
          id: 2,
          label: 'Address 2',
          required: false,
          disable: false,
          param: 'address2',
          type: 'textarea',
          value: '',
          errorMsg: 'address2 is required',
        },
        {
          id: 3,
          label: 'Phone',
          required: true,
          disable: false,
          param: 'phone',
          type: 'text',
          value: '',
          inputtype: 'number',
          errorMsg: 'Phone is required',
        },
        {
          id: 4,
          label: 'Email',
          required: false,
          disable: false,
          param: 'email',
          type: 'text',
          value: '',
          errorMsg: 'Email is required',
        },
        {
          id: 5,
          label: 'Zipcode',
          required: true,
          disable: false,
          param: 'zipcode',
          type: 'text',
          value: '',
          paramvalue: 'zipcode',
          inputtype: 'number',
          maxLength: 5,
          errorMsg: 'Zipcode is required',
          lengthError: 'Zipcode must be 5 Digit.',
        },
        {
          id: 6,
          label: 'City',
          required: true,
          disable: true,
          param: 'city',
          type: 'text',
          value: '',
          errorMsg: 'City is required',
        },
        {
          id: 7,
          label: 'State',
          required: true,
          disable: true,
          param: 'state',
          type: 'text',
          value: '',
          errorMsg: 'State is required',
        },
        {
          id: 8,
          label: 'Contact Name',
          required: false,
          disable: false,
          param: 'contact_name',
          type: 'text',
          value: '',
          errorMsg: 'City is required',
        },
      ];
    };

    return {
      imgError,
      catererList,
      activeTab,
      tabHeading,
      tabChange,
      reLoadeHeading,
      loader,
      tabCode,
      currentPage,
      totalPages,
      meetingId,
      tabTittle,
      tabListName,
      categoryIdNotes,
      categoryIdTask,
      catererStatus,
      listStatus,
      showdelete,
      submitted,
      caterId,
      toasterInfo,
      isToaster,
      tabInfo,
      initilizeForm,
      openForm,
      initformData,
      isAddForm,
      cloeForm,
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

    // Close Form
    cloeForm(value: any) {
      if (value !== '') {
        console.log('cloeForm', value);
        this.isToaster = true;
        if (value.apiStatus) {
          this.toasterInfo.success = true;
          if (value.message) {
            this.toasterInfo.msg = value.message;
          } else {
            this.toasterInfo.msg = value.result;
          }
        } else if (value.data.apiStatus) {
          this.toasterInfo.success = true;
          if (value.data.message) {
            this.toasterInfo.msg = value.data.message;
          } else {
            this.toasterInfo.msg = value.data.result;
          }
        } else {
          this.toasterInfo.success = false;
          this.toasterInfo.msg = value.error.message;
        }
        setTimeout(async () => {
          this.isToaster = false;
        }, 2000);
      }
    },

    // Alt Img Handling
    errorImg(data: any) {
      data.errorImg = true;
      this.imgError += 1;
    },

    // Delete Cater
    deleteCater(id: any, statusId: any) {
      if (statusId !== 5 && statusId !== 1) {
        this.showdelete = true;
        this.caterId = id;
        console.log('id', id);
      }
    },

    // Confirm Delete Cater
    async cater() {
      this.submitted = true;
      const url = '/caterers/' + this.caterId + '?meeting=' + this.meetingId;
      const Deleteres = await ServiceEngagement.commonEndpoint('delete', url);
      this.cloeForm(Deleteres);
      this.submitted = false;
      this.showdelete = false;
      console.log('Deleteres', Deleteres);
    },

    // Add Form
    async openAddForm() {
      console.log('Add form');
      this.tabInfo = {
        title: 'ADD NEW CATERER',
        endPoint: '/caterers',
        listPageEndPoint: '/caterers',
        listPageAddEndPoint: '/engagements/' + this.meetingId + '/caterers',
        listPageMethod: 'get',
        listPageAddMethod: 'post',
        method: 'post',
        meeting: this.meetingId,
        addParam: 'caterer_id',
        from: 'caterer',
      };
      this.initilizeForm();
    },

    // Change Cater status
    async changeCaterStatus(row: any, caterId: any) {
      console.log('changeCaterStatus', row);
      console.log('event', caterId);
      row.statusChangeLoader = true;
      let url;
      if (row.location.id) {
        url =
          '/engagements/' +
          this.meetingId +
          '/cater/' +
          row.caterer.id +
          '/statuses?status=' +
          caterId +
          '&location_id=' +
          row.location.id;
      } else {
        url = '/engagements/' + this.meetingId + '/cater/' + row.caterer.id + '/statuses?status=' + caterId;
      }

      const res = await ServiceEngagement.commonEndpoint('put', url);
      await this.cloeForm(res);
      row.statusChangeLoader = false;
      console.log('res', res);
    },

    async checkIsdisabled(statusId: any) {
      console.log('Caterer status id', statusId);
      this.catererStatus.forEach((value: any) => {
        if (value.id === 0 && (statusId === 1 || statusId === 5)) {
          value.disabled = true;
        } else {
          value.disabled = false;
        }
      });
      console.log(this.catererStatus);
    },
  },
});
