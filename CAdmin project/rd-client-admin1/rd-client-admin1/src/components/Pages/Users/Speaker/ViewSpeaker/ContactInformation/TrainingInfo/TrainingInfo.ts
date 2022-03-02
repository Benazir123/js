import { defineComponent, ref } from 'vue';
import LeftMenu from '../../LeftMenu/LeftMenu.vue';

export default defineComponent({
  name: 'TrainingInfo',
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
        type: 'Compliance Training',
        name: 'Bausch Compliance 2021',
        productname: '---',
        startdate: '05/11/2021',
        enddate: '05/10/2022',
        completeddate: '05/11/2021',
        status: 'Pending',
      },
      {
        type: 'Compliance Training',
        name: 'VTC 3',
        productname: '---',
        startdate: '05/11/2021',
        enddate: '05/10/2022',
        completeddate: '05/11/2021',
        status: 'In-Progress',
      },
      {
        type: 'Compliance Training',
        name: 'Bausch Compliance',
        productname: '---',
        startdate: '05/11/2021',
        enddate: '05/10/2022',
        completeddate: '05/11/2021',
        status: 'Completed',
      },
    ];
    const spkTrainingOptional = ref([]) as any;
    spkTrainingOptional.value = [
      {
        type: 'VTC 1 ',
        startdate: '--',
        enddate: '--',
        completeddate: '--',
        status: 'Pending',
      },
      {
        type: 'VTC 2 ',
        startdate: '03/10/2021',
        enddate: '03/09/2022',
        completeddate: '03/10/2021',
        status: 'Completed',
      },
    ];
    const spkTrainingRd = ref([]) as any;
    spkTrainingRd.value = [
      {
        name: 'RD Intro Speakers',
        lastviewdatedate: 'Aug 21, 2021 - 12.29 pm',
      },
      {
        name: 'Speaker Virtual Engagement Execution',
        lastviewdatedate: 'May 31, 2021 -5.10 am',
      },
      {
        name: 'Speaker Notification',
        lastviewdatedate: '---',
      },
      {
        name: 'Speaker Closeout',
        lastviewdatedate: '---',
      },
    ];
    const spkHistoricalRequired = ref([]) as any;
    spkHistoricalRequired.value = [
      {
        type: 'Compliance Training',
        name: 'RD Intro Speakers',
        startdate: '25/08/2021',
        enddate: '30/09/2021',
        completeddate: '28/09/2021',
        status: 'Expired',
      },
      {
        type: 'Compliance Training',
        name: 'Speaker Virtual Engagement Execution',
        startdate: '05/08/2021',
        enddate: '25/08/2021',
        completeddate: '22/08/2021',
        status: 'Expired',
      },
    ];
    const spkHistoricalOptional = ref([]) as any;
    spkHistoricalOptional.value = [
      {
        name: 'VT 4',
        startdate: '---',
        enddate: '---',
        completeddate: '---',
        status: 'Expired',
      },
      {
        name: 'VTC 1',
        startdate: '---',
        enddate: '---',
        completeddate: '---',
        status: 'Expired',
      },
      {
        name: 'VTC 2',
        startdate: '--',
        enddate: '---',
        completeddate: '---',
        status: 'Expired',
      },
    ];
    return {
      spkTrainingRequired,
      spkTrainingOptional,
      spkTrainingRd,
      spkHistoricalRequired,
      spkHistoricalOptional,
    };
  },
});
