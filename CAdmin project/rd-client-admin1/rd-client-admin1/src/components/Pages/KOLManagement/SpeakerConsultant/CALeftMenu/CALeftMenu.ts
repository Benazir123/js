import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'CALeftMenu',
  data() {
    return {
      currentRoute: '',
    };
  },
  watch: {
    async $route(to, from) {
      const route = useRoute();
      this.currentRoute = to.fullPath;
      console.log('from', from);
      console.log('to', to);
      console.log('to', route);
    },
  },
  created() {
    const route = useRoute();
    console.log('route', route);
    if (route && route.path) {
      this.currentRoute = route.path;
    }
  },
  methods: {
    speakersummary() {
      this.$router.push('/speakersummary');
    },
    speakerprofile() {
      this.$router.push('/speakerprofile');
    },
    speakermedicalinfo() {
      this.$router.push('/speakermedicalinfo');
    },
    speakercontactpreferences() {
      this.$router.push('/speakercontactpreferences');
    },
    speakerengagements() {
      this.$router.push('/speakerengagements');
    },
    speakercontractlog() {
      this.$router.push('/speakercontractlog');
    },
    speakertraining() {
      this.$router.push('/speakertraining');
    },
    speakerutilization() {
      this.$router.push('/speakerutilization');
    },
    speakercalendar() {
      this.$router.push('/speakercalendar');
    },
    speakerpayment() {
      this.$router.push('/speakerpayment');
    },
    speakercontent() {
      this.$router.push('/speakercontent');
    },
    speakerdocuments() {
      this.$router.push('/speakerdocuments');
    },
    speakeruserdetails() {
      this.$router.push('/speakeruserdetails');
    },
    speakercomments() {
      this.$router.push('/speakercomments');
    },
    speakerhistory() {
      this.$router.push('/speakerhistory');
    },
  },
});
