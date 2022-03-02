import { defineAsyncComponent, defineComponent } from 'vue';
const CALeftMenu = defineAsyncComponent(() => import('../CALeftMenu/CALeftMenu.vue'));

export default defineComponent({
  name: 'ContactPreferences',
  components: {
    'ca-left-menu': CALeftMenu,
  },

  methods: {
    consultant() {
      this.$router.push('/speakerconsultant');
    },
  },
});
