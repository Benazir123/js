import store from '@/store';
import { defineComponent, defineAsyncComponent } from 'vue';
const AttendeeInfo = defineAsyncComponent(() => import('../EngagementInnerRow/AttendeeInfo.vue'));
export default defineComponent({
  name: 'EngagementInnerRow',
  components: {
    'attendee-info': AttendeeInfo,
  },
  data() {
    return {
      isPrescribe: false,
      isActualAttendee: false,
    };
  },
  props: {
    rowData: {
      type: Object,
    },
    isCollabmeeting: {
      type: Boolean,
    },
    innerinputtype: {
      type: String,
    },
  },
  methods: {
    // Go to Details page
    async engdetailpage(currentData: any) {
      // store.commit('detailStored', currentData)
      console.log('engdata', store.state.engData);
      this.$router.push('/engagementdetails?id=' + currentData.primary_meeting_id);
    },
    openPrescriber(isActualAttendee: boolean) {
      if ((this.$props.rowData && this.$props.rowData.has_collaborator_meeting) || this.$props.isCollabmeeting) {
        this.isPrescribe = !this.isPrescribe;
      }
      this.isActualAttendee = isActualAttendee;
      console.log('this.isPrescribe', this.isPrescribe);
    },
  },
});
