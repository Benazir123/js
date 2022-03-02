import { defineComponent, ref } from 'vue';
import LeftMenu from './../LeftMenu/LeftMenu.vue';

export default defineComponent({
  name: 'Comment',
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
    const spkTrainingRequired = ref([]) as any;
    spkTrainingRequired.value = [
      {
        type: 'Call received from speaker about payment status for Eng ID:220',
        name: 'Payments',
        productname: 'Mathew Thomas',
        startdate: 'Aug 16, 2020',
      },
      {
        type: 'Payment Cheque sent to Speaker on 6/20/2018 for Eng ID:220',
        name: 'Payments',
        productname: 'Michelle Aboud',
        startdate: 'June 20, 2020',
      },
      {
        type: 'Call received from speaker about payment status for Eng ID:220',
        name: 'Payments',
        productname: 'Alaa Abousaif',
        startdate: 'Sep 06, 2019',
      },
      {
        type: 'Call received from speaker about payment status for Eng ID:220',
        name: 'Payments',
        productname: 'DanGore',
        startdate: 'Apr 12, 2018',
      },
    ];
    const spkTrainingOptional = ref([]) as any;
    const spkTrainingRd = ref([]) as any;
    const spkHistoricalRequired = ref([]) as any;
    const spkHistoricalOptional = ref([]) as any;

    return {
      spkTrainingRequired,
      spkTrainingOptional,
      spkTrainingRd,
      spkHistoricalRequired,
      spkHistoricalOptional,
    };
  },
});
