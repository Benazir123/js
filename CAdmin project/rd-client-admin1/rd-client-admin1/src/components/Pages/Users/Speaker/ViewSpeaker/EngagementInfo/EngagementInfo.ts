import { defineComponent, ref } from 'vue';
import LeftMenu from './../LeftMenu/LeftMenu.vue';

export default defineComponent({
  name: 'EngagementInfo',
  components: {
    'left-menu': LeftMenu,
  },
  data() {
    return {
      openTab: 1,
      openTabInner: 1,
      openTabHistoricalInner: 1,
    };
  },
  methods: {
    contractlog() {
      this.$router.push('/contractlog');
    },
    toggleTabs: function(tabNumber: number) {
      this.openTab = tabNumber;
    },
    toggleTabsInner: function(tabNumber: number) {
      this.openTabInner = tabNumber;
    },
    toggleTabHistoricalInner: function(tabNumber: number) {
      this.openTabHistoricalInner = tabNumber;
    },
  },
  setup() {
    const engStatusColor = (engStatus: any) => {
      console.log('engStatus', engStatus);
      if (engStatus === 'Awaiting HCP(s) RSVP' || engStatus === 'Join') {
        return 'greenbtn';
      } else if (engStatus === 'Upcoming') {
        return 'bluebtn';
      } else if (engStatus === 'Speaker Declined') {
        return 'redbtn';
      } else {
        return 'yellowbtn';
      }
    };
    const spkTrainingRequired = ref([]) as any;
    spkTrainingRequired.value = [
      {
        type: 'ID 3209',
        name: '(DISEASE STATE DECK) ',
        productname: 'Virtual Out of Office - GPO',
        attendee: '',
        status: 'Awaiting HCP(s) RSVP ',
      },
      {
        type: 'ID 3219',
        name: '',
        productname: 'Virtual Out of Office - GPO',
        attendee: '',
        status: 'Join',
      },
      {
        type: 'ID 3218',
        name: '',
        productname: 'Virtual In- Office ',
        attendee: '',
        status: 'Join',
      },
      {
        type: 'ID 3217',
        name: '',
        productname: 'GPO IPP - Live In-Office',
        attendee: '',
        status: 'Join',
      },
    ];
    const spkTrainingOptional = ref([]) as any;
    const spkTrainingRd = ref([]) as any;
    const spkHistoricalRequired = ref([]) as any;
    const spkHistoricalOptional = ref([]) as any;
    return {
      spkTrainingRequired,
      engStatusColor,
      spkTrainingOptional,
      spkTrainingRd,
      spkHistoricalRequired,
      spkHistoricalOptional,
    };
  },
});
