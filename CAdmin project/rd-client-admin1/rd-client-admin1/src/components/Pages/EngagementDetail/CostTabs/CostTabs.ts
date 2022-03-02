import { defineComponent, ref, onBeforeMount, defineAsyncComponent } from 'vue';
import VPagination from '@hennge/vue3-pagination';
import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import Helper from '@/globalFunctions/Helper';
import moment from 'moment';

const TabHeading = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/TabHeading/TabHeading.vue'));

const Estimated = defineAsyncComponent(() =>
  import('@/components/Pages/EngagementDetail/CostTabs/EstimatedCost/EstimatedCost.vue'),
);

const Planned = defineAsyncComponent(() =>
  import('@/components/Pages/EngagementDetail/CostTabs/PlannedCost/PlannedCost.vue'),
);

const Actual = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/CostTabs/ActualCost/ActualCost.vue'));

const addform = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/AddForm/AddForm.vue'));

export default defineComponent({
  name: 'Cost',
  inheritAttrs: false,
  components: {
    'tab-heading': TabHeading,
    'estimated-cost': Estimated,
    'planned-cost': Planned,
    'actual-cost': Actual,
    'add-form': addform,
    VPagination,
  },
  props: {
    meetingId: {
      default: '',
    },
    tabCode: {
      default: '',
    },
    tabTittle: {
      default: '',
    },
    meetingDate: {
      default: '',
    },
  },
  data() {
    return {
      openspkTab: 1,
    };
  },
  setup(props) {
    const costList = ref([]) as any;
    const activeTab = ref(1) as any;
    const tabHeading = ref(1) as any;
    const reLoadeHeading = ref(1) as any;
    const loader = ref(false) as any;
    const tabCode = ref(props.tabCode) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(0) as any;
    const meetingId = ref(props.meetingId) as any;
    const tabTittle = ref(props.tabTittle) as any;
    const tabListName = ref([]) as any;
    const estimatedCost = ref('') as any;
    const addForm = ref('Add Estimated Cost') as any;
    const tabInfo = ref({}) as any;
    const openForm = ref(false) as any;
    const initformData = ref([]) as any;
    const expensiveTypeList = ref([]) as any;
    const expenseList = ref([]) as any;
    const paymentStatus = ref([]) as any;
    const costStatus = ref(0) as any;
    const toasterInfo = ref({}) as any;
    const isToaster = ref(false) as any;
    const reLoadList = ref(1) as any;
    const editFormvalue = ref('Edit Estimated Cost') as any;
    const delteCostRow = ref('') as any;
    const showdelete = ref(false) as any;
    const submitted = ref(false) as any;
    const deleteCostText = ref('Estimated Cost') as any;
    const meetingDate = ref(props.meetingDate);
    // Tab Change Event
    const tabChange = async (tabvalue: any) => {
      console.log('tabChange', tabvalue);
      reLoadeHeading.value += 1;
      activeTab.value = tabvalue;
      if (activeTab.value === 1) {
        currentPage.value = 1;
      }
      currentForm(activeTab.value);
    };

    // Init Notes
    const initilizeForm = async (value: any = '') => {
      openForm.value = true;

      initformData.value = [
        {
          id: 0,
          label: 'Expense Name',
          required: true,
          disable: value || activeTab.value === 1 ? true : false,
          param: 'expense_type_id',
          type: 'dropdown',
          value: value ? value.expense_type_cost.id : '',
          dropdownvalue: expensiveTypeList.value,
          errorMsg: 'Expense Name is required',
        },
        {
          id: 1,
          label: activeTab.value === 3 ? 'Estimated Cost *Committed Cost' : 'Estimated Cost',
          disable: activeTab.value === 1 ? false : true,
          required: true,
          param: 'estimated_cost',
          type: 'text',
          value: estimatedAmount(value),
          errorMsg: 'Estimated Cost is required',
          delteEstimated: isdeleteEstimated(value),
        },
        {
          id: 2,
          label: 'Expense Towards',
          required: activeTab.value === 1 ? false : true,
          disable: activeTab.value === 1 ? true : false,
          param: 'type_for',
          type: 'dropdown',
          ischooseValue: 'label',
          value: value && value !== '' ? value.type_for : '',
          dropdownvalue: expenseList.value,
          errorMsg: 'Expense Towards is required',
        },
        {
          id: 3,
          label: 'Payee Name',
          disable: value && value.payee !== '' && value.payee === '3rd Party' && activeTab.value !== 1 ? false : true,
          hidden: value && value.payee !== '' ? false : true,
          required: value && value.payee !== '' ? true : false,
          param: 'payee',
          type: 'text',
          ischooseValue: 'label',
          dropdownvalue: [],
          value: value && value.payee !== '' ? value.payee : '',
          errorMsg: 'Payee Name is required',
        },
        {
          id: 4,
          label: 'Amount',
          disable: activeTab.value === 1 ? true : false,
          required: activeTab.value === 1 ? false : true,
          param: 'amount',
          type: 'text',
          inputtype: 'number',
          value: amount(value),
          errorMsg: 'Amount is required',
        },
        {
          id: 5,
          label: 'Activity Date',
          required: activeTab.value === 1 ? true : false,
          disable: activeTab.value === 1 ? true : false,
          param: 'activity_date',
          type: 'datepicker',
          value:
            value && value.activity_date !== '0000-00-00'
              ? value.activity_date
              : moment(props.meetingDate).format('YYYY-MM-DD'),
          errorMsg: 'Activity Date is required',
        },
        {
          id: 6,
          label: 'Requested Date',
          required: false,
          disable: activeTab.value === 1 ? true : false,
          param: 'requested_date',
          type: 'datepicker',
          value: value && value.requested_date !== '0000-00-00' ? value.requested_date : '',
          errorMsg: 'Requested Date is required',
        },
        {
          id: 7,
          label: 'Payment Date',
          required: false,
          disable: activeTab.value === 1 ? true : false,
          param: 'payment_date',
          type: 'datepicker',
          value: value && value.payment_date !== '0000-00-00' ? value.payment_date : '',
          errorMsg: 'Payment Date is required',
        },
        {
          id: 8,
          label: 'Reported Date',
          required: false,
          disable: activeTab.value === 1 ? true : false,
          param: 'reported_date',
          type: 'datepicker',
          value: value && value.reported_date !== '0000-00-00' ? value.reported_date : '',
          errorMsg: 'Reported Date is required',
        },
        {
          id: 9,
          label: 'Payment Status',
          required: activeTab.value === 3 ? true : false,
          disable: activeTab.value === 1 ? true : false,
          param: 'payment_status',
          type: 'dropdown',
          value: value && value.payment_status !== '' ? value.payment_status : '',
          ischooseValue: 'label',
          hidden: activeTab.value === 3 ? false : true,
          dropdownvalue: paymentStatus.value,
          errorMsg: 'Payment Status is required',
        },
        {
          id: 10,
          label: 'Comments',
          required: false,
          disable: activeTab.value === 1 ? true : false,
          param: 'comment',
          type: 'textarea',
          value: value ? value.comment : '',
          errorMsg: 'Comments is required',
        },
        {
          id: 11,
          label: 'Receipt',
          required: false,
          disable: activeTab.value === 1 ? true : false,
          param: 'fileupload',
          type: 'fileupload',
          value: '',
          file: value && value.cost_receipt ? value.cost_receipt.file : '',
          errorMsg: 'Receipt is required',
        },
        {
          id: 12,
          label: 'Check Number',
          required: false,
          hidden: value && value.check_number ? false : true,
          disable: activeTab.value === 1 ? true : false,
          param: 'check_number',
          type: 'text',
          value: value && value.check_number !== '' ? value.check_number : '',
          inputtype: 'number',
          errorMsg: 'Receipt is required',
        },
      ];
    };

    const currentForm = async (value: any) => {
      // console.log('meetingdate',  moment(props.meetingDate).format('DD MMM YYYY') ,props.meetingDate)
      switch (value) {
        case 1:
          deleteCostText.value = 'Estimated Cost';
          addForm.value = 'Add Estimated Cost';
          editFormvalue.value = 'Edit Estimated Cost';
          costStatus.value = 0;
          return;
        case 2:
          deleteCostText.value = 'Planned Cost';
          addForm.value = 'Add Planned Cost';
          editFormvalue.value = 'Edit Planned Cost';
          costStatus.value = 1;
          return;
        case 3:
          deleteCostText.value = 'Actual Cost';
          addForm.value = 'Add Actual Cost';
          editFormvalue.value = 'Edit Actual Cost';
          costStatus.value = 2;
          return;
      }
    };

    // Expensive type list
    const expensiveType = async () => {
      try {
        const res = await ServiceEngagement.expenseTypes(meetingId.value);
        console.log('expensivetypelist', res);
        if (res.apiStatus) {
          totalPages.value = res.total_count ? res.total_count : 0;
          if (res.data && res.data.length !== 0) {
            expensiveTypeList.value = res.data;
            formatDropdown();
          }
        } else {
          expensiveTypeList.value = [];
        }
      } catch (error) {}
    };

    const estimatedCostFun = async (value: any) => {
      console.log('value', value);
      estimatedCost.value = value.totalBudgetCost;
      expenseList.value = value.expenseList;
      paymentStatus.value = value.paymentStatus;
      await formatDropdown();
      console.log('expenseList ', expenseList.value);
      console.log('paymentStatus ', paymentStatus.value);
    };

    // Common Format For Dropdown
    const formatDropdown = async () => {
      expensiveTypeList.value = Helper.commonFormatForDropdown(expensiveTypeList.value, 'label_name');

      expenseList.value = Helper.commonFormatForDropdown(expenseList.value, 'title');

      paymentStatus.value = Helper.commonFormatForDropdown(paymentStatus.value, 'status');

      console.log('expenseList.value', expenseList.value);
      console.log('paymentStatus.value', paymentStatus.value);
    };

    // Handle Type for
    const handleTypeFor = (value: any) => {
      console.log('handleTypeFor', value);
      if (value) {
        if (value === 'Engagement') {
          return 2;
        } else if (value === 'Consultant') {
          return 1;
        } else {
          return '';
        }
      } else {
        return '';
      }
    };

    // Amount
    const amount = (value: any) => {
      if (value) {
        if (activeTab.value === 2 && value.planned_cost && value.planned_cost !== 0) {
          return value.planned_cost;
        } else if (activeTab.value === 3 && value.actual_cost && value.actual_cost !== 0) {
          return value.actual_cost;
        } else if (activeTab.value === 1) {
          return 0;
        } else {
          return '';
        }
      } else {
        return '';
      }
    };

    // estimatedAmount
    const estimatedAmount = (value: any) => {
      if (value) {
        // else if (activeTab.value == 3 && value.actual_cost != '') {
        // return value.actual_cost.toString()
        // }
        if (activeTab.value === 3 && value.planned_cost !== '') {
          return value.planned_cost.toString();
        } else {
          return value.estimated_cost.toString();
        }
      } else {
        return '';
      }
    };

    // check is delete estimated
    const isdeleteEstimated = (value: any) => {
      if (value) {
        return value.estimated_cost.toString();
      } else {
        return '';
      }
    };

    // Handle Payment Status
    const checkPaymentStatus = (value: any) => {
      if (value) {
        if (value === 'Shipped') {
          return 1;
        } else if (value === 'Paid') {
          return 2;
        } else if (value === 'Cleared') {
          return 3;
        }
      } else {
        return '';
      }
    };

    const editForm = async (value: any = '') => {
      tabInfo.value = {
        title: editFormvalue.value,
        endPoint: '/' + tabCode.value + '/' + value.id,
        method: 'put',
        meeting: meetingId.value,
        status: costStatus.value,
        from: 'cost',
        currentTab: activeTab.value,
      };
      console.log('editForm', value);
      initilizeForm(value);
    };

    // On Before mount Function
    onBeforeMount(async () => {
      await expensiveType();
      tabListName.value = [
        { id: 1, tabTittle: 'Estimated Cost' },
        { id: 2, tabTittle: 'Planned Cost' },
        { id: 3, tabTittle: 'Actual Cost' },
      ];
    });

    return {
      costList,
      activeTab,
      tabHeading,
      tabChange,
      reLoadeHeading,
      loader,
      tabCode,
      currentPage,
      totalPages,
      meetingId,
      tabTittle,
      tabListName,
      initilizeForm,
      estimatedCost,
      estimatedCostFun,
      addForm,
      currentForm,
      tabInfo,
      openForm,
      initformData,
      expensiveType,
      expensiveTypeList,
      formatDropdown,
      expenseList,
      paymentStatus,
      costStatus,
      editForm,
      editFormvalue,
      handleTypeFor,
      toasterInfo,
      isToaster,
      reLoadList,
      checkPaymentStatus,
      amount,
      estimatedAmount,
      delteCostRow,
      showdelete,
      submitted,
      deleteCostText,
      meetingDate,
    };
  },

  methods: {
    dollorFormat(amount: any) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
    },

    async openAddForm() {
      await this.expensiveType();
      this.tabInfo = {
        title: this.addForm,
        endPoint: '/' + this.tabCode,
        method: 'post',
        meeting: this.meetingId,
        status: this.costStatus,
        from: 'cost',
        currentTab: this.activeTab,
      };
      this.initilizeForm();
    },

    // Close Form
    cloeForm(value: any) {
      if (value !== '') {
        console.log('cloeForm', value);
        this.isToaster = true;
        if (value.apiStatus) {
          this.toasterInfo.success = true;
          if (value.message) {
            this.toasterInfo.msg = value.message;
          } else {
            this.toasterInfo.msg = value.result;
          }
        } else if (value.data.apiStatus) {
          this.toasterInfo.success = true;
          if (value.data.message) {
            this.toasterInfo.msg = value.data.message;
          } else {
            this.toasterInfo.msg = value.data.result;
          }
        } else {
          this.toasterInfo.success = false;
          this.toasterInfo.msg = value.error.message;
        }
        this.reLoadList += 1;
        setTimeout(async () => {
          this.isToaster = false;
        }, 2000);
      }
      this.openForm = false;
    },

    // OpenLink
    openClick(file: any) {
      console.log('file', file);
      if (file) {
        const url = file;
        const exportElement = document.createElement('a');
        exportElement.href = url;
        exportElement.target = '_blank';
        exportElement.click();
      }
    },

    deleteCost(row: any) {
      this.delteCostRow = row;
      this.showdelete = true;
    },

    async cost() {
      const url =
        '/costs/' +
        this.delteCostRow.id +
        '?status=' +
        this.costStatus +
        '&meeting=' +
        this.meetingId +
        '&expense_type=' +
        this.delteCostRow.expense_type_cost.id;
      this.submitted = true;
      const Deleteres = await ServiceEngagement.profile('delete', url);
      console.log('Deleteres', Deleteres);
      this.showdelete = false;
      this.cloeForm(Deleteres);
      this.submitted = false;
      this.reLoadList += 1;
    },
  },
});
