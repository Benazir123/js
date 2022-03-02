import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'VInput',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
    },
    modelValue: {},
    selectValue: {},
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const select = ref(props.selectValue) as any;
    return {
      select,
    };
  },
  data() {
    return {
      value: ref(''),
    };
  },
  methods: {
    change(value: any) {
      console.log('Change', value);
      this.$emit('change', value);
    },
  },
});
