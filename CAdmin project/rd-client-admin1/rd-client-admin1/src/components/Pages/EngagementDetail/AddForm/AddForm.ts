/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable vue/no-dupe-keys */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Helper from '@/globalFunctions/Helper';
import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import moment from 'moment';
import { defineComponent, ref, onBeforeMount, defineAsyncComponent } from 'vue';

const AddInnerForm = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/AddForm/AddInnerForm.vue'));

export default defineComponent({
  name: 'AddForm',
  emit: ['close-form'],
  inheritAttrs: false,
  props: {
    isOpen: {
      type: Boolean,
      defalut: false,
    },
    formData: {
      type: Array,
      default: [],
    },
    info: {
      type: Object,
      default: {},
    },
    isAddForm: {
      type: Boolean,
      default: true,
    },
    listPageParam: {
      default: '',
    },
    showAddIcon: {
      type: Boolean,
      default: true,
    },
    isAddButton: {
      type: Boolean,
      default: true,
    },
    emailForm: {
      type: Array,
      default: [],
    },
    isRemote: {
      default: [],
    },
  },
  components: {
    'inner-form': AddInnerForm,
  },
  data() {
    return {
      fileName: '',
      infoPopup: false,
      infoIcon: true,
      closesuccess: false,
      showforms: true,
    };
  },
  setup(props, { emit }) {
    const openForm = ref(props.isOpen) as any;
    const data = ref(props.formData) as any;
    const submitted = ref(false) as any;
    const postData = ref({}) as any;
    const info = ref(props.info) as any;
    const loader = ref(false) as any;
    const validationRes = ref({}) as any;
    const formatter = ref({
      date: 'YYYY-MM-DD',
      month: 'MMM',
    });
    const selectedFile = ref([]) as any;
    const isSubmitFormdata = ref(false) as any;
    const endDate = ref([]) as any;
    const showError = ref(false) as any;
    const errorMsg = ref('') as any;
    const isFromcost = ref(false) as any;
    const isAddForm = ref(props.isAddForm) as any;
    const totalPages = ref(0) as any;
    const list = ref([]) as any;
    const listPageLoader = ref(false) as any;
    const disabledScroll = ref(false);
    const searchByText = ref('') as any;
    const checkedData = ref([]) as any;
    const isValidEmail = ref(false) as any;
    const currentPage = ref(1) as any;
    const isFormEnable = ref(false) as any;
    const zipLoader = ref(false) as any;
    const isCloneEmp = ref(false) as any;
    const isCloneFullName = ref('') as any;
    const bottomLoader = ref(false) as any;
    const catererFormMsg = ref('') as any;
    const validPhone = ref(false) as any;
    const masterList = ref(0) as any;
    const masterListParam = ref('') as any;
    const imgError = ref(1) as any;
    const isRemote = ref(props.isRemote) as any;
    const updateHcpEmailId = ref('') as any;
    const hcpEmailUpdateForm = ref(false) as any;
    const isCloneEmpId = ref([]) as any;
    const attDegree = ref([]) as any;
    const attStates = ref([]) as any;
    const attSpeacilities = ref([]) as any;
    const callFirstTime = ref(true) as any;
    const validNpi = ref(false) as any;
    const validZip = ref(false) as any;
    const fuzzyRequired = ref(false) as any;
    const fuzzyMsg = ref('') as any;
    const fuzzyData = ref({}) as any;
    const fuzzyType = ref('') as any;
    const fuzzyLoader = ref(false) as any;
    const fuzzyDataId = ref('') as any;
    const isScrolled = ref(true) as any;
    const showInnerForm = ref(false) as any;
    const innerFormData = ref([]) as any;
    // Disbled Date
    const dDate = (date: any) => {
      if (info.value.from === 'task') {
        return date < new Date();
      }
    };

    // Disbled Date
    const setEndDate = (date: any) => {
      for (let index = 0; index < data.value.length; index++) {
        const element = data.value[index];
        if (info.value.from === 'task' && element.param === 'start_date') {
          endDate.value = element.value;
        } else if (info.value.from === 'edittask' && element.param === 'due_date') {
          endDate.value = element.value;
        }
      }
      if (endDate.value !== '') {
        return date < new Date(endDate.value);
      } else if (info.value.title === 'Add Task') {
        return date < new Date();
      }
    };
    console.log('formDATa', props.formData);

    // Get List data for Add list page
    const getListData = async (page: any = '') => {
      // listPageLoader.value = true;
      console.log('getListData');
      try {
        let pagination = '';
        if (page === '') {
          page = 1;
        }
        if (info.value.listpageparam) {
          if (searchByText.value !== '') {
            pagination =
              '?page=' +
              currentPage.value +
              '&limit=' +
              25 +
              '&search=' +
              searchByText.value +
              info.value.listpageparam +
              '&meeting_id=' +
              info.value.meeting;
          } else {
            pagination =
              '?page=' + currentPage.value + '&limit=' + 25 + info.value.listpageparam + '&meeting_id=' + info.value.meeting;
          }
        } else if (info.value.from === 'emp') {
          masterListParam.value = 'Employee';
          if (searchByText.value !== '') {
            pagination =
              '?page=' +
              currentPage.value +
              '&limit=' +
              25 +
              '&search=' +
              searchByText.value +
              '&master=' +
              masterList.value +
              '&meeting_id=' +
              info.value.meeting;
          } else {
            pagination =
              '?page=' +
              currentPage.value +
              '&limit=' +
              25 +
              '&meeting_id=' +
              info.value.meeting +
              '&master=' +
              masterList.value;
          }
          //
        } else {
          if (searchByText.value !== '') {
            pagination =
              '?page=' +
              currentPage.value +
              '&limit=' +
              25 +
              '&search=' +
              searchByText.value +
              '&meeting_id=' +
              info.value.meeting;
          } else {
            pagination = '?page=' + currentPage.value + '&limit=' + 25 + '&meeting_id=' + info.value.meeting;
          }
        }
        let param: any;
        if (info.value.from === 'hcp') {
          masterListParam.value = "HCP's";
          param = info.value.listPageEndPoint;
          info.value.listpageparam.page = currentPage.value;
          info.value.listpageparam.all_hcp = masterList.value;
          if (searchByText.value !== '') {
            info.value.listpageparam.search = searchByText.value;
          } else {
            delete info.value.listpageparam.search;
          }
          const res = await ServiceEngagement.commonEngPoint(info.value.listPageMethod, param, info.value.listpageparam);
          if (res.result && res.result.length !== 0) {
            res.result = res.result.filter((a: any) => a.firstName !== '');
          }
          console.log('res.result', res.result);
        } else {
          param = info.value.listPageEndPoint + pagination;

          var res = await ServiceEngagement.commonEngPoint(info.value.listPageMethod, param);
        }

        if (res.is_success) {
          let listArray = [];
          listArray = res.result;
          list.value = [...list.value, ...listArray];
          list.value.sort();
          totalPages.value = res.total_page;
          isScrolled.value = true;
          console.log('list.value', list.value.length);
        } else {
          // list.value = [];
        }
        console.log('Response', res);
        console.log('totalPages.value', totalPages.value);
      } catch (error) {
        list.value = [];
      }
      bottomLoader.value = false;
      // listPageLoader.value = false;
    };

    const handleScroll = async (el: any) => {
      if (el.srcElement.offsetHeight + el.srcElement.scrollTop >= el.srcElement.scrollHeight - 10) {
        console.log(totalPages.value, '!= ', list.value.length);
        console.log('list.value.length ', list.value.length);
        console.log('totalPages.value ', totalPages.value);
        console.log('isScrolled.value ', isScrolled.value);
        // isScrolled.value = true;
        if (totalPages.value && totalPages.value !== list.value.length && isScrolled.value === true) {
          isScrolled.value = false;
          bottomLoader.value = true;
          currentPage.value += 1;
          await getListData();
        }
      }
    };

    const getCheckedData = async (row: any, ischecked: any, event: any) => {
      // this.info.from == "cost"
      if (info.value.from === 'caterer') {
        if (ischecked) {
          selectOnly(row.id);
          checkedData.value = row.id;
        } else {
          checkedData.value = [];
        }
      } else if (info.value.from === 'hcp') {
        if (ischecked) {
          console.log('--IsRemote--', isRemote.value);

          if (isRemote.value === 1) {
            showInnerForm.value = true;
            // isAddForm.value = true;
            isFormEnable.value = true;

            innerFormData.value = props.emailForm;
            if (innerFormData.value && innerFormData.value.length !== 0) {
              for (let index = 0; index < innerFormData.value.length; index++) {
                const element = innerFormData.value[index];
                if (row.email && element.param === 'email') {
                  element.value = row.email;
                } else if (row.telephone && element.param === 'telephone') {
                  element.value = row.telephone;
                }
              }
            }
            // data.value = props.emailForm;
            updateHcpEmailId.value = row.id;
            checkedData.value.push(row.id);
            hcpEmailUpdateForm.value = true;
          } else {
            info.value.endPoint = info.value.listPageAddEndPoint;
            checkedData.value.push(row.id);
          }
        } else {
          checkedData.value.splice(checkedData.value.indexOf(row.id), 1);
        }
      } else {
        if (ischecked) {
          // Check clone Employee
          if (info.value.from === 'emp' && row.engagement_access === 'Yes' && row.isCloned === 0 && masterList.value === 1) {
            isCloneEmp.value = true;
            isCloneFullName.value = row.full_name;
          }
          checkedData.value.push(row.id);
        } else {
          checkedData.value.splice(checkedData.value.indexOf(row.id), 1);
        }
      }

      console.log(checkedData.value);
    };

    const selectOnly = async (id: any) => {
      for (let index = 0; index < list.value.length; index++) {
        const element = list.value[index];
        const unselectedId = document.getElementById(element.id) as any;
        if (unselectedId) {
          unselectedId.checked = false;
        }
      }

      const getId = document.getElementById(id) as any;
      getId.checked = true;
    };

    // On Before mount Function
    onBeforeMount(async () => {
      console.log('isAddForm.value', isAddForm.value);
      if (!isAddForm.value) {
        listPageLoader.value = true;
        await getListData();
        listPageLoader.value = false;
      }
    });

    const gotoForm = async () => {
      checkedData.value = [];
      if (data.value && data.value.length !== 0) {
        for (let index = 0; index < data.value.length; index++) {
          const element = data.value[index];
          element.value = '';
        }
      }
      isFormEnable.value = true;
      isAddForm.value = !isAddForm.value;
      if (info.value.from === 'hcp' && callFirstTime.value === true) {
        callFirstTime.value = false;
        await getInfoForAttendee();
      }
    };

    // Get Degree, Speciality,State of License
    const getInfoForAttendee = async () => {
      // Common Format Dropdown list
      attDegree.value = await ServiceEngagement.getDegree();
      attDegree.value = await Helper.commonFormatForDropdown(attDegree.value.data, 'name');

      attSpeacilities.value = await ServiceEngagement.getSpecialities();
      attSpeacilities.value = await Helper.commonFormatForDropdown(attSpeacilities.value.data, 'name');

      attStates.value = await ServiceEngagement.getStats();
      attStates.value = await Helper.commonFormatForDropdown(attStates.value.data, 'name');

      if (data.value && data.value.length !== 0) {
        for (let index = 0; index < data.value.length; index++) {
          const element = data.value[index];

          if (element.label === 'Degree') {
            element.dropdownvalue = attDegree.value;
          }

          if (element.label === 'Specialty') {
            element.dropdownvalue = attSpeacilities.value;
          }

          if (element.label === 'State of License') {
            element.dropdownvalue = attStates.value;
          }
        }
      }
    };

    const backtoList = async () => {
      isFormEnable.value = false;
      isAddForm.value = !isAddForm.value;
    };

    // Clear Search
    const clearSearch = async () => {
      searchByText.value = '';
      currentPage.value = 1;
      list.value = [];
      listPageLoader.value = true;
      await getListData();
      listPageLoader.value = false;
    };

    window.addEventListener('keypress', async function(e: any) {
      if (e.key === 'Enter' && searchByText.value !== '') {
        list.value = [];
        currentPage.value = 1;
        listPageLoader.value = true;
        await getListData();
        listPageLoader.value = false;
      }
    });

    return {
      openForm,
      data,
      submitted,
      postData,
      info,
      formatter,
      dDate,
      loader,
      validationRes,
      selectedFile,
      isSubmitFormdata,
      setEndDate,
      endDate,
      showError,
      errorMsg,
      isFromcost,
      isAddForm,
      getListData,
      totalPages,
      list,
      listPageLoader,
      handleScroll,
      disabledScroll,
      gotoForm,
      searchByText,
      clearSearch,
      getCheckedData,
      checkedData,
      isValidEmail,
      currentPage,
      isFormEnable,
      backtoList,
      zipLoader,
      selectOnly,
      isCloneEmp,
      isCloneFullName,
      bottomLoader,
      catererFormMsg,
      validPhone,
      masterList,
      masterListParam,
      imgError,
      isRemote,
      updateHcpEmailId,
      hcpEmailUpdateForm,
      isCloneEmpId,
      getInfoForAttendee,
      attDegree,
      attStates,
      attSpeacilities,
      callFirstTime,
      validNpi,
      validZip,
      fuzzyRequired,
      fuzzyMsg,
      fuzzyData,
      fuzzyType,
      fuzzyLoader,
      fuzzyDataId,
      isScrolled,
      showInnerForm,
      innerFormData,
    };
  },
  methods: {
    // Alt Img Handling
    errorImg(data: any) {
      data.errorImg = true;
      this.imgError += 1;
    },
    showdetail() {
      this.showforms = false;
    },
    // Close Clone EMP
    closeEmp(isfrom: any) {
      this.isCloneEmp = false;

      if (isfrom !== 'yes') {
        this.checkedData.splice(-1);
      } else {
        const empId = this.checkedData[this.checkedData.length - 1];
        console.log('empId', empId);
        this.cloneEmp(empId);
      }
    },

    showInfo(row: any) {
      row.showInfo = true;
    },
    closeInfoPopup(row: any) {
      delete row.showInfo;
    },
    closeForm(value: any = '', from: any = '') {
      console.log('cloe form', value);
      if (from !== '') {
        this.isFromcost = true;
      }
      if (value) {
        if (value.apiStatus === false) {
          this.showError = true;
          this.submitted = false;
          this.loader = false;
          this.errorMsg = value.error.message;
        } else if (value && value.data && value.data.apiStatus === false) {
          this.showError = true;
          this.submitted = false;
          this.loader = false;
          this.errorMsg = value.data.error.message;
        } else {
          this.openForm = false;
          this.callFirstTime = false;
          this.$emit('close-form', value);
        }
      } else {
        this.callFirstTime = false;
        this.$emit('close-form', value);
      }
    },

    closeEmailForm(event: any) {
      this.showInnerForm = false;
      console.log('closeEmailForm', event);
      if (event) {
        if (event.apiStatus) {
          this.catererFormMsg = event.message ? event.message : '';
          this.list.forEach((listvalue: any) => {
            if (listvalue.id === event.data.id) {
              listvalue.email = event.data.email;
            }
          });
          console.log('this.catererFormMsg', this.catererFormMsg);
          setTimeout(async () => {
            this.catererFormMsg = '';
          }, 2000);
        } else {
          this.closeForm(event);
        }
      } else {
        for (let index = 0; index < this.innerFormData.length; index++) {
          const element = this.innerFormData[index];
          element.value = '';
        }
        this.checkedData.splice(this.checkedData.indexOf(this.updateHcpEmailId), 1);
      }
      this.submitted = false;
    },

    onChangeValue(field: any) {
      console.log('field.type_for', field);

      let expensiveTypeId: any = '';
      let payeeObj: any = '';
      if (this.data && this.data.length !== 0) {
        if (this.info.from === 'cost' || this.info.from === 'cancel') {
          var getRow = field.dropdownvalue.find((a: any) => a.id === field.value) as any;
        }
        for (let index = 0; index < this.data.length; index++) {
          const element = this.data[index];
          // Cost Section Expensive type dropdown handle
          if (this.info.from === 'cost' && field.param === 'expense_type_id') {
            console.log('getRow', getRow);

            // Cost section Estimated AMT handle
            if (element.param === 'estimated_cost' && getRow) {
              if (getRow.planned_cost !== 0) {
                element.value = getRow.planned_cost.toString();
              } else {
                element.value = getRow.estimated_cost.toString();
              }
              element.delteEstimated = getRow.estimated_cost.toString();
              // element['estimatedvalue'] =  getRow.estimated_cost.toString()
            }

            if (element.param === 'type_for' && getRow) {
              element.value = getRow.type_for;
            }

            if (element.param === 'expense_type_id') {
              expensiveTypeId = element.value;
            }
            if (element.param === 'payee') {
              payeeObj = element;
            }

            if (element.param === 'check_number' && getRow && getRow.is_cheque_enabled === 1) {
              element.hidden = false;
            } else if (element.param === 'check_number' && getRow && getRow.is_cheque_enabled === 0) {
              element.hidden = true;
            }
          }

          // Cancel Reason
          if (this.info.from === 'cancel' && element.param === 'cancel_reason') {
            // console.log('this.info.from',getRow);
            if (getRow.is_text === 1) {
              element.hidden = false;
              element.required = true;
              element.value = '';
            } else {
              element.hidden = true;
            }
            console.log('this.data', this.data);
          }
        }
        // Call Payee
        if (this.info.from === 'cost' && field.param === 'expense_type_id') {
          console.log('expensiveTypeId', expensiveTypeId);
          this.payeeName(expensiveTypeId, this.info.meeting, payeeObj);
        }
      }
      console.log('this.data', this.data);
    },

    async submitForm() {
      if (this.isAddForm === true) {
        this.submitFormData();
      } else {
        this.submitListData();
      }
    },

    async submitFormData() {
      this.submitted = true;
      this.validationRes = [];
      const postFormData = new FormData();
      let headerRequest = '';

      // ADD param to Post Data
      for (let index = 0; index < this.data.length; index++) {
        const element = this.data[index];
        // handle FormData
        if (this.isSubmitFormdata && this.info.from !== 'cost') {
          headerRequest = 'multipart/form-data';
          if (element.type !== 'fileupload') {
            postFormData.append(element.param, element.value);
          } else {
            postFormData.append(element.param, this.selectedFile);
          }
          // Edit document handle
          if (this.info.from === 'editdocument' && element.type === 'fileupload') {
            postFormData.append('document_file', element.file);
          }
        } else {
          headerRequest = 'application/json';
          if (!element.hidden && element.type !== 'fileupload') {
            if (element.type === 'datepicker' && element.value !== '') {
              this.postData[element.param] = moment(element.value).format('YYYY-MM-DD');
            } else {
              if (this.info.from === 'hcp' && element.param === 'degree') {
                this.postData.degree = [];
                this.postData.degree.push(element.value);
                this.postData.type = 'hcp';
              } else {
                this.postData[element.param] = element.value;
              }
            }
            // Check validation for Required field

            if (this.info.from === 'cost') {
              this.postData.sunshine_event = 'A19-0004';
              console.log('delteEstimated', element);
              if (this.info.currentTab !== 1) {
                this.postData.estimated_cost = element.delteEstimated;
              }
            }
            // 'sunshine_event': 'A19-0004',
          }
          if (this.info.from === 'editdocument' && element.type === 'fileupload') {
            this.postData.document_file = element.file;
          }
        }

        if (element.required === true) {
          this.validationRes[element.param] = element.value;
        }
      }
      if (this.info.from !== 'caterer') {
        postFormData.append('meeting', this.info.meeting);
      }

      // Filter Empty value for validation
      console.log('postdata', this.postData);
      const validationResult = Object.values(this.validationRes).filter(o => o === '');

      // Check validation Function
      console.log(validationResult);
      console.log('this.validationRes', this.validationRes);
      console.log('formdata', this.data);

      if (validationResult.length !== 0) {
        console.log('validatoion error');
      } else {
        // Check Email validation
        console.log('this.isValidEmail', this.isValidEmail);
        console.log('this.validPhone', this.validPhone);
        if (this.isValidEmail || this.validPhone) {
          return true;
        }

        console.log('this.info.from', this.info);

        if (this.info.from !== 'caterer' && this.info.from !== 'cancel') {
          this.postData.meeting = this.info.meeting;
        }
        // Customise form section
        // Handle for Notes tab
        this.loader = true;
        if (this.info.endPoint === '/notes') {
          this.postData.updated_from = 'web';
        }
        // Cost tabl section

        if (this.info && this.info.from === 'cost') {
          this.postData.status = this.info.status;
        }
        console.log('this.info.from', this.info.from);
        console.log('this.postData', this.postData);

        let res: any;

        if (this.info.from === 'cancel') {
          this.$emit('close-form', this.postData);
          return true;
        }

        if (this.info.from === 'hcp' && !this.hcpEmailUpdateForm) {
          this.postData.brand = this.info.brand;
          this.postData.product = this.info.product;
        }

        // Update HCP EMAIL Form Condition
        if (this.info.from === 'hcp' && this.hcpEmailUpdateForm) {
          const postData = {} as any;
          // postData[this.info.addParam] = this.checkedData;
          for (let index = 0; index < this.data.length; index++) {
            const element = this.data[index];
            if (element.param === 'telephone') {
              parseInt(element.value);
            }
            if (element.param === 'degree') {
              postData.degree = [];
              postData.degree.push(element.value);
            }
            postData[element.param] = element.value;
          }
          postData.id = this.updateHcpEmailId;
          postData.force_update = 1;
          postData.profile_update = 1;
          postData.brand = this.info.brand;
          postData.product = this.info.product;
          postData.type = 'hcp';
          console.log('this.info', this.info);

          res = await ServiceEngagement.addForm(this.info, postData, headerRequest);
          this.backtoList();
          this.submitted = false;
          this.catererFormMsg = res.message ? res.message : '';
          this.checkedData.push(res.data && res.data.id);
        } else {
          if (this.isSubmitFormdata && this.info.from !== 'cost') {
            // var fromData = {
            //   hcp :
            // }
            res = await ServiceEngagement.addForm(this.info, postFormData, headerRequest);
            console.log('submitform', this.info.from);
            this.closeForm(res);
          } else {
            res = await ServiceEngagement.addForm(this.info, this.postData, headerRequest);
            if (this.selectedFile && this.selectedFile.length !== 0 && this.info.from === 'cost') {
              await this.costReceipt(res);
            } else if (
              (this.info.from === 'caterer' || this.info.from === 'emp' || this.info.from === 'hcp') &&
              res.apiStatus
            ) {
              this.list = [];
              this.searchByText = res.data && this.info.from === 'caterer' ? res.data.caterer_name : res.data.fullName;
              this.checkedData.push(res.data && res.data.id);
              this.loader = false;
              this.backtoList();
              this.listPageLoader = true;
              this.submitted = false;
              await this.getListData();
              this.listPageLoader = false;
              this.catererFormMsg = res.message ? res.message : '';
              console.log('this.catererFormMsg', this.catererFormMsg);
              setTimeout(async () => {
                this.catererFormMsg = '';
              }, 2000);
            } else {
              this.closeForm(res);
            }
          }
        }
      }
    },

    async submitListData() {
      if (this.checkedData.length !== 0) {
        this.loader = true;
        const postData = {} as any;
        if (this.info.from !== 'speaker' && this.info.from !== 'emp' && this.info.from !== 'hcp') {
          postData.meeting = this.info.meeting;
        }
        console.log('this.masterList', this.masterList);
        console.log('this.masterList', this.isCloneEmpId);
        if (this.info.from === 'emp' && this.masterList === 1) {
          for (let index = 0; index < this.isCloneEmpId.length; index++) {
            const element = this.isCloneEmpId[index];
            if (element) {
              this.checkedData = this.checkedData.filter((a: any) => a !== element);
            }
          }
        }
        if (this.info.from === 'hcp') {
          const tempArray: any = [];
          this.checkedData.forEach((data: any) => {
            let obj: any = {};
            obj = {
              hcp: data,
            };
            // location : ''
            tempArray.push(obj);
          });
          this.checkedData = [];
          this.checkedData = tempArray;
          console.log('postData', this.checkedData);
          console.log('tempArray', tempArray);
        }
        postData[this.info.addParam] = this.checkedData;

        console.log('postData', postData);
        const res = await ServiceEngagement.commonEndpoint(
          this.info.listPageAddMethod,
          this.info.listPageAddEndPoint,
          postData,
        );
        this.closeForm(res);
      }
    },

    // File event
    uploadFile(files: any, row: any) {
      this.isSubmitFormdata = true;
      this.selectedFile = files[0];
      this.fileName = files[0].name;
      console.log('this.selectedFile', this.selectedFile);
    },

    // OpenLink
    openClick(file: any) {
      if (file) {
        const url = file;
        const exportElement = document.createElement('a');
        exportElement.href = url;
        exportElement.target = '_blank';
        exportElement.click();
      }
    },

    // Get Payee Name for Cost section
    async payeeName(id: any, meeting: any, formObj: any) {
      const param = '?expense_type_id=' + id + '&meeting_id=' + meeting;
      const res = await ServiceEngagement.payeeName(param);
      console.log('res', res);
      if (res && res.apiStatus && res.data && res.data.length !== 0) {
        formObj.hidden = false;
        formObj.required = true;
        console.log('res.data[0].length', res.data.length);
        if (res.data[0] && res.data.length >= 2) {
          formObj.type = 'dropdown';
          const arr = [];
          for (let i = 0; i < res.data.length; i++) {
            arr.push({
              id: i + 1,
              label: res.data[i],
            });
          }
          console.log('payee', arr);
          formObj.dropdownvalue = arr;
          formObj.disable = false;
        } else {
          formObj.type = 'text';
          formObj.value = res.data[0];
          if (formObj.value === '3rd Party') {
            formObj.disable = false;
          } else {
            formObj.disable = true;
          }
        }
      } else {
        formObj.hidden = true;
        formObj.required = false;
      }
    },

    // Get Employee Clone
    async cloneEmp(id: any) {
      const param = '/employees/clone';
      const postData = {
        employeeId: id,
      };
      this.isCloneEmpId.push(id);
      const res = await ServiceEngagement.commonEndpoint('post', param, postData);
      console.log('cloneemp', res);
      this.closesuccess = false;
      if (res.apiStatus) {
        this.checkedData.push(res.data.id);
        this.catererFormMsg = res.message;
        setTimeout(async () => {
          this.catererFormMsg = '';
        }, 2000);
      } else {
        this.closeForm(res);
      }

      console.log('this.catererFormMsg', this.catererFormMsg);
    },

    // Add Cost Recepit
    async costReceipt(res: any) {
      if (res.apiStatus && res.data) {
        const costId = res.data.id;
        const postFormData = new FormData();
        postFormData.append('cost_id', costId);
        postFormData.append('files', this.selectedFile);

        const headerRequest = 'multipart/form-data';
        const response = await ServiceEngagement.addCostReceipt(this.info, postFormData, headerRequest);
        this.closeForm(response, 'cost');
      }
    },

    required(required: boolean) {
      if (required) {
        return '*';
      } else {
        return '';
      }
    },

    async blurEvent(event: any, currentRow: any) {
      console.log('currentRow', currentRow.param);
      if (currentRow.paramvalue === 'zipcode' && currentRow.value.toString().length === 5) {
        this.zipLoader = true;
        const url = 'zip_codes?zip_code=' + currentRow.value;
        const res = await ServiceEngagement.commonEndpoint('get', url);
        this.zipLoader = false;
        if (res.apiStatus) {
          for (let index = 0; index < this.data.length; index++) {
            const element = this.data[index];
            if (element.param === 'city') {
              element.value = res.city;
            }
            if (element.param === 'state') {
              element.value = res.state;
            }
          }
        } else {
          this.closeForm(res);
        }
        console.log('zipcodeResponse', res);
      }
      if (
        (currentRow.label === 'NPI Number' && currentRow.value.toString().length === 10) ||
        (currentRow.label === 'State License Number' && currentRow.value !== '')
      ) {
        this.fuzzyLoader = true;
        await this.fuzzyMatch(currentRow);
        this.fuzzyLoader = false;
      }
    },

    // Check fuzzy match function for Attendee section
    async fuzzyMatch(row: any) {
      this.fuzzyType = row.param as any;
      const postData = {
        type: this.fuzzyType,
        meeting: this.info.meeting,
      } as any;
      postData[this.fuzzyType] = row.value;
      console.log('fuzzyMatch', postData);

      const url = '/check_npi';
      const res = await ServiceEngagement.commonEndpoint('post', url, postData);
      if (res.apiStatus && res.data && res.data.is_exist && res.data.user) {
        this.fuzzyRequired = true;
        this.fuzzyMsg = res.data.popupMessage;
        this.fuzzyData = res.data.user;
      } else if (!res.apiStatus) {
        this.closeForm(res);
      }
      console.log('fuzzyMatch', res);
    },

    // check HCP is Availabled
    async checkHcpAvailable() {
      const postData = {
        user: this.fuzzyDataId,
        meeting_id: this.info.meeting,
      } as any;
      const url = '/attendee/check';
      const res = await ServiceEngagement.commonEndpoint('post', url, postData);
      return res;
    },

    // Bind Fuzzy Data
    async bindFuzzyData(clickResponse: any) {
      console.log('clickResponse', clickResponse);
      this.fuzzyRequired = false;
      for (const [key, value] of Object.entries(this.fuzzyData)) {
        for (let index = 0; index < this.data.length; index++) {
          const element = this.data[index];
          if (clickResponse === true) {
            if (key === 'id') {
              this.fuzzyDataId = value;
              console.log('this.fuzzyDataId', this.fuzzyDataId);
            }
            if (element.param === key && value) {
              element.value = value;
            }
          } else if (clickResponse === false) {
            if (element.param === 'npi') {
              element.value = '';
            }
          } else {
            element.value = '';
          }
        }
      }

      if (clickResponse === true) {
        const hcpAvailableData = await this.checkHcpAvailable();
        if (hcpAvailableData.apiStatus && hcpAvailableData.message.engagement_access !== 'Yes') {
          this.showError = true;
          this.errorMsg = hcpAvailableData.message.pop_msg;
        } else {
          // this.closeForm(hcpAvailableData);
          this.submitFormData();
        }
      }
    },

    // Add Validation for zip and email
    checkValidation(currentRow: any) {
      if (currentRow.label === 'Zipcode') {
        document.getElementsByName(currentRow.param)[0].setAttribute('maxLength', '5');
        const zip = document.getElementById(currentRow.param) as any;
        const scope = this;
        zip.addEventListener('input', function(e: any) {
          const x = e.target.value.replace(/\D/g, '');
          if (e.target.value.length === 5) {
            scope.validZip = false;
          } else {
            scope.validZip = true;
          }
        });
      }

      if (currentRow.label === 'NPI Number') {
        document.getElementsByName(currentRow.param)[0].setAttribute('maxLength', '10');
        const npi = document.getElementById(currentRow.param) as any;
        const scope = this;
        npi.addEventListener('input', function(e: any) {
          const x = e.target.value.replace(/\D/g, '');
          if (x !== '' && x.charAt(0) !== '1') {
            e.target.value = '';
          } else {
            if (e.target.value.length === 10) {
              scope.validNpi = false;
            } else {
              scope.validNpi = true;
            }
          }
        });
      }
      if (currentRow.label === 'State License Number') {
        document.getElementsByName(currentRow.param)[0].setAttribute('maxLength', '15');
      }

      if (currentRow.label === 'Phone' || currentRow.label === 'Telephone') {
        document.getElementsByName(currentRow.param)[0].setAttribute('maxLength', '12');
        const phone = document.getElementById(currentRow.param) as any;
        const scope = this;
        phone.addEventListener('input', function(e: any) {
          let x = e.target.value.replace(/\D/g, '');
          x = x.match(/(\d{3})(\d{3})(\d{4})/);
          if (x && e.target.value.length <= 12) {
            e.target.value = x[1] + '-' + +x[2] + '-' + x[3];
          }
          if (e.target.value.length === 12) {
            scope.validPhone = false;
          } else {
            scope.validPhone = true;
          }
        });
      }
      if (currentRow.param === 'email') {
        const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(currentRow.value);
        if (!regexMatch) {
          this.isValidEmail = true;
        } else {
          this.isValidEmail = false;
        }
      }
      if (currentRow.delteEstimated) {
        delete currentRow.delteEstimated;
      }
    },

    // Function for number only
    isNumber(event: any, row: any) {
      if (row.inputtype === 'number') {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          return event.preventDefault();
        }
      }
    },

    async changeToggle(event: any) {
      console.log('event', event);
      this.currentPage = 1;
      // this.checkedData = [];
      if (event === true) {
        this.masterList = 1;
      } else {
        this.masterList = 0;
      }
      this.list = [];
      this.listPageLoader = true;
      await this.getListData();
      this.listPageLoader = false;
    },

    async closeInnerForm() {
      this.showInnerForm = false;
    },
  },
});
