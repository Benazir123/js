/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import { defineAsyncComponent, defineComponent, ref, onBeforeMount } from 'vue';
import VPagination from '@hennge/vue3-pagination';
import moment from 'moment';
import Helper from '@/globalFunctions/Helper';
import store from '@/store';
import router from '@/router';

const EngagementInnerRow = defineAsyncComponent(() => import('../Engagement/EngagementInnerRow/EngagementInnerRow.vue'));
const Drawer = defineAsyncComponent(() => import('../Engagement/Drawer/Drawer.vue'));

const Profile = defineAsyncComponent(() => import('@/components/Pages/Profile/Profile.vue'));

export default defineComponent({
  name: 'Engagement',
  inheritAttrs: false,
  components: {
    'engagement-inner-row': EngagementInnerRow,
    drawer: Drawer,
    VPagination,
    profile: Profile,
  },
  data() {
    return {
      hideEngDetails: false,
      hidefilter: false,
      togglefilter: false,
      downArrow: require('@/assets/uparrow.svg'),
      upArrow: require('@/assets/downarrow.svg'),
      isOpendrawer: false,
      searchByName: '',
      sortOrder: -1,
      expendedRowData: {},
      modelValue: '',
      isOpenUserProfiledrawer: false,
    };
  },
  methods: {
    // Dateformate
    dateFormate(date: any) {
      return Helper.dateFormat(date);
    },
    // check data
    bindData(data: any) {
      if (data) {
        return data;
      } else {
        return '---';
      }
    },
    // Show innerRow Function
    showInnerRow(id: never, data: any) {
      if (this.expendedRow.length > 0) {
        const index = this.expendedRow.indexOf(this.expendedRow[0]);
        console.log('index', index);
        if (index > -1) {
          this.expendedRow.splice(index, 1);
        }
        if (this.engagementList.find((engrow: any) => engrow.id !== data.id && engrow.isopen_inner_arrow === true)) {
          this.engagementList.find(
            (engrow: any) => engrow.id !== data.id && engrow.isopen_inner_arrow === true,
          ).isopen_inner_arrow = false;
        }
      }
      const index = this.expendedRow.indexOf(id);

      this.expendedRowData = data;
      if (index > -1) {
        this.expendedRow.splice(index, 1);
      } else {
        if (data.isopen_inner_arrow === false) {
          this.expendedRow.push(id);
        }
      }
      data.isopen_inner_arrow = !data.isopen_inner_arrow;
    },

    // Go to Details page
    async engdetailpage(currentData: any) {
      store.commit('detailStored', currentData);
      await this.engDetailsTab(currentData.id);
      console.log('engdata', store.state.engData);
      this.$router.push('/engagementdetails?id=' + currentData.id);
    },

    // OPen Collab meeting Section
    openColloborator(primaryId: any) {
      this.primaryMeetingId = primaryId;
      this.isOpendrawer = !this.isOpendrawer;
    },

    showUserProfile() {
      this.isOpenUserProfiledrawer = !this.isOpenUserProfiledrawer;
    },

    // Alt Img Handling
    errorImg(data: any) {
      data.errorImg = true;
      this.imgErrorSpk += 1;
    },

    // Sorting Function
    sorting(event: any, key: any) {
      this.currentPage = 1;
      this.listParam.page = 1;
      // this.setDefaultSorting()
      // this.initSorting[key].sortOrter = event
      // if (event == -1) {
      //   //this.setDefaultSorting()
      //   this.initSorting[key].sortOrter = 1
      // } else {
      //   this.initSorting[key].sortOrter = -1
      // }
      console.log('sorting - event', event, key);
      this.listParam.field = key;
      if (event === -1) {
        this.listParam.order = 'ASC';
      } else {
        this.listParam.order = 'DESC';
      }
      this.listEngagement('');
    },

    spkStatusIcon(status: any) {
      console.log('status', status);
      if (status === 'Completed' || status === 'Accepted') {
        return require('@/assets/checkgreen.svg');
      } else if (status === 'Declined') {
        return require('@/assets/closered.svg');
      } else {
        return require('@/assets/exclamatorymark.svg');
      }
    },

    // Open More Attendee
    openMoreAttendee() {
      this.hidefilter = !this.hidefilter;
    },
  },

  setup(emit) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires

    const totalPages = ref(0) as any;
    const currentPage = ref(1) as any;
    const engFilter = ref([]) as any;
    const filterKey = ref(0);
    const engagementList = ref([]) as any;
    const collaborateIcon = require('@/assets/collaborateicon.svg');
    const foodicon = require('@/assets/foodicon.svg');
    const statusMarkforSpeker = require('@/assets/checkgreen.svg');
    const loader = ref(false) as any;
    const pagePerRow = ref(10) as any;
    const searchById = ref('') as any;
    const startTime = Helper.getCurrentYearDateFormat('start') as any;
    const endTime = Helper.getCurrentYearDateFormat('end') as any;
    const imgErrorSpk = ref(0) as any;
    const meetingTypeFilterArray = ref({}) as any;
    const filterCount = ref([]) as any;
    const listParam = ref({}) as any;
    const primaryMeetingId = ref('') as any;
    const engDetailsTabRes = ref([]) as any;
    const expendedRow = ref([]) as any;

    listParam.value = {
      page: currentPage.value,
      limit: 10,
      start_time: startTime,
      end_time: endTime,
    };

    // On Before mount Function
    onBeforeMount(async () => {
      await listEngagement('');
      const filter = Helper.getFilterData();
    });

    // Clear Search
    const clearSearch = async (searchvalue: any) => {
      if (searchvalue === 'searchbyid') {
        searchById.value = '';
      }
      listEngagement('');
    };

    // List Engagment API call
    const listEngagement = async (page: any) => {
      console.log('page', page);
      if (page) {
        listParam.value.page = page;
      }

      // Add Search param
      if (searchById.value !== '') {
        listParam.value.id = searchById.value;
      } else {
        delete listParam.value.id;
      }

      // Add Live session
      listParam.value.live_session = 'yes';
      console.log('englistparam', listParam.value);
      loader.value = true;
      try {
        const engRes = (await ServiceEngagement.engList(listParam.value)) as any;
        console.log('engRes', engRes);
        if (engRes.is_success) {
          engagementList.value = engRes.result;
          totalPages.value = engRes.total_count ? engRes.total_count : 0;
          pagePerRow.value = engRes.total_page ? engRes.total_page : 10;
          console.log(
            'current year',
            moment()
              .endOf('year')
              .format('MM/DD/YYYY'),
          );
          console.log('engagementList', engagementList.value);
        } else {
          engagementList.value = [];
        }
      } catch (error) {
        engagementList.value = [];
      }
      loader.value = false;
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
      if (e.key === 'Enter' && searchById.value !== '') {
        listParam.value.page = 1;
        currentPage.value = 1;
        expendedRow.value = [];
        listEngagement('');
      }
    });

    return {
      totalPages,
      currentPage,
      engFilter,
      filterKey,
      listEngagement,
      engagementList,
      collaborateIcon,
      foodicon,
      statusMarkforSpeker,
      loader,
      searchById,
      pagePerRow,
      imgErrorSpk,
      meetingTypeFilterArray,
      filterCount,
      listParam,
      clearSearch,
      primaryMeetingId,
      engDetailsTab,
      engDetailsTabRes,
      expendedRow,
    };
  },
});
