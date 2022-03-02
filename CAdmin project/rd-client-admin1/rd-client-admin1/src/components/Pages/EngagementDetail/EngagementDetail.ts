import Helper from '@/globalFunctions/Helper';
import router from '@/router';
import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import store from '@/store';
import { defineAsyncComponent, defineComponent, ref, onBeforeMount } from 'vue';
const DetailsPage = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/DetailsPage/DetailsPage.vue'));
const Engagement = defineAsyncComponent(() => import('@/components/Pages/Engagement/Engagement.vue'));
const AV = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/AVTabs/AV.vue'));
const Attendee = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/AttendeeTabs/Attendee.vue'));
const Speaker = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/SpeakerTabs/Speaker.vue'));
const Dm = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/DmTabs/Dm.vue'));
const Notes = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/NotesTabs/Notes.vue'));
const Task = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/TaskTabs/Task.vue'));
const Document = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/DocumentTabs/Document.vue'));
const Employee = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/EmployeeTabs/Employee.vue'));
const Budget = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/BudgetTabs/Budget.vue'));
const Content = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/ContentTabs/Content.vue'));
const Notification = defineAsyncComponent(() =>
  import('@/components/Pages/EngagementDetail/NotificationTabs/Notification.vue'),
);
const Cost = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/CostTabs/CostTabs.vue'));
const PostMeeting = defineAsyncComponent(() =>
  import('@/components/Pages/EngagementDetail/PostMeetingTabs/PostMeeting.vue'),
);

const Collobaration = defineAsyncComponent(() =>
  import('@/components/Pages/EngagementDetail/CollobarationTabs/Collobaration.vue'),
);

const addform = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/AddForm/AddForm.vue'));

const Caterer = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/CatererTabs/Caterer.vue'));

const Location = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/LocationTabs/Location.vue'));

