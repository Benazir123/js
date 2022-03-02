import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import { defineComponent, ref, onBeforeMount, defineAsyncComponent } from 'vue';
import VPagination from '@hennge/vue3-pagination';
import Helper from '@/globalFunctions/Helper';
import moment from 'moment';
import store from '@/store';

const addform = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/AddForm/AddForm.vue'));
export default defineComponent({
  name: 'Task',
  inheritAttrs: false,
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
    categoryId: {
      default: '',
    },
    categoryList: {
      default: [],
    },
    isPrimary: {
      default: false,
    },
  },
  setup(props) {
    const task = ref([]) as any;
    const imgError = ref(1) as any;
    const loader = ref(false) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(0) as any;
    const meetingId = ref(props.meetingId) as any;
    const tabCode = ref(props.tabCode) as any;
    const categoryId = ref('') as any;
    const formData = ref([]) as any;
    const openAddForm = ref(false) as any;
    const dropDownValue = ref([]) as any;
    const tabInfo = ref({}) as any;
    const catList = ref(props.categoryList) as any;
    const startDate = ref(moment(new Date()).format('YYYY-MM-DD')) as any;
    const endDate = ref(moment(new Date()).format('YYYY-MM-DD')) as any;
    const assigneeValue = ref([]) as any;
    const isPrimaryTab = ref(props.isPrimary) as any;
    const assigneeList = ref([]) as any;
    const toasterInfo = ref({}) as any;
    const isToaster = ref(false) as any;
    const taskFromId = ref(1) as any;

    // List Task Api
    const listTask = async (page: any = '') => {
      try {
        let pagination = '';
        let catId = store.state.catId;
        if (catId) {
          catId = '&category_id=' + catId;
        }

        if (currentPage.value) {
          pagination = '?page=' + currentPage.value + '&limit=' + 10 + catId;
        }

        const param = meetingId.value + '/' + tabCode.value + pagination;
        const res = await ServiceEngagement.engTabList(param);
        if (res.is_success) {
          task.value = res.result;
          totalPages.value = res.total_count ? res.total_count : 0;
        } else {
          task.value = [];
        }
        console.log('Result', res);
      } catch (error) {
        task.value = [];
      }
    };

    // Assignee List
    const listAssignee = async () => {
      loader.value = true;
      console.log('assigneeres', assigneeList.value);
      if (assigneeList.value && assigneeList.value.length === 0) {
        assigneeList.value = await ServiceEngagement.assigneeList();
      }
      if (assigneeList.value.is_success) {
        assigneeValue.value = Helper.commonFormatForDropdown(assigneeList.value.result, 'full_name');
      }
      loader.value = false;
      console.log('assigneeList', assigneeValue.value);
    };

    // Init Notes
    const initilizeForm = async (value: any = '') => {
      formData.value = [
        {
          id: 0,
          label: 'Name the task',
          disable: false,
          param: 'name',
          type: 'text',
          value: value ? value.task_description : '',
          required: true,
          errorMsg: 'Task name is required',
        },
        {
          id: 1,
          label: 'Select the task scope',
          disable: false,
          param: 'category_id',
          type: 'dropdown',
          value: value ? value.category.id : categoryId.value,
          dropdownvalue: dropDownValue.value,
          required: true,
          errorMsg: 'Task Scope is required',
        },
        {
          id: 2,
          label: 'Assign a start date',
          disable: false,
          hidden: value ? true : false,
          param: 'start_date',
          type: 'datepicker',
          value: startDate,
          required: false,
          errorMsg: 'Start date is required',
        },
        {
          id: 3,
          label: 'Assign a due date',
          disable: false,
          param: 'due_date',
          type: 'datepicker',
          required: false,
          value: value && value.due_date ? moment(new Date(value.due_date)).format('YYYY-MM-DD') : endDate.value,
          errorMsg: 'End date is required',
        },
        {
          id: 4,
          label: 'Completed date',
          disable: false,
          hidden: value ? false : true,
          param: 'completed_date',
          type: 'datepicker',
          value: value && value.completed_date ? moment(new Date(value.completed_date)).format('YYYY-MM-DD') : '',
          required: false,
          errorMsg: 'Start date is required',
        },
        {
          id: 5,
          label: 'Assign to',
          disable: false,
          param: 'toAssinee',
          type: 'dropdown',
          required: true,
          value: value ? value.to_assinee.id : '',
          dropdownvalue: assigneeValue.value,
          errorMsg: 'Assignee is required',
        },
      ];
      openAddForm.value = true;
    };

    // Category List
    const listCategory = async () => {
      loader.value = true;
      try {
        if (catList && catList.value.length === 0) {
          const category = await ServiceEngagement.categoryList();
          if (category.is_success && category.result.length !== 0) {
            catList.value = category.result;
            catList.value = catList.value.filter((a: any) => a.category_type === 'task');
            if (catList.value.length !== 0) {
              formatDropdown();
            }
          } else {
            catList.value = [];
          }
        }
      } catch (error) {
        catList.value = [];
      }
      loader.value = false;
    };

    // Common Format For Dropdown
    const formatDropdown = async () => {
      dropDownValue.value = Helper.commonFormatForDropdown(catList.value, 'category_title', 'category_id');
    };

    // On Before mount Function
    onBeforeMount(async () => {
      await listAssignee();
      await listCategory();
      loader.value = true;
      await listTask();
      loader.value = false;
      // Assigne List

      // Formate for dropdown list
      catList.value = catList.value.filter((a: any) => a.category_type === 'task');

      if (catList.value.length !== 0) {
        dropDownValue.value = Helper.commonFormatForDropdown(catList.value, 'category_title', 'category_id');
      }
    });

    // Close Form Data
    const closeForm = async (event: any = '') => {
      openAddForm.value = false;
      if (event !== '') {
        isToaster.value = true;
        if (event.apiStatus) {
          toasterInfo.value.success = true;
        } else {
          toasterInfo.value.success = false;
        }
        toasterInfo.value.msg = event.result;
        loader.value = true;
        await listTask();
        loader.value = false;
        setTimeout(async () => {
          isToaster.value = false;
        }, 2000);
      }
      console.log('taskFromId', taskFromId);
    };

    return {
      imgError,
      task,
      loader,
      currentPage,
      totalPages,
      meetingId,
      tabCode,
      categoryId,
      formData,
      openAddForm,
      initilizeForm,
      tabInfo,
      catList,
      closeForm,
      startDate,
      endDate,
      listAssignee,
      assigneeValue,
      listCategory,
      isPrimaryTab,
      assigneeList,
      toasterInfo,
      isToaster,
      listTask,
      taskFromId,
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

    // Open Form
    async openForm() {
      console.log('Add form');
      this.taskFromId += 1;
      this.tabInfo = {
        title: 'Add Task',
        endPoint: '/tasks',
        method: 'post',
        meeting: this.meetingId,
        from: 'task',
      };
      this.initilizeForm();
    },

    // Edit Form
    async editForm(rowValue: any) {
      console.log('edit form', rowValue);
      this.taskFromId += 1;
      this.tabInfo = {
        title: 'Edit Tasks',
        endPoint: '/tasks/' + rowValue.id,
        method: 'put',
        meeting: this.meetingId,
        from: 'edittask',
      };
      this.initilizeForm(rowValue);
    },

    dateFormat(date: any) {
      if (date) {
        return Helper.dateFormatWithOutTime(date);
      } else {
        return '---';
      }
    },
  },
});
