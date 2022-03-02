import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Vtoaster',
  inheritAttrs: false,
  props: {
    toasterInfo: {
      type: Object,
    },
  },
});
