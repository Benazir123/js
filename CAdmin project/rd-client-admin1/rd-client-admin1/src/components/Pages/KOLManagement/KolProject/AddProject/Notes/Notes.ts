import { defineComponent, ref } from 'vue';
import ProjectLeftMenu from '../ProjectLeftMenu/ProjectLeftMenu.vue';

export default defineComponent({
  name: 'Notes',
  components: {
    "project-left-menu" : ProjectLeftMenu
    },
  data() {
    return {
      addnotesproject: false,
    };
  },
  props: {
  },
  methods: {
    backproject () {
      this.$router.push('/project');
    },
    openaddnotesproject(){
      this.addnotesproject = true;
    }
  },
  setup() {
    const logisticstable = ref([]) as any;
    logisticstable.value = [
      {
        description: 'Call received from speaker about payment status for Eng ID:220',
        invoice: 'Payments',
        hours: 'Mathew Thomas',
        paid: 'Aug 16, 2020',
      },
      {
        description: 'Payment Cheque sent to Speaker on 6/20/2018 for Eng ID:220',
        invoice: 'Payments',
        hours: 'Michelle Aboud',
        paid: 'June 20, 2020',
      },
      {
        description: 'Call received from speaker about payment status for Eng ID:220',
        invoice: 'Payments',
        hours: 'Alaa Abousaif',
        paid: 'Sep 06, 2019',
      },
      {
        description: 'Payment Cheque sent to Speaker on 6/20/2018 for Eng ID:220',
        invoice: 'Payments',
        hours: 'Michelle Aboud',
        paid: 'June 20, 2020',
      },
      {
        description: 'Call received from speaker about payment status for Eng ID:220',
        invoice: 'Payments',
        hours: 'DanGore',
        paid: 'Apr 12, 2018',
      },
      {
        description: 'Payment Cheque sent to Speaker on 6/20/2018 for Eng ID:220',
        invoice: 'Payments',
        hours: 'Michelle Aboud',
        paid: 'June 20, 2020',
      },
      {
        description: 'Call received from speaker about payment status for Eng ID:220',
        invoice: 'Payments',
        hours: 'DanGore',
        paid: 'Apr 12, 2018',
      },
      {
        description: 'Payment Cheque sent to Speaker on 6/20/2018 for Eng ID:220',
        invoice: 'Payments',
        hours: 'Michelle Aboud',
        paid: 'June 20, 2020',
      },
      {
        description: 'Call received from speaker about payment status for Eng ID:220',
        invoice: 'Payments',
        hours: 'DanGore',
        paid: 'Apr 12, 2018',
      },
    ];

    const dateValue = ref([]);
    const formatter = ref({
      date: 'DD MMM YYYY',
      month: 'MMM',
    });
    return {
      dateValue,
      formatter,
      logisticstable
    };
  },

  computed: {},
});
