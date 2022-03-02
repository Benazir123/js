import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import { defineComponent, onBeforeMount, ref } from 'vue';
import VPagination from '@hennge/vue3-pagination';
import ClientDetailsDrawer from './ClientDetails/ClientDetailsDrawer.vue';

export default defineComponent({
  name: 'ClientAdmin',
  inheritAttrs: false,

  components: {
    VPagination,
    'clientdetails-drawer': ClientDetailsDrawer
  },

  data() {
    return {
      isOpenclientdrawer: false,
    };
  },

  setup() {
    const clientList = ref([]) as any;
    const loader = ref(false) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(0) as any;
    const imgErrorSpk = ref(0) as any;
    const userType = ref(1) as any;
    const listTitle = ref('') as any;
    const description = ref('') as any;
    const salesForceId = ref('') as any;

    // List listClientAdmin Api
    const listClientAdmin = async (page: any = '') => {
      loader.value = true;
      try {
        const param = 'users/sales_force';
        let postData = {};
        if (page) {
          postData = {
            page: page,
            limit: 10,
          };
        }
        const res = await ServiceEngagement.commonEndpoint('post', param, postData);
        if (res.apiStatus) {
          clientList.value = res.data;
          totalPages.value = res.totalPages ? res.totalPages : 0;
          listTitle.value = res.title;
          description.value = res.description;
        } else {
          clientList.value = [];
        }
        console.log(listTitle.value, 'listClientAdmin==>>', res);
      } catch (error) {
        clientList.value = [];
      }
      loader.value = false;
    };

    // On Before mount Function
    onBeforeMount(async () => {
      loader.value = true;
      await listClientAdmin(currentPage.value);
      loader.value = false;
    });

    return {
      clientList,
      listClientAdmin,
      loader,
      currentPage,
      totalPages,
      imgErrorSpk,
      userType,
      listTitle,
      description,
      salesForceId,
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
    viewclient(){
      this.isOpenclientdrawer = !this.isOpenclientdrawer
    }

    // viewDetailPage(rowData: any) {
    //   console.log('rowData client page', rowData);
    //   this.salesForceId = rowData.id;
    //   // this.isOpendrawer = !this.isOpendrawer
    // },
  },
});
