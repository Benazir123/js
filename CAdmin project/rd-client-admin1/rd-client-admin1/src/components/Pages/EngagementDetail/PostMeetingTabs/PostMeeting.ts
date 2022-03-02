import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import { defineComponent, ref, onBeforeMount, defineAsyncComponent } from 'vue';
import VPagination from '@hennge/vue3-pagination';
const Notes = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/NotesTabs/Notes.vue'));
const Task = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/TaskTabs/Task.vue'));
const TabHeading = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/TabHeading/TabHeading.vue'));
const InnerTabHeading = defineAsyncComponent(() =>
  import('@/components/Pages/EngagementDetail/InnerTabHeading/InnerTabHeading.vue'),
);
export default defineComponent({
  name: 'PostMeeting',
  inheritAttrs: false,
  components: {
    VPagination,
    'notes-page': Notes,
    'task-page': Task,
    'tab-heading': TabHeading,
    'inner-tab-heading': InnerTabHeading,
  },
  props: {
    meetingId: {
      default: '',
    },
    tabCode: {
      default: '',
    },
    innertabCode: {
      default: '',
    },
  },
  setup(props) {
    const tabSetValue = ref([]) as any;
    const loader = ref(false) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(0) as any;
    const meetingId = ref(props.meetingId) as any;
    const tabCode = ref(props.tabCode) as any;
    const innertabCode = ref(props.innertabCode) as any;
    const imgError = ref(1) as any;
    const tabHeading = ref(1) as any;
    const activeTab = ref(1) as any;
    const reLoadeHeading = ref(1) as any;
    const tabListName = ref([]) as any;
    const innertabHeading = ref(1) as any;
    const inneractiveTab = ref(1) as any;
    const innertabListName = ref([]) as any;
    const url = ref('/sign_in_sheet') as any;

    // List Tab set Value Api
    const listTabValue = async (page: any = '') => {
      tabSetValue.value = [];
      loader.value = true;
      try {
        let pagination = '';
        if (page) {
          pagination = '?page=' + page + '&limit=' + 10;
        }
        const param = meetingId.value + '/' + tabCode.value + url.value + pagination;
        const res = await ServiceEngagement.engTabList(param);
        if (res.is_success) {
          tabSetValue.value = res.result;
          totalPages.value = res.total_count ? res.total_count : 0;
        } else {
          tabSetValue.value = [];
        }
        console.log('Tab Result', res);
      } catch (error) {
        tabSetValue.value = [];
      }
      loader.value = false;
    };

    const tabChange = async (tabvalue: any) => {
      console.log('tabChange', tabvalue);
      reLoadeHeading.value += 1;
      activeTab.value = tabvalue;
      if (activeTab.value === 1) {
        currentPage.value = 1;
        // await listSpeaker()
      }
    };
    const innertabChange = async (innertabvalue: any) => {
      console.log('innertabChange', innertabvalue);
      reLoadeHeading.value += 1;
      inneractiveTab.value = innertabvalue;
      if (inneractiveTab.value === 1) {
        currentPage.value = 1;
        // await listSpeaker()
      }
    };
    // On Before mount Function
    onBeforeMount(async () => {
      loader.value = true;
      loader.value = false;
      tabListName.value = [
        { id: 1, tabTittle: 'Post Meeting' },
        { id: 2, tabTittle: 'Notes' },
        { id: 3, tabTittle: 'Tasks' },
      ];

      await listTabValue();
    });

    return {
      tabSetValue,
      loader,
      currentPage,
      totalPages,
      meetingId,
      tabCode,
      activeTab,
      tabHeading,
      tabChange,
      imgError,
      tabListName,
      innertabChange,
      innertabCode,
      inneractiveTab,
      innertabHeading,
      innertabListName,
      listTabValue,
      url,
      reLoadeHeading,
    };
  },
  data() {
    return {
      openTab: 1,
      hidefilter: false,
      openInnerTab: 1,
      sortOrder: -1,
      openForm: false,
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

    getsurvey() {
      this.openForm = !this.openForm;
    },

    // Show/Hide Filter Function
    showfilter() {
      this.hidefilter = !this.hidefilter;
    },

    // Alt Img Handling
    errorImg(data: any) {
      data.errorImg = true;
      this.imgError += 1;
    },
    toggleTabs: function(tabNumber: number) {
      this.openTab = tabNumber;
    },
    toggleInnerTabs: function(tabNumber: number) {
      this.openInnerTab = tabNumber;
      if (tabNumber === 1) {
        this.url = '/sign_in_sheet';
      } else if (tabNumber === 2) {
        this.url = '/receipt';
      }
      this.listTabValue();
    },

    dollorFormat(amount: any) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
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
  },
});
