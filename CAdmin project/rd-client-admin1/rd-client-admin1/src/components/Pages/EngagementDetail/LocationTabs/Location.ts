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
  name: 'Location',
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
    tabTittle: {
      default: '',
    },
    categoryIdNotes: {
      default: '',
    },
    innertabCode: {
      default: '',
    },
    ismultiLocation: {
      default: false,
    },
  },
  setup(props) {
    const collobaration = ref([]) as any;
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
    const location = ref([]) as any;
    const tabTittle = ref('Location') as any;
    const isMultilocation = ref(props.ismultiLocation) as any;
    const tableAction = ref(false) as any;
    const showlocations = ref(false) as any;
    const locationStatusEnable = ref(false) as any;
    const locationId = ref('') as any;
    const toasterInfo = ref({}) as any;
    const isToaster = ref(false) as any;
    const officeInfo = ref({}) as any;
    // List collobaration Api
    const listLocation = async (page: any = '') => {
      loader.value = true;
      try {
        let pagination = '';
        if (page) {
          pagination = '?page=' + page + '&limit=' + 10;
        }
        const param = meetingId.value + '/' + tabCode.value + pagination;
        const res = await ServiceEngagement.engTabLocationList(param);
        console.log('res', res);
        locationStatusEnable.value = res.data.location_status_enable;
        if (res.apiStatus && res.data.rows && res.data.rows.length !== 0) {
          // isMultilocation.value = res.data.is_multi_location
          location.value = res.data.rows;
        } else {
          location.value = [];
        }

        tabListName.value = [
          { id: 1, tabTittle: tabTittle.value },
          { id: 2, tabTittle: 'Notes' },
          { id: 3, tabTittle: 'Tasks' },
        ];
        // collobaration.value = res.result
        totalPages.value = res.total_count ? res.total_count : 0;
        console.log('Tab Result', res);
      } catch (error) {
        collobaration.value = [];
      }
      loader.value = false;
    };

    const tabChange = async (tabvalue: any) => {
      console.log('tabChange', tabvalue);
      reLoadeHeading.value += 1;
      activeTab.value = tabvalue;
      if (activeTab.value === 1) {
        currentPage.value = 1;
        await listLocation();
      }
    };
    // On Before mount Function
    onBeforeMount(async () => {
      console.log('isMultilocation', isMultilocation.value);
      loader.value = true;
      loader.value = false;
      if (isMultilocation.value === true) {
        tableAction.value = 'Action';
        tabTittle.value = 'Office';
      } else {
        tableAction.value = 'Status';
        tabTittle.value = 'Location';
      }
      tabListName.value = [
        { id: 1, tabTittle: tabTittle.value },
        { id: 2, tabTittle: 'Notes' },
        { id: 3, tabTittle: 'Tasks' },
      ];
      await listLocation();
    });

    return {
      collobaration,
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
      innertabCode,
      inneractiveTab,
      innertabHeading,
      innertabListName,
      location,
      isMultilocation,
      tableAction,
      reLoadeHeading,
      tabTittle,
      showlocations,
      locationStatusEnable,
      locationId,
      toasterInfo,
      isToaster,
      listLocation,
      officeInfo,
    };
  },
  data() {
    return {
      openTab: 1,
      hidefilter: false,
      openInnerTab: 1,
      sortOrder: -1,
      isofficedrawer: false,
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
        this.listLocation();
      }
    },

    // Show/Hide Filter Function
    showfilter() {
      this.hidefilter = !this.hidefilter;
    },
    openlocation(id: any) {
      this.locationId = id;
      this.showlocations = !this.showlocations;
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
    },

    async changeLiveLocation(status: any) {
      const url = '/edit_location/';
      const param = {
        meeting: this.meetingId,
        location: this.locationId,
        eo_join_on_status: status,
      };
      const changeRes = await ServiceEngagement.commonEndpoint('post', url, param);
      console.log('changeLiveLocation', changeRes);
      this.showlocations = false;
      this.cloeForm(changeRes);
    },
    officemsg(row: any) {
      this.officeInfo = row;
      this.isofficedrawer = !this.isofficedrawer;
    },
  },
});
