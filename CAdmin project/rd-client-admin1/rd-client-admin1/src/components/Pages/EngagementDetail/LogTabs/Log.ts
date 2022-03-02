import { defineComponent, ref } from 'vue';
import VPagination from '@hennge/vue3-pagination';
import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel';
export default defineComponent({
  name: 'Log',
  components: {
    VPagination,
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel,
  },
  data() {
    return {
      loghidefilter: false,
    };
  },
  methods: {
    // Show/Hide Filter Function
    logshowfilter() {
      this.loghidefilter = !this.loghidefilter;
    },
  },
  setup() {
    const logTable = ref([]) as any;
    const engFilter = ref([]) as any;
    const currentPage = ref(1) as any;
    (logTable.value = [
      {
        id: '458',
        firstname: 'Adil',
        lastname: 'Abdalla',
        datetime: 'Sep 3, 2021 4:30 PM',
        eoname: 'Kristin Perry',
        spkname: 'Colin Alper',
        type: 'Live Out of Office',
        status: 'Join',
        attemptdate: 'Sep 3, 2021	',
        attempttime: '5:07 PM	',
        message: 'Hcp User clicked the Email Login Link	',
        reason: '---',
      },
      {
        id: '458',
        firstname: 'Adil',
        lastname: 'Abdalla',
        datetime: 'Sep 6, 2021 4:30 PM',
        eoname: 'Kristin Perry',
        spkname: 'Colin Alper',
        type: 'Live Out of Office',
        status: 'Rejoin',
        attemptdate: 'Sep 6, 2021	',
        attempttime: '5:07 PM	',
        message: 'Hcp User joined the session	',
        reason: '---',
      },
      {
        id: '458',
        firstname: 'Adil',
        lastname: 'Abdalla',
        datetime: 'Sep 4, 2021 4:30 PM',
        eoname: 'Kristin Perry',
        spkname: 'Colin Alper',
        type: 'Live Out of Office',
        status: 'Upcoming',
        attemptdate: 'Sep 4, 2021	',
        attempttime: '5:07 PM	',
        message: 'User left the session	',
        reason: '---',
      },
    ]),
      (engFilter.value = [
        {
          id: '1',
          'filter-name': 'engagementstatus-list',
          title: 'Engagement Status',
          filterLabel: [
            { id: 1, label: 'Join' },
            { id: 2, label: 'Rejoin' },
          ],
          chooseNames: [],
          chooseId: [],
        },
        {
          id: '2',
          'filter-name': 'reason-list',
          title: 'Reason',
          filterLabel: [
            { id: 1, label: 'UnSupported Browser' },
            { id: 2, label: 'Network failure' },
            { id: 3, label: 'Invalid token' },
            { id: 4, label: 'Incorrect session ID' },
            { id: 5, label: 'Microphone or Camera access' },
            { id: 6, label: 'Microphone access' },
            { id: 7, label: 'Camera access' },
            { id: 8, label: 'Session connection' },
            { id: 9, label: 'Session subscription' },
            { id: 10, label: 'Test Execution' },
            { id: 11, label: 'Publisher Initialize' },
            { id: 12, label: 'OpenTOK API' },
            { id: 13, label: 'Server logging' },
          ],
          chooseNames: [],
          chooseId: [],
        },
      ]);
    return {
      logTable,
      engFilter,
      currentPage: 1,
    };
  },
});
