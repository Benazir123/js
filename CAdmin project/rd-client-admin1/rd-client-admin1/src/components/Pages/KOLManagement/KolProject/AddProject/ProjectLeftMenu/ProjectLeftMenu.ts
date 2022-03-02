import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'ProjectLeftMenu',

  data() {
    return {
      currentRoute: '',
    };
  },
  watch: {
    async $route(to, from) {
      var route = useRoute();
      this.currentRoute = to.fullPath;
      console.log('from', from);
      console.log('to', to);
      console.log('to', route);
    },
  },
  created() {
    var route = useRoute();
    console.log('route', route);

    if (route && route.path) {
      this.currentRoute = route.path;
    }
  },

  methods: {
    generaldata () {
      this.$router.push('/general');
    },
    strategic () {
      this.$router.push('/strategicinformation');
    },
    hcpdetails () {
      this.$router.push('/HcpDetails');
    },
    logisticsdetails (){
      this.$router.push('/logistics');
    },
    documentprojectdetails (){
      this.$router.push('/documentProject');
    },
    notessdetails (){
      this.$router.push('/notes');
    },
  },
});
