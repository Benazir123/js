/* eslint-disable vue/no-dupe-keys */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import { defineAsyncComponent, defineComponent, ref, onBeforeMount } from 'vue';
import VPagination from '@hennge/vue3-pagination';

const Notes = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/NotesTabs/Notes.vue'));
const Task = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/TaskTabs/Task.vue'));

const TabHeading = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/TabHeading/TabHeading.vue'));

const addform = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/AddForm/AddForm.vue'));

export default defineComponent({
  name: 'Attendee',
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
    categoryId: {
      default: '',
    },
    categoryIdNotes: {
      default: '',
    },
    categoryIdTask: {
      default: '',
    },
    engInfo: {
      default: '',
    },
    meetingStatus: {
      default: '',
    },
  },
  setup(props) {
    const attendee = ref([]) as any;
    const hcpList = ref([]) as any;
    const imgError = ref(1) as any;
    const activeTab = ref(1) as any;
    const tabHeading = ref(1) as any;
    const reLoadeHeading = ref(1) as any;
    const loader = ref(false) as any;
    const tabTittle = ref(props.tabTittle) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(0) as any;
    const meetingId = ref(props.meetingId) as any;
    const tabCode = ref(props.tabCode) as any;
    const tabListName = ref([]) as any;
    const categoryId = ref(props.categoryId) as any;
    const categoryIdNotes = ref(props.categoryIdNotes) as any;
    const categoryIdTask = ref(props.categoryIdNotes) as any;
    const toasterInfo = ref({}) as any;
    const isToaster = ref(false) as any;
    const openForm = ref(false) as any;
    const isAddForm = ref(true) as any;
    const initformData = ref([]) as any;
    const tabInfo = ref({}) as any;
    const engInfo = ref(props.engInfo) as any;
    const meetingStatus = ref(props.meetingStatus) as any;
    const meetingSpeakerId = ref([]) as any;
    const emailFormDataForHcp = ref([]) as any;
    const isRemote = ref('') as any;
    // List  Hcp Api
    const listHcp = async (page: any = '') => {
      loader.value = true;
      try {
        console.log('categoryIdNotes', categoryIdNotes.value);
        let pagination = '';
        if (page) {
          pagination = '?page=' + page + '&limit=' + 10;
        }

        const param = meetingId.value + '/' + tabCode.value + pagination;
        const res = await ServiceEngagement.engTabList(param);
        if (res.is_success) {
          res.result = res.result.filter((a: any) => a.full_name !== ' ');
          hcpList.value = res.result;
          totalPages.value = res.total_count ? res.total_count : 0;
        } else {
          hcpList.value = [];
        }
        console.log('dmRes', res);
      } catch (error) {
        hcpList.value = [];
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
        await listHcp();
      }
    };

    // Init Notes
    const initilizeForm = async (value: any = '') => {
      // Get Meeting Speaker Id
      if (engInfo.value.engagement_speaker.user && engInfo.value.engagement_speaker.user.length !== 0) {
        engInfo.value.engagement_speaker.user.forEach((value: any) => {
          meetingSpeakerId.value.push(value.id);
        });
      }
      isRemote.value = engInfo.value.engagement_type.is_remote;
      console.log('isRemote.value', isRemote.value);
      openForm.value = true;
      isAddForm.value = false;
      initformData.value = [
        {
          id: 0,
          label: 'First Name',
          required: true,
          disable: false,
          param: 'first_name',
          type: 'text',
          value: '',
          errorMsg: 'First Name is required',
        },
        {
          id: 1,
          label: 'Last Name',
          required: true,
          disable: false,
          param: 'last_name',
          type: 'text',
          value: '',
          errorMsg: 'Last Name is required',
        },
        {
          id: 2,
          label: 'Degree',
          disable: false,
          param: 'degree',
          type: 'dropdown',
          required: true,
          value: [],
          dropdownvalue: [],
          errorMsg: 'Degree is required',
          ischooseValue: 'label',
        },
        {
          id: 3,
          label: 'Specialty',
          disable: false,
          param: 'speciality',
          type: 'dropdown',
          required: true,
          value: value ? value.category.id : categoryId.value,
          dropdownvalue: [],
          errorMsg: 'Specialty is required',
          ischooseValue: 'label',
        },
        {
          id: 4,
          label: 'Institution',
          required: true,
          disable: false,
          param: 'institution',
          type: 'text',
          value: '',
          errorMsg: 'Institution is required',
        },
        {
          id: 5,
          label: 'NPI Number',
          required: false,
          disable: false,
          param: 'npi',
          type: 'text',
          value: '',
          errorMsg: 'NPI Number is required',
        },
        {
          id: 6,
          label: 'State of License',
          disable: false,
          param: 'state_of_license',
          type: 'dropdown',
          required: false,
          value: value ? value.category.id : categoryId.value,
          dropdownvalue: [],
          errorMsg: 'State of License is required',
          ischooseValue: 'label',
        },
        {
          id: 7,
          label: 'State License Number',
          required: true,
          disable: false,
          param: 'state_of_license_no',
          type: 'text',
          value: '',
          errorMsg: 'State License Number is required',
        },
        {
          id: 8,
          label: 'Email',
          required: true,
          disable: false,
          param: 'email',
          type: 'text',
          value: '',
          errorMsg: 'Email is required',
        },
        {
          id: 9,
          label: 'Telephone',
          required: true,
          disable: false,
          inputtype: 'number',
          param: 'telephone',
          type: 'text',
          value: '',
          errorMsg: 'Telephone is required',
        },
        {
          id: 10,
          label: 'Address',
          required: true,
          disable: false,
          param: 'address',
          type: 'textarea',
          value: '',
          errorMsg: 'Address is required',
        },
        {
          id: 7,
          label: 'Zipcode',
          required: true,
          disable: false,
          param: 'zip',
          type: 'text',
          paramvalue: 'zipcode',
          value: '',
          inputtype: 'number',
          maxLength: 5,
          errorMsg: 'Zipcode is required',
          lengthError: 'Zipcode must be 5 Digit.',
        },
        {
          id: 8,
          label: 'City',
          required: true,
          disable: true,
          param: 'city',
          type: 'text',
          value: '',
          errorMsg: 'City is required',
        },
        {
          id: 9,
          label: 'State',
          required: true,
          disable: true,
          param: 'state',
          type: 'text',
          value: '',
          errorMsg: 'State is required',
        },
      ];

      emailFormDataForHcp.value = [
        {
          id: 1,
          label: 'Email',
          required: true,
          disable: false,
          param: 'email',
          type: 'text',
          value: '',
          errorMsg: 'Email is required',
        },
        {
          id: 2,
          label: 'Phone',
          required: false,
          disable: false,
          inputtype: 'number',
          param: 'telephone',
          type: 'text',
          value: '',
          errorMsg: 'Telephone is required',
        },
      ];
    };

    // Close Notes
    const cloeForm = async (event: any = '') => {
      console.log('emit event', event);
      toasterInfo.value = {};
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
        } else if (event.messages) {
          toasterInfo.value.msg = event.messages;
        } else {
          toasterInfo.value.msg = event.result;
        }

        loader.value = true;
        currentPage.value = 1;
        await listHcp();
        loader.value = false;
        setTimeout(async () => {
          isToaster.value = false;
        }, 2000);
      }
    };

    // On Before mount Function
    onBeforeMount(async () => {
      tabListName.value = [
        { id: 1, tabTittle: 'Attendee' },
        { id: 2, tabTittle: 'Notes' },
        { id: 3, tabTittle: 'Tasks' },
      ];
      await listHcp();
      // meetingSpeakerId
    });

    return {
      attendee,
      imgError,
      hcpList,
      activeTab,
      tabHeading,
      tabChange,
      reLoadeHeading,
      loader,
      tabTittle,
      currentPage,
      totalPages,
      listHcp,
      meetingId,
      tabCode,
      tabListName,
      categoryId,
      categoryIdNotes,
      categoryIdTask,
      toasterInfo,
      isToaster,
      initilizeForm,
      initformData,
      isAddForm,
      openForm,
      tabInfo,
      engInfo,
      meetingStatus,
      cloeForm,
      meetingSpeakerId,
      emailFormDataForHcp,
      isRemote,
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

    // Status Change
    async statusChange(statusid: any, row: any) {
      const param = {
        status: statusid,
      };
      this.loader = true;
      const url = '/engagements/' + this.meetingId + '/attendees/' + row.id + '/statuses';
      const res = await ServiceEngagement.commonEndpoint('put', url, param);
      this.loader = false;
      console.log('statusChange', res);
      this.cloeForm(res);
    },

    // Alt Img Handling
    errorImg(data: any) {
      data.errorImg = true;
      this.imgError += 1;
    },

    copyLink(link: any) {
      console.log('link', link);
      this.toasterInfo = {};
      this.toasterInfo.info = true;
      this.isToaster = true;
      const selBox = document.createElement('textarea') as any;
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = link;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);

      setTimeout(async () => {
        this.isToaster = false;
      }, 1000);
    },

    // Add Form
    // topic: this.engInfo.topic.id,

    async openAddForm() {
      console.log('Add form');
      this.tabInfo = {
        title: 'ADD ATTENDEE',
        listPageEndPoint: '/hcps',
        listPageAddEndPoint: '/engagements/' + this.meetingId + '/attendees',
        listPageMethod: 'post',
        endPoint: '/attendee',
        addEmailPageEndpoint: '/email_update',
        listpageparam: {
          engagementType: this.engInfo.engagement_type.id,
          product: this.engInfo.product.id,
          meeting_id: this.meetingId,
          start_time: this.engInfo.start_time,
          brand: 1,
          speaker: this.meetingSpeakerId,
          limit: 15,
        },
        listPageAddMethod: 'post',
        method: 'post',
        meeting: this.meetingId,
        addParam: 'hcp',
        from: 'hcp',
        brand: this.engInfo.brand,
        product: this.engInfo.product.id,
      };
      this.initilizeForm();
    },
  },
});
