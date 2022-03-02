import { defineComponent } from 'vue';
export default defineComponent({
  name: 'VInputall',
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
    maxLength: {
      default: '',
    },
    id: {
      default: '',
    },
  },
  setup(props) {
    console.log('maxLength', props.maxLength);
  },
  methods: {
    input(value: any) {
      // console.log(value)
      this.$emit('input', value);
    },
    keypress(value: any) {
      this.$emit('keypress', value);
    },
    blur() {
      this.$emit('blur');
    },
  },
});
