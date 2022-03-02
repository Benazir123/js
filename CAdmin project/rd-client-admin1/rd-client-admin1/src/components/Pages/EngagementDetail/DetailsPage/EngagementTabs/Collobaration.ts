import { defineComponent, ref, onBeforeMount } from 'vue';
import VPagination from '@hennge/vue3-pagination';
import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';

export default defineComponent({
  name: 'Collobaration',
  components: {
    VPagination,
  },
  emit: ['coll-tab-change'],
  props: {
    meetingId: {
      default: '',
    },
    isCollaboration: {
      default: false,
    },
    engagmentData: {
      default: {},
    },
  },
  data() {
    return {
      opendetailTab: 1,
      imgError: 1,
      currentPage: 1,
      totalPages: 1,
    };
  },
  setup(props) {
    const collList = ref([]) as any;
    const options = ref([]) as any;
    const loader = ref(false) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(1) as any;
    const meetingId = ref(props.meetingId) as any;
    const imgError = ref(1) as any;
    const isCollaboration = ref(props.isCollaboration) as any;
    const engData = ref(props.engagmentData);

    // List  listCollabration Api
    const listCollabration = async (page: any = '') => {
      loader.value = true;
      try {
        let pagination = '';
        if (page) {
          pagination = '?page=' + page + '&limit=' + 10;
        }
        // var postData
        const postData = {
          page: currentPage.value,
          limit: 10,
          status: 'accepted',
        };
        const param = meetingId.value + '/collaborations' + pagination;
        const res = await ServiceEngagement.engTabList(param, 'post', postData);
        if (res.is_success) {
          totalPages.value = res.total_count;
          collList.value = res.result;
        } else {
          collList.value = [];
        }
        console.log('Result', res);
      } catch (error) {
        collList.value = [];
      }
      loader.value = false;
    };

    // On Before mount Function
    onBeforeMount(async () => {
      loader.value = true;
      await listCollabration();
      loader.value = false;
    });

    return {
      collList,
      options,
      loader,
      currentPage,
      totalPages,
      meetingId,
      imgError,
      isCollaboration,
      engData,
      listCollabration,
    };
  },

  methods: {
    detailtoggleTabs: function(tabNumber: number) {
      this.opendetailTab = tabNumber;
    },

    // Alt Img Handling
    errorImg(data: any) {
      data.errorImg = true;
      this.imgError += 1;
    },

    gotoColabTab() {
      this.$emit('coll-tab-change');
    },
    bindData(data: any) {
      if (data) {
        return data;
      } else {
        return '---';
      }
    },

    // Go to Details page
    async engdetailpage(meetingId: any) {
      console.log('meetingId', meetingId);
      // await this.engDetailsTab(meetingId)
      await this.$router.push('/engagementdetails?id=' + meetingId);
      // location.reload()
    },
  },
});
