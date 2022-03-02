import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'ContentLibrary',
  inheritAttrs: false,
  components: {},
  methods: {},
  setup() {
    const dateValue = ref([]);
    const formatter = ref({
      date: 'DD MMM YYYY',
      month: 'MMM',
    });
    return {
      dateValue,
      formatter,
    };
  },
});
