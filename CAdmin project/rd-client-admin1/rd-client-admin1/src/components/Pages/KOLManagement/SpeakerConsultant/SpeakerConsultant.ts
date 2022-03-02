import { defineAsyncComponent, defineComponent, ref } from 'vue';
const CARightMenu = defineAsyncComponent(() => import('../Dashboard/CARightMenu/CARightMenu.vue'));

export default defineComponent({
  name: 'Engagement',
  components: {
    'ca-right-menu': CARightMenu,
  },
  methods: {
    speakersummary() {
      this.$router.push('/speakersummary');
    },
  },
  setup() {
    const consultantcolor = (engStatus: any) => {
      console.log('engStatus', engStatus);
      if (engStatus == '$ 114,550') {
        return 'greenbtn';
      } else if (engStatus == '$ 2,19,400') {
        return 'litepinkbtn';
      } else if (engStatus == '$ 2,00,000') {
        return 'liteorangebtn';
      } else {
        return 'litegreenbtn';
      }
    };
    // FOR USER PROFILES
    const kolConsultant = ref([]) as any;
    kolConsultant.value = [
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
        remaining: '$ 114,550',
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
        remaining: '$ 2,19,400',
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
        remaining: '$ 2,00,000',
      },
    ];
    return {
      kolConsultant,
      consultantcolor,
    };
  },
});
