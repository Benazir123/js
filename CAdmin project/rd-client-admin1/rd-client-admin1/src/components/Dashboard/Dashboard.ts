import { defineAsyncComponent, defineComponent } from 'vue';
const CARightMenu = defineAsyncComponent(() => import('../Dashboard/CARightMenu/CARightMenu.vue'));
const DrawerTable = defineAsyncComponent(() => import('../Dashboard/DrawerTable/DrawerTable.vue'));
import VueApexCharts from 'vue3-apexcharts';

export default defineComponent({
  name: 'Dashboard',
  components: {
    'ca-right-menu': CARightMenu,
    drawertable: DrawerTable,
    apexchart: VueApexCharts,
  },
  data() {
    return {
      show: false,
      istabledrawer: false,

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

      // Engagement by Region and Quarter - Filter by Engagement Topics start
      seriesregionquarter: [
        {
          name: 'Delaware Valley',
          data: [0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: 'Florida - Open',
          data: [0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: 'Great Lakes East',
          data: [0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: 'New York',
          data: [0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: 'Mid Atlantic',
          data: [0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: 'Souther California',
          data: [10, 1, 0, 0, 0, 0, 0, 0],
        },
        {
          name: 'Texas',
          data: [10, 5, 0, 0, 0, 0, 0, 0],
        },
      ],
      chartOptionsregionquarter: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          stackType: '100%',
        },

        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: 0,
                offsetY: 0,
                horizontalAlign: 'left',
              },
            },
          },
        ],
        xaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: true,
            color: '#E8E3E3',
            height: 1,
            width: '100%',
            offsetX: 0,
            offsetY: 0,
          },
          title: {
            text: 'Number of Topics',
            offsetY: -6,
            style: {
              color: '#7C8AB5',
              fontSize: '13px',
              fontFamily: 'Mulish',
              fontweight: '600',
            },
          },
        },
        yaxis: {
          title: {
            text: 'Number of Engagement Based Region',
            style: {
              color: '#7C8AB5',
              fontFamily: 'Mulish',
              fontSize: '12px',
            },
          },
          axisBorder: {
            show: true,
            color: '#E8E3E3',
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: 'solid',
            color: '#E8E3E3',
            width: 6,
            offsetX: 0,
            offsetY: 0,
          },
        },
        fill: {
          opacity: 1,
          colors: ['#A6CEE3', '#328DFF'],
        },
        colors: ['#328DFF', '#328DFF', '#FFC872', '#0ACF83', '#66A8FA', '#ACECF7', '#FF5A89'],

        legend: {
          position: 'bottom',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            columnWidth: '50%',
          },
        },
      },

      // Engagement by Region and Quarter - Filter by Engagement Topics end

      // Engagements - No of Engagements by Engagement Status Start

      seriesEngagementStatus: [44, 55, 41, 17, 15],
      chartOptionsEngagementStatus: {
        chart: {
          type: 'donut',
        },
        legend: {
          show: true,
          position: 'bottom',
          horizontalAlign: 'center',
        },
        plotOptions: {
          pie: {
            donut: {
              size: '65%',
            },
          },
        },
        stroke: {
          show: false,
        },
        title: {
          text: '565 engagement in upcoming status',
          align: 'center',
          offsetX: 0,
          // offsetY: -6,
          floating: false,
          style: {
            fontSize: '16px',
            fontFamily: 'Mulish',
            fontWeight: '600',
            color: '#1B2559',
          },
        },
        labels: ['Awaiting Speaker Reply', 'Completed', 'Upcoming', 'Speaker Declined', 'Cancelled'],
        colors: ['#FFC700', '#0ACF83', '#567DF4', '#22215B', '#FF5A89'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 450,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
      },

      // Engagements - No of Engagements by Engagement Status End

      // Financial Report - Overall Spending Per Region and Quater Start
      seriesFinancialReport: [
        {
          data: [80, 180, 120, 50, 130, 100],
        },
      ],
      chartOptionsFinancialReport: {
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 1,
            columnWidth: '3%',
            endingShape: 'rounded',
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          enabled: false,
        },
        colors: ['#FF5A89', '#0ACF83'],
        grid: {
          row: {
            colors: ['#fff'],
          },
        },
        xaxis: {
          title: {
            text: 'Quarterly spend per region',
            margin: 10,
            offsetY: -6,
            style: {
              fontSize: '13px',
              fontFamily: 'Mulish',
              fontWeight: '600',
              color: '#1B2559',
            },
          },
          categories: [
            'Live out of office',
            'Live in office',
            'Live Out of office - RML',
            'Live In-office - RML',
            'GPO IPP - Live In-Office',
            'Live Out of Office - GPO',
          ],
        },
        yaxis: {
          axisBorder: {
            show: true,
            color: '#E8E3E3',
            offsetX: 0,
            offsetY: 0,
          },
          categories: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200],
          max: 200,
          min: 0,
          title: {
            text: 'Dollar Amount in thousands',
            style: {
              fontSize: '13px',
              fontFamily: 'Mulish',
              fontWeight: '600',
              color: '#7C8AB5',
            },
          },
        },
      },
      // Financial Report - Overall Spending Per Region and Quater end

      // Program By Region compared to lead and average Start
      seriesProgramByRegion: [
        {
          name: 'Net Profit',
          data: [40, 10, 20],
        },
        {
          name: 'Revenue',
          data: [0, 15, 10],
        },
      ],
      chartOptionsProgramByRegion: {
        chart: {
          type: 'bar',
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '30%',
            endingShape: 'rounded',
            borderRadius: 10,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent'],
        },
        xaxis: {
          categories: ['Leading Region', 'Great Lakes East', 'National Average'],
          axisBorder: {
            show: true,
            color: '#E8E3E3',
            offsetX: 0,
            offsetY: 0,
          },
        },
        yaxis: {
          min: 0,
          max: 45,
          axisBorder: {
            show: true,
            color: '#E8E3E3',
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: 'solid',
            color: '#E8E3E3',
            width: 6,
            offsetX: 0,
          },
        },
        fill: {
          opacity: 1,

          colors: ['#185DDC', '#0ACF83'],
        },
      },

      // Program By Region compared to lead and average End

      // Total Attendess by Professional Type Start
      seriesTotalAttendess: [35, 45, 30, 20],
      chartOptionsTotalAttendess: {
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

        theme: {
          monochrome: {
            enabled: false,
          },
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -5,
            },
          },
        },
        fill: {
          colors: ['#FFC700', '#AE2D68', '#4D2680', '#660F56'],
        },
        stroke: {
          show: false,
        },
        labels: ['MD/DO', 'NP/PA', 'RN', 'PharmD'],
        colors: ['#FFC700', '#AE2D68', '#4D2680', '#660F56'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                // position: 'left'
                show: false,
              },
            },
          },
        ],
      },
      // Total Attendess by Professional Type End
    };
  },

  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
    engagementpage() {
      this.$router.push('/engagements');
    },
    dashtable() {
      this.istabledrawer = !this.istabledrawer;
    },
  },
});
