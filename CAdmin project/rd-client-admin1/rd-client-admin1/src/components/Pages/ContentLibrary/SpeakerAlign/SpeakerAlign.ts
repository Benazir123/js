import { defineAsyncComponent, defineComponent } from 'vue';
import VPagination from '@hennge/vue3-pagination';

const EngagementInnerRow = defineAsyncComponent(() => import('../../Engagement/EngagementInnerRow/EngagementInnerRow.vue'));

export default defineComponent({
  name: 'SpeakerAlign',
  components: {
    'engagement-inner-row': EngagementInnerRow,
    VPagination,
  },
  inheritAttrs: false,
  props: {
    primaryId: {
      default: '',
    },
  },
});
