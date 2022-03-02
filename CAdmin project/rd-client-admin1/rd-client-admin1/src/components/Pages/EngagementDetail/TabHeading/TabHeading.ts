import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TabHeading',
  inheritAttrs: false,
  emit: ['tab-change'],
  props: {
    activeTab: {
      type: Number,
      default: 1,
    },
    tabCode: {
      default: '',
    },
    tabList: {
      type: Array,
      default: '',
    },
  },

  setup(props, { emit }) {
    // Tab Change Function
    const tabSetChange = async (value: any) => {
      emit('tab-change', value);
    };

    return {
      tabSetChange,
    };
  },
});
