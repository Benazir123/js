/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import { defineAsyncComponent, defineComponent, ref, onBeforeMount } from 'vue';
import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import VPagination from '@hennge/vue3-pagination';
import Helper from '@/globalFunctions/Helper';
import store from '@/store';
import router from '@/router';
const EngagementInnerRow = defineAsyncComponent(() => import('../../Engagement/EngagementInnerRow/EngagementInnerRow.vue'));
const Profile = defineAsyncComponent(() => import('@/components/Pages/Profile/Profile.vue'));

export default defineComponent({
  name: 'Drawer',
  inheritAttrs: false,
  components: {
    'engagement-inner-row': EngagementInnerRow,
    VPagination,
    Profile,
  },
  props: {
    primaryId: {
      default: '',
    },
  },
  data() {
    return {
      hideEngDetails: false,
      hidefilter: false,
      togglefilter: false,
      changeArrow: require('@/assets/downarrow.svg'),
      sortOrder: 1,
      downArrow: require('@/assets/uparrow.svg'),
      upArrow: require('@/assets/downarrow.svg'),
      expendedRow: [],
      expendedRowData: {},
    };
  },

  methods: {
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

    errorImg(data: any) {
      data.errorImg = true;
      this.imgErrorSpk += 1;
    },
    // Dateformate
    dateFormate(date: any) {
      return Helper.dateFormat(date);
    },

    // Go to Details page
    async engdetailpage(currentData: any) {
      store.commit('detailStored', currentData);
      await this.engDetailsTab(currentData.id);
      console.log('engdata', store.state.engData);

      this.$router.push('/engagementdetails?id=' + currentData.id);
    },
  },
  setup(props) {
    const options = ref([]) as any;
    const totalPages = ref(0) as any;
    const currentPage = ref(1) as any;
    const loader = ref(false) as any;
    const engagementList = ref([]) as any;
    const page = ref(1) as any;
    const foodicon = require('@/assets/foodicon.svg');
    const statusMarkforSpeker = require('@/assets/checkgreen.svg');
    const imgErrorSpk = ref(0) as any;
    const engDetailsTabRes = ref([]) as any;

    // FOR ENGAGEMENT STATUS
    const engStatusColor = (engStatus: any) => {
      console.log('engStatus', engStatus);
      if (engStatus === 'Awaiting HCP(s) RSVP' || engStatus === 'Join') {
        return 'greenbtn';
      } else if (engStatus === 'Upcoming') {
        return 'bluebtn';
      } else if (engStatus === 'Speaker Declined') {
        return 'redbtn';
      } else {
        return 'yellowbtn';
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

    onBeforeMount(async () => {
      await listEngagement('');
    });

    // List Engagment API call
    const listEngagement = async (changepage: any) => {
      page.value = changepage;
      const param = {
        page: currentPage.value,
        limit: 10,
        primary_meeting_id: props.primaryId,
        order: 'DESC',
        field: 'id',
      };
      loader.value = true;
      try {
        const engRes = await ServiceEngagement.engList(param);
        console.log('engRes', engRes);
        if (engRes.is_success) {
          engagementList.value = engRes.result;
          totalPages.value = engRes.total_count ? engRes.total_count : 0;
          console.log('engagementList', engagementList.value);
        } else {
          engagementList.value = [];
        }
      } catch (error) {
        engagementList.value = [];
      }
      loader.value = false;
    };
    return {
      engStatusColor,
      options,
      totalPages,
      currentPage,
      listEngagement,
      page,
      engagementList,
      loader,
      foodicon,
      statusMarkforSpeker,
      imgErrorSpk,
      engDetailsTab,
      engDetailsTabRes,
    };
  },
});
