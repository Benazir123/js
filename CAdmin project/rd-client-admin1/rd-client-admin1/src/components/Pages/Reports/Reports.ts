import { defineComponent, ref, onBeforeMount } from 'vue';
import VPagination from '@hennge/vue3-pagination';
import router from '@/router';
import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import Helper from '@/globalFunctions/Helper';
import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'AttendeeReports',
  inheritAttrs: false,
  components: {
    VPagination,
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel,
  },
  data() {
    return {
      hideEngDetails: false,
      hidefilter: false,
      hidecolumns: false,
      expendedRowData: {},
      modelValue: '',
      openForm: false,
      openPreview: false,
      autoApply: '',
      imgErrorSpk: 1,
    };
  },

  methods: {
    dateFormate(rowData: any, columnValue: any) {
      // console.log("list dateFormate", columnValue);
      if (rowData) {
        if (columnValue === 'login_time') {
          return Helper.dateFormatCaps(rowData);
        } else if (columnValue === 'lastDownload') {
          return Helper.dateFormatCaps(rowData);
        } else if (columnValue === 'contractstartdate' || columnValue === 'contractenddate') {
          return Helper.dateStartWithMonth(rowData);
        } else if (columnValue === 'engagementDate') {
          return Helper.dateStartWithMonthAndCaps(rowData);
        } else {
          return rowData;
        }
      } else if (!rowData) {
        return '---';
      }
    },

    // check data
    bindData(data: any) {
      if (data) {
        return data;
      } else {
        return '---';
      }
    },

    getsurvey() {
      this.openForm = !this.openForm;
    },

    getPreview() {
      this.openPreview = !this.openPreview;
    },

    // Show/Hide Filter Function
    showfilter() {
      this.filterKey += 1;
      this.hidefilter = !this.hidefilter;
    },

    // Apply filter Count
    applyFilter(filterData: any) {
      console.log('filterData', filterData);
      this.currentPage = 1;
      if (filterData.type === 'apply') {
        filterData.array.forEach((applyvalue: any) => {
          if (applyvalue.chooseId && applyvalue.chooseId.length !== 0) {
            this.filterValue = applyvalue.chooseId[0];
          }
        });
      } else if (filterData.type === 'clear') {
        console.log('clearfilter');
        if (this.listReportTitle === 'Attendees Report') {
          this.filterValue = 'all';
        } else {
          this.filterValue = '';
        }
      }

      this.listReports(this.currentPage);
      this.hidefilter = false;
      console.log('Selected Filter array', this.filterValue);
    },

    // Show/Hide Filter Function
    showcolumns() {
      this.hidecolumns = !this.hidecolumns;
    },

    // Open More Attendee
    openMoreAttendee() {
      this.hidefilter = !this.hidefilter;
    },

    // DropDown Select value
    onChangeValue(dropdownData: any) {
      if (dropdownData && dropdownData.length !== 0) {
        console.log('field.type_for', dropdownData);
        this.dropdownSelectValue = dropdownData;
      }
      this.currentPage = 1;
      this.listReports(this.currentPage);
    },
  },

  setup(emit) {
    const totalPages = ref(0) as any;
    const currentPage = ref(1) as any;
    const reportNormalFilter = ref([]) as any;
    const filterKey = ref(0);
    const engagementList = ref([]) as any;
    const loader = ref(false) as any;
    const meetingTypeFilterArray = ref({}) as any;
    const filterCount = ref([]) as any;
    const primaryMeetingId = ref('') as any;
    const engDetailsTabRes = ref([]) as any;
    const expendedRow = ref([]) as any;
    const listReport = ref([]) as any;
    // const itemperpage = ref(10) as any;
    const listReportTitle = ref('') as any;
    const reportEndPoint = ref('') as any;
    const filterValue = ref('') as any;
    const toasterInfo = ref({}) as any;
    const isToaster = ref(false) as any;
    const startDate = ref('') as any;
    const endDate = ref('') as any;
    const route = useRoute();
    const DropdownFilters = ref([]) as any;
    const dropdownSelectValue = ref('') as any;

    // Init Filter
    const initFilter = async (filterData: any) => {
      // reportNormalFilter.value = [
      //   {
      //     id: "1",
      //     "filter-name": "attendeetypes",
      //     title: "Attendee Types",
      //     filterLabel: listReport.value.NormalFilters,
      //     chooseNames: [],
      //     isRadio: true,
      //     chooseId: [],
      //   },
      // ];
      // NormalFilters
      if (
        listReport.value.NormalFilters &&
        Array.isArray(listReport.value.NormalFilters) &&
        listReport.value.NormalFilters.length !== 0
      ) {
        for (let index = 0; index < listReport.value.NormalFilters.length; index++) {
          const element = listReport.value.NormalFilters[index];
          const obj = {
            id: index,
            'filter-name': element.label,
            title: element.label,
            filterLabel: element.child,
            chooseNames: [],
            isRadio: true,
            chooseId: [],
          };
          reportNormalFilter.value.push(obj);
        }
      }
      if (listReportTitle.value === 'ATTENDEE REPORT') {
        checkDefault(reportNormalFilter.value);
      }
      console.log('reportNormalFilter.value', reportNormalFilter.value);
    };

    // List Reports API call
    const listReports = async (page: any) => {
      loader.value = true;
      try {
        let pagination = '';
        let filterParam = '';

        // Apply Filter
        if (filterValue.value !== '') {
          filterParam = '&toUserType=' + filterValue.value;
        }

        // Date Filter
        let dateFilterParam = '';
        if (startDate.value !== '' && endDate.value !== '') {
          dateFilterParam = '&start_time=' + startDate.value + '&end_time=' + endDate.value;
        }

        // DropDown Filter
        let dropdownFilter = '';
        if (dropdownSelectValue.value !== '' && route.query.title === 'Attendee Survey Report') {
          dropdownFilter = '&engagementTypeId=' + dropdownSelectValue.value;
        }
        if (dropdownSelectValue.value !== '' && route.query.title === 'Master Speaker Report') {
          dropdownFilter = '&type=' + dropdownSelectValue.value;
        }

        pagination = '?page=' + page + '&limit=' + 10 + filterParam + dateFilterParam + dropdownFilter;
        const url = reportEndPoint.value + pagination;
        const list = await ServiceEngagement.commonEndpoint('get', url);
        // console.log('list', list);
        if (list.apiStatus) {
          const data = list.data;
          if (data) {
            // Filter show condition for row/column
            if (Array.isArray(data.columns) && data.columns.length !== 0) {
              data.columns = data.columns.filter((a: any) => a.show === true);
            }
            listReport.value = data;
            listReportTitle.value = data.title;
            if (data.isDropdownFilter && data.isDropdownFilter === true) {
              DropdownFilters.value = data.DropdownFilters;
            }
            totalPages.value = data.totalPages ? data.totalPages : 0;
          } else {
            listReport.value = [];
          }
        } else {
          listReport.value = [];
        }
        reportNormalFilter.value = [];
        initFilter('');
      } catch (error) {
        listReport.value = [];
      }
      loader.value = false;
    };

    const exportFunction = async () => {
      loader.value = true;
      // Apply Filter
      let filterParam = '';
      if (filterValue.value !== '') {
        filterParam = '&toUserType=' + filterValue.value;
      }
      if (filterValue.value !== '' && startDate.value === '' && endDate.value === '') {
        filterParam = '?toUserType=' + filterValue.value;
      }

      // Date Filter
      let dateFilterParam = '';
      if (startDate.value !== '' && endDate.value !== '') {
        dateFilterParam = '?start_time=' + startDate.value + '&end_time=' + endDate.value;
      }

      // DropDown Filter
      let dropdownData = '';
      if (dropdownSelectValue.value !== '' && route.query.title === 'Attendee Survey Report') {
        dropdownData = '?engagementTypeId=' + dropdownSelectValue.value;
      }
      if (dropdownSelectValue.value !== '' && route.query.title === 'Master Speaker Report') {
        dropdownData = '?type=' + dropdownSelectValue.value;
      }

      const url = listReport.value.exportApi + dateFilterParam + filterParam + dropdownData;
      const exportfile = await ServiceEngagement.commonEndpoint('get', url);
      if (exportfile.apiStatus) {
        const result = `${process.env.VUE_APP_API_URL}/${exportfile.result}`;
        const link = result;
        const exportElement = document.createElement('a');
        exportElement.href = link;
        exportElement.target = '_blank';
        exportElement.click();
      }
      loader.value = false;
    };

    // Default filter for Attendee Report
    const checkDefault = async (filterArray: any) => {
      console.log('checkDefault Filter', filterArray);
      if (filterArray && filterArray.length !== 0) {
        filterArray.forEach((filterObj: any) => {
          console.log('filterObj', filterObj);
          filterObj.chooseId.push(filterValue.value);
        });
      }
    };

    const generateFunction = async () => {
      loader.value = true;
      // DropDown Filter
      let dropdownFilter = '';
      if (dropdownSelectValue.value !== '' && route.query.title === 'Master Speaker Report') {
        dropdownFilter = '?type=' + dropdownSelectValue.value;
      }
      const url = listReport.value.generateApi + dropdownFilter;
      const generatefile = await ServiceEngagement.commonEndpoint('get', url);
      if (generatefile.apiStatus) {
        toasterInfo.value.success = true;
        isToaster.value = true;
        toasterInfo.value.msg = generatefile.result;
      } else {
        toasterInfo.value.msg = generatefile.result;
      }
      setTimeout(async () => {
        isToaster.value = false;
      }, 2500);
      loader.value = false;
      // console.log("LIST generatefile", generatefile);
    };

    // Apply Date filterconst
    const applyDateFilter = async (filterDate: any) => {
      if (filterDate.date && filterDate.date.length !== 0) {
        if (filterDate.date[0] === filterDate.date[1]) {
          const date = new Date(filterDate.date[1]);
          filterDate.date[1] = new Date(date.setDate(date.getDate() + 1));
        }
        if (filterDate.filter.value === 'Last 7 Days') {
          startDate.value = Helper.convertToUTC(filterDate.date[1]);
          endDate.value = Helper.convertToUTC(filterDate.date[0]);
        } else {
          startDate.value = Helper.convertToUTC(filterDate.date[0]);
          endDate.value = Helper.convertToUTC(filterDate.date[1]);
        }
        await listReports(currentPage.value);
      }
    };

    onBeforeMount(async () => {
      console.log('Report Title,', route.query.title);
      if (route.query.title === 'Attendee Report') {
        filterValue.value = 'all';
      }
      if (route.query.title === 'Attendee Survey Report') {
        dropdownSelectValue.value = '1';
      }
      if (route.query.title === 'Master Speaker Report') {
        dropdownSelectValue.value = 'full';
      }
      console.log('filterValue.value', filterValue.value);
      loader.value = true;
      reportEndPoint.value = localStorage.getItem('reportEndpoint');
      await listReports(currentPage.value);
      loader.value = false;
    });

    return {
      totalPages,
      currentPage,
      reportNormalFilter,
      filterKey,
      engagementList,
      loader,
      meetingTypeFilterArray,
      filterCount,
      primaryMeetingId,
      engDetailsTabRes,
      expendedRow,
      listReports,
      listReport,
      exportFunction,
      generateFunction,
      router,
      reportEndPoint,
      listReportTitle,
      initFilter,
      filterValue,
      toasterInfo,
      isToaster,
      applyDateFilter,
      checkDefault,
      startDate,
      endDate,
      useRoute,
      DropdownFilters,
      dropdownSelectValue,
    };
  },
});
