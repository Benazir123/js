import { defineComponent, ref } from 'vue';
import LitepieDatepicker from 'litepie-datepicker';
import moment from 'moment';
import Helper from '@/globalFunctions/Helper';
export default defineComponent({
  name: 'VDatepicker',
  inheritAttrs: false,
  emits: ['apply-date-filter', 'clear-date-filter'],
  components: {
    LitepieDatepicker,
  },
  props: {
    autoApply: {
      default: false,
    },
    isSingleDate: {
      default: false,
    },
    id: {
      default: 'open-datepicker',
    },
  },

  setup(props, { emit }) {
    const myRef = ref(null);
    const dDate = ref([
      moment()
        .startOf('year')
        .format('DD MMM YYYY'),
      moment()
        .endOf('year')
        .format('DD MMM YYYY'),
    ]) as any;
    const isApply = props.autoApply;
    const autoApply = ref(true);
    autoApply.value = isApply;
    const setStartDate = ref('') as any;
    const setEndDate = ref('') as any;
    const chooseFilter = ref('') as any;
    const startDate = ref([
      moment()
        .startOf('year')
        .format('DD MMM YYYY'),
    ]) as any;
    const click = ref(0);

    const formatter = ref({
      date: 'DD MMM YYYY',
      month: 'MMM',
    });

    window.addEventListener('click', function(e: any) {
      console.log('Apply dDate.value', dDate.value);
      autoApply.value = true;
      console.log('addEventListener', autoApply.value);
      click.value += 1;
      console.log('Second Click', click.value);
      // customDatepicker()
      // if(dDate.value.length != 0){
      //   emit('apply-date-filter', { date: dDate.value, filter: chooseFilter })
      // }
      // emit('apply-date-filter', { date: dDate.value, filter: chooseFilter })
      // addActiveClass('Clear')
    });

    const customShortcuts = () => {
      return [
        {
          label: 'Today',
          atClick: () => {
            const date = new Date();
            autoApply.value = false;
            addActiveClass('Today');
            return [new Date(date.setDate(date.getDate())), new Date(date.setDate(date.getDate()))];
          },
        },
        {
          label: 'Last 7 Days',
          atClick: (event: any) => {
            console.log('event', event);
            const date = new Date();
            autoApply.value = false;
            addActiveClass('Last 7 Days');
            return [new Date(date.setDate(date.getDate())), new Date(date.setDate(date.getDate() - 7))];
          },
        },
        {
          label: 'Last 30 Days',
          atClick: () => {
            const date = new Date();
            autoApply.value = false;
            addActiveClass('Last 30 Days');
            const currentMonthDay = Helper.daysInMonth(date.getDate(), date.getFullYear());
            console.log('currentMonthDay', currentMonthDay);
            return [new Date(date.setDate(date.getDate())), new Date(date.setDate(date.getDate() + 2 - currentMonthDay))];
          },
        },
        {
          label: 'This month',
          atClick: () => {
            const date = new Date();
            autoApply.value = false;
            addActiveClass('This month');
            const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            return [firstDay, lastDay];
          },
        },
        {
          label: 'Last month',
          atClick: () => {
            const date = new Date();
            autoApply.value = false;
            addActiveClass('Last month');
            const firstDay = new Date(date.getFullYear(), date.getMonth() - 1, 1);
            const lastDay = new Date(date.getFullYear(), date.getMonth(), 0);
            return [firstDay, lastDay];
          },
        },
        {
          label: 'Last Year',
          atClick: () => {
            addActiveClass('Last Year');
            autoApply.value = false;
            const lastyear = new Date(new Date().getFullYear() - 1, 0, 1);
            const firstDay = new Date(lastyear.getFullYear(), 0, 1).getTime();
            const lastDay = new Date(lastyear.getFullYear(), 11, 31).getTime();
            return [firstDay, lastDay];
          },
        },
        {
          label: 'Quarter 1',
          atClick: () => {
            addActiveClass('Quarter 1');
            autoApply.value = false;
            const firstDay = moment()
              .quarter(1)
              .startOf('quarter')
              .format('YYYY-MM-DD');
            const lastDay = moment()
              .quarter(1)
              .endOf('quarter')
              .format('YYYY-MM-DD');
            return [firstDay, lastDay];
          },
        },

        {
          label: 'Quarter 2',
          atClick: () => {
            addActiveClass('Quarter 2');
            autoApply.value = false;
            const firstDay = moment()
              .quarter(2)
              .startOf('quarter')
              .format('YYYY-MM-DD');
            const lastDay = moment()
              .quarter(2)
              .endOf('quarter')
              .format('YYYY-MM-DD');
            return [firstDay, lastDay];
          },
        },

        {
          label: 'Quarter 3',
          atClick: () => {
            addActiveClass('Quarter 3');
            autoApply.value = false;
            const firstDay = moment()
              .quarter(3)
              .startOf('quarter')
              .format('YYYY-MM-DD');
            const lastDay = moment()
              .quarter(3)
              .endOf('quarter')
              .format('YYYY-MM-DD');
            return [firstDay, lastDay];
          },
        },

        {
          label: 'Quarter 4',
          atClick: () => {
            addActiveClass('Quarter 4');
            autoApply.value = false;
            const firstDay = moment()
              .quarter(4)
              .startOf('quarter')
              .format('YYYY-MM-DD');
            const lastDay = moment()
              .quarter(4)
              .endOf('quarter')
              .format('YYYY-MM-DD');
            return [firstDay, lastDay];
          },
        },

        {
          label: 'This Year',
          atClick: () => {
            autoApply.value = false;
            addActiveClass('This Year');
            const lastyear = new Date(new Date().getFullYear(), 0, 1);
            const firstDay = new Date(lastyear.getFullYear(), 0, 1).getTime();
            const lastDay = new Date(lastyear.getFullYear(), 11, 31).getTime();
            return [firstDay, lastDay];
          },
        },

        {
          label: 'Next Year',
          atClick: () => {
            autoApply.value = false;
            addActiveClass('Next Year');
            const lastyear = new Date(new Date().getFullYear() + 1, 0, 1);
            const firstDay = new Date(lastyear.getFullYear(), 0, 1).getTime();
            const lastDay = new Date(lastyear.getFullYear(), 11, 31).getTime();
            return [firstDay, lastDay];
          },
        },
        {
          label: 'Apply',
          atClick: () => {
            console.log('Apply dDate.value', dDate.value);
            const startDate = new Date(dDate.value[0]);
            const endDate = new Date(dDate.value[1]);
            dDate.value = [moment(startDate).format('DD MMM YYYY'), moment(endDate).format('DD MMM YYYY')];
            autoApply.value = true;
            console.log('dDAte', dDate);
            emit('apply-date-filter', {
              date: dDate.value,
              filter: chooseFilter,
            });
            return [moment(startDate).format('DD MMM YYYY'), moment(endDate).format('DD MMM YYYY')];
          },
        },

        {
          label: 'Clear',
          atClick: () => {
            autoApply.value = true;
            addActiveClass('Clear');
            dDate.value = [
              moment()
                .startOf('year')
                .format('DD MMM YYYY'),
              moment()
                .endOf('year')
                .format('DD MMM YYYY'),
            ];
            emit('apply-date-filter', {
              date: dDate.value,
              filter: chooseFilter,
            });
            return [
              moment()
                .startOf('year')
                .format('DD MMM YYYY'),
              moment()
                .endOf('year')
                .format('DD MMM YYYY'),
            ];
          },
        },
      ];
    };

    const addActiveClass = async (lable: any) => {
      const buttons = document.getElementsByClassName('litepie-shortcuts');
      chooseFilter.value = lable;
      for (let i = 0; i < buttons.length; i++) {
        console.log(buttons[i].innerHTML);
        if (buttons[i].innerHTML === lable && buttons[i].innerHTML !== 'Clear') {
          buttons[i].classList.add('active');
        } else {
          buttons[i].classList.remove('active');
        }
      }
    };

    // const returnDate = async (starDate: any, endDate : any) => {
    //   setStartDate.value = starDate
    //   setEndDate.value = endDate
    // }

    const customDatepicker = async () => {
      console.log('dDate.value', dDate.value);
      dDate.value = [];
      console.log('autoApply.value', autoApply.value);
      //  const startDate = new Date(dDate.value[0])
      //  const endDate = new Date(dDate.value[1])
      // emit('apply-date-filter', { date: dDate.value, filter: chooseFilter })
    };
    const options = ref({
      footer: {
        id: 'apply',
        apply: 'Apply',
        cancel: 'Clear',
      },
    });

    return {
      myRef,
      formatter,
      options,
      dDate,
      customShortcuts,
      addActiveClass,
      autoApply,
      setStartDate,
      setEndDate,
      chooseFilter,
      startDate,
      customDatepicker,
      click,
    };
  },
  methods: {
    selectedDate() {
      console.log('selecteddate', this.startDate);
    },
  },
});