const Log = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/LogTabs/Log.vue'));
const Support = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/SupportTab/Support.vue'));
export default defineComponent({
  name: 'EngagementDetail',
  components: {
    'details-page': DetailsPage,
    engagements: Engagement,
    'attendee-page': Attendee,
    'av-page': AV,
    'speaker-page': Speaker,
    'dm-page': Dm,
    'notes-page': Notes,
    'task-page': Task,
    'document-page': Document,
    'employee-page': Employee,
    'budget-page': Budget,
    'notification-page': Notification,
    'content-page': Content,
    'cost-page': Cost,
    'collobaration-page': Collobaration,
    'caterer-page': Caterer,
    'post-meeting-page': PostMeeting,
    'location-page': Location,
    'log-page': Log,
    'support-page': Support,
    'add-form': addform,
  },
  data() {
    return {
      openTab: 'details',
      fromDetails: false,
    };
  },

  methods: {
    toggleTabs: function(data: any) {
      this.openTab = data.code;
      this.tabTittle = data.eng_tab_title;
      this.menuId = data.id;
      this.fromDetails = false;
      // Filter categoroy List
      const notescategory = this.categoryList.find((a: any) => a.menu_id === data.id && a.category_type === 'notes');
      const taskscategory = this.categoryList.find((a: any) => a.menu_id === data.id && a.category_type === 'task');
      if (notescategory && data.code !== 'notes') {
        this.categoryIdForNotes = notescategory.category_id;
      }

      if (taskscategory) {
        this.categoryIdForTask = taskscategory.category_id;
      }

      if (data.code !== 'tasks') {
        store.commit('taskCategoryId', this.categoryIdForTask);
      } else {
        store.commit('taskCategoryId', '');
      }

      if (data.code !== 'notes') {
        store.commit('notesCategoryId', this.categoryIdForNotes);
      } else {
        store.commit('notesCategoryId', '');
      }
      console.log('this.categoryIdForNotes', this.categoryIdForNotes);
    },

    getImagePath(menu: any) {
      if (menu.code === this.openTab) {
        return menu.active_img;
      } else {
        return menu.img;
      }
    },
    backtoeng() {
      this.$router.push('/engagements');
    },

    tabChange(tabId: any) {
      console.log('tabcode.', tabId);
      const tabInfo = this.engMenu.find((a: any) => a.id === tabId) as any;
      if (tabInfo) {
        window.scrollTo(0, 0);
        // Handle active in pending tab -- Collaboration tab
        this.fromDetails = true;
        this.openTab = tabInfo.code;
        this.tabTittle = tabInfo.eng_tab_title;
      }
      console.log('tabInfo.', tabInfo);
    },
  },

  setup() {
    const meetingId = ref('') as any;
    const engDetails = ref('') as any;
    const tabTittle = ref('') as any;
    const loader = ref(false) as any;
    const isCollobaration = ref(false) as any;
    const catgory = ref([]) as any;
    const menuId = ref('') as any;
    const categoryList = ref([]) as any;
    const categoryIdForNotes = ref('') as any;
    const categoryIdForTask = ref('') as any;
    const notescategory = ref('') as any;
    const taskscategory = ref('') as any;
    const meetingDate = ref('') as any;
    const detailsPage = ref(1) as any;
    const initformData = ref([]) as any;
    const openForm = ref(false) as any;
    const reason = ref([]) as any;
    const tabInfo = ref({}) as any;
    const showcancel = ref(false) as any;
    const submitted = ref(false) as any;
    const cancelReasonObj = ref({}) as any;
    const toasterInfo = ref({}) as any;
    const isToaster = ref(false) as any;
    const headingData = ref('') as any;
    const bodyData = ref('') as any;
    const currentPopup = ref('') as any;
    const engMenu = ref([]) as any;
    // On Before mount Function
    onBeforeMount(async () => {
      const engData = store.state.engData;
      console.log('engData', engData);
      if (!engData) {
        engDetailsTab(meetingId.value);
        listEngDetails(meetingId.value);
      } else {
        engDetails.value = engData;
        meetingDate.value = engData.start_time;
      }
      // await listCategory()
    });

    const listEngDetails = async (meetingId: any) => {
      loader.value = true;
      try {
        const param = {
          id: meetingId,
        };
        const engRes = await ServiceEngagement.engList(param);
        console.log('engRes', engRes);
        if (engRes.is_success && engRes.result.length !== 0) {
          engRes.result.forEach((data: any) => {
            if (data.eo_end_meeting) {
              const isRevert = Helper.checkTimediff(data.eo_end_meeting);
              data.is_revert = isRevert;
              console.log('is_revert', isRevert);
            }
          });
          engDetails.value = engRes.result[0];
          meetingDate.value = engRes.result[0].start_time;
          // console.log('meetindate',meetingDate.value.toUTCString())
        } else {
          engDetails.value = '';
        }
      } catch (error) {
        engDetails.value = '';
      }
      loader.value = false;
    };

    const listCategory = async () => {
      loader.value = true;
      try {
        if (categoryList && categoryList.value.length === 0) {
          const category = await ServiceEngagement.categoryList();
          console.log('category', category);
          if (category.is_success && category.result.length !== 0) {
            categoryList.value = category.result;
            // Filter categoroy List
            notescategory.value = categoryList.value.filter((a: any) => a.category_type === 'notes');
            taskscategory.value = categoryList.value.filter((a: any) => a.category_type === 'task');
          } else {
            categoryList.value = [];
          }
        }
      } catch (error) {
        categoryList.value = [];
      }
      loader.value = false;
    };

    // Init form
    const initilizeForm = async (value: any = '') => {
      headingData.value = 'Cancel Engagement';
      bodyData.value = 'Are you want to Cancel this engagement?';
      currentPopup.value = value;
      const getdate = Helper.getCompanyData() as any;
      console.log('getdate', getdate);
      if (getdate && getdate.is_cancel_with_reason && getdate.is_cancel_with_reason === 1) {
        await listReason();
        tabInfo.value = {
          title: 'CANCEL REASON',
          endPoint: '/engagements/' + meetingId.value + '/cancel',
          method: 'post',
          meeting: meetingId.value,
          from: 'cancel',
        };

        initformData.value = [
          {
            id: 1,
            label: 'Select Reason',
            disable: false,
            param: 'cancel_id',
            type: 'dropdown',
            required: true,
            value: '',
            dropdownvalue: reason.value,
            errorMsg: 'Reason is Required',
          },
          {
            id: 0,
            label: 'Enter reason here',
            disable: false,
            hidden: true,
            param: 'cancel_reason',
            type: 'textarea',
            required: false,
            value: value ? value.document_name : '',
            dropdownvalue: '',
            errorMsg: 'Please Enter Reason',
          },
        ];
        openForm.value = true;
      } else {
        console.log('is_cancel_with_reason', getdate.is_cancel_with_reason);
      }
    };

    // Engagment Details Tab Section
    const engDetailsTab = async (meetingId: any) => {
      const alernateResult = [
        {
          id: 1,
          code: 'details',
          img: require('@/assets/detailsactive.svg'),
          active_img: require('@/assets/detailsactive.svg'),
          eng_tab_title: 'Details',
          hidden: false,
        },
      ];
      try {
        var res = await ServiceEngagement.engDetailsTabList(meetingId);
        if (res.is_success) {
          res = res.result;
        } else {
          res = alernateResult;
        }
      } catch (error) {
        router.push('/engagementdetails?id=' + meetingId);
        res = alernateResult;
      }
      Helper.setEngMenu(res);
      engMenu.value = Helper.getEngMenu();
    };

    const cloeForm = async (event: any) => {
      if (event !== '') {
        showcancel.value = false;
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
        await listEngDetails(meetingId.value);
        // loader.value = true
        // loader.value = false
        setTimeout(async () => {
          isToaster.value = false;
        }, 2000);
      }
    };

    const openDeleteConfirmation = async (event: any) => {
      console.log('emit event', event);
      cancelReasonObj.value = event;
      openForm.value = false;
      headingData.value = 'Cancel Engagement';
      bodyData.value = 'Are you want to Cancel this engagement?';
      if (event !== '') {
        showcancel.value = true;
      }
    };

    const cancelEngagement = async () => {
      const url = '/engagements/' + meetingId.value + '/cancel';
      submitted.value = true;
      try {
        const res = await ServiceEngagement.commonEndpoint('post', url, cancelReasonObj.value);
        cloeForm(res);
      } catch (error) {
        cloeForm(error);
      }
      submitted.value = false;

      console.log();
    };

    const upcomingStatus = async () => {
      const url = '/engagements/' + meetingId.value + '/status';
      submitted.value = true;
      try {
        const res = await ServiceEngagement.commonEndpoint('put', url);
        cloeForm(res);
      } catch (error) {
        cloeForm(error);
      }
      submitted.value = false;

      console.log();
    };

    const statusChange = async () => {
      const url = '/engagements/' + meetingId.value + '/status/revert';
      const postData = {
        password: 'developerMode',
      };
      submitted.value = true;
      try {
        const res = await ServiceEngagement.commonEndpoint('put', url, postData);
        cloeForm(res);
      } catch (error) {
        cloeForm(error);
      }
      submitted.value = false;
    };

    const changeToUpcoming = async (from: any) => {
      showcancel.value = true;
      headingData.value = 'Force To Join';
      bodyData.value = 'Are you want to change the meeting status to Upcoming?';
      currentPopup.value = from;
    };

    // Revert Button
    const clickRevert = async (from: any) => {
      showcancel.value = true;
      headingData.value = 'Revert';
      currentPopup.value = from;
      bodyData.value = 'Are you sure want to revert the meeting to Upcoming ?';
      // url.value = '/engagements/' + row.id + '/status/revert'
    };

    const callApi = async () => {
      if (currentPopup.value === 'cancel') {
        cancelEngagement();
      } else if (currentPopup.value === 'changetoupcoming') {
        upcomingStatus();
      } else if (currentPopup.value === 'Revert') {
        statusChange();
      }
    };

    // getReason
    const listReason = async (value: any = '') => {
      try {
        const param = '/cancel_status';
        const res = await ServiceEngagement.getStatus(param);
        console.log('res', res);

        res.result = Helper.commonFormatForDropdown(res.result, 'status_text');
        reason.value = res.result;
        console.log('res.reasult.value', res.result);
      } catch (error) {
        reason.value = [];
      }
    };

    // Go to Upcoming
    const gotoUpcoming = async (value: any = '') => {
      headingData.value = 'Force To Join';
      bodyData.value = 'Are you want to change the meeting status to Upcoming?';
    };

    return {
      meetingId,
      listEngDetails,
      engDetails,
      tabTittle,
      isCollobaration,
      catgory,
      menuId,
      listCategory,
      categoryList,
      categoryIdForNotes,
      categoryIdForTask,
      notescategory,
      taskscategory,
      meetingDate,
      detailsPage,
      initformData,
      openForm,
      initilizeForm,
      listReason,
      reason,
      tabInfo,
      cloeForm,
      openDeleteConfirmation,
      showcancel,
      cancelEngagement,
      cancelReasonObj,
      toasterInfo,
      isToaster,
      submitted,
      headingData,
      bodyData,
      changeToUpcoming,
      currentPopup,
      upcomingStatus,
      callApi,
      engDetailsTab,
      engMenu,
      clickRevert,
      statusChange,
    };
  },

  created() {
    // Get Menu
    this.engMenu = Helper.getEngMenu();
    this.listCategory();
    if (this.engMenu && Array.isArray(this.engMenu)) {
      const checkisCollobaration = this.engMenu.find((a: any) => a.id === 5);
      if (checkisCollobaration) {
        this.isCollobaration = true;
      }
      this.meetingId = this.$route.query.id;
    }
  },

  watch: {
    async $route(to, from) {
      console.log('from', from);
      console.log('to', to);
      if (to !== from) {
        const id = to.query.id;
        console.log('id', id);
        await this.listEngDetails(id);
        window.scrollTo(0, 0);
        this.detailsPage += 1;
        this.meetingId = id;
        this.openTab = 'details';
      }
    },
  },
});
