import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AttendeeInfo',
  inheritAttrs: false,
  props: {
    countInfo: {
      default: '',
    },
    isActualAttendee: {
      default: false,
    },
    isCollabmeeting: {
      default: false,
    },
  },
  methods: {
    bindData(data: any) {
      if (data) {
        return data;
      } else {
        return 0;
      }
    },
  },
});
