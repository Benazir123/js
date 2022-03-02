import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import { defineComponent, ref, onBeforeMount, defineAsyncComponent } from 'vue';
import VPagination from '@hennge/vue3-pagination';
import Helper from '@/globalFunctions/Helper';
import store from '@/store';

const addform = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/AddForm/AddForm.vue'));
export default defineComponent({
  name: 'NotesTabs',
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
  },
  data() {
    return {
      isOpennotes: false,
    };
  },
  setup(props) {
    const notes = ref([]) as any;
    const imgError = ref(1) as any;
    const loader = ref(false) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(0) as any;
    const meetingId = ref(props.meetingId) as any;
    const tabCode = ref(props.tabCode) as any;
    const openAddNotes = ref(false) as any;
    const categoryId = ref('') as any;
    const initNotes = ref([]) as any;
    const catList = ref([]) as any;
    const dropDownValue = ref([]) as any;
    const tabInfo = ref({}) as any;
    const toasterInfo = ref({}) as any;
    const isToaster = ref(false) as any;

    // List Notes Api
    const listNotes = async (page: any = '') => {
      try {
        let pagination = '';
        let catId = '';
        categoryId.value = store.state.notesCatId;
        if (categoryId.value) {
          catId = '&category_id=' + categoryId.value;
        }

        if (currentPage.value) {
          pagination = '?page=' + currentPage.value + '&limit=' + 10 + catId;
        }

        const param = meetingId.value + '/' + tabCode.value + pagination;
        const res = await ServiceEngagement.engTabList(param);
        if (res.is_success) {
          notes.value = res.result;
          totalPages.value = res.total_count ? res.total_count : 0;
        } else {
          notes.value = [];
        }
        console.log('dmRes', res);
      } catch (error) {
        notes.value = [];
      }
    };

    // Close Notes
    const cloeAddNotes = async (event: any = '') => {
      console.log('emit event', event);
      openAddNotes.value = false;
      if (event !== '') {
        isToaster.value = true;
        if (event.apiStatus) {
          toasterInfo.value.success = true;
        } else {
          toasterInfo.value.success = false;
        }
        toasterInfo.value.msg = event.result;
        loader.value = true;
        await listNotes();
        loader.value = false;
        setTimeout(async () => {
          isToaster.value = false;
        }, 2000);
      }
    };

    // Category List
    const listCategory = async () => {
      loader.value = true;
      try {
        if (catList && catList.value.length === 0) {
          const category = await ServiceEngagement.categoryList();
          if (category.is_success && category.result.length !== 0) {
            catList.value = category.result;
            // Filter Notes cate
            console.log('costlist', catList.value);
            catList.value = catList.value.filter((a: any) => a.category_type === 'notes');
            if (catList.value.length !== 0) {
              formatDropdown();
            }
            // Filter categoroy List
          } else {
            catList.value = [];
          }
        }
      } catch (error) {
        catList.value = [];
      }
      loader.value = false;
    };

    // On Before mount Function
    onBeforeMount(async () => {
      await listCategory();
      loader.value = true;
      await listNotes();
      loader.value = false;
    });

    // Common Format For Dropdown
    const formatDropdown = async () => {
      dropDownValue.value = Helper.commonFormatForDropdown(catList.value, 'category_title', 'category_id');
    };

    // Init Notes
    const initilizeNotes = async (value: any = '') => {
      await formatDropdown();
      initNotes.value = [
        {
          id: 0,
          label: 'Category Name',
          disable: false,
          param: 'category_id',
          type: 'dropdown',
          required: true,
          value: value ? value.category.id : categoryId.value,
          dropdownvalue: dropDownValue.value,
          errorMsg: 'Choose Category Name',
        },
        {
          id: 1,
          label: 'Description',
          disable: false,
          required: true,
          param: 'note_desc',
          type: 'textarea',
          value: value ? value.notes_description : '',
          errorMsg: 'Description field is Required',
        },
      ];
      openAddNotes.value = true;
    };

    return {
      imgError,
      notes,
      loader,
      currentPage,
      totalPages,
      meetingId,
      tabCode,
      openAddNotes,
      categoryId,
      initNotes,
      catList,
      dropDownValue,
      tabInfo,
      cloeAddNotes,
      initilizeNotes,
      formatDropdown,
      listCategory,
      toasterInfo,
      isToaster,
      listNotes,
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
    // OPen Collab meeting Section
    opennotdrawer() {
      this.isOpennotes = !this.isOpennotes;
    },
    // Alt Img Handling
    errorImg(data: any) {
      data.errorImg = true;
      this.imgError += 1;
    },

    async openForm() {
      console.log('Add form');
      this.tabInfo = {
        title: 'Add Notes',
        endPoint: '/notes',
        method: 'post',
        meeting: this.meetingId,
      };
      this.initilizeNotes();
    },

    async openEditNotes(rowValue: any) {
      console.log('edit form', rowValue);
      this.tabInfo = {
        title: 'Edit Notes',
        endPoint: '/notes/' + rowValue.id,
        method: 'put',
        meeting: this.meetingId,
      };
      this.initilizeNotes(rowValue);
    },

    dateFormat(date: any) {
      if (date) {
        return Helper.dateFormat(date);
      } else {
        return '---';
      }
    },
  },
});
