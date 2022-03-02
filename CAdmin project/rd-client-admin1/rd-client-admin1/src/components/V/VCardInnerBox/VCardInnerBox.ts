import { defineComponent } from 'vue';
export default defineComponent({
  name: 'VCardInnerBox',
  props: {
    titleicon: {
      type: String,
      default: '/images/logo.jpg',
    },
    title: {
      type: String,
      default: '',
    },
  },
});
