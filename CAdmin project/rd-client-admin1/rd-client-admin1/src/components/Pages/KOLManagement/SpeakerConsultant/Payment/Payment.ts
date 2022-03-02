import { defineAsyncComponent, defineComponent, ref } from 'vue';
const CALeftMenu = defineAsyncComponent(() => import('../CALeftMenu/CALeftMenu.vue'));
import TreeTable from 'vue-tree-table-component';

export default defineComponent({
  name: 'Payment',
  components: {
    'ca-left-menu': CALeftMenu,
    TreeTable,
  },
  setup() {
    const payment = ref([]) as any;
    payment.value = [
      {
        contractname: 'Commercial',
        contproduct: '-',
        contstartdate: '-',
        contenddate: '-',
        contamount: '$30,000',
        contsoftcapamount: '$27,000',
        contsoftcap: '90%',
        contutilization: '$5,000',
        contremainingcap: '$25,000',
        contremainingsoftcap: '$22,000',
        conthours: '75',
        conthoursutilized: '12',
        contremaininghours: '16',
      },
      {
        contractname: 'Commercial',
        contproduct: '-',
        contstartdate: '-',
        contenddate: '-',
        contamount: '$30,000',
        contsoftcapamount: '$27,000',
        contsoftcap: '90%',
        contutilization: '$5,000',
        contremainingcap: '$25,000',
        contremainingsoftcap: '$22,000',
        conthours: '75',
        conthoursutilized: '12',
        contremaininghours: '16',
      },
      {
        name: 'Beach Douglas',
        degree: 'MD',
        tier: 'Tier 2',
        speciality: 'Hematology / Oncology',
        affiliation: 'Tennesse Oncology',
        products: 'Adtralza',
        country: 'South America',
        contracttype: 'Multiple',
        degrecontracttypee: 'South America',
        capamount: '$250,000',
        ytd: '$ 50,000',
        remaining: '$ 1,00,000',
      },
    ];
    return {
      payment,
    };
  },
  methods: {
    consultant() {
      this.$router.push('/speakerconsultant');
    },
  },
});
