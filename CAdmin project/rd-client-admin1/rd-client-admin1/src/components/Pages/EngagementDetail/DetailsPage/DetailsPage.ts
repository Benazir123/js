import Helper from '@/globalFunctions/Helper';
import moment from 'moment';
import { defineAsyncComponent, defineComponent, ref } from 'vue';
const BudgetSummaryPage = defineAsyncComponent(() =>
  import('@/components/Pages/EngagementDetail/DetailsPage/EngagementTabs/BudgetSummary.vue'),
);
const LocationPage = defineAsyncComponent(() =>
  import('@/components/Pages/EngagementDetail/DetailsPage/EngagementTabs/Location.vue'),
);
const AttendeesPage = defineAsyncComponent(() =>
  import('@/components/Pages/EngagementDetail/DetailsPage/EngagementTabs/Attendees.vue'),
);
const CollobarationPage = defineAsyncComponent(() =>
  import('@/components/Pages/EngagementDetail/DetailsPage/EngagementTabs/Collobaration.vue'),
);
const AddInnerForm = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/AddForm/AddInnerForm.vue'));
export default defineComponent({
  name: 'DetailsPage',
  emit: ['tab-change'],
  inheritAttrs: false,

  components: {
    'budgetsummary-page': BudgetSummaryPage,
    'location-page': LocationPage,
    'attendees-page': AttendeesPage,
    'collabaration-page': CollobarationPage,
    'inner-form': AddInnerForm,
  },
  props: {
    engagmentData: {
      default: {},
    },
    isCollobaration: {
      default: false,
    },
  },
  data() {
    return {
      opendetailTab: 1,
    };
  },
  methods: {
    detailtoggleTabs: function(tabNumber: number) {
      this.opendetailTab = tabNumber;
    },
    showData(data: any) {
      if (data) {
        return data;
      } else {
        return '---';
      }
    },

    // Alt Img Handling
    errorImg(data: any) {
      data.errorImg = true;
      this.imgError += 1;
    },

    tabChange(tabId: any) {
      this.$emit('tab-change', tabId);
    },
    //
    dateFormate(date: any) {
      return Helper.dateFormat(date);
    },

    moreSpk(spkData: any) {
      this.isShowMoreSpk = true;
      this.spkData = spkData;
    },

    async closeInnerForm() {
      this.isShowMoreSpk = false;
    },
  },
  setup(props) {
    const engData = ref('') as any;
    const inviteeInfo = ref('') as any;
    const imgError = ref(1) as any;
    const isCollaboration = ref(props.isCollobaration) as any;
    const spkData = ref([]) as any;
    const isShowMoreSpk = ref(false) as any;

    engData.value = props.engagmentData;
    inviteeInfo.value = engData.value.invitees_info;
    console.log('engData', engData.value);
    console.log('isCollaboration', props.isCollobaration);

    return {
      engData,
      inviteeInfo,
      imgError,
      isCollaboration,
      spkData,
      isShowMoreSpk,
    };
  },
});
