import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel';
import ProjectLeftMenu from '../ProjectLeftMenu/ProjectLeftMenu.vue';
// const Drawer = defineAsyncComponent(() => import("../Engagement/Drawer/Drawer.vue"));
const DrawerTableffs = defineAsyncComponent(() => import('../SpeakerAlignDrawer/SpeakerAlignDrawer.vue'));

export default defineComponent({
  name: 'HcpDetails',
  components: {
    "project-left-menu" : ProjectLeftMenu,
    drawertable: DrawerTableffs,
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
      showmore: false,
      isOpenspeakeraligndrawer: false,
      isOpenspeakeraligndrawerclose: false,
      isaddnewspeakerdrawer: false,
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
    openmore(){
      this.showmore = !this.showmore;
    },
    showspeakeraligndrawer() {
      this.isOpenspeakeraligndrawer = !this.isOpenspeakeraligndrawer;
    },
    showspeakeraligndrawerclose() {
      this.isOpenspeakeraligndrawerclose = !this.isOpenspeakeraligndrawerclose;
    },
    addnewspeakerdrawer(){
      this.isaddnewspeakerdrawer = !this.isaddnewspeakerdrawer;
    },
    addnewspeakerdrawerclose(){
      this.isaddnewspeakerdrawerclose = !this.isaddnewspeakerdrawerclose;
    }
  },
  setup() {
    const hcpdetail = ref([]) as any;

    hcpdetail.value = [
      {
        address: 'Northwest University - Division of Gasteroenterologist Saint Clair, ST, Suite 17-250',
        city: 'Chicago',
        state: 'IL',
        zip: '60611',
        id: '1003997875',
        owner: 'Abbas Jonathan',
        license: '3997875',
        statusmark: 'Pending eCIF',
        confirmed: require('@/assets/profile2.svg'),
      },
      {
        address: 'Atrium Health, 1025 Morehead Medical Drive, Ste 300',   
        city: 'Charlotte',
        state: 'NC ',
        zip: '28204',
        id: '1223497875',
        owner: 'Veronica Lerma',
        license: 'Susan Lucak',

        statusmark: 'Active',
        confirmed: require('@/assets/profile2.svg'),
      },
      {
        address: 'Well Connell Medicine,1305 York Ave, 4th Floor',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90395',
        id: '1753997875',
        owner: 'Sandy Cheung',
        license: 'Neal OsbornGalbers Alay',

        statusmark: 'Pending Debarment',
        confirmed: require('@/assets/profile2.svg'),
      },
      {
        address: 'Northwest University - Division of Gasteroenterologist Saint Clair, ST, Suite 17-250',   
        city: 'Charlotte',
        state: 'NC ',
        zip: '28204',
        id: '1223497875',
        owner: 'Veronica Lerma',
        license: 'Susan Lucak',

        statusmark: 'Active',
        confirmed: require('@/assets/profile2.svg'),
      },
      {
        address: 'Northwest University - Division of Gasteroenterologist Saint Clair, ST, Suite 17-250',
        city: 'Chicago',
        state: 'IL',
        zip: '60611',
        id: '1003997875',
        owner: 'Abbas Jonathan',
        license: '3997875',
        statusmark: 'Pending eCIF',
        confirmed: require('@/assets/profile2.svg'),
      },
    ];

    // FOR ENGAGEMENT STATUS
    const engStatusColor = (engStatus: any) => {
      console.log('engStatus', engStatus);
      if (engStatus == 'Pending eCIF' || engStatus == 'Pending Debarment') {
        return 'yellowbtn';
      } else if (engStatus == 'Active') {
        return 'greenbtn';
      } else if (engStatus == 'Pending Debarment') {
        return 'redyellowbtnbtn';
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
      hcpdetail,
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
