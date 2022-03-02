import { defineComponent } from 'vue';
export default defineComponent({
  name: 'InnerTabHeading',
  inheritAttrs: false,
  emit: ['inner-tab-change'],
  props: {
    inneractiveTab: {
      type: Number,
      default: 1,
    },
    innertabCode: {
      default: '',
    },
    innertabList: {
      type: Array,
      default: '',
    },
  },

  setup(props, { emit }) {
    // Tab Change Function
    const innertabSetChange = async (value: any) => {
      emit('inner-tab-change', value);
    };

    return {
      innertabSetChange,
    };
  },
});
