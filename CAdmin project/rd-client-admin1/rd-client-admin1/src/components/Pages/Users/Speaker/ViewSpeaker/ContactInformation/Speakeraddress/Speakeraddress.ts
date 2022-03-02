import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Engagement',

  methods: {
    contactpreferences() {
      this.$router.push('/contactpreferences');
    },
    assistantinfo() {
      this.$router.push('/assistantinfo');
    },
  },
});
