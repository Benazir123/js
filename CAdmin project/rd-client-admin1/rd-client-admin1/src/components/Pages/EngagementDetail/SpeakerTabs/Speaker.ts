import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import { defineComponent, ref, onBeforeMount, defineAsyncComponent } from 'vue';
import VPagination from '@hennge/vue3-pagination';

const Notes = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/NotesTabs/Notes.vue'));
const Task = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/TaskTabs/Task.vue'));
const TabHeading = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/TabHeading/TabHeading.vue'));
const addform = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/AddForm/AddForm.vue'));

export default defineComponent({
  name: 'Speaker',
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
    meetingStatus: {
      default: '',
    },
    addSpeakerEnable: {
      type: Boolean,
      default: false,
    },
    engInfo: {
      default: '',
    },
  },
  data() {
    return {
      openInnerTab: 1,
      openspkTab: 1,
      isOpendrawer: false,
      infoPopup: false,
      infoIcon: true,
    };
  },
  setup(props) {
    const speakerusers = ref([]) as any;
    const spkList = ref([]) as any;
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
    const speakerStatus = ref([]) as any;
    const meetingStatus = ref(props.meetingStatus) as any;
    const hideStatus = ref(false) as any;
    const openForm = ref(false) as any;
    const isAddForm = ref(false) as any;
    const tabInfo = ref({}) as any;
    const engInfo = ref(props.engInfo) as any;
    const isToaster = ref(false) as any;
    const toasterInfo = ref({}) as any;
    const showAddIcon = ref(false) as any;
    const statusChangeLoader = ref(false) as any;

    // List  Speaker Api
    const listSpeaker = async (page: any = '') => {
      console.log('page', page);
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
          spkList.value = res.result;
        } else {
          spkList.value = [];
        }
        console.log('dmRes', res);
      } catch (error) {
        spkList.value = [];
      }
      loader.value = false;
    };

    // List Speaker Status
    const listSpeakerStatus = async (status: any) => {
      console.log('status', status);
      let param = '';
      if (status !== '') {
        param = '/speakers/statuses?status=' + status;
      } else {
        param = '/speakers/statuses';
      }
      console.log('param', param);
      //
      const res = await ServiceEngagement.getStatus(param);
      console.log('listSpeakerStatus', res);
      if (res.is_success) {
        speakerStatus.value = res.result;
      }
    };

    // Tab Change Event

    const tabChange = async (tabvalue: any) => {
      console.log('tabChange', tabvalue);
      reLoadeHeading.value += 1;
      activeTab.value = tabvalue;
      if (activeTab.value === 1) {
        currentPage.value = 1;
        await listSpeaker();
      }
    };

    const listStatus = async (status: any) => {
      const dropdownId = document.getElementById(status) as any;
      console.log('dropdownId', dropdownId);
      dropdownId.click();
      if (status === 1 || status === 0) {
        hideStatus.value = true;
        try {
          await listSpeakerStatus(status);
        } catch (error) {}

        hideStatus.value = false;
      }
    };

    // On Before mount Function
    onBeforeMount(async () => {
      tabListName.value = [
        { id: 1, tabTittle: 'Speaker' },
        { id: 2, tabTittle: 'Notes' },
        { id: 3, tabTittle: 'Tasks' },
      ];
      console.log('engInfo', props.engInfo);
      await listSpeaker();
      await listSpeakerStatus('');
    });

    // Init Forms
    const initilizeForm = async (value: any = '') => {
      openForm.value = true;
      isAddForm.value = false;
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
        await listSpeaker(1);
        loader.value = false;
        setTimeout(async () => {
          isToaster.value = false;
        }, 2000);
      }
    };

    return {
      speakerusers,
      imgError,
      spkList,
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
      speakerStatus,
      listSpeakerStatus,
      listStatus,
      meetingStatus,
      hideStatus,
      initilizeForm,
      openForm,
      isAddForm,
      tabInfo,
      engInfo,
      isToaster,
      cloeForm,
      toasterInfo,
      showAddIcon,
      listSpeaker,
      statusChangeLoader,
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

    speakertoggleTabs: function(tabNumber: number) {
      this.openspkTab = tabNumber;
    },

    // Alt Img Handling
    errorImg(data: any) {
      data.errorImg = true;
      this.imgError += 1;
    },

    async checkIsdisabled(statusId: any) {
      console.log('spk status id', statusId);
      if (statusId === 1) {
        this.speakerStatus.forEach((value: any) => {
          if (value.status_id === 3) {
            console.log('value.status_id', value.status_id);
            value.disabled = true;
          }
          if (value.status_id === 4) {
            console.log('value.status_id', value.status_id);
            value.disabled = false;
          }
        });
        console.log(this.speakerStatus);
      }
    },

    async changeSpkStatus(row: any) {
      row.statusChangeLoader = true;
      const url = '/engagements/' + this.meetingId + '/speakers/' + row.id + '/statuses?status=' + row.status.id;
      const res = await ServiceEngagement.commonEndpoint('put', url);
      await this.cloeForm(res);
      row.statusChangeLoader = false;
      await this.listSpeaker();
      this.$emit('status-update');
      console.log('res', res);
    },

    // Add Form
    async openAddForm() {
      console.log('Add form');
      this.tabInfo = {
        title: 'ADD NEW SPEAKER',
        listPageEndPoint: '/speakers',
        listPageAddEndPoint: '/engagements/' + this.meetingId + '/speakers',
        listPageMethod: 'get',
        listpageparam:
          '&engagementType=' +
          this.engInfo.engagement_type.id +
          '&topic=' +
          this.engInfo.topic.id +
          '&product=' +
          this.engInfo.product.id +
          '&meeting_id=' +
          this.meetingId +
          '&start_time=' +
          this.engInfo.start_time +
          '&eoId=' +
          this.engInfo.engagement_owner.user.id,
        listPageAddMethod: 'post',
        method: 'post',
        meeting: this.meetingId,
        addParam: 'speaker_id',
        from: 'speaker',
      };
      this.initilizeForm();
    },
  },
});
