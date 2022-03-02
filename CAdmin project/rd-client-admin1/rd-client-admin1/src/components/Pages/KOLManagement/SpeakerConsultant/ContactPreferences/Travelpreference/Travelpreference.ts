import { defineAsyncComponent, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Engagement',

  methods: {
    assistantinfo() {
      this.$router.push('/assistantinfo');
    },
    speakerengagements() {
      this.$router.push('/speakerengagements');
    },
  },
});
