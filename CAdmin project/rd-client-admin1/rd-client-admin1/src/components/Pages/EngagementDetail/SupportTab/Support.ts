import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Support',
  inheritAttrs: false,
  props: {
    meetingId: {
      default: '',
    },
    tabCode: {
      default: '',
    },
  },
});
