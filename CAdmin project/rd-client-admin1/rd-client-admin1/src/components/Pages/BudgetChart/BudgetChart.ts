import { defineAsyncComponent, defineComponent, ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
export default defineComponent({
  name: 'BudgetChart',
  components: {
    apexchart: VueApexCharts,
  },
  data () {
    return {
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
              dataLabels: {
                enabled: false
              },
              labels: {
                show: true,
                name: {
                  show: true,
                  // offsetY: 28,
                  formatter: () => '222,22,222'
                },
              }
            },
            value: {
              show: false,
              fontSize: '48px',
              fontFamily: 'Open Sans',
              fontWeight: 500,
              color: '#ffffff',
              offsetY: -10
            },
            total: {
              show: false,
              showAlways: false,
              color: '#BCC1C8',
              fontFamily: 'Open Sans',
              fontWeight: 600,
              // formatter: (w: { globals: { seriesTotals: any[]; }; }) => {
              //   const total = w.globals.seriesTotals.reduce(
              //     (a, b) => a + b,
              //     0
              //   );
              //   return `${total}%`;
              // }
            }
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: false
        },
        // title: {
        //   align: 'center',
        //   offsetX: 0,
        //   // offsetY: -6,
        //   floating: false,
        //   style: {
        //     fontSize: '16px',
        //     fontFamily: 'Mulish',
        //     fontWeight: '600',
        //     color: '#1B2559',
        //   },
        // },
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
      seriesWave: [{
        name: 'Sales',
        data: [0, 25, 45, 35, 25, 100, 50]
      },
      {
        name: 'Page Views',
        data: [30, 25, 35, 45, 65, 50, 40]
      }],
      chartOptionsWave: {
        chart: {
          height: 350,
          type: 'line',
        },
        fill: {
          colors: ['#fffff', '#0ACF83',],
        },
        colors: ['#FFC872', '#0ACF83', ],
        stroke: {
          width: 5,
          curve: 'smooth'
        },
        xaxis: {
          type: 'month',
          gridLineWidth: 1,
          categories: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'jun', 'july'],
          tickAmount: 10,
          labels: {
           
          },
          axisBorder: {
            show: false,
            color: '#E8E3E3',
       
          },
          axisTicks: {
            show: false,
            borderType: 'solid',
            color: '#E8E3E3',
            width: 6,
            offsetX: 0,
          },
        },
        title: {
          text: 'Nov - July',
          align: 'left',
          style: {
            fontSize: "16px",
            color: '#666',
            fontweight:100
          }
        },
    
        yaxis: {
          axisBorder: {
            show: true,
            color: '#E8E3E3',
            offsetX: 0,
            offsetY: 0,
          },
          categories: [0, 25, 50, 100, 30, 40, 35],
          max: 100,
          min: 0,
       
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5,
          // formatter: function(seriesName, opts) {
          //   return [seriesName, " - ", opts.w.globals.series[opts.seriesIndex]]
          // }
        },
        grid: {
          xaxis: {
              lines: {
                  show: true
              }
          },   
          yaxis: {
              lines: {
                  show: false
              }
          }
      }
      },
      
    }
  }

})
