import { defineComponent, ref, onBeforeMount, defineAsyncComponent } from 'vue';
import VPagination from '@hennge/vue3-pagination';
import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
const Notes = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/NotesTabs/Notes.vue'));
const Task = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/TaskTabs/Task.vue'));
const TabHeading = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/TabHeading/TabHeading.vue'));

const Communications = defineAsyncComponent(() =>
  import('@/components/Pages/EngagementDetail/NotificationTabs/Communications/Communications.vue'),
);

export default defineComponent({
  name: 'NotificationTabs',
  inheritAttrs: false,
  components: {
    VPagination,
    'notes-page': Notes,
    'task-page': Task,
    'tab-heading': TabHeading,
    'communication-page': Communications,
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
  },
  setup(props) {
    const notification = ref([]) as any;
    const loader = ref(false) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(0) as any;
    const meetingId = ref(props.meetingId) as any;
    const tabCode = ref(props.tabCode) as any;
    const totalnotification = ref(0) as any;
    const activeTab = ref(1) as any;
    const tabHeading = ref(1) as any;
    const tabTittle = ref(props.tabTittle) as any;
    const tabListName = ref([]) as any;
    const reLoadeHeading = ref(1) as any;
    const categoryId = ref(props.categoryId) as any;
    const categoryIdNotes = ref(props.categoryIdNotes) as any;
    const categoryIdTask = ref(props.categoryIdNotes) as any;
    const imgError = ref(1) as any;

    // List Content Api
    const listNotification = async (page: any = '') => {
      console.log('categoryIdNotes', categoryIdNotes.value);
      loader.value = true;
      notification.value = [];
      try {
        let pagination = '';
        if (currentPage.value) {
          pagination = '?page=' + currentPage.value + '&limit=' + 10;
        }

        const param = meetingId.value + '/' + tabCode.value + pagination;
        const res = await ServiceEngagement.engTabList(param);
        if (res.is_success && res.result !== 0) {
          notification.value = res.result;
          totalPages.value = res.total_count ? res.total_count : 0;
        } else {
          notification.value = [];
        }
        console.log('Tab Result', res);
      } catch (error) {
        notification.value = [];
      }
      loader.value = false;
    };

    const tabChange = async (tabvalue: any) => {
      console.log('tabChange', tabvalue);
      reLoadeHeading.value += 1;
      activeTab.value = tabvalue;
      if (activeTab.value === 1) {
        currentPage.value = 1;
        await listNotification();
      }
    };

    // On Before mount Function
    onBeforeMount(async () => {
      tabListName.value = [
        { id: 1, tabTittle: 'Notifications' },
        { id: 2, tabTittle: 'Communications' },
        { id: 3, tabTittle: 'Notes' },
        { id: 4, tabTittle: 'Tasks' },
      ];
      await listNotification();
    });
    return {
      notification,
      currentPage,
      totalPages,
      meetingId,
      tabCode,
      loader,
      totalnotification,
      reLoadeHeading,
      tabTittle,
      tabListName,
      activeTab,
      tabHeading,
      tabChange,
      categoryId,
      categoryIdNotes,
      categoryIdTask,
      imgError,
      listNotification,
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

    dollorFormat(amount: any) {
      if (amount) {
        return '$ ' + amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
      } else {
        return 0;
      }
    },

    // Alt Img Handling
    errorImg(data: any) {
      data.errorImg = true;
      this.imgError += 1;
    },
  },
});
