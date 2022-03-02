import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel';
import VueApexCharts from 'vue3-apexcharts';

export default defineComponent({
  name: 'DrawerTable',
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      // Speaker Engagement Status Tracker Start
      series: [10, 10, 10, 40, 5],
      chartOptions: {
        chart: {
          type: 'pie',
          width: 600,
        },
        legend: {
          show: true,
          position: 'bottom',
          horizontalAlign: 'center',
          //width: 500
        },
        title: {
          text: '180 speakers in pending status',
          align: 'center',
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: '16px',
            fontFamily: 'Mulish',
            fontWeight: '600',
            color: '#1B2559',
          },
        },
        // #FFC700'
        fill: {
          colors: ['#FFC872', '#0ACF83', '#3434FF', '#567DF4', '#FF5A89'],
        },
        colors: ['#FFC872', '#0ACF83', '#3434FF', '#567DF4', '#FF5A89'],
        stroke: {
          show: false,
        },
        labels: ['Pending', 'Accepted', 'Declined', 'Completed', 'Cancelled'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
              },
            },
          },
        ],
      },
      // Speaker Engagement Status Tracker End

      filters: {
        name: { value: '', keys: ['name'] },
      },
    };
  },
  props: {
    speakerprofile: {
      type: String,
      default: '',
    },
  },
  methods: {},
  setup() {
    const speaker = ref([]) as any;
    const options = ref([]) as any;
    (options.value = [
      {
        footer: {
          apply: 'Done',
          cancel: 'Clear',
        },
      },
    ]),
      (speaker.value = [
        {
          Meetingid: '479',
          ActualiD: '479',
          Type: 'Virtual All Remote',
          Speaker: 'Chandar Singar...',
          Speakerdegree: 'PA-C',
          Speakerspecialty: 'Hematology/Oncology',
          Repname: 'Tala Ayyad',
          Datetime: '01-16-2021',
          Location: ' ----',
          product: 'UKONIQ',
          status: 'Accepted ',
          statusmark: require('@/assets/checkgreen.svg'),
        },
        {
          Meetingid: '479',
          ActualiD: '479',
          Type: 'Virtual All Remote',
          Speaker: 'Chandar Singar...',
          Speakerdegree: 'PA-C',
          Speakerspecialty: 'Hematology/Oncology',
          Repname: 'Tala Ayyad',
          Datetime: '01-16-2021',
          Location: ' ----',
          product: 'UKONIQ',
          status: 'Accepted ',
          statusmark: require('@/assets/checkgreen.svg'),
        },
        {
          Meetingid: '479',
          ActualiD: '479',
          Type: 'Virtual All Remote',
          Speaker: 'Chandar Singar...',
          Speakerdegree: 'PA-C',
          Speakerspecialty: 'Hematology/Oncology',
          Repname: 'Tala Ayyad',
          Datetime: '01-16-2021',
          Location: ' ----',
          product: 'UKONIQ',
          status: 'Accepted ',
          statusmark: require('@/assets/checkgreen.svg'),
        },
        {
          Meetingid: '479',
          ActualiD: '479',
          Type: 'Virtual All Remote',
          Speaker: 'Chandar Singar...',
          Speakerdegree: 'PA-C',
          Speakerspecialty: 'Hematology/Oncology',
          Repname: 'Tala Ayyad',
          Datetime: '01-16-2021',
          Location: ' ----',
          product: 'UKONIQ',
          status: 'Accepted ',
          statusmark: require('@/assets/checkgreen.svg'),
        },
      ]);

    // FOR ENGAGEMENT STATUS
    const engStatusColor = (engStatus: any) => {
      console.log('engStatus', engStatus);
      if (engStatus == 'Accepted' || engStatus == 'Join') {
        return 'greentext';
      } else if (engStatus == 'Upcoming') {
        return 'bluetext';
      } else if (engStatus == 'Speaker Declined') {
        return 'redtext';
      } else {
        return 'greentext';
      }
    };

    // FOR USER PROFILES

    return {
      speaker,
      engStatusColor,
      options,
    };
  },

  computed: {},
  // data: () => ({
  //   filters: {
  //     name: { value: '', keys: ['name'] }
  //   }
  // }),
});
