/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import { defineAsyncComponent, defineComponent, ref, onBeforeMount } from 'vue';
import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';

export default defineComponent({
  name: 'ClientDetailsDrawer',
  inheritAttrs: false,
  components: {
  },
  props: {
    salesForceId: {
      default: '',
    },
  },
  data() {
    return {};
  },

  methods: {},

  // errorImg (data: any) {
  //   data.errorImg = true
  //   this.imgErrorSpk += 1
  // },
  // // Dateformate
  // dateFormate (date: any) {
  //   return Helper.dateFormat(date)
  // },

  setup(props) {
    const clientDetailList = ref([]) as any;
    const loader = ref(false) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(0) as any;
    // const imgErrorSpk = ref(0) as any

    onBeforeMount(async () => {
      await clientDetailsList(currentPage.value);
    });

    // List listSpeaker Api
    const clientDetailsList = async (page: any = '') => {
      loader.value = true;
      try {
        const param = 'users/sales_force/details';
        let postData = {};
        if (page) {
          postData = {
            salesForceId: props.salesForceId,
            page: page,
            limit: 10,
          };
        }
        const res = await ServiceEngagement.commonEndpoint('post', param, postData);
        if (res.apiStatus) {
          clientDetailList.value = res.data;
          totalPages.value = res.totalPages ? res.totalPages : 0;
        } else {
          clientDetailList.value = [];
        }
      } catch (error) {
        clientDetailList.value = [];
      }
      loader.value = false;
    };

    return {
      clientDetailsList,
      loader,
      currentPage,
      totalPages,
    };
  },
});
