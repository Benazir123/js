import { defineAsyncComponent, defineComponent, ref } from 'vue';
import TreeTable from 'vue-tree-table-component';
import MapChart from 'vue-chart-map';
import LeftMenu from '../LeftMenu/LeftMenu.vue';
const Map = defineAsyncComponent(() => import('./Map.vue'));

export default defineComponent({
  name: 'Cap',
  components: {
    'left-menu': LeftMenu,
    TreeTable,
    MapChart,
    Map,
  },

  methods: {
    consultant() {
      this.$router.push('/speakerconsultant');
    },
    showFilter() {
      this.filterPop = !this.filterPop;
    },
    showcommercial() {
      this.commercialPop = !this.commercialPop;
    },
    showmedical() {
      this.medicalPop = !this.medicalPop;
    },
    showView() {
      this.viewPop = !this.viewPop;
    },
    toggleTabs: function(tabNumber: number) {
      this.openTab = tabNumber;
    },
    onHoverCountry(country: any) {
      this.legend = country;
      this.position = country.position;
      this.$emit('hoverCountry', country);
      console.log(this.position);
    },
    onHoverLeaveCountry(country: any) {
      this.legend = {
        data: null,
        code: null,
        name: null,
        id: '',
      };
      this.$emit('hoverLeaveCountry', country);
    },
  },

  setup() {
    const utilization = ref([]) as any;
    utilization.value = [
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
      utilization,
    };
  },

  data() {
    return {
      filterPop: false,
      commercialPop: true,
      medicalPop: false,
      viewPop: false,
      openTab: 1,
      togglefirstchild: false,
      showfirstchildren: false,
      showfirstchild2: false,
      showfirstchild3: false,
      showfirstchild4: false,
      showfirstchild5: false,
      showfirstchild6: false,
      togglesecondsecchild: false,
      togglesecondsecchild1: false,
      togglesecondsecchild2: false,
      togglesecondsecchild3: false,
      togglesecondsecchild4: false,
      legend: {
        data: null,
        code: null,
        name: null,
        id: '',
      },
      position: {
        left: 0,
        top: 0,
      },
      node: document.createElement('style'),

      tableData: [
        {
          contractname: 'Corporate Cap Overview',
          contproduct: '-',
          contstartdate: '01/13/2021',
          contenddate: '12/31/2021',
          contamount: '$372,600',
          contsoftcapamount: '$372,600',
          contsoftcap: '178%',
          contutilization: '$15,000',
          contremainingcap: '$3,57,00',
          contremainingsoftcap: '$3,12,000',
          conthours: '190',
          conthoursutilized: '109',
          contremaininghours: '79',
          children: [
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
              children: [
                {
                  contractname: 'June 2021 Addendum to 2021 SOW',
                  contproduct: 'EXPAREL',
                  contstartdate: '-',
                  contenddate: '-',
                  contamount: '$18,000',
                  contsoftcapamount: '$16,200',
                  contsoftcap: '90%',
                  contutilization: '$2,500',
                  contremainingcap: '$15,500',
                  contremainingsoftcap: '$13,700',
                  conthours: '45',
                  conthoursutilized: '6',
                  contremaininghours: '39',
                },
                {
                  contractname: 'June 2021 Addendum to 2021 SOW',
                  contproduct: 'EXPAREL',
                  contstartdate: '-',
                  contenddate: '-',
                  contamount: '$12,000',
                  contsoftcapamount: '$12,000',
                  contsoftcap: '90%',
                  contutilization: '$2,500',
                  contremainingcap: '$9,500',
                  contremainingsoftcap: '$8,300',
                  conthours: '30',
                  conthoursutilized: '6',
                  contremaininghours: '24',
                },
              ],
            },
            {
              contractname: 'Medical',
              contproduct: '-',
              contstartdate: '-',
              contenddate: '-',
              contamount: '$3,42,000',
              contsoftcapamount: '$3,00,000',
              contsoftcap: '88%',
              contutilization: '$10,000',
              contremainingcap: '$3,32,000',
              contremainingsoftcap: '$2,90,000',
              conthours: '115',
              conthoursutilized: '97',
              contremaininghours: '63',
              children: [
                {
                  contractname: 'Medical Affairs',
                  contproduct: '-',
                  contstartdate: '-',
                  contenddate: '-',
                  contamount: '$2,14,000 ',
                  contsoftcapamount: '$38,000 ',
                  contsoftcap: '35%',
                  contutilization: '$38,000 ',
                  contremainingcap: '$1,60,000 ',
                  contremainingsoftcap: '$1,05,000 ',
                  conthours: '50',
                  conthoursutilized: '39',
                  contremaininghours: '38',
                  children: [
                    {
                      contractname: 'James 25NOV2021 HCP Work Order 2 (Peds Strategy Consulting)',
                      contproduct: 'EXPAREL',
                      contstartdate: '-',
                      contenddate: '-',
                      contamount: '$14,000',
                      contsoftcapamount: '$10,000',
                      contsoftcap: '5%',
                      contutilization: '$5,000',
                      contremainingcap: '$9,000',
                      contremainingsoftcap: '$9,000',
                      conthours: '25',
                      conthoursutilized: '15',
                      contremaininghours: '6',
                    },
                    {
                      contractname: 'John James 17JAN2021 HCP Work Order 3 (Peds Ad Board)',
                      contproduct: 'EXPAREL',
                      contstartdate: '-',
                      contenddate: '-',
                      contamount: '$1,00,000',
                      contsoftcapamount: '$75,000',
                      contsoftcap: '15%',
                      contutilization: '$35,000',
                      contremainingcap: '$65,000',
                      contremainingsoftcap: '$40,000',
                      conthours: '20',
                      conthoursutilized: '35',
                      contremaininghours: '10',
                    },
                    {
                      contractname: 'James Antony 25NOV2021 HCP Work Order 3 (Peds Ad Board)',
                      contproduct: 'lovera',
                      contstartdate: '-',
                      contenddate: '-',
                      contamount: '$14,000',
                      contsoftcapamount: '$10,000',
                      contsoftcap: '5%',
                      contutilization: '$5,000',
                      contremainingcap: '$9,000',
                      contremainingsoftcap: '$1,000',
                      conthours: '20',
                      conthoursutilized: '8',
                      contremaininghours: '19',
                    },
                  ],
                },
                {
                  contractname: 'Medical Innovation & Educations',
                  contproduct: '-',
                  contstartdate: '-',
                  contenddate: '-',
                  contamount: '$1,28,000',
                  contsoftcapamount: '$95,000',
                  contsoftcap: '25%',
                  contutilization: '$45,000',
                  contremainingcap: '$83,000',
                  contremainingsoftcap: '$42,000',
                  conthours: '65',
                  conthoursutilized: '58',
                  contremaininghours: '25',
                  children: [
                    {
                      contractname: 'James 25NOV2021 HCP Work Order 2 (Peds Strategy Consulting)',
                      contproduct: 'EXPAREL',
                      contstartdate: '-',
                      contenddate: '-',
                      contamount: '$14,000',
                      contsoftcapamount: '$10,000',
                      contsoftcap: '5%',
                      contutilization: '$5,000',
                      contremainingcap: '$9,000',
                      contremainingsoftcap: '$9,000',
                      conthours: '25',
                      conthoursutilized: '15',
                      contremaininghours: '6',
                    },
                    {
                      contractname: 'John James 17JAN2021 HCP Work Order 3 (Peds Ad Board)',
                      contproduct: 'EXPAREL',
                      contstartdate: '-',
                      contenddate: '-',
                      contamount: '$1,00,000',
                      contsoftcapamount: '$75,000',
                      contsoftcap: '15%',
                      contutilization: '$35,000',
                      contremainingcap: '$65,000',
                      contremainingsoftcap: '$40,000',
                      conthours: '20',
                      conthoursutilized: '35',
                      contremaininghours: '10',
                    },
                    {
                      contractname: 'James Antony 25NOV2021 HCP Work Order 3 (Peds Ad Board)',
                      contproduct: 'lovera',
                      contstartdate: '-',
                      contenddate: '-',
                      contamount: '$14,000',
                      contsoftcapamount: '$10,000',
                      contsoftcap: '5%',
                      contutilization: '$5,000',
                      contremainingcap: '$9,000',
                      contremainingsoftcap: '$1,000',
                      conthours: '20',
                      conthoursutilized: '8',
                      contremaininghours: '19',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],

      columns: [
        {
          label: '',
          id: 'contractarrow',
        },
        {
          label: 'Contract',
          id: 'contractname',
        },
        {
          label: 'Product',
          id: 'contproduct',
        },
        {
          label: 'Start Date',
          id: 'contstartdate',
        },
        {
          label: 'End Date',
          id: 'contenddate',
        },
        {
          label: 'Cap Amount',
          id: 'contamount',
        },
        {
          label: 'Soft Cap Amount',
          id: 'contsoftcapamount',
        },
        {
          label: 'Soft Cap',
          id: 'contsoftcap',
        },
        {
          label: 'Utilization',
          id: 'contutilization',
        },
        {
          label: 'Remaining Cap',
          id: 'contremainingcap',
        },
        {
          label: 'Remaining Soft Cap',
          id: 'contremainingsoftcap',
        },
        {
          label: 'Hours',
          id: 'conthours',
        },
        {
          label: 'Hours Utilized',
          id: 'conthoursutilized',
        },
        {
          label: 'Remaining Hours',
          id: 'contremaininghours',
        },
        {
          label: '',
          id: 'contaction',
        },
      ],
    };
  },
});