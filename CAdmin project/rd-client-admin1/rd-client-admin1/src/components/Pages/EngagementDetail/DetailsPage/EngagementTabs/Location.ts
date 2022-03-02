import { defineComponent } from 'vue';
import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel';
export default defineComponent({
  name: 'Location',
  props: {
    locationData: {
      type: Object,
      default: '',
    },
  },
  components: {
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel,
  },
  setup(props) {
    console.log('meetingVenue', props);

    const meetingVenue = props.locationData;
    const locationArray =
      props.locationData.location && props.locationData.location.length !== 0 ? props.locationData.location : [];
    return {
      meetingVenue,
      locationArray,
    };
  },

  methods: {
    fetchData(data: any) {
      return data ? data : '---';
    },
    gotoLocationTab() {
      console.log('got to locatoin tab');
      this.$emit('location-tab-change');
    },
  },
});
