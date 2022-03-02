import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel';
// const Drawer = defineAsyncComponent(() => import("../Engagement/Drawer/Drawer.vue"));
const EngagementInnerRow = defineAsyncComponent(() => import('../KolProject/EngagementInnerRow/EngagementInnerRow.vue'));

export default defineComponent({
  name: 'KolProject',
  components: {
    'engagement-inner-row': EngagementInnerRow,
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel,

  },
  data() {
    return {
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
      isaddnewspeakerdrawer:false,
      isaddnewspeakerdrawerclose: false
    };
  },
  props: {
    speakerprofile: {
      type: String,
      default: '',
    },
  },
  methods: {
    createproject () {
      this.$router.push('/general');
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
      console.log('test v')
    },
    engdetailpage() {
      this.$router.push('/engagementdetails');
    },
    showvirtualform() {
      this.isOpenform1 = !this.isOpenform1;
    },
    addnewspeakerdrawer(){
      this.isaddnewspeakerdrawer = !this.isaddnewspeakerdrawer;
    },
    addnewspeakerdrawerclose(){
      this.isaddnewspeakerdrawerclose = !this.isaddnewspeakerdrawerclose;
    }
  },
  setup() {
    const project = ref([]) as any;

    project.value = [
      {
        value: '3',
        product: 'Xifaxan HE',
        date: 'July 17, 2021 | 5:00 PM',
        id: 'Xifaxan0HE-2021-001',
        type: 'Advisor Board',
        eng: '12',
        timeframe: 'QA-2021',
        expense: '$75,000',
        status: 'Pending Approval',
        confirmed: require('@/assets/profile2.svg'),
      },
      {
        value: '3',
        product: 'Xifaxan HE',
        id: 'Xifaxan0HE-2021-002',
        type: 'Consultancy',
        eng: '12',
        timeframe: 'Once Quarterly - 2021',
        expense: '$5,000',

        status: 'Approved',
        confirmed: require('@/assets/profile2.svg'),
      },
      {
        value: '3',
        product: 'Xifaxan HE',
        id: 'Xifaxan0HE-2021-003',
        type: 'Consultancy',
        eng: '6',
        timeframe: 'Q2-2021',
        expense: '$25,000',

        status: 'Pending Approval',
        confirmed: require('@/assets/profile2.svg'),
      },
      {
        value: '3',
        product: 'Xifaxan HE',
        id: 'Xifaxan0HE-2021-004',
        type: 'Consultancy',
        eng: '5',
        timeframe: 'Q3-2021',
        expense: '$1,000',

        status: 'Approved',
        confirmed: require('@/assets/profile2.svg'),
      },
      {
        value: '3',

        product: 'Xifaxan HE',
        id: 'Xifaxan0HE-2021-005',
        type: 'Advisor Board',
        eng: '8',
        timeframe: 'Q4-2021',
        expense: '$5,000',

        status: 'Pending Approval',
        confirmed: require('@/assets/profile2.svg'),
      },
     
      
    ];

    // FOR ENGAGEMENT STATUS
    const engStatusColor = (engStatus: any) => {
      console.log('engStatus', engStatus);
      if (engStatus == 'Pending Approval' || engStatus == 'Join') {
        return 'yellowbtn';
      } else if (engStatus == 'Approved') {
        return 'greenbtn';
      } else if (engStatus == 'Speaker Declined') {
        return 'redbtn';
      } else {
        return 'yellowbtn';
      }
    };
    //  //OPen Collab meeting Section
    //  openColloborator {

    //   this.isOpenform1 = !this.isOpenform1;
    // },

    // FOR USER PROFILES

    return {
      project,
      engStatusColor,
    };
  },

  computed: {},
  // data: () => ({
  //   filters: {
  //     name: { value: '', keys: ['name'] }
  //   }
  // }),
});
