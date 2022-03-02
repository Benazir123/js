import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Engagement',

  methods: {
    speakeraddress() {
      this.$router.push('/speakeraddress');
    },
    travelpreference() {
      this.$router.push('/travelpreference');
    },
  },
});
