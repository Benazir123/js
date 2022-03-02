import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SpeakerAlignDrawer',
   
    components: {
 
      VueCollapsiblePanelGroup,
      VueCollapsiblePanel,
    },
    data() {
      return {
        showAccodianTable: false,
        showToggleTable: false,
        showAccodianList: true,
        hideTopSection: true,
        showBackSection: false,
        hideButtons: true,
        openaddnewspks: false,
        hideaddedspk: true
      };
    },
    methods: {
      showProceed(){
        this.showAccodianTable = true;
        this.showAccodianList = false;
        this.hideTopSection = false;
        this.showBackSection = true;
        this.hideButtons = false;
      },
      backProceed(){
        this.showAccodianTable = false;
        this.showAccodianList = true;
        this.hideTopSection = true;
        this.showBackSection = false;
        this.hideButtons = true;
      },
      addnewspeakerdrawer() {
        this.hideTopSection = false;
        this.openaddnewspks = true;
        this.showBackSection = false;
        this.hideaddedspk = false;
      },
      backaddspkProceed(){
        this.showAccodianTable = false;
        this.showAccodianList = true;
        this.hideTopSection = true;
        this.showBackSection = false;
        this.hideButtons = true;
        this.openaddnewspks = false;
        this.hideaddedspk = true;
      },
    },
    setup() {
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
    return {
      engStatusColor,
    };
    }
});