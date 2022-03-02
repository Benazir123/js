import { defineAsyncComponent, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Budget',
  components: {

  },
  setup() {
    const historybudget = ref([]) as any;
    historybudget.value = [
      {
        date: '05/21/2021',
        from: 'East',
        action: 'Transfer',
        amount: 'Mid-Alantic-East',
        user: '$30,000',
      },
      {
        date: '05/21/2021',
        from: 'East',
        action: 'Transfer',
        amount: 'Mid-Alantic-East',
        user: '$30,000',
      },
      {
        date: '05/21/2021',
        from: 'East',
        action: 'Transfer',
        amount: 'Mid-Alantic-East',
        user: '$30,000',
      },
    ];
    return {
        historybudget,
    };
  },
  methods:{
    showfundFilter() {
      this.filterfundPop = !this.filterfundPop;
    },
    historyPage() {
      this.$router.push('/history');
    },
  },
  data() {
    return {
      filterfundPop: false,
      commercialPop: true,
      medicalPop: false,
      viewPop: false,
      openTab: 1,
      togglefirstchild: false,
      showfirstchildren: false,
      showfirstchild2: false,
      showfirstchild3: false,
      showfirstchild4: false,
      showfirstchild5: false,
      showfirstchild6: false,
      togglesecondsecchild: false,
      togglesecondsecchild1: false,
      togglesecondsecchild2: false,
      togglesecondsecchild3: false,
      togglesecondsecchild4: false,
      legend: {
        data: null,
        code: null,
        name: null,
        id: '',
      },
      position: {
        left: 0,
        top: 0,
      },
      node: document.createElement('style'),

     

  
    };
  },


});
