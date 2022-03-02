import { defineComponent } from 'vue';
export default defineComponent({
  name: 'VRadio',
  inheritAttrs: false,
  props: {
    isChecked: {
      default: false,
    },
  },
});
