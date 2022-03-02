import { defineAsyncComponent, defineComponent } from 'vue';
const LeftMenu = defineAsyncComponent(() => import('../LeftMenu/LeftMenu.vue'));

export default defineComponent({
  name: 'ContactInformation',
  components: {
    'left-menu': LeftMenu,
  },

  methods: {},
});
