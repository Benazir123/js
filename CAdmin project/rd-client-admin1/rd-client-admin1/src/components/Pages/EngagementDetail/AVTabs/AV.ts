/* eslint-disable vue/no-dupe-keys */
import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import { defineComponent, ref, onBeforeMount, defineAsyncComponent } from 'vue';
import VPagination from '@hennge/vue3-pagination';
import Helper from '@/globalFunctions/Helper';
const Notes = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/NotesTabs/Notes.vue'));
const TabHeading = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/TabHeading/TabHeading.vue'));
const Task = defineAsyncComponent(() => import('@/components/Pages/EngagementDetail/TaskTabs/Task.vue'));
const InnerTabHeading = defineAsyncComponent(() =>
  import('@/components/Pages/EngagementDetail/InnerTabHeading/InnerTabHeading.vue'),
);
export default defineComponent({
  name: 'AV',
  inheritAttrs: false,
  components: {
    VPagination,
    'notes-page': Notes,
    'task-page': Task,
    'tab-heading': TabHeading,
    'inner-tab-heading': InnerTabHeading,
  },
  props: {
    meetingId: {
      default: '',
    },
    tabCode: {
      default: '',
    },
    innertabCode: {
      default: '',
    },
    ismultiLocation: {
      default: false,
    },
    location: {
      default: false,
    },
  },
  setup(props) {
    const collobaration = ref([]) as any;
    const loader = ref(false) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(0) as any;
    const meetingId = ref(props.meetingId) as any;
    const tabCode = ref(props.tabCode) as any;
    const innertabCode = ref(props.innertabCode) as any;
    const imgError = ref(1) as any;
    const tabHeading = ref(1) as any;
    const activeTab = ref(1) as any;
    const reLoadeHeading = ref(1) as any;
    const tabListName = ref([]) as any;
    const innertabHeading = ref(1) as any;
    const inneractiveTab = ref(1) as any;
    const innertabListName = ref([]) as any;
    const avList = ref([]) as any;
    const selectedAVFile = ref([]) as any;
    const tabTittle = ref('') as any;
    const avId = ref([]) as any;
    const submitted = ref(false) as any;
    const avComments = ref('') as any;
    const toasterInfo = ref({}) as any;
    const isToaster = ref(false) as any;
    const isCheckedAv = ref([]) as any;
    const fileName = ref('') as any;
    const document = ref('') as any;
    const avRequest = ref('') as any;
    const isAvRequest = ref(false) as any;
    const ismultiLocation = ref(props.ismultiLocation);
    const location = ref(props.location);

    // List AV Api
    const listAV = async (page: any = '') => {
      console.log('Tab Result listAV');
      // loader.value = true
      try {
        let pagination = '';
        if (page) {
          pagination = '?page=' + page + '&limit=' + 10;
        }
        const param = meetingId.value + '/' + tabCode.value + pagination;
        const res = await ServiceEngagement.engAV(param);
        // console.log('document.value listAV',  res)

        if (res.is_success) {
          isCheckedAv.value = res.result;
          res.result.forEach((element: any) => {
            avId.value.push(element.id);
          });
          totalPages.value = res.total_count ? res.total_count : 0;
        } else {
          isCheckedAv.value = [];
        }

        // console.log('document.value listAV', document.value)

        avComments.value = res.comments;
        if (Object.keys(res.document).length !== 0) {
          document.value = res.document;
        }
        if (document.value !== '' || isCheckedAv.value.length !== 0) {
          isAvRequest.value = true;
        }
        console.log('document.value listAV', document.value);
        console.log('document.value listAV', isCheckedAv.value.length);
        console.log('Tab Result listAV', isAvRequest.value);

        avRequest.value = res;
      } catch (error) {
        isCheckedAv.value = [];
      }
      // loader.value = false
    };

    const listAVTab = async (page: any = '') => {
      loader.value = true;
      try {
        const param = '/avs';
        const res = await ServiceEngagement.commonEngPoint('get', param);
        if (res.is_success && res.result && res.result.length !== 0) {
          const result = res.result.filter((a: any) => a.name != null);
          avList.value = result;
        } else {
          avList.value = [];
        }
        console.log('Tab Result', res);
        console.log('avRequest.value', avRequest.value);
        console.log('isAvRequest.value', isAvRequest.value);
      } catch (error) {
        avList.value = [];
      }
      loader.value = false;
    };

    const tabChange = async (tabvalue: any) => {
      console.log('tabChange', tabvalue);
      reLoadeHeading.value += 1;
      activeTab.value = tabvalue;
      if (activeTab.value === 1) {
        currentPage.value = 1;
        // await listSpeaker()
      }
    };

    const innertabChange = async (innertabvalue: any) => {
      console.log('innertabChange', innertabvalue);
      reLoadeHeading.value += 1;
      inneractiveTab.value = innertabvalue;
      if (inneractiveTab.value === 1) {
        currentPage.value = 1;
        // await listSpeaker()
      }
    };

    // Update AV
    const updateAV = async (event: any, id: any) => {
      console.log('id', id);
      if (event.target.checked === true) {
        avId.value.push(id);
      } else if (event.target.checked === false) {
        avId.value.splice(avId.value.indexOf(id), 1);
      }
      console.log('avId', avId.value);
    };

    const update = async () => {
      submitted.value = true;
      const headerRequest = 'application/json';
      const info = {} as any;
      info.endPoint = '/avs';
      info.method = 'post';
      const postData = {
        meeting: meetingId.value,
        av_ids: avId.value,
      } as any;
      if (avComments.value !== '') {
        postData.comments = avComments.value;
      }
      if (avId.value && avId.value.length !== 0) {
        const res = await ServiceEngagement.addForm(info, postData, headerRequest);
        if (res.apiStatus) {
          await listAV();
        }
        await toaster(res);
        console.log('added av res', res);
      }
      submitted.value = false;
    };

    const uploaAVdFile = async () => {
      submitted.value = true;
      const headerRequest = 'multipart/form-data';
      const info = {} as any;
      info.endPoint = '/avs_documents';
      info.method = 'post';

      const postFormData = new FormData();
      postFormData.append('meeting_id', meetingId.value);
      postFormData.append('files', selectedAVFile.value);

      if (selectedAVFile.value && selectedAVFile.value.length !== 0) {
        const res = await ServiceEngagement.addForm(info, postFormData, headerRequest);
        selectedAVFile.value = [];
        fileName.value = '';
        await listAV();
        await toaster(res);
        console.log('added av res', res);
      }
      submitted.value = false;
    };

    const toaster = async (value: any) => {
      isToaster.value = true;
      if (value.apiStatus) {
        toasterInfo.value.success = true;
        if (value.message) {
          toasterInfo.value.msg = value.message;
        } else {
          toasterInfo.value.msg = value.result;
        }
      } else {
        toasterInfo.value.success = false;
        toasterInfo.value.msg = value.error.message;
      }
      setTimeout(async () => {
        isToaster.value = false;
      }, 2000);
    };

    const isChecked = (id: any) => {
      for (let index = 0; index < isCheckedAv.value.length; index++) {
        const element = isCheckedAv.value[index];
        if (element.id === id) {
          return true;
        }
      }
    };

    // On Before mount Function
    onBeforeMount(async () => {
      loader.value = true;
      loader.value = false;
      tabListName.value = [
        { id: 1, tabTittle: 'AV Information' },
        { id: 2, tabTittle: 'Notes' },
        { id: 3, tabTittle: 'Tasks' },
      ];
      console.log('multilocatin', ismultiLocation);
      console.log('multilocatin', location);
      await listAV();
      await listAVTab();
    });

    return {
      collobaration,
      loader,
      currentPage,
      totalPages,
      meetingId,
      tabCode,
      activeTab,
      tabHeading,
      tabChange,
      imgError,
      tabListName,
      innertabChange,
      innertabCode,
      inneractiveTab,
      innertabHeading,
      innertabListName,
      listAVTab,
      avList,
      selectedAVFile,
      reLoadeHeading,
      tabTittle,
      updateAV,
      avId,
      update,
      submitted,
      avComments,
      toasterInfo,
      isToaster,
      toaster,
      isCheckedAv,
      isChecked,
      fileName,
      uploaAVdFile,
      document,
      avRequest,
      listAV,
      isAvRequest,
      ismultiLocation,
      location,
    };
  },
  data() {
    return {
      openTab: 1,
      hidefilter: false,
      openInnerTab: 1,
      sortOrder: -1,
      loader: true,
      openlocTab: 1,
      activeLocation: 0,
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

    // Show/Hide Filter Function
    showfilter() {
      this.hidefilter = !this.hidefilter;
    },

    // Alt Img Handling
    errorImg(data: any) {
      data.errorImg = true;
      this.imgError += 1;
    },
    togglelocTabs: function(tabNumber: number) {
      this.openlocTab = tabNumber;
    },
    async activeLoc(locId: any, av: any) {
      console.log('av', av);
      this.isCheckedAv = av;
      await this.listAVTab();
      this.activeLocation = locId;
    },
    toggleTabs: function(tabNumber: number) {
      this.openTab = tabNumber;
    },
    toggleInnerTabs: function(tabNumber: number) {
      this.openInnerTab = tabNumber;
    },

    // File event
    uploadFile(files: any) {
      this.selectedAVFile = files[0];
      this.fileName = files[0].name;
      console.log(' this.selectedFile', this.selectedAVFile);
    },

    removeFile() {
      this.selectedAVFile = [];
      this.fileName = '';
    },

    download(downloadUrl: any) {
      console.log('downloadUrl', downloadUrl);
      if (downloadUrl) {
        const url = downloadUrl;
        const exportElement = document.createElement('a');
        exportElement.href = url;
        exportElement.target = '_blank';
        exportElement.click();
      }
    },

    dateFormate(date: any) {
      console.log('avdate', date);
      return Helper.dateFormat(date);
    },
  },
});
