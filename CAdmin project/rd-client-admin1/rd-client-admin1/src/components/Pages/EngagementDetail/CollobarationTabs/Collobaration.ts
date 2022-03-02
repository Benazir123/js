/* eslint-disable @typescript-eslint/no-explicit-any */
import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import { defineComponent, ref, onBeforeMount, defineAsyncComponent } from 'vue';
import VPagination from '@hennge/vue3-pagination';
import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel';
import Helper from '@/globalFunctions/Helper';
import router from '@/router';
const Notes = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/NotesTabs/Notes.vue'));
const Task = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/TaskTabs/Task.vue'));
const TabHeading = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/TabHeading/TabHeading.vue'));

const CollFilter = defineAsyncComponent(() =>
  import('@/components/Pages/EngagementDetail/CollobarationTabs/AccordionGroup.vue'),
);

export default defineComponent({
  name: 'Collobaration',
  inheritAttrs: false,
  components: {
    VPagination,
    'notes-page': Notes,
    'tab-heading': TabHeading,
    'task-page': Task,
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel,
    'col-filter': CollFilter,
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
    fromDetails: {
      default: false,
    },
    engagmentData: {
      default: {},
    },
  },
  setup(props) {
    const collobaration = ref([]) as any;
    const loader = ref(false) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(0) as any;
    const meetingId = ref(props.meetingId) as any;
    const tabCode = ref(props.tabCode) as any;
    const imgError = ref(1) as any;
    const tabHeading = ref(1) as any;
    const activeTab = ref(1) as any;
    const reLoadeHeading = ref(1) as any;
    const tabListName = ref([]) as any;
    const tabTittle = ref(props.tabTittle) as any;
    const openInnerTab = ref(1) as any;
    const fromDetails = ref(props.fromDetails) as any;
    const searchByName = ref('') as any;
    const postData = ref({}) as any;
    const engDetailsTabRes = ref('') as any;
    const engData = ref(props.engagmentData) as any;
    const geoList = ref([]) as any;
    const collabrationFilterLoader = ref(false) as any;
    const collabCountArray = ref([]) as any;
    const collhidefilter = ref(false) as any;
    const filterId = ref([]) as any;

    // List collobaration Api
    const listColloabaration = async (page: any = '', tabNumber: any = '') => {
      // Handle Active tab
      if (fromDetails.value === true) {
        openInnerTab.value = 2;
        tabNumber = 2;
        fromDetails.value = false;
      }

      loader.value = true;
      collobaration.value = [];
      try {
        let pagination = '';
        if (page) {
          pagination = '?page=' + page + '&limit=' + 10;
        }

        postData.value = {
          page: currentPage.value,
          limit: 10,
        };

        console.log('openInnerTab.value', tabNumber);
        if (tabNumber === 2) {
          postData.value.status = 'pending';
        } else {
          postData.value.status = 'accepted';
        }

        if (searchByName.value !== '') {
          postData.value.search = searchByName.value;
        } else {
          delete postData.value.search;
        }
        console.log('filterId', filterId.value);
        if (filterId.value && filterId.value.length !== 0) {
          postData.value.users = filterId.value;
        }
        console.log('postData', postData.value);
        const param = meetingId.value + '/' + tabCode.value + pagination;
        const res = await ServiceEngagement.engTabList(param, 'post', postData.value);
        if (res.is_success) {
          collobaration.value = res.result;
          totalPages.value = res.total_count ? res.total_count : 0;
        } else {
          collobaration.value = [];
        }
        console.log('Tab Result', res);
      } catch (error) {
        collobaration.value = [];
      }
      collaborationCount();
      loader.value = false;
    };

    const tabChange = async (tabvalue: any) => {
      console.log('tabChange', tabvalue);
      reLoadeHeading.value += 1;
      activeTab.value = tabvalue;
      if (activeTab.value === 1) {
        openInnerTab.value = 1;
        currentPage.value = 1;
        await listColloabaration('', openInnerTab);
      }
    };

    const toggleInnerTabs = async (tabNumber: any) => {
      currentPage.value = 1;
      openInnerTab.value == tabNumber;
      listColloabaration('', tabNumber);
      openInnerTab.value = tabNumber;
    };

    // On Before mount Function
    onBeforeMount(async () => {
      loader.value = true;
      loader.value = false;

      tabListName.value = [
        { id: 1, tabTittle: 'Collaboration' },
        { id: 2, tabTittle: 'Notes' },
        { id: 3, tabTittle: 'Tasks' },
      ];

      await listColloabaration('', openInnerTab);
    });

    // Clear Search
    const clearSearch = async () => {
      searchByName.value = '';
      listColloabaration('', openInnerTab.value);
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
        const res = await ServiceEngagement.engDetailsTabList(meetingId);
        if (res.is_success) {
          engDetailsTabRes.value = res.result;
        } else {
          engDetailsTabRes.value = alernateResult;
        }
      } catch (error) {
        router.push('/engagementdetails?id=' + meetingId);
        engDetailsTabRes.value = alernateResult;
      }
      Helper.setEngMenu(engDetailsTabRes.value);
    };

    window.addEventListener('keypress', function(e: any) {
      if (e.key === 'Enter' && searchByName.value !== '') {
        listColloabaration('', openInnerTab.value);
      }
    });

    // Collaboration Count List
    const collaborationCount = async () => {
      const url = '/collaboration/list?meeting_id=' + meetingId.value;
      const res = await ServiceEngagement.commonEndpoint('get', url);
      if (res.apiStatus) {
        collabCountArray.value = res.data;
      }
      console.log('collaborationCount', res);
    };

    const getCollaborationCount = (type: any = '', fieldname: any = '') => {
      fieldname = fieldname.replace(/[\. ,_/.:-]+/g, '');
      if (type === 'team') {
        const filterarea = [];
        return filterarea.length;
      } else if (type === 'region') {
        let filterarea = [];
        filterarea = collabCountArray.value.filter((a: any) => a.region.fieldname === fieldname);
        return filterarea.length;
      } else if (type === 'district') {
        let filterarea = [];
        filterarea = collabCountArray.value.filter((a: any) => a.district.fieldname === fieldname);
        return filterarea.length;
      } else if (type === 'territory') {
        let filterarea = [];
        filterarea = collabCountArray.value.filter((a: any) => a.territory.fieldname === fieldname);
        return filterarea.length;
      }
      return 0;
    };

    const applyFilter = async () => {
      console.log('applyFilter', filterId.value);
      collhidefilter.value = !collhidefilter.value;
      listColloabaration('', openInnerTab.value);
    };

    const getCheckedData = async (event: any) => {
      console.log('getCheckedData', event);
      filterId.value = event;
    };

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
      reLoadeHeading,
      tabTittle,
      openInnerTab,
      toggleInnerTabs,
      listColloabaration,
      fromDetails,
      searchByName,
      clearSearch,
      postData,
      engDetailsTab,
      engData,
      geoList,
      collabrationFilterLoader,
      collaborationCount,
      getCollaborationCount,
      collabCountArray,
      applyFilter,
      collhidefilter,
      getCheckedData,
      filterId,
    };
  },
  data() {
    return {
      openTab: 1,
      sortOrder: -1,
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

    // Show/Hide Filter Function
    async collshowfilter() {
      if (this.geoList.length === 0) {
        this.collabrationFilterLoader = true;
        await this.getGeoList();
        this.collabrationFilterLoader = false;
      }
      this.collhidefilter = !this.collhidefilter;
    },

    // Alt Img Handling
    errorImg(data: any) {
      data.errorImg = true;
      this.imgError += 1;
    },
    toggleTabs: function(tabNumber: number) {
      this.openTab = tabNumber;
    },

    // Go to Details page
    async engdetailpage(meetingId: any) {
      console.log('meetingId', meetingId);

      await this.engDetailsTab(meetingId);
      await this.$router.push('/engagementdetails?id=' + meetingId);
      // location.reload()
    },

    async getGeoList() {
      const url = '/geo_list?product=' + this.engData.product.id;
      try {
        const res = await ServiceEngagement.commonEndpoint('get', url, '');
        if (res.apiStatus && res.result && res.result.length !== 0) {
          this.geoList = res.result;
        }
        console.log('getGeoList', res);
      } catch (error) {
        console.log('getGeoList', error);
      }
    },

    selectHierachy(data: any, event: any) {
      console.log('Acc data', data);
      data.selected = event;
      if (data.user_id != null) {
        // event true/false user push/splice
        if (event === true) {
          this.filterId.push(data.user_id);
        } else {
          this.filterId.splice(this.filterId.indexOf(data.user_id), 1);
        }
      } else if (data.users && data.users.length > 0) {
        data.users.forEach((value: any) => {
          if (value.user_id != null) {
            if (event === true) {
              this.filterId.push(value.user_id);
            } else {
              this.filterId.splice(this.filterId.indexOf(value.user_id), 1);
            }
          }
        });
      } else if (data.child && data.child.length > 0) {
        console.log('else if', data);
        data.child.forEach((value: any) => {
          value.selected = event;
          if (Array.isArray(value.users) && value.users.length > 0) {
            value.users.forEach((uservalue: any) => {
              if (event === true) {
                this.filterId.push(uservalue.user_id);
              } else {
                this.filterId.splice(this.filterId.indexOf(uservalue.user_id), 1);
              }
            });
          } else if (value.child && value.child.length > 0) {
            this.selectHierachy(value, event);
          }
        });
      }
    },
  },
});
