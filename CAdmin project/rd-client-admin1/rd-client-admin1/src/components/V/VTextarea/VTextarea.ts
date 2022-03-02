import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'VTextarea',
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
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String
    },
    height: {
      type: [String, Number],
      default: '',
    },
    paddingright: {
      type: [String, Number],
      default: '',
    }
  },
  data() {
    return {
      value: ref(''),
      description: ref(''),
    };
  },
  setup(props, { emit }) {
    const bindValue = ref('') as any;
    return {
      bindValue,
    };
  },
  methods: {
    ontext(value: any) {
      console.log('value', value);
      this.$emit('textchange', value);
    },
  },
});
