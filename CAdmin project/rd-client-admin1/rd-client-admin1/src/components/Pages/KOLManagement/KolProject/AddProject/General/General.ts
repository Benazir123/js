import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel';
import ProjectLeftMenu from '../ProjectLeftMenu/ProjectLeftMenu.vue';
// const Drawer = defineAsyncComponent(() => import("../Engagement/Drawer/Drawer.vue"));

export default defineComponent({
  name: 'General',
  components: {
    "project-left-menu" : ProjectLeftMenu
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
  
      autoApply: {
        default: false,
      }
     
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
  },
  setup() {
    const dateValue = ref([]);
    const formatter = ref({
      date: 'DD MMM YYYY',
      month: 'MMM',
    });
    return {
      dateValue,
      formatter,
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
