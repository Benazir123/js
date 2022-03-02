import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'LeftMenu',

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
    speakersummary () {
      this.$router.push('/speakersummary');
    },
    usersprofile () {
      this.$router.push('/userprofile');
    },

    speakercontactpreferences () {
      this.$router.push('/speakercontactpreferences');
    },
    speakerengagements () {
      this.$router.push('/speakerengagements');
    },
    contract () {
      this.$router.push('/ContractInfo');
    },
    trainingInfo () {
      this.$router.push('/training');
    },
    capinfo () {
      this.$router.push('/cap');
    },
    speakercalendar() {
      this.$router.push('/speakercalendar');
    },
    speakerpayment () {
      this.$router.push('/speakerpayment');
    },
    speakercontent () {
      this.$router.push('/speakercontent');
    },
    document () {
      this.$router.push('/documents');
    },
 
    comment () {
      this.$router.push('/comments');
    },
    engagementinfo () {
      this.$router.push('/engagementinfo');
    },
    ffs () {
      this.$router.push('/ffs');
    },
    biodetail () {
      this.$router.push('/bio');
    },
    aligment() {
      this.$router.push('/aligment');
    },
  },
});
