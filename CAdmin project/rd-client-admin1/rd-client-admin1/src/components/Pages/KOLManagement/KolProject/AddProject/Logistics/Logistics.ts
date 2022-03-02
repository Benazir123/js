import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel';
import ProjectLeftMenu from '../ProjectLeftMenu/ProjectLeftMenu.vue';
import DrawerLogistics from './DrawerLogistics/DrawerLogistics.vue';
// const Drawer = defineAsyncComponent(() => import("../Engagement/Drawer/Drawer.vue"));
import LogisticsInnerRow from '../Logistics/LogisticsInnerRow/LogisticsInnerRow.vue';

export default defineComponent({
  name: 'Logistics',
  components: {
    "project-left-menu" : ProjectLeftMenu,
    "drawer-logistics": DrawerLogistics,
    "logistics-inner-row": LogisticsInnerRow
    },
  data() {
    return {
      isOpenaddLogdrawer: false,
        openLogTab: 1,
        isOpenLogdrawer: false,
      isOpenform1: false,
      hideEngDetails: false,
      hidefilter: false,
      togglefilter: false,
      innerrow: false,
      changeArrow: require('@/assets/downarrow.svg'),
      filters: {
        name: { value: '', keys: ['name'] },
      },
      isOpenform11: false,
    };
  },
  props: {
    speakerprofile: {
      type: String,
      default: '',
    },
  },
  methods: {
    openaddLogdrawer(){
      this.isOpenaddLogdrawer = !this.isOpenaddLogdrawer;
    },
    openLogdrawer(primaryId: any) {
      this.isOpenLogdrawer = !this.isOpenLogdrawer;
    },
    toggleLogTabs: function(tabNumber: number) {
        this.openLogTab = tabNumber
      },
    backproject () {
      this.$router.push('/project');
    },
    showEngDetails() {
      this.hideEngDetails = !this.hideEngDetails;
      if (this.hideEngDetails == true) {
        this.changeArrow = require('@/assets/uparrow.svg');
        this.innerrow = true;
      } else {
        this.changeArrow = require('@/assets/downarrow.svg');
        this.innerrow = false;
      }
    },
    showfilter() {
      this.hidefilter = !this.hidefilter;
    },
    engdetailpage() {
      this.$router.push('/engagementdetails');
    },
    showvirtualform() {
      this.isOpenform1 = !this.isOpenform1;
    },
    showarrowDetails() {
      this.hideEngDetails = !this.hideEngDetails;
      if (this.hideEngDetails == true) {
        this.changeArrow = require('@/assets/uparrow.svg');
        this.innerrow = true;
      } else {
        this.changeArrow = require('@/assets/downarrow.svg');
        this.innerrow = false;
      }
    },
  },
  setup() {
    const logisticstable = ref([]) as any;
    const logdetailtab = ref([]) as any;
    
    logisticstable.value = [
      {
        description: 'Present Xifaxan IBS- D Slide Deck to Initial Sales Training Class virtually. Also, take Q&!',
        invoice: '2390203',
        hours: '190',
        paid: 'Anyadike Nnaemeka',
        date: ' 01/13/2021',
        payment: 'FFS  ',
        amount: '$15,000',
        owner: 'Abbas Jonathan'
      },
      {
        description: 'Present Xifaxan IBS- D Slide Deck to Initial Sales Training Class virtually. Also, take Q&!',
        invoice: '8402931',
        hours: '30',
        paid: 'Jasmin Javaherian',
        date: ' 01/13/2021',
        payment: 'Deposit  ',
        amount: '$5,000',
        owner: 'Veronica Lerma'
      
      },
      {
        description: 'Present Xifaxan IBS- D Slide Deck to Initial Sales Training Class virtually. Also, take Q&!',
        invoice: '9282829',
        hours: '80',
        paid: 'Richard Rauck',
        date: ' 01/13/2021',
        payment: 'FFS  ',
        amount: '$8,000',
        owner: 'Veronica Lerma'
      },
    ];
    logdetailtab.value = [
      {
        id: '321',
        typeeng: 'Consultancy',
        typeenvt:'Broadcast',
        datetime: '01/13/2021',
        consultant: ' 01',
        lname: '	433 North Camden Dr., Suite #805  ',
        lcitystate: 'Beverly Hills, CA',
        status:'Awaiting HCP(s) RSVP',
        amount: 'Abbas Jonathan',
        cost:'$12,000'
      },
      {
        id: '322',
        typeeng: 'Advisor Board',
        typeenvt:'Broadcast',
        datetime: '01/13/2021',
        consultant: ' 21',
        lname: '3030 SR - 436 E Unit 258  ',
        lcitystate: 'Apopka, FL	',
        status:'Join',
        amount: 'Veronica Lerma',
        cost:'$22,000'
      },
      {
        id: '323',
        typeeng: 'Advisor Board',
        typeenvt:'Broadcast',
        datetime: '01/13/2021',
        consultant: '13',
        lname: '	12 Alexandra View, Singapore 158741  ',
        lcitystate: '	Houston, TX',
        status:'Upcoming',
        amount: 'Veronica Lerma',
        cost:'$32,000'
      },
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
      logisticstable,
      logdetailtab,
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
