import { defineAsyncComponent, defineComponent, ref } from 'vue';
const LeftMenu = defineAsyncComponent(() => import('../../LeftMenu/LeftMenu.vue'));

export default defineComponent({
  name: 'ContractInfo',

  components: {
    'left-menu': LeftMenu,
  },
  data() {
    return {
      viewPop: false,
      togglefirstchild: false,
      showfirstchildren: false,
      showfirstchild2: false,
      showfirstchild3: false,
      showfirstchild4: false,
      showfirstchild5: false,
      showfirstchild6: false,
      showfirstchild7: false,
      togglesecondsecchild: false,
      togglesecondsecchild1: false,
      togglesecondsecchild2: false,
      togglesecondsecchild3: false,
      togglesecondsecchild4: false,
    };
  },
  methods: {
    consultant() {
      this.$router.push('/speakerconsultant');
    },
    showView() {
      this.viewPop = !this.viewPop;
    },
  },
  setup() {
    const utilization = ref([]) as any;
    utilization.value = [
      {
        name: 'Abbas Jonathan',
        degree: 'MD',
        tier: 'Tier 1',
        speciality: 'Hematology / Oncology',
        affiliation: 'Tennesse Oncology',
        products: 'Adtralza',
        country: 'USA',
        contracttype: 'Consultant',
        degrecontracttypee: 'Consultant',
        capamount: '$250,000',
        ytd: '$ 135,450',
        remaining: '$ 1,00,000',
      },
      {
        name: 'Ballance Lessley',
        degree: 'NP',
        tier: '',
        speciality: 'Hematology / Oncology',
        affiliation: 'UPENN',
        products: 'DSA',
        country: 'Europe',
        contracttype: 'Global',
        degrecontracttypee: 'Global',
        capamount: '$250,000',
        ytd: '$ 30,600',
        remaining: '$ 1,00,000',
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
      utilization,
    };
  },
});
