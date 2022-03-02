import { defineComponent } from 'vue';
export default defineComponent({
  name: 'VFileUpload',
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
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    selectFile(event: any) {
      this.$emit('selected-file', event);
    },
  },
});
