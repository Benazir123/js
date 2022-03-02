import { defineComponent, ref, onBeforeMount, defineAsyncComponent } from 'vue';
import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import VPagination from '@hennge/vue3-pagination';
import Helper from '@/globalFunctions/Helper';
const SpeakerAlign = defineAsyncComponent(() => import('../ContentLibrary/SpeakerAlign/SpeakerAlign.vue'));
export default defineComponent({
  name: 'ContentLibrary',
  inheritAttrs: false,
  components: {
    VPagination,
    'speaker-align': SpeakerAlign,
  },
  props: {
    primaryId: {
      default: '',
    },
  },
  data() {
    return {
      hidefilter: false,
      isOpencontentdrawer: false,
    };
  },
  methods: {
    //Download Content
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

    //Show/Hide Filter Function
    showfilter() {
      this.filterKey += 1;
      this.hidefilter = !this.hidefilter;
    },
    opendrawercontent() {
      this.isOpencontentdrawer = !this.isOpencontentdrawer;
    },
    //Apply filter Count
    applyFilter(filterData: any) {
      console.log('filterData', filterData);
      this.filterCount = filterData.array.filter((a: any) => a.chooseId && a.chooseId.length != 0);
      this.currentPage = 1;
      if (filterData.type == 'apply') {
        this.productFilterArray = filterData.array.find(
          (name: any) => name['filter-name'] == 'product-list' && name.chooseId.length > 0,
        );
      } else if (filterData.type == 'clear') {
        console.log('clearfilter');
        this.initFilter('');
        this.productFilterArray = [];
      }

      this.listContentLibrary(this.currentPage);
      this.hidefilter = false;
      console.log('this.filterCount', this.filterCount);
    },
  },
  setup() {
    const contentList = ref([]) as any;
    const loader = ref(false) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(0) as any;
    const filterArray = ref([]) as any;
    const filterKey = ref(0);
    const filterCount = ref([]) as any;
    const productFilterArray = ref([]) as any;
    const opencontentTab = ref(1) as any;

    //Init Filter
    const initFilter = async (filterData: any) => {
      filterArray.value = [
        {
          id: '1',
          'filter-name': 'product-list',
          title: 'Product',
          filterLabel: [],
          chooseNames: [],
          chooseId: [],
        },
      ];
    };

    const togglecontentTabs = async (tabNumber: number) => {
      opencontentTab.value = tabNumber;
      currentPage.value = 1;
      await listContentLibrary(currentPage.value);
    };

    //List  ContentLibrary Api
    const listContentLibrary = async (page: any = '') => {
      loader.value = true;
      try {
        var pagination = '';
        var type = '';
        var postData = {};
        if (opencontentTab.value == 1) {
          type = 'active';
        } else if (opencontentTab.value == 2) {
          type = 'history';
        }
        if (opencontentTab.value && productFilterArray.value && productFilterArray.value.chooseId) {
          postData = {
            page: page,
            limit: 10,
            type: type,
            product: productFilterArray.value.chooseId,
          };
        } else {
          postData = {
            page: page,
            limit: 10,
            type: type,
          };
        }
        var url = 'contents';
        var res = await ServiceEngagement.commonEndpoint('post', url, postData);
        if (res.data) {
          contentList.value = res.data.rows;
          totalPages.value = res.totalPages ? res.totalPages : 0;
        } else {
          contentList.value = [];
        }
        console.log('RESPONSE content', contentList.value);
      } catch (error) {
        contentList.value = [];
      }
      loader.value = false;
    };

    //On Before mount Function
    onBeforeMount(async () => {
      loader.value = true;
      var filter = Helper.getFilterData();
      console.log('filter', filter);
      await initFilter(filter);
      await listContentLibrary(currentPage.value);
      loader.value = false;
    });

    // FOR USER PROFILES

    return {
      listContentLibrary,
      contentList,
      currentPage,
      totalPages,
      loader,
      filterArray,
      filterKey,
      filterCount,
      initFilter,
      productFilterArray,
      opencontentTab,
      togglecontentTabs,
    };
  },
});
