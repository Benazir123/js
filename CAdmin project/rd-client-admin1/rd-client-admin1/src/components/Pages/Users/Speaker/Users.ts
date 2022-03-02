import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import { defineAsyncComponent, defineComponent, onBeforeMount, ref } from 'vue';
import VPagination from '@hennge/vue3-pagination';
import { useRoute } from 'vue-router';

const ViewSpeaker = defineAsyncComponent(() => import('../Speaker/ViewSpeaker/ViewSpeaker.vue'));

export default defineComponent({
  name: 'Users',
  inheritAttrs: false,

  components: {
    VPagination,
  },

  setup() {
    const spkList = ref([]) as any;
    const loader = ref(false) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(0) as any;
    const imgErrorSpk = ref(0) as any;
    const userType = ref(3) as any;
    const route = useRoute();
    const listTitle = ref('') as any;
    const searchByName = ref('') as any;

    // List listSpeaker Api
    const listSpeaker = async (page: any = '') => {
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
          spkList.value = res.data.rows;
          totalPages.value = res.totalPages ? res.totalPages : 0;
          listTitle.value = res.title;
        } else {
          spkList.value = [];
        }
        console.log(listTitle.value, 'listSpeaker==>>', res);
      } catch (error) {
        spkList.value = [];
      }
      loader.value = false;
    };

    const exportFunction = async () => {
      // console.log('Export Function Enter')
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
      await listSpeaker(currentPage.value);
    };

    window.addEventListener('keypress', async function(e: any) {
      if (e.key === 'Enter' && searchByName.value !== '') {
        currentPage.value = 1;
        await listSpeaker(currentPage.value);
      }
    });

    // On Before mount Function
    onBeforeMount(async () => {
      loader.value = true;
      if (route.query.title === 'Speaker') {
        userType.value = 3;
      } else if (route.query.title === 'Attendees') {
        userType.value = 2;
      }
      await listSpeaker(currentPage.value);
      loader.value = false;
    });

    return {
      spkList,
      listSpeaker,
      loader,
      currentPage,
      totalPages,
      imgErrorSpk,
      userType,
      useRoute,
      exportFunction,
      listTitle,
      searchByName,
      clearSearch,
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

    viewpage() {
      this.$router.push('/viewspeaker');
    },

    errorImg(data: any) {
      data.errorImg = true;
      this.imgErrorSpk += 1;
    },
  },
});
