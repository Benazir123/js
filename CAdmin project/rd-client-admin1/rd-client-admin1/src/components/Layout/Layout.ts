import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Layout',
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
});
