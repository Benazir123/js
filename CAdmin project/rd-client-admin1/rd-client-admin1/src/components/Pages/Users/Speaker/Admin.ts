import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import { defineComponent, onBeforeMount, ref } from 'vue';
import VPagination from '@hennge/vue3-pagination';

export default defineComponent({
  name: 'Admin',
  inheritAttrs: false,

  components: {
    VPagination,
  },

  setup() {
    const adminList = ref([]) as any;
    const loader = ref(false) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(0) as any;
    const imgErrorSpk = ref(0) as any;
    const userType = ref(0) as any;
    const listTitle = ref('') as any;
    const searchByName = ref('') as any;

    // List listClientAdmin Api
    const listClientAdmin = async (page: any = '') => {
      loader.value = true;
      try {
        let pagination = '';
        if (page) {
          pagination = '?page=' + page + '&limit=' + 10;
        }
        let searchByNamevalue = '';
        if (searchByName.value !== '') {
          searchByNamevalue = '&search=' + searchByName.value;
        }
        const param = 'speaker' + pagination + '&user_type=' + userType.value + searchByNamevalue;
        const res = await ServiceEngagement.commonEndpoint('get', param);
        if (res.apiStatus) {
          adminList.value = res.data.rows;
          totalPages.value = res.totalPages ? res.totalPages : 0;
          listTitle.value = res.title;
        } else {
          adminList.value = [];
        }
        console.log(listTitle.value, 'listClientAdmin==>>', res);
      } catch (error) {
        adminList.value = [];
      }
      loader.value = false;
    };

    const exportFunction = async () => {
      console.log('Export Function Enter');
      loader.value = true;
      const url = 'speaker' + '?user_type=' + userType.value + '&type=export';
      const exportfile = await ServiceEngagement.commonEndpoint('get', url);
      if (exportfile.apiStatus) {
        const result = `${process.env.VUE_APP_API_URL}/${exportfile.result}`;
        const link = result;
        const exportElement = document.createElement('a');
        exportElement.href = link;
        exportElement.target = '_blank';
        exportElement.click();
      }
      loader.value = false;
    };

    // Clear Search
    const clearSearch = async () => {
      searchByName.value = '';
      await listClientAdmin(currentPage.value);
    };

    window.addEventListener('keypress', async function(e: any) {
      if (e.key === 'Enter' && searchByName.value !== '') {
        currentPage.value = 1;
        await listClientAdmin(currentPage.value);
      }
    });

    // On Before mount Function
    onBeforeMount(async () => {
      loader.value = true;
      await listClientAdmin(currentPage.value);
      loader.value = false;
    });

    return {
      adminList,
      listClientAdmin,
      loader,
      currentPage,
      totalPages,
      imgErrorSpk,
      userType,
      exportFunction,
      listTitle,
      clearSearch,
      searchByName,
    };
  },

  methods: {
    // check data
    bindData(data: any) {
      if (data) {
        return data;
      } else {
        return '---';
      }
    },

    errorImg(data: any) {
      data.errorImg = true;
      this.imgErrorSpk += 1;
    },
  },
});
