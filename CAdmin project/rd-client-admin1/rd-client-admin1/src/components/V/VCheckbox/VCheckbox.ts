import { defineComponent } from 'vue';
export default defineComponent({
  name: 'VCheckbox',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    isChecked: {
      default: false,
    },
    id: {
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
