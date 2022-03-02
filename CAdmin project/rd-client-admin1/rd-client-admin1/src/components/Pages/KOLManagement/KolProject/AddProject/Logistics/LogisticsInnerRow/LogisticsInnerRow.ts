import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel';

// const Drawer = defineAsyncComponent(() => import("../Engagement/Drawer/Drawer.vue"));

export default defineComponent({
  name: 'LogisticsInnerRow',
  components: {

    },
  data() {
    return {
     
    };
  },
  props: {
    speakerprofile: {
      type: String,
      default: '',
    },
  },
  methods: {
   
  },
  setup() {
    const logdetailinnertab = ref([]) as any;
 
    
    logdetailinnertab.value = [
      {
        description: 'Present Xifaxan IBS- D Slide Deck to Initial Sales Training Class virtually. Also, take Q&!',
        invoice: '2390203',
        hours: '190',
        paid: 'Anyadike Nnaemeka',
        date: ' 01/13/2021',
        paymenttype: 'FFS  ',
        amount: '$15,000',
        owner: 'Abbas Jonathan',
        degree: 'MD',
        specality:'Hematology / Oncology',
        status:'Awaiting HCP(s) RSVP',
      
      },
      // {
      //   description: 'Present Xifaxan IBS- D Slide Deck to Initial Sales Training Class virtually. Also, take Q&!',
      //   invoice: '8402931',
      //   hours: '30',
      //   paid: 'Jasmin Javaherian',
      //   date: ' 01/13/2021',
      //   payment: 'Deposit  ',
      //   amount: '$5,000',
      //   owner: 'Veronica Lerma'
      
      // },
      // {
      //   description: 'Present Xifaxan IBS- D Slide Deck to Initial Sales Training Class virtually. Also, take Q&!',
      //   invoice: '9282829',
      //   hours: '80',
      //   paid: 'Richard Rauck',
      //   date: ' 01/13/2021',
      //   payment: 'FFS  ',
      //   amount: '$8,000',
      //   owner: 'Veronica Lerma'
      // },
    ];

    const engStatusColor = (engStatus: any) => {
      console.log('engStatus', engStatus);
      if (engStatus === 'Awaiting HCP(s) RSVP') {
        return 'yellowbtn';
      } else if (engStatus === 'Upcoming') {
        return 'bluebtn';
      } else if (engStatus === 'Join') {
        return 'greenbtn';
      } else {
        return 'yellowbtn';
      }
    };
    const dateValue = ref([]);
    const formatter = ref({
      date: 'DD MMM YYYY',
      month: 'MMM',
    });
    return {
      dateValue,
      formatter,
      logdetailinnertab,
   
      engStatusColor
    };

    //  //OPen Collab meeting Section
    //  openColloborator {

    //   this.isOpenform1 = !this.isOpenform1;
    // },

    // FOR USER PROFILES

    return {
     
    };
  },

  computed: {},
  // data: () => ({
  //   filters: {
  //     name: { value: '', keys: ['name'] }
  //   }
  // }),
});
