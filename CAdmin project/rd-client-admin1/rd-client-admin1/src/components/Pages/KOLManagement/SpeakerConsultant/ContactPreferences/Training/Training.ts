import { defineAsyncComponent, defineComponent, ref } from 'vue';
const CALeftMenu = defineAsyncComponent(() => import('../../CALeftMenu/CALeftMenu.vue'));

export default defineComponent({
  name: 'Engagement',
  components: {
    'ca-left-menu': CALeftMenu,
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
    const spkTrainingOptional = ref([]) as any;
    const spkTrainingRd = ref([]) as any;
    const spkHistoricalRequired = ref([]) as any;
    const spkHistoricalOptional = ref([]) as any;
    (spkTrainingRequired.value = [
      {
        type: 'Compliance Training',
        name: 'Compliance 2021',
        startdate: '03/10/2021',
        enddate: '03/09/2022',
        completeddate: '03/10/2021',
        status: 'Completed',
      },
      {
        type: 'Compliance Training',
        name: 'VTC 3',
        startdate: '03/11/2021',
        enddate: '03/10/2022',
        completeddate: '03/11/2021',
        status: 'Completed',
      },
      {
        type: 'Compliance Training',
        name: 'Compliance',
        startdate: '--',
        enddate: '--',
        completeddate: '--',
        status: 'Pending',
      },
      {
        type: 'Compliance Training',
        name: 'Compliance 2	',
        startdate: '08/17/2021',
        enddate: '08/16/2022',
        completeddate: '08/17/2021',
        status: 'Completed',
      },
      {
        type: 'Compliance Training',
        name: 'Compliance 60',
        startdate: '07/29/2021',
        enddate: '07/28/2022',
        completeddate: '07/29/2021',
        status: 'Completed',
      },
      {
        type: 'Compliance Training',
        name: 'Compliance 2021(1)',
        startdate: '--',
        enddate: '--',
        completeddate: '--',
        status: 'Pending',
      },
    ]),
      (spkTrainingOptional.value = [
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
      ]),
      (spkTrainingRd.value = [
        {
          name: 'RD Intro Speakers	',
          lastviewdatedate: 'Aug 21, 2021 - 12.29 pm',
        },
        {
          name: 'Speaker Virtual Engagement Execution	',
          lastviewdatedate: 'May 31, 2021 -5.10 am',
        },
        {
          name: 'Speaker Notification	',
          lastviewdatedate: '---',
        },
        {
          name: 'Speaker Closeout	',
          lastviewdatedate: '---',
        },
      ]),
      (spkHistoricalRequired.value = [
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
          name: 'Speaker Virtual Engagement Execution	',
          startdate: '05/08/2021',
          enddate: '25/08/2021',
          completeddate: '22/08/2021',
          status: 'Expired',
        },
      ]),
      (spkHistoricalOptional.value = [
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
      ]);
    return {
      spkTrainingRequired,
      spkTrainingOptional,
      spkTrainingRd,
      spkHistoricalRequired,
      spkHistoricalOptional,
    };
  },
});
