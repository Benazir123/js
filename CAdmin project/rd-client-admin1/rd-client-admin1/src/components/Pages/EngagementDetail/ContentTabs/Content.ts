import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import { defineComponent, ref, onBeforeMount } from 'vue';
import VPagination from '@hennge/vue3-pagination';

export default defineComponent({
  name: 'ContentTabs',
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
    const content = ref([]) as any;
    const loader = ref(false) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(0) as any;
    const meetingId = ref(props.meetingId) as any;
    const tabCode = ref(props.tabCode) as any;
    const imgError = ref(1) as any;

    // List Content Api
    const listContent = async (page: any = '') => {
      loader.value = true;
      try {
        let pagination = '';
        if (page) {
          pagination = '?page=' + page + '&limit=' + 10;
        }

        const param = meetingId.value + '/' + tabCode.value + pagination;
        const res = await ServiceEngagement.engTabList(param);
        if (res.is_success) {
          content.value = res.result;
          totalPages.value = res.total_count ? res.total_count : 0;
        } else {
          content.value = [];
        }
        console.log('Tab Result', res);
      } catch (error) {
        content.value = [];
      }
      loader.value = false;
    };

    // On Before mount Function
    onBeforeMount(async () => {
      loader.value = true;
      await listContent();
      loader.value = false;
    });

    return {
      content,
      loader,
      currentPage,
      totalPages,
      meetingId,
      tabCode,
      imgError,
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

    // Download Content
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
  },
});
