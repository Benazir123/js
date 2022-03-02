import { defineAsyncComponent, defineComponent, ref } from 'vue';
import LeftMenu from './../LeftMenu/LeftMenu.vue';
const DrawerTableffs = defineAsyncComponent(() => import('../FFS/Drawerffs/Drawerffs.vue'));

export default defineComponent({
  name: 'FFS',
  components: {
    'left-menu': LeftMenu,
    drawertable: DrawerTableffs,
  },
  data() {
    return {
      openTab: 1,
      openTabInner: 1,
      openTabHistoricalInner: 1,
      inTabledrawer: false,
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
    openffsdrawer() {
      this.inTabledrawer = !this.inTabledrawer;
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
        type: '',
        name: ' ',
        productname: '',
        attendee: '',
        status: ' ',
      },
      {
        type: '',
        name: '',
        productname: '',
        attendee: '',
        status: '',
      },
    ];
    return {
      spkTrainingRequired,
      engStatusColor,
      show: false,
      intabledrawer: false,
    };
  },
});
