import { defineAsyncComponent, defineComponent, ref } from 'vue';
const CALeftMenu = defineAsyncComponent(() => import('../CALeftMenu/CALeftMenu.vue'));

export default defineComponent({
  name: 'MedicalInfo',
  components: {
    'ca-left-menu': CALeftMenu,
  },

  methods: {
    consultant() {
      this.$router.push('/speakerconsultant');
    },
  },
});
