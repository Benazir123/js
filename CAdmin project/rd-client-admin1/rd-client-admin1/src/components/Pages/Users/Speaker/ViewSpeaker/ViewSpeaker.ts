import { defineAsyncComponent, defineComponent, ref } from 'vue';
const LeftMenu = defineAsyncComponent(() => import('../ViewSpeaker/LeftMenu/LeftMenu.vue'));

export default defineComponent({
  name: 'ViewSpeaker',
  components: {
    'left-menu': LeftMenu,
  },

  methods: {},
});
