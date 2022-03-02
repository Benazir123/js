import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import { defineComponent, ref, onBeforeMount } from 'vue';
import VPagination from '@hennge/vue3-pagination';
import DrawerMerge from '../DrawerMerge/DrawerMerge.vue';

export default defineComponent({
  name: 'Communications',
  components: {
    VPagination,
    'drawer-merge': DrawerMerge,
  },
  props: {
    meetingId: {
      default: '',
    },
    tabCode: {
      default: '',
    },
  },
  data() {
    return {
      isOpenmerge: false,
    };
  },
  setup(props, { emit }) {
    const Communication = ref([]) as any;
    const loader = ref(false) as any;
    const totalPages = ref(0) as any;
    const currentPage = ref(1) as any;

    // List Communications section Api
    const listCommunication = async (page: any = '') => {
      loader.value = true;
      Communication.value = [];
      try {
        let pagination = '';
        if (currentPage.value) {
          pagination = '?page=' + currentPage.value + '&limit=' + 10;
        }

        const param = props.meetingId + '/' + props.tabCode + pagination;
        const res = await ServiceEngagement.engTabList(param);
        if (res.is_success) {
          totalPages.value = res.total_count ? res.total_count : 0;
          Communication.value = res.result;
        } else {
          Communication.value = [];
        }
        console.log('Tab Result', res);
      } catch (error) {
        Communication.value = [];
      }
      loader.value = false;
    };

    // On Before mount Function
    onBeforeMount(async () => {
      await listCommunication();
    });

    return {
      Communication,
      loader,
      totalPages,
      currentPage,
      listCommunication,
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
    mergefield() {
      this.isOpenmerge = !this.isOpenmerge;
    },
  },
});
