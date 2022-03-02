import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BudgetSummary',
  props: {
    budgetSummary: {
      type: Object,
      default: '',
    },
  },
  setup(props) {
    const budgetSumaryData = props.budgetSummary;
    console.log('budgetSumaryData', props);
    return {
      budgetSumaryData,
    };
  },
  methods: {
    dollorFormat(amount: any) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
    },
  },
});
