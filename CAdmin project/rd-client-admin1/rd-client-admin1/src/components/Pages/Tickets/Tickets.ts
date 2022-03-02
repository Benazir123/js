import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import { defineComponent, onBeforeMount, ref } from 'vue';
import VPagination from '@hennge/vue3-pagination';
import LiveChat from './LiveChat/LiveChat.vue';
import Helper from '@/globalFunctions/Helper';
export default defineComponent({
  name: 'Speaker',
  inheritAttrs: false,
  components: {
    'live-chat': LiveChat,
    VPagination,
  },
  data() {
    return {
      isOpenticketdrawer: false,
    };
  },
  setup() {
    // const spkuser = ref([]) as any
    const listTicketData = ref([]) as any;
    const loader = ref(false) as any;
    const currentPage = ref(1) as any;
    const totalPages = ref(0) as any;
    const openTicketTab = ref(0) as any;
    const ticketHeadingName = ref([]) as any;
    const imgError = ref(1) as any;
    const showTicketPopup = ref(false) as any;
    const popupData = ref('') as any;
    const toasterInfo = ref({}) as any;
    const submitted = ref(false) as any;
    const isToaster = ref(false) as any;
    const ticketPopupText = ref('') as any;
    const ticketPopupMethod = ref('') as any;
    const ticketPopupUrl = ref('') as any;
    const ticketPopupObj = ref({}) as any;
    const searchByText = ref('') as any;

    ticketHeadingName.value = [
      {
        id: 0,
        title: 'New Tickets',
      },
      {
        id: 1,
        title: 'Inprogress Tickets',
      },
      {
        id: 2,
        title: 'Closed Tickets',
      },
    ];
    const toggletickettab = async (tabNumber: number) => {
      openTicketTab.value = tabNumber;
      console.log('OPEN TIC-->>', openTicketTab.value);
      currentPage.value = 1;
      await listTickets(currentPage.value);
    };
    // List  ContentLibrary Api
    const listTickets = async (page: any = '') => {
      loader.value = true;
      try {
        let type = '';
        if (openTicketTab.value && openTicketTab.value == 0) {
          type = '?filter=0';
        } else {
          type = '?filter=' + openTicketTab.value;
        }
        const url = 'tickets';
        const pagination = '&page=' + page + '&limit=' + 10;
        if (searchByText.value !== '') {
          const pagination = '&page=' + page + '&limit=' + 10 + '&search=' + searchByText.value;
        }
        const res = await ServiceEngagement.commonEndpoint('get', url + type + pagination);
        if (res.data) {
          listTicketData.value = res.data.rows;
          totalPages.value = res.totalPages ? res.totalPages : 0;
        } else {
          listTicketData.value = [];
        }
        console.log('RESPONSE Ticket', listTicketData.value);
      } catch (error) {
        listTicketData.value = [];
      }
      loader.value = false;
    };

    // Clear Search
    const clearSearch = async () => {
      searchByText.value = '';
      // currentPage.value = 1
      await listTickets(currentPage.value);
    };

    // On Before mount Function
    onBeforeMount(async () => {
      loader.value = true;
      await listTickets(currentPage.value);
      loader.value = false;
    });

    window.addEventListener('keypress', function(e: any) {
      if (e.key === 'Enter' && searchByText.value !== '') {
        currentPage.value = 1;
        listTickets(currentPage.value);
      }
    });

    return {
      // spkuser,
      listTickets,
      loader,
      toggletickettab,
      ticketHeadingName,
      listTicketData,
      openTicketTab,
      currentPage,
      totalPages,
      imgError,
      showTicketPopup,
      popupData,
      toasterInfo,
      submitted,
      isToaster,
      ticketPopupText,
      ticketPopupMethod,
      ticketPopupUrl,
      ticketPopupObj,
      clearSearch,
      searchByText,
    };
  },
  methods: {
    dateFormate(rowData: any) {
      if (rowData) {
        return Helper.dateFormat(rowData);
      } else {
        return '---';
      }
    },
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

    ticketDelete(row: any) {
      this.ticketPopupText = 'Delete';
      this.popupData = row;
      console.log('POPDATA ticketDelete->', this.popupData);
      this.showTicketPopup = true;
      this.ticketPopupUrl = '/tickets_delete' + '?id=' + this.popupData.id;
      this.ticketPopupMethod = 'delete';
    },
    async ticketPopupFunction() {
      this.submitted = true;
      const deleteRes = await ServiceEngagement.commonEndpoint(
        this.ticketPopupMethod,
        this.ticketPopupUrl,
        this.ticketPopupObj,
      );
      console.log('deleteRes', deleteRes);
      this.showTicketPopup = false;
      this.submitted = false;
      if (deleteRes.apiStatus) {
        this.isToaster = true;
        this.toasterInfo.success = true;
        this.toasterInfo.msg = deleteRes.message;
      } else {
        this.toasterInfo.msg = deleteRes.message;
      }
      setTimeout(async () => {
        this.isToaster = false;
      }, 2500);
      this.ticketPopupObj = {};
      await this.listTickets(this.currentPage);
    },

    ticketClose(row: any) {
      this.ticketPopupText = 'Close';
      this.popupData = row;
      console.log('POPDATA ticketClose->', this.popupData);
      this.showTicketPopup = true;
      this.ticketPopupUrl = '/tickets_close' + '?id=' + this.popupData.id;
      this.ticketPopupMethod = 'get';
    },
    ticketReopen(row: any) {
      this.ticketPopupText = 'Reopen';
      this.popupData = row;
      console.log('POPDATA ticketClose->', this.popupData);
      this.showTicketPopup = true;
      this.ticketPopupUrl = '/tickets_reopen';
      this.ticketPopupMethod = 'post';
      this.ticketPopupObj = {
        id: this.popupData.id,
      };
    },

    // OPen Collab meeting Section
    openticket() {
      //  console.log('openTicket Data',rowData)
      this.isOpenticketdrawer = !this.isOpenticketdrawer;
    },
  },
});
