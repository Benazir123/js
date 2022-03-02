import { defineAsyncComponent, defineComponent, ref } from 'vue';
import Assistantinfo from '../ContactPreferences/Assistantinfo/Assistantinfo';
const CALeftMenu = defineAsyncComponent(() => import('../CALeftMenu/CALeftMenu.vue'));
const AssistantInfo = defineAsyncComponent(() => import('./AssistantInfo.vue'));
const TravelPreference = defineAsyncComponent(() => import('./TravelPreference.vue'));
const AssociatedAffiliations = defineAsyncComponent(() => import('./AssociatedAffiliations.vue'));
const MedicalInformation = defineAsyncComponent(() => import('./MedicalInformation.vue'));
const InstitutionInfo = defineAsyncComponent(() => import('./InstitutionInfo.vue'));
const LinkedEngagements = defineAsyncComponent(() => import('./LinkedEngagements.vue'));
import VueApexCharts from 'vue3-apexcharts';
const RadiusProfile = defineAsyncComponent(() => import('./RadiusProfile.vue'));

export default defineComponent({
  name: 'Summary',

  components: {
    'ca-left-menu': CALeftMenu,
    'assitant-info': AssistantInfo,
    'travel-preference': TravelPreference,
    'associated-affiliations': AssociatedAffiliations,
    'medical-information': MedicalInformation,
    'institution-info': InstitutionInfo,
    'linked-engagements': LinkedEngagements,
    apexchart: VueApexCharts,
    'radius-profile': RadiusProfile,
  },
  data() {
    return {
      seriesEngagementStatus: [
        {
          data: [30, 60, 50, 55, 45, 70, 40, 60, 20, 50, 30, 40],
        },
      ],
      chartOptionsEngagementStatus: {
        chart: {
          height: 250,
          type: 'bar',
        },
        colors: ['#E9EDF7'],
        plotOptions: {
          bar: {
            borderRadius: 8,
          },
        },
        dataLabels: {
          enabled: false,
        },

        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          position: 'bottom',
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          show: false,
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            show: false,
          },
        },
      },
    };
  },

  methods: {
    consultant() {
      this.$router.push('/speakerconsultant');
    },
  },
});
