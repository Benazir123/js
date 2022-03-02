import { defineAsyncComponent, defineComponent, ref, onBeforeMount } from 'vue';
import VPagination from '@hennge/vue3-pagination';
import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
const addform = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/AddForm/AddForm.vue'));
export default defineComponent({
  name: 'Employee',
  components: {
    VPagination,
    'add-form': addform,
  },
  props: {
    meetingId: {
      default: '',
    },
    tabCode: {
      default: '',
    },
    isAddEmployee: {
      default: true,
    },
  },
  setup(props) {
    const employee = ref([]) as any;
    const loader = ref(false) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(0) as any;
    const meetingId = ref(props.meetingId) as any;
    const tabCode = ref(props.tabCode) as any;
    const imgError = ref(1) as any;
    const tabInfo = ref({}) as any;
    const openForm = ref(false) as any;
    const initformData = ref([]) as any;
    const toasterInfo = ref({}) as any;
    const isToaster = ref(false) as any;
    const isAddForm = ref(true) as any;
    const addBtnEnable = ref(props.isAddEmployee) as any;

    // List Content Api
    const listEmployee = async (page: any = '') => {
      loader.value = true;
      try {
        let pagination = '';
        if (page) {
          pagination = '?page=' + page + '&limit=' + 10;
        }

        const param = meetingId.value + '/' + tabCode.value + pagination;
        const res = await ServiceEngagement.engTabList(param);
        if (res.is_success) {
          employee.value = res.result;
          totalPages.value = res.total_count ? res.total_count : 0;
        } else {
          employee.value = [];
        }
        console.log('Tab Result', res);
      } catch (error) {
        employee.value = [];
      }
      loader.value = false;
    };

    // On Before mount Function
    onBeforeMount(async () => {
      await listEmployee();
    });

    // Init Notes
    const initilizeForm = async (value: any = '') => {
      // document.body.classList.add('overflow-hidden')
      openForm.value = true;
      // document.body.classList.add('overflow-hidden')
      isAddForm.value = false;
      initformData.value = [
        {
          id: 0,
          label: 'First Name',
          required: true,
          disable: false,
          param: 'firstName',
          type: 'text',
          value: '',
          errorMsg: 'First Name is required',
        },
        {
          id: 1,
          label: 'Last Name',
          required: true,
          disable: false,
          param: 'lastName',
          type: 'text',
          value: '',
          errorMsg: 'Last Name is required',
        },
        {
          id: 2,
          label: 'Email',
          required: true,
          disable: false,
          param: 'email',
          type: 'text',
          value: '',
          errorMsg: 'Email is required',
        },
        {
          id: 3,
          label: 'Title',
          required: true,
          disable: false,
          param: 'title',
          type: 'text',
          value: '',
          errorMsg: 'Title is required',
        },
        {
          id: 4,
          label: 'Division',
          required: false,
          disable: false,
          param: 'division',
          type: 'text',
          value: '',
          errorMsg: 'Division is required',
        },
        {
          id: 5,
          label: 'Telephone',
          required: false,
          disable: false,
          inputtype: 'number',
          param: 'telephone',
          type: 'text',
          value: '',
          errorMsg: 'Telephone is required',
        },
        {
          id: 6,
          label: 'Address',
          required: false,
          disable: false,
          param: 'address',
          type: 'textarea',
          value: '',
          errorMsg: 'Telephone is required',
        },
        {
          id: 7,
          label: 'Zipcode',
          required: false,
          disable: false,
          param: 'zip',
          type: 'text',
          paramvalue: 'zipcode',
          value: '',
          inputtype: 'number',
          maxLength: 5,
          errorMsg: 'Zipcode is required',
          lengthError: 'Zipcode must be 5 Digit.',
        },
        {
          id: 8,
          label: 'City',
          required: false,
          disable: true,
          param: 'city',
          type: 'text',
          value: '',
          errorMsg: 'City is required',
        },
        {
          id: 9,
          label: 'State',
          required: false,
          disable: true,
          param: 'state',
          type: 'text',
          value: '',
          errorMsg: 'State is required',
        },
      ];
    };

    return {
      employee,
      currentPage,
      totalPages,
      meetingId,
      tabCode,
      loader,
      imgError,
      tabInfo,
      openForm,
      initilizeForm,
      initformData,
      toasterInfo,
      isToaster,
      isAddForm,
      listEmployee,
      addBtnEnable,
    };
  },
  methods: {
    bindData(data: any) {
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

    // Open add form
    openAddForm() {
      this.tabInfo = {
        title: 'Add Employee',
        endPoint: '/' + this.tabCode,
        method: 'post',
        meeting: this.meetingId,
        from: 'emp',
        listPageEndPoint: '/employees',
        listPageAddEndPoint: '/engagements/' + this.meetingId + '/employees',
        listPageMethod: 'get',
        listPageAddMethod: 'post',
        addParam: 'employeeId',
      };
      this.initilizeForm();
    },

    copyLink(link: any) {
      console.log('link', link);
      this.toasterInfo = {};
      this.toasterInfo.info = true;
      this.isToaster = true;
      const selBox = document.createElement('textarea') as any;
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = link;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);

      setTimeout(async () => {
        this.isToaster = false;
      }, 2000);
    },

    // Close Form
    async cloeForm(value: any) {
      this.openForm = false;
      this.toasterInfo = {};
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
        this.listEmployee();
        this.currentPage = 1;
        setTimeout(async () => {
          this.isToaster = false;
        }, 2000);
      }
    },
  },
});
