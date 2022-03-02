import { defineAsyncComponent, defineComponent, ref } from 'vue';
const CALeftMenu = defineAsyncComponent(() => import('../../CALeftMenu/CALeftMenu.vue'));
import '@fullcalendar/core/vdom'; // solves problem with Vite
import FullCalendar, { CalendarOptions, EventApi, DateSelectArg, EventClickArg } from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { INITIAL_EVENTS, createEventId } from './event-utils';

export default defineComponent({
  name: 'SpeakerEngagements',
  components: {
    'ca-left-menu': CALeftMenu,
    FullCalendar,
  },
  data() {
    return {
      hidespkengfilter: false,
      hidefilter: false,
      openTab: 1,
      showPopover: false,
      left: 0,
      top: 0,
      offset: '',
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridDay,timeGridWeek,dayGridMonth',
        },
        initialView: 'timeGridWeek',
        dayHeaderFormat: {
          weekday: 'short',
          day: 'numeric',
        },
        dayHeaderContent: args => {
          console.log('args', args);
          var html = {} as any;
          if (args.view.type == 'timeGridWeek' || args.view.type == 'timeGridDay') {
            html = {
              html: args.date.getDate() + '<span>' + this.getShortName(args.date.getDay()) + '</span>',
            };
          } else if (args.view.type == 'dayGridMonth') {
            html = {
              html: '<span>' + this.getShortName(args.date.getDay()) + '</span>',
            };
          }
          return html;
        },
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        dayMaxEventRows: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
      } as CalendarOptions,
      currentEvents: [] as EventApi[],
    };
  },
  methods: {
    travelpreference() {
      this.$router.push('/travelpreference');
    },
    spkEngagementback() {
      this.$router.push('/speakerconsultant');
    },
    showspkengfilter() {
      this.hidespkengfilter = true;
    },
    showfilter() {
      this.hidefilter = !this.hidefilter;
    },
    toggleTabs: function(tabNumber: number) {
      this.openTab = tabNumber;
    },
    getShortName(date: any) {
      var passed = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
      var name = '';
      passed.forEach((element, i) => {
        if (i == date) {
          name = element;
        }
      });
      return name;
    },

    handleWeekendsToggle() {
      alert();
      this.calendarOptions.weekends = !this.calendarOptions.weekends; // update a property
    },
    handleDateSelect(selectInfo: DateSelectArg) {
      // let title = prompt('Please enter a new title for your event')
      // let calendarApi = selectInfo.view.calendar
      // calendarApi.unselect() // clear date selection
      // if (title) {
      //   calendarApi.addEvent({
      //     id: createEventId(),
      //     title,
      //     start: selectInfo.startStr,
      //     end: selectInfo.endStr,
      //     allDay: selectInfo.allDay
      //   })
      // }
    },
    handleEventClick(clickInfo: EventClickArg) {
      this.showPopover = true;
      this.left = clickInfo.jsEvent.clientX;
      this.top = clickInfo.jsEvent.clientY;
      // this.offset = this.left + "," + this.top;
      this.offset = `top:${this.top}px; left:${this.left}px;`;
      // this.offset = `top:0px; left:0px; transform: translate3d(${this.top}px, ${this.left}px, 0px);`
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    },
    handleEvents(events: EventApi[]) {
      this.currentEvents = events;
    },
    hidetooltip() {
      this.showPopover = false;
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    },
  },
  setup() {
    const spkEngagement = ref([]) as any;
    const engFilter = ref([]) as any;
    const spkengcolor = (engStatus: any) => {
      console.log('engStatus', engStatus);
      if (engStatus == 'International' || engStatus == 'Completed') {
        return 'greenbtn';
      } else if (engStatus == 'Upcoming') {
        return 'bluebtn';
      } else if (engStatus == 'Domestic') {
        return 'redbtn';
      } else {
        return 'yellowbtn';
      }
    };
    // FOR USER PROFILES
    (spkEngagement.value = [
      {
        id: '230',
        date: 'July 20, 2018',
        region: 'US',
        topic: 'Product Presentation - Place Holder',
        owner: 'James Brown',
        attendee: '3',
        status: 'Completed',
        ffs: '$125.00',
        location: 'Upland',
        division: 'Medical',
        sybdivision: 'Commercial',
        type: 'International',
      },
      {
        id: '230',
        date: 'July 20, 2018',
        region: 'EX US',
        topic: 'PI Presentation - Place Holder	',
        owner: 'James Brown',
        attendee: '3',
        status: 'Upcoming',
        ffs: '$220.00',
        location: 'NY',
        division: 'Medical',
        sybdivision: 'Commercial',
        type: 'Domestic',
      },
    ]),
      (engFilter.value = [
        {
          id: '1',
          'filter-name': 'product-list',
          title: 'Product',
          filterLabel: [],
          chooseNames: [],
          chooseId: [],
        },
        {
          id: '2',
          'filter-name': 'topic-list',
          title: 'Topic',
          filterLabel: [],
          chooseNames: [],
          chooseId: [],
        },
        {
          id: '3',
          'filter-name': 'meeting-type-list',
          title: 'Meeting Type',
          filterLabel: [],
          chooseNames: ['Primary Engagements'],
          chooseId: [1],
        },
        {
          id: '4',
          'filter-name': 'status-list',
          title: 'Status',
          filterLabel: [],
          chooseNames: [],
          chooseId: [],
        },
        {
          id: '5',
          'filter-name': 'engagement-type-list',
          title: 'Engagement Type ',
          filterLabel: [],
          chooseNames: [],
          chooseId: [],
        },
      ]);
    return {
      spkEngagement,
      spkengcolor,
      engFilter,
    };
  },
});
