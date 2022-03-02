import { defineComponent } from 'vue';
export default defineComponent({
  name: 'VInput',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    inputType: {
      type: [String, Number],
      default: 'text',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
});
