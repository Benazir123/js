/* eslint-disable vue/no-dupe-keys */
import { defineComponent, ref, onBeforeMount } from 'vue';
import VPagination from '@hennge/vue3-pagination';
import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';

export default defineComponent({
  name: 'BudgetTabs',
  inheritAttrs: false,
  components: {
    VPagination,
  },
  props: {
    meetingId: {
      default: '',
    },
    tabCode: {
      default: '',
    },
  },
  setup(props) {
    const budget = ref([]) as any;
    const loader = ref(false) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(0) as any;
    const meetingId = ref(props.meetingId) as any;
    const tabCode = ref(props.tabCode) as any;
    const totalBudget = ref(0) as any;

    // List Content Api
    const listBudget = async (page: any = '') => {
      loader.value = true;
      budget.value = [];
      try {
        let pagination = '';
        if (currentPage.value) {
          pagination = '?page=' + currentPage.value + '&limit=' + 10;
        }

        const param = meetingId.value + '/' + tabCode.value + pagination;
        const res = await ServiceEngagement.engTabList(param);
        if (res.is_success) {
          budget.value = res.result && res.result[0].budget;
          totalPages.value = res.total_count;
          totalBudget.value = res.result && res.result[0].total_budget_cost;
        } else {
          budget.value = [];
        }
        console.log('Tab Result', res);
      } catch (error) {
        budget.value = [];
      }
      loader.value = false;
    };

    // On Before mount Function
    onBeforeMount(async () => {
      await listBudget();
    });
    return {
      budget,
      currentPage,
      totalPages,
      meetingId,
      tabCode,
      loader,
      totalBudget,
      listBudget,
    };
  },

  methods: {
    bindData(data: any) {
      if (data) {
        return data;
      } else {
        return 0;
      }
    },

    dollorFormat(amount: any) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
    },
  },
});
