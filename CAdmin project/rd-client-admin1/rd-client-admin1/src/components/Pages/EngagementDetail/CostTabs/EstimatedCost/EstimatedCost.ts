import { defineComponent, ref, onBeforeMount } from 'vue';
import VPagination from '@hennge/vue3-pagination';
import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import moment from 'moment';

export default defineComponent({
  name: 'EstimatedCost',
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
    meetingDate: {
      default: '',
    },
  },
  data() {
    return {
      costList: [],
    };
  },
  setup(props, { emit }) {
    const costList = ref([]) as any;
    const list = ref([]) as any;
    const imgError = ref(1) as any;
    const activeTab = ref(1) as any;
    const tabHeading = ref(1) as any;
    const reLoadeHeading = ref(1) as any;
    const loader = ref(false) as any;
    const tabCode = ref(props.tabCode) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(1) as any;
    const meetingId = ref(props.meetingId) as any;
    const estimatedCost = ref('') as any;
    // List Estimated Api
    const listEstimatedCost = async (page: any = '') => {
      loader.value = true;
      try {
        let pagination = '';
        if (currentPage.value) {
          pagination = '?page=' + currentPage.value + '&limit=' + 10 + '&status=' + 0;
        }
        const param = meetingId.value + '/' + props.tabCode + pagination;
        const res = await ServiceEngagement.engTabCostList(param);
        if (res.is_success) {
          totalPages.value = res.total_count ? res.total_count : 0;
          if (res.result && res.result.length !== 0) {
            costList.value = res.result;
            estimatedCost.value = res.result[0];
          }
        } else {
          costList.value = [];
        }
        emit('estimatedCost', res);
      } catch (error) {
        costList.value = [];
      }
      loader.value = false;
    };

    // Tab Change Event

    const tabChange = async (tabvalue: any) => {
      console.log('tabChange', tabvalue);
      reLoadeHeading.value += 1;
      activeTab.value = tabvalue;
      if (activeTab.value === 1) {
        currentPage.value = 1;
        await listEstimatedCost();
      }
    };

    // On Before mount Function
    onBeforeMount(async () => {
      await listEstimatedCost();
    });

    return {
      costList,
      imgError,
      list,
      activeTab,
      tabHeading,
      tabChange,
      reLoadeHeading,
      loader,
      tabCode,
      currentPage,
      totalPages,
      meetingId,
      listEstimatedCost,
      estimatedCost,
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

    // Alt Img Handling
    errorImg(data: any) {
      data.errorImg = true;
      this.imgError += 1;
    },

    // Dollor Amount
    dollorFormat(amount: any) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
    },
    // Date Formate
    dateFormat(date: any) {
      if (date === '0000-00-00' || date === '') {
        return '--';
      } else {
        return date;
      }
    },

    // Date Formate
    activitydateFormat(date: any) {
      if (date === '0000-00-00' || date === '') {
        return moment(this.$props.meetingDate).format('YYYY-MM-DD');
      } else {
        return date;
      }
    },

    // Edit Planned
    editForm(rowValue: any) {
      this.$emit('editForm', rowValue);
    },

    download(file: any) {
      if (file) {
        this.$emit('openClick', file);
      }
    },
    // Delete Planned
    deletForm(rowValue: any) {
      this.$emit('deleteCost', rowValue);
    },
  },
});
