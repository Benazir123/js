import { defineComponent } from 'vue';
export default defineComponent({
  name: 'VInputSearch',
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
    paddingy: {
      type: [String, Number],
      default: 'py-3',
    },
  },
});
