import { defineComponent } from 'vue';
export default defineComponent({
  name: 'VBreadcrumb',
  props: ['breadcrumb', 'subbreadcrumb', 'speakerbreadcrumb'],
  methods: {
    engagement() {
      this.$router.push('/engagements');
    },
  },
});
