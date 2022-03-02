import { defineComponent } from 'vue';
export default defineComponent({
  name: 'VConfirmationModal',
  props: {
    header: {
      type: Boolean,
      default: false,
    },
  },
});
