import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel';
const EngagementInnerRow = defineAsyncComponent(() => import('../Audit/EngagementInnerRow/EngagementInnerRow.vue'));
// const Drawer = defineAsyncComponent(() => import("../Engagement/Drawer/Drawer.vue"));
const VirtualForm = defineAsyncComponent(() => import('../Audit/VirtualForm/VirtualForm.vue'));

export default defineComponent({
  name: 'Engagement',
  components: {
    'engagement-inner-row': EngagementInnerRow,
    'virtual-form': VirtualForm,
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
    };
  },
  props: {
    speakerprofile: {
      type: String,
      default: '',
    },
  },
  methods: {
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
  },
  setup() {
    const audit = ref([]) as any;

    audit.value = [
      {
        name: 'ID 3209',
        foodicon: require('@/assets/foodicon.svg'),
        collaborateicon: require('@/assets/collaborateicon.svg'),
        date: 'July 17, 2021 | 5:00 PM',
        id: '',
        topic: '(DISEASE STATE DECK)  ',
        Type: 'Virtual Out of Office - GPO',
        ownerprofile: require('@/assets/profile.svg'),
        owner: 'Janee Alanzo',
        Speaker: 'Chandar Singar...',
        statusmark: '',
        confirmed: require('@/assets/profile2.svg'),
      },
      {
        name: 'ID 3219',

        date: 'July 17, 2021 | 5:00 PM',
        id: '',
        topic: 'Unbranded Speacker Deck ',
        Type: 'Virtual Out of Office - GPO',
        ownerprofile: require('@/assets/profile2.svg'),
        owner: 'Joan Mancinelli',
        Speaker: 'Susan Lucak',

        statusmark: require('@/assets/checkgreen.svg'),
        confirmed: require('@/assets/profile2.svg'),
      },
      {
        name: 'ID 3218',

        date: 'July 17, 2021 | 5:00 PM',
        id: '',
        topic: '(FULL PROMO DECK)',
        Type: 'Virtual In- Office ',
        ownerprofile: require('@/assets/profile3.svg'),
        owner: 'Joan Mancinelli',
        Speaker: 'Neal OsbornGalbers Alay',

        statusmark: require('@/assets/exclamatorymark.svg'),
        confirmed: require('@/assets/profile2.svg'),
      },
      {
        name: 'ID 3217',

        date: 'July 17, 2021 | 5:00 PM',
        id: '',
        topic: '(AE MANAGEMENT DECK) ',
        Type: 'GPO IPP - Live In-Office',
        ownerprofile: require('@/assets/profile4.svg'),
        owner: 'Mia Oliver',
        Speaker: 'Patrick Okolo',

        statusmark: require('@/assets/closered.svg'),
        confirmed: require('@/assets/profile2.svg'),
      },
      {
        name: 'ID 3216',

        date: 'July 17, 2021 | 5:00 PM',
        id: '',
        topic: '(DISEASE STATE (AE MANAGEMENT DECK) ',
        Type: 'Virtual All Remote',
        ownerprofile: require('@/assets/profile5.svg'),
        owner: 'Tala Ayyad',
        Speaker: 'Darren Brenner',

        statusmark: '',
        confirmed: require('@/assets/profile2.svg'),
      },
      {
        name: 'ID 3215',

        date: 'July 17, 2021 | 5:00 PM',
        id: '',
        topic: '(FULL PROMO DECK) ',
        Type: 'Virtual Out of Office - GPO',
        ownerprofile: require('@/assets/profile5.svg'),
        owner: 'Tala Ayyad',
        Speaker: 'Darren Brenner',

        statusmark: '',
        confirmed: require('@/assets/profile2.svg'),
      },
      {
        name: 'ID 3214',

        date: 'July 17, 2021 | 5:00 PM',
        id: '',
        topic: '(FULL PROMO DECK) ',
        Type: 'Virtual Out of Office - GPO',
        ownerprofile: require('@/assets/profile5.svg'),
        owner: 'David De Norma',
        Speaker: 'David Kunkel',

        statusmark: '',
        confirmed: require('@/assets/profile2.svg'),
      },
      {
        name: 'ID 3213',

        date: 'July 17, 2021 | 5:00 PM',
        id: '',
        topic: ' (AE MANAGEMENT DECK) ',
        Type: 'Virtual Out of Office - GPO',
        ownerprofile: require('@/assets/profile5.svg'),
        owner: 'Tala Ayyad',
        Speaker: 'Galbers Alay',

        statusmark: '',
        confirmed: require('@/assets/profile5.svg'),
      },
    ];

    // FOR ENGAGEMENT STATUS
    const engStatusColor = (engStatus: any) => {
      console.log('engStatus', engStatus);
      if (engStatus == 'Awaiting HCP(s) RSVP' || engStatus == 'Join') {
        return 'greenbtn';
      } else if (engStatus == 'Upcoming') {
        return 'bluebtn';
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
      audit,
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
