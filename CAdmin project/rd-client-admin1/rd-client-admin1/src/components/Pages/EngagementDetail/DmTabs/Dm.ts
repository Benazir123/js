import Helper from '@/globalFunctions/Helper';
import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import { defineComponent, ref, onBeforeMount } from 'vue';
export default defineComponent({
  name: 'DmTabs',
  inheritAttrs: false,
  emit: ['status-update'],
  props: {
    meetingId: {
      default: '',
    },
    tabCode: {
      default: '',
    },
  },
  setup(props, { emit }) {
    const dmList = ref([]) as any;
    const imgError = ref(1) as any;
    const loader = ref(false) as any;
    const isDmApprove = ref(false) as any;
    const dmApproveData = ref({}) as any;
    const dmApproveId = ref('') as any;
    const toasterInfo = ref({}) as any;
    const isToaster = ref(false) as any;
    const submitted = ref(false) as any;
    // List  DM Api
    const listDM = async () => {
      try {
        const param = props.meetingId + '/' + props.tabCode;
        const res = await ServiceEngagement.engTabList(param);
        if (res.is_success) {
          dmList.value = res.result;
        } else {
          dmList.value = [];
        }
        console.log('dmRes', res);
      } catch (error) {
        dmList.value = [];
      }
    };

    // On Before mount Function
    onBeforeMount(async () => {
      loader.value = true;
      await listDM();
      loader.value = false;
    });

    // DM approve
    const dmApprove = async () => {
      submitted.value = true;
      try {
        const url = '/engagements/' + props.meetingId + '/dm/' + dmApproveId.value + '/status';
        const param = {
          status: 1,
        };
        const res = await ServiceEngagement.commonEndpoint('put', url, param);
        console.log('res', res);
        isToaster.value = true;
        isDmApprove.value = false;
        if (res.apiStatus) {
          toasterInfo.value.success = true;
        } else {
          toasterInfo.value.success = false;
        }
        if (res.error.message) {
          toasterInfo.value.msg = res.error.message;
        } else if (res.message) {
          toasterInfo.value.msg = res.message;
        } else {
          toasterInfo.value.msg = res.result;
        }
        emit('status-update');
        loader.value = true;
        await listDM();
        loader.value = false;
        setTimeout(async () => {
          isToaster.value = false;
        }, 2000);
        console.log('dmRes', res);
      } catch (error) {
        isToaster.value = false;
      }
      submitted.value = false;
    };

    return {
      dmList,
      listDM,
      imgError,
      loader,
      isDmApprove,
      dmApproveData,
      dmApprove,
      dmApproveId,
      isToaster,
      toasterInfo,
      submitted,
    };
  },

  methods: {
    // Alt Img Handling
    errorImg(data: any) {
      data.errorImg = true;
      this.imgError += 1;
    },

    //
    dateFormate(date: any) {
      if (date) {
        return Helper.dateFormat(date);
      } else {
        return '--';
      }
    },

    // DM APprove
    isApprove(rowData: any) {
      console.log('rowData', rowData);
      if (rowData.status.name === 'Approve') {
        this.isDmApprove = true;
        this.dmApproveId = rowData.id;
        this.dmApproveData = rowData;
      }
    },

    // Admin approved
    adminApproved() {
      // var res = await ServiceEngagement.engTabList(param)
    },
  },
});
