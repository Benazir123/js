import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'Attendees',
  inheritAttrs: false,
  emit: ['hcp-tab-change'],
  props: {
    attendeeData: {
      type: Object,
      default: '',
    },
  },
  setup(props) {
    const attendeeData = props.attendeeData;
    const imgError = ref(1) as any;
    console.log('attendeeData', props);
    return {
      attendeeData,
      imgError,
    };
  },

  methods: {
    // Alt Img Handling
    errorImg(data: any) {
      data.errorImg = true;
      this.imgError += 1;
    },

    gotoHcpTab() {
      this.$emit('hcp-tab-change');
    },
  },
});
