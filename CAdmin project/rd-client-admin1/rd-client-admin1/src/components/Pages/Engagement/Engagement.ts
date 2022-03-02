import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import { defineAsyncComponent, defineComponent, ref, onBeforeMount } from 'vue';
const EngagementInnerRow = defineAsyncComponent(() => import('../Engagement/EngagementInnerRow/EngagementInnerRow.vue'));
const Drawer = defineAsyncComponent(() => import('../Engagement/Drawer/Drawer.vue'));
import VPagination from '@hennge/vue3-pagination';
import moment from 'moment';
import Helper from '@/globalFunctions/Helper';
import store from '@/store';
const Profile = defineAsyncComponent(() => import('@/components/Pages/Profile/Profile.vue'));
import router from '@/router';

export default defineComponent({
  name: 'Engagement',
  inheritAttrs: false,
  components: {
    'engagement-inner-row': EngagementInnerRow,
    drawer: Drawer,
    VPagination,
    profile: Profile,
  },
  data() {
    return {
      hideEngDetails: false,
      hidefilter: false,
      togglefilter: false,
      downArrow: require('@/assets/uparrow.svg'),
      upArrow: require('@/assets/downarrow.svg'),
      isOpendrawer: false,
      searchByName: '',
      sortOrder: -1,
      expendedRowData: {},
      modelValue: '',
      isOpenUserProfiledrawer: false,
      hidespklist: false,
    };
  },

  methods: {
    //check data
    bindData(data: any) {
      if (data) {
        return data;
      } else {
        return '---';
      }
    },
    openMoreSpk(row: any, spkArray: any) {
      //this.hidespklist = !this.hidespklist;
      row.hidespklist = !row.hidespklist;
      this.moreSpeaker = spkArray;
    },
    //Show innerRow Function
    showInnerRow(id: never, data: any) {
      if (this.expendedRow.length > 0) {
        const index = this.expendedRow.indexOf(this.expendedRow[0]);
        console.log('index', index);
        if (index > -1) {
          this.expendedRow.splice(index, 1);
        }
        if (this.engagementList.find((eng_row: any) => eng_row.id != data.id && eng_row.isopen_inner_arrow == true)) {
          this.engagementList.find((eng_row: any) => eng_row.id != data.id && eng_row.isopen_inner_arrow == true)[
            'isopen_inner_arrow'
          ] = false;
        }
      }
      const index = this.expendedRow.indexOf(id);

      this.expendedRowData = data;
      if (index > -1) {
        this.expendedRow.splice(index, 1);
      } else {
        if (data.isopen_inner_arrow == false) {
          this.expendedRow.push(id);
        }
      }

      data.isopen_inner_arrow = !data.isopen_inner_arrow;
    },

    //Show/Hide Filter Function
    showfilter() {
      this.filterKey += 1;
      this.hidefilter = !this.hidefilter;
    },

    //Go to Details page
    async engdetailpage(currentData: any) {
      store.commit('detailStored', currentData);
      await this.engDetailsTab(currentData.id);
      console.log('engdata', store.state.engData);

      this.$router.push('/engagementdetails?id=' + currentData.id);
    },

    //OPen Collab meeting Section
    openColloborator(primaryId: any) {
      this.primaryMeetingId = primaryId;
      this.isOpendrawer = !this.isOpendrawer;
    },

    showUserProfile() {
      this.isOpenUserProfiledrawer = !this.isOpenUserProfiledrawer;
    },

    //Apply filter Count
    applyFilter(filterData: any) {
      console.log('filterData', filterData);
      this.filterCount = filterData.array.filter((a: any) => a.chooseId && a.chooseId.length != 0);
      Helper.setFilterData(this.filterCount);
      this.listParam['page'] = 1;
      this.currentPage = 1;
      if (filterData.type == 'apply') {
        this.productFilterArray = filterData.array.find(
          (name: any) => name['filter-name'] == 'product-list' && name.chooseId.length > 0,
        );
        this.meetingTypeFilterArray = filterData.array.find(
          (name: any) => name['filter-name'] == 'meeting-type-list' && name.chooseId.length > 0,
        );
        this.topicFilterArray = filterData.array.find(
          (name: any) => name['filter-name'] == 'topic-list' && name.chooseId.length > 0,
        );
        this.engTypeFilterArray = filterData.array.find(
          (name: any) => name['filter-name'] == 'engagement-type-list' && name.chooseId.length > 0,
        );
        this.engStatusFilterArray = filterData.array.find(
          (name: any) => name['filter-name'] == 'status-list' && name.chooseId.length > 0,
        );
      } else if (filterData.type == 'clear') {
        console.log('clearfilter');
        this.initFilter('');
        this.productFilterArray = [];
        this.meetingTypeFilterArray = [];
        this.topicFilterArray = [];
        this.engTypeFilterArray = [];
        this.engStatusFilterArray = [];
      }

      this.listEngagement('');
      this.hidefilter = false;
      console.log('this.filterCount', this.filterCount);
    },

    //Apply Date filter
    applyDateFilter(filterDate: any) {
      console.log('filterDate', filterDate);
      if (filterDate.date && filterDate.date.length != 0) {
        if (filterDate.date[0] == filterDate.date[1]) {
          const date = new Date(filterDate.date[1]);
          filterDate.date[1] = new Date(date.setDate(date.getDate() + 1));
          console.log('filterDate[1]', filterDate.date[1]);
        }
        if (filterDate.filter.value == 'Last 7 Days') {
          this.listParam['start_time'] = Helper.convertToUTC(filterDate.date[1]);
          this.listParam['end_time'] = Helper.convertToUTC(filterDate.date[0]);
        } else {
          this.listParam['start_time'] = Helper.convertToUTC(filterDate.date[0]);
          this.listParam['end_time'] = Helper.convertToUTC(filterDate.date[1]);
        }

        this.listEngagement('');
      }
    },

    //Alt Img Handling
    errorImg(data: any) {
      data['errorImg'] = true;
      this.imgErrorSpk += 1;
    },

    setDefaultSorting() {
      this.initSorting = {
        id: {
          sortName: 'id',
          sortOrter: -1,
        },
        topic: {
          sortName: 'topic',
          sortOrter: 1,
        },
        engtype: {
          sortName: 'engtype',
          sortOrter: 1,
        },
        eoname: {
          sortName: 'eoname',
          sortOrter: 1,
        },
        spkname: {
          sortName: 'spkname',
          sortOrter: 1,
        },
        meetingstatus: {
          sortName: 'meetingstatus',
          sortOrter: 1,
        },
      };
    },

    //Sorting Function
    sorting(event: any, key: any) {
      this.currentPage = 1;
      this.listParam['page'] = 1;
      //this.setDefaultSorting();
      //this.initSorting[key].sortOrter = event;
      if (event == -1) {
        //this.setDefaultSorting();
        this.initSorting[key].sortOrter = 1;
      } else {
        this.initSorting[key].sortOrter = -1;
      }
      console.log('sorting - event', event, key);
      this.listParam['field'] = key;
      if (event == -1) {
        this.listParam['order'] = 'ASC';
      } else {
        this.listParam['order'] = 'DESC';
      }
      this.listEngagement('');
    },

    spkStatusIcon(status: any) {
      if (status == 'Completed' || status == 'Accepted') {
        return require('@/assets/checkgreen.svg');
      } else if (status == 'Declined') {
        return require('@/assets/closered.svg');
      } else {
        return require('@/assets/exclamatorymark.svg');
      }
    },

    // Dateformate
    dateFormate(date: any) {
      return Helper.dateFormat(date);
    },
  },

  setup(emit) {
    const totalPages = ref(0) as any;
    const currentPage = ref(1) as any;
    const engFilter = ref([]) as any;
    const filterKey = ref(0);
    const engagementList = ref([]) as any;
    const collaborateIcon = require('@/assets/collaborateicon.svg');
    const foodicon = require('@/assets/foodicon.svg');
    const statusMarkforSpeker = require('@/assets/checkgreen.svg');
    const loader = ref(false) as any;
    const pagePerRow = ref(10) as any;
    const searchById = ref('') as any;
    const startTime = Helper.getCurrentYearDateFormat('start') as any;
    const endTime = Helper.getCurrentYearDateFormat('end') as any;
    const imgErrorSpk = ref(0) as any;
    const topicFilterArray = ref({}) as any;
    const meetingTypeFilterArray = ref({}) as any;
    const engTypeFilterArray = ref({}) as any;
    const engStatusFilterArray = ref({}) as any;
    const filterCount = ref([]) as any;
    const listParam = ref({}) as any;
    const searchByName = ref('') as any;
    const primaryMeetingId = ref('') as any;
    const initSorting = ref() as any;
    const engDetailsTabRes = ref([]) as any;
    const productFilterArray = ref([]) as any;
    const isDatePicker = ref(0) as any;
    const autoApply = ref(false) as any;
    const expendedRow = ref([]) as any;
    const moreSpeaker = ref([]) as any;
    const showPopup = ref(false) as any;
    const headingData = ref('') as any;
    const bodyData = ref('') as any;
    const url = ref('') as any;
    const isToaster = ref(false) as any;
    const toasterInfo = ref({}) as any;
    const submitted = ref(false) as any;
    //Init Filter
    const initFilter = async (filterData: any) => {
      engFilter.value = [
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
          isRadio: true,
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
      ];
      filterCount.value = engFilter.value.filter((a: any) => a.chooseId && a.chooseId.length != 0);
      if (filterData && filterData.length != 0) {
        filterData.forEach((localFilterValue: any) => {
          engFilter.value.forEach((initFilterValue: any) => {
            if (initFilterValue.id == localFilterValue.id) {
              initFilterValue.chooseId = localFilterValue.chooseId;
              initFilterValue.chooseNames = localFilterValue.chooseNames;
            }
          });
        });
        filterCount.value = engFilter.value.filter((a: any) => a.chooseId && a.chooseId.length != 0);
        productFilterArray.value = engFilter.value.find(
          (name: any) => name['filter-name'] == 'product-list' && name.chooseId.length > 0,
        );
        meetingTypeFilterArray.value = engFilter.value.find(
          (name: any) => name['filter-name'] == 'meeting-type-list' && name.chooseId.length > 0,
        );
        topicFilterArray.value = engFilter.value.find(
          (name: any) => name['filter-name'] == 'topic-list' && name.chooseId.length > 0,
        );
        engTypeFilterArray.value = engFilter.value.find(
          (name: any) => name['filter-name'] == 'engagement-type-list' && name.chooseId.length > 0,
        );
        engStatusFilterArray.value = engFilter.value.find(
          (name: any) => name['filter-name'] == 'status-list' && name.chooseId.length > 0,
        );
      }
    };

    listParam.value = {
      page: currentPage.value,
      limit: 10,
      start_time: startTime,
      end_time: endTime,
    };
    initSorting.value = {
      id: {
        sortName: 'id',
        sortOrter: 1,
      },
      topic: {
        sortName: 'topic',
        sortOrter: 1,
      },
      engtype: {
        sortName: 'engtype',
        sortOrter: 1,
      },
      eoname: {
        sortName: 'eoname',
        sortOrter: 1,
      },
      spkname: {
        sortName: 'spkname',
        sortOrter: 1,
      },
      meetingstatus: {
        sortName: 'meetingstatus',
        sortOrter: 1,
      },
    };

    //Set Default Collborat no
    const initTypeFilter = async (id: Number) => {
      console.log('id', id);
      switch (id) {
        case 1:
          listParam.value['collaboration'] = 'no';
          break;
        case 2:
          listParam.value['collaboration'] = 'yes';
          break;
      }
    };

    const cloeForm = async (event: any) => {
      if (event != '') {
        showPopup.value = false;
        isToaster.value = true;
        if (event.apiStatus) {
          toasterInfo.value['success'] = true;
        } else {
          toasterInfo.value['success'] = false;
        }
        if (event.message) {
          toasterInfo.value['msg'] = event.message;
        } else {
          toasterInfo.value['msg'] = event.result;
        }
        await listEngagement('');
        // loader.value = true;
        // loader.value = false;
        setTimeout(async () => {
          isToaster.value = false;
        }, 2000);
      }
    };

    //On Export  Function
    const exportFunction = async () => {
      listParam.value['csv'] = 'yes';
      listEngagement('');
      //
    };

    //On Before mount Function
    onBeforeMount(async () => {
      await listEngagement('');

      var filter = Helper.getFilterData();
      console.log('filter', filter);
      await initFilter(filter);
      await initTypeFilter(1);

      //Call Once menu item Empty
      var checkMenu = localStorage.getItem('engMenu');
      // if (!checkMenu) {
      //   await engDetailsTab();
      // }
    });

    //Clear Search
    const clearSearch = async (searchvalue: any) => {
      if (searchvalue == 'searchbyid') {
        searchById.value = '';
      } else if (searchvalue == 'searchByName') {
        searchByName.value = '';
      }
      listEngagement('');
    };

    // List Engagment API call
    const listEngagement = async (page: any) => {
      console.log('page', page);
      if (page) {
        listParam.value['page'] = page;
      }

      //Add filter param
      if (topicFilterArray.value && topicFilterArray.value.chooseId) {
        listParam.value['topic'] = topicFilterArray.value.chooseId;
      } else {
        delete listParam.value['topic'];
      }

      if (meetingTypeFilterArray.value && meetingTypeFilterArray.value.chooseId) {
        initTypeFilter(meetingTypeFilterArray.value.chooseId[0]);
      } else {
        listParam.value['collaboration'] = 'no';
      }
      if (engTypeFilterArray.value && engTypeFilterArray.value.chooseId) {
        listParam.value['engagementtype'] = engTypeFilterArray.value.chooseId;
      } else {
        delete listParam.value['engagementtype'];
      }
      if (engStatusFilterArray.value && engStatusFilterArray.value.chooseId) {
        listParam.value['meetingstatus'] = engStatusFilterArray.value.chooseNames;
      } else {
        delete listParam.value['meetingstatus'];
      }
      if (productFilterArray.value && productFilterArray.value.chooseId) {
        listParam.value['product'] = productFilterArray.value.chooseId;
      } else {
        delete listParam.value['product'];
      }

      //Add Search param
      if (searchById.value != '') {
        delete listParam.value['collaboration'];
        listParam.value['id'] = searchById.value;
      } else {
        delete listParam.value['id'];
      }

      if (searchByName.value != '') {
        listParam.value['search'] = searchByName.value;
      } else {
        delete listParam.value['search'];
      }

      console.log('englistparam', listParam.value);
      loader.value = true;
      try {
        var engRes;
        if (listParam.value['csv']) {
          await ServiceEngagement.engListExport(listParam.value);
          delete listParam.value['csv'];
        } else {
          engRes = await ServiceEngagement.engList(listParam.value);
          console.log('engRes', engRes);
          if (engRes.is_success) {
            if (engRes.result && engRes.result.length != 0) {
              engRes.result.forEach((data: any) => {
                if (data.eo_end_meeting) {
                  var isRevert = Helper.checkTimediff(data.eo_end_meeting);
                  data['is_revert'] = isRevert;
                  console.log('is_revert', isRevert);
                }
              });
            }
            engagementList.value = engRes.result;
            totalPages.value = engRes.total_count ? engRes.total_count : 0;
            pagePerRow.value = engRes.total_page ? engRes.total_page : 10;
            console.log(
              'current year',
              moment()
                .endOf('year')
                .format('MM/DD/YYYY'),
            );
            console.log('engagementList', engagementList.value);
          } else {
            engagementList.value = [];
          }
        }
      } catch (error) {
        engagementList.value = [];
      }
      loader.value = false;
      //isDatePicker.value = false;
    };

    //Engagment Details Tab Section
    const engDetailsTab = async (meetingId: any) => {
      var alernateResult = [
        {
          id: 1,
          code: 'details',
          img: require('@/assets/detailsactive.svg'),
          active_img: require('@/assets/detailsactive.svg'),
          eng_tab_title: 'Details',
          hidden: false,
        },
      ];
      try {
        var res = await ServiceEngagement.engDetailsTabList(meetingId);
        if (res.is_success) {
          engDetailsTabRes.value = res.result;
        } else {
          engDetailsTabRes.value = alernateResult;
        }
      } catch (error) {
        router.push('/engagementdetails?id=' + meetingId);
        engDetailsTabRes.value = alernateResult;
      }
      Helper.setEngMenu(engDetailsTabRes.value);
    };

    //Revert Button
    const clickRevert = async (row: any) => {
      showPopup.value = true;
      headingData.value = 'Revert';
      bodyData.value = 'Are you sure want to revert the meeting to Upcoming ?';
      url.value = '/engagements/' + row.id + '/status/revert';
    };

    const callApi = async () => {
      submitted.value = true;
      var postData = {
        password: 'developerMode',
      };
      var res = await ServiceEngagement.commonEndpoint('put', url.value, postData);
      submitted.value = false;
      cloeForm(res);
    };

    window.addEventListener('keypress', function(e: any) {
      if (e.key === 'Enter' && (searchByName.value != '' || searchById.value != '')) {
        listParam.value['page'] = 1;
        currentPage.value = 1;
        expendedRow.value = [];
        listEngagement('');
      }
    });

    return {
      totalPages,
      currentPage,
      engFilter,
      filterKey,
      listEngagement,
      engagementList,
      collaborateIcon,
      foodicon,
      statusMarkforSpeker,
      loader,
      searchById,
      pagePerRow,
      imgErrorSpk,
      topicFilterArray,
      meetingTypeFilterArray,
      engTypeFilterArray,
      engStatusFilterArray,
      filterCount,
      listParam,
      searchByName,
      clearSearch,
      primaryMeetingId,
      initFilter,
      initTypeFilter,
      initSorting,
      engDetailsTab,
      engDetailsTabRes,
      exportFunction,
      productFilterArray,
      isDatePicker,
      autoApply,
      expendedRow,
      moreSpeaker,
      showPopup,
      clickRevert,
      headingData,
      bodyData,
      callApi,
      url,
      isToaster,
      toasterInfo,
      cloeForm,
      submitted,
    };
  },
});
