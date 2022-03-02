import Helper from '@/globalFunctions/Helper';
import ServiceLogin from '@/service/ServiceLogin/ServiceLogin';
import { defineComponent, ref } from 'vue';
import { SidebarMenu } from 'vue-sidebar-menu';
import store from '@/store';
export default defineComponent({
  name: 'VLeftMenu',
  components: {
    SidebarMenu,
  },
  props: {
    // Sidebar Collapse state
    collapsed: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      //  menu: [
      //     {
      //       title: 'Dashboard',
      //       icon: { element: 'img', attributes: { src: require('@/assets/dashboard.svg') } },
      //       badge: { element: 'img', attributes: { src: require('@/assets/dashboardwhite.svg') } },
      //       child: [
      //         {
      //           title: 'Engagement',
      //           href: '/dashboard'
      //         },
      //         {
      //           title: 'Compliance'
      //         }
      //       ]
      //     },
      //     {
      //       href: '/engagements',
      //       title: 'Engagements',
      //       icon: { element: 'img', attributes: { src: require('@/assets/calendar.svg') } },
      //       badge: { element: 'img', attributes: { src: require('@/assets/calendarwhite.svg') } }
      //     },
      //     {
      //       href: '/livesessions',
      //       title: 'Live Sessions',
      //       icon: { element: 'img', attributes: { src: require('@/assets/live-sessions.svg') } },
      //       badge: { element: 'img', attributes: { src: require('@/assets/live-sessionswhite.svg') } }
      //     },
      //     {
      //       title: 'Users',
      //       icon: { element: 'img', attributes: { src: require('@/assets/live-sessions.svg') } },
      //       badge: { element: 'img', attributes: { src: require('@/assets/live-sessionswhite.svg') } },
      //       child: [
      //         {
      //           title: 'Speaker',
      //           href: '/users'
      //         },
      //         {
      //           title: 'Attendees',
      //           href: '/users'
      //         },
      //         {
      //           title: 'Client',
      //           href: '/users'
      //         },
      //         {
      //           title: 'Admin',
      //           href: '/users'
      //         }
      //       ]
      //     },
      //     {
      //       title: 'Budgets',
      //       icon: { element: 'img', attributes: { src: require('@/assets/budgets.svg') } },
      //       badge: { element: 'img', attributes: { src: require('@/assets/budgetswhite.svg') } }
      //     },
      //     {
      //       title: 'Reports',
      //       icon: { element: 'img', attributes: { src: require('@/assets/reports.svg') } },
      //       badge: { element: 'img', attributes: { src: require('@/assets/reportswhite.svg') } }
      //     },
      //     {
      //       title: 'Content Library',
      //       icon: { element: 'img', attributes: { src: require('@/assets/content-library.svg') } },
      //       badge: { element: 'img', attributes: { src: require('@/assets/content-librarywhite.svg') } }
      //     },
      //     {
      //       title: 'Tickets',
      //       icon: { element: 'img', attributes: { src: require('@/assets/budgets.svg') } },
      //       badge: { element: 'img', attributes: { src: require('@/assets/budgetswhite.svg') } }
      //     },
      //     {
      //       title: 'Go to Web',
      //       icon: { element: 'img', attributes: { src: require('@/assets/gotoweb.svg') } },
      //       badge: { element: 'img', attributes: { src: require('@/assets/gotowebwhite.svg') } }
      //     },
      //     {
      //       title: 'KOL Management',
      //       icon: { element: 'img', attributes: { src: require('@/assets/kolmanagement.svg') } },
      //       badge: { element: 'img', attributes: { src: require('@/assets/kolmanagementwhite.svg') } },
      //       child: [
      //         {
      //           href: '/kolmanagement',
      //           title: 'Dashboard'
      //         },
      //         {
      //                         href: '/speakerconsultant',
      //                         title: 'Speaker / Consultant'
      //                     }
      //                 ]
      //             },
      //             {
      //                 title: 'KOL Contracting',
      //                 icon: { element: 'img', attributes: { src: require('@/assets/kolcontracting.svg') }, },
      //                 badge: { element: 'img', attributes: { src: require('@/assets/kolcontractingwhite.svg') }, },
      //             },
      //             {
      //                 title: 'Logout',
      //                 icon: { element: 'img', attributes: { src: require('@/assets/logout.svg') }, },
      //                 badge: { element: 'img', attributes: { src: require('@/assets/logoutwhite.svg') }, },
      //             },
      //         ],
      profileMenu: false,
    };
  },
  setup() {
    // Get Login user and APP menu list
    const loggedInUser = ref('') as any;
    const appMenu = ref([]) as any;
    const menu = ref([]) as any;
    const companyData = ref({}) as any;
    const companyLogo = ref(companyData.value.small_logo) as any;

    loggedInUser.value = Helper.getLoginUser();
    appMenu.value = Helper.getAppMenu();
    // menu.value = [
    //     {
    //         title: 'Dashboard',
    //         icon: { element: 'img', attributes: { src: require('@/assets/dashboard.svg') }, },
    //         badge: { element: 'img', attributes: { src: require('@/assets/dashboardwhite.svg') }, },
    //         child: [
    //             {
    //                 title: 'Engagement',
    //                 href: '/dashboard',
    //             },
    //             {
    //                 title: 'Compliance'
    //             }
    //         ]
    //     },
    //     {
    //         href: '/engagements',
    //         title: 'Engagements',
    //         icon: { element: 'img', attributes: { src: require('@/assets/calendar.svg') }, },
    //         badge: { element: 'img', attributes: { src: require('@/assets/calendarwhite.svg') }, },
    //     },
    //     {
    //         href : '/livesessions',
    //         title: 'Live Sessions',
    //         icon: { element: 'img', attributes: { src: require('@/assets/live-sessions.svg') }, },
    //         badge: { element: 'img', attributes: { src: require('@/assets/live-sessionswhite.svg') }, },
    //     },
    //     {
    //         title: 'Users',
    //         icon: { element: 'img', attributes: { src: require('@/assets/live-sessions.svg') }, },
    //         badge: { element: 'img', attributes: { src: require('@/assets/live-sessionswhite.svg') }, },
    //         child: [
    //             {
    //                 title: 'Speaker',
    //                 href: '/users',
    //             },
    //             {
    //                 title: 'Attendees',
    //                 href: '/users',
    //             },
    //             {
    //                 title: 'Client',
    //                 href: '/users',
    //             },
    //             {
    //                 title: 'Admin',
    //                 href: '/users',
    //             },
    //         ]
    //     },
    //     {
    //         title: 'Budgets',
    //         icon: { element: 'img', attributes: { src: require('@/assets/budgets.svg') }, },
    //         badge: { element: 'img', attributes: { src: require('@/assets/budgetswhite.svg') }, },
    //     },
    //     {
    //         title: 'Reports',
    //         icon: { element: 'img', attributes: { src: require('@/assets/reports.svg') }, },
    //         badge: { element: 'img', attributes: { src: require('@/assets/reportswhite.svg') }, },
    //     },
    //     {
    //         title: 'Content Library',
    //         icon: { element: 'img', attributes: { src: require('@/assets/content-library.svg') }, },
    //         badge: { element: 'img', attributes: { src: require('@/assets/content-librarywhite.svg') }, },
    //     },
    //     {
    //         title: 'Tickets',
    //         icon: { element: 'img', attributes: { src: require('@/assets/budgets.svg') }, },
    //         badge: { element: 'img', attributes: { src: require('@/assets/budgetswhite.svg') }, },
    //     },
    //     {
    //         title: 'Go to Web',
    //         icon: { element: 'img', attributes: { src: require('@/assets/gotoweb.svg') }, },
    //         badge: { element: 'img', attributes: { src: require('@/assets/gotowebwhite.svg') }, },
    //     },
    //     {
    //         title: 'KOL Management',
    //         icon: { element: 'img', attributes: { src: require('@/assets/kolmanagement.svg') }, },
    //         badge: { element: 'img', attributes: { src: require('@/assets/kolmanagementwhite.svg') }, },
    //         child: [
    //             {
    //                 href: '/kolmanagement',
    //                 title: 'Dashboard'
    //             },
    //             {
    //                 href: '/speakerconsultant',
    //                 title: 'Speaker / Consultant'
    //             }
    //         ]
    //     },
    //     {
    //         title: 'KOL Contracting',
    //         icon: { element: 'img', attributes: { src: require('@/assets/kolcontracting.svg') }, },
    //         badge: { element: 'img', attributes: { src: require('@/assets/kolcontractingwhite.svg') }, },
    //     },
    //     {
    //         title: 'Logout',
    //         icon: { element: 'img', attributes: { src: require('@/assets/logout.svg') }, },
    //         badge: { element: 'img', attributes: { src: require('@/assets/logoutwhite.svg') }, },
    //     },
    // ];
    if (!appMenu.value) {
      appMenu.value = menu;
    }
    console.log('appMenu', appMenu);
    return {
      loggedInUser,
      appMenu,
      menu,
      companyData,
      companyLogo,
    };
  },
  methods: {
    logedout() {
      console.log('logout');
      Helper.logout();
    },
    async onItemClick(event: any, item: any) {
      console.log('ITEM TITLE', item.title);
      if (item.title === 'Logout') {
        Helper.logout();
        // this.$router.push('/login');
      } else if (item.title === 'Content Library') {
        this.$router.push('/content-list');
      } else if (item.parent === 'report') {
        await this.$router.push({
          path: '/reports',
          query: { title: item.title },
        });
        await store.commit('reportsDetails', item.endpoint);
        location.reload();
      } else if (item.title === 'Speaker' || item.title === 'Attendees') {
        console.log('USER Speaker');
        await this.$router.push({
          path: '/users',
          query: { title: item.title },
        });
        location.reload();
      } else if (item.title === 'Client') {
        await this.$router.push({
          path: '/client',
          query: { title: item.title },
        });
      } else if (item.title === 'Admins') {
        await this.$router.push({
          path: '/admin',
          query: { title: item.title },
        });
      }
    },

    onToggleCollapse(collapsed: any) {
      // Set Collape Logo
      if (!this.companyData) {
        ServiceLogin.getCompany();
        this.companyData = Helper.getCompanyData() as any;
      }
      console.log('companyData', this.companyData);
      if (collapsed) {
        // this.companyLogo = require('@/assets/salixlogo2.png');
        this.companyLogo = this.companyData.small_logo;
      } else {
        // this.companyLogo = require('@/assets/salixlogowithname.png');
        this.companyLogo = this.companyData.company_logo;
      }
      console.log('collapsed', collapsed);
    },
    showProfileMenu() {
      this.profileMenu = !this.profileMenu;
    },
  },

  created() {
    ServiceLogin.getCompany();
    this.companyData = Helper.getCompanyData() as any;
    this.companyLogo = this.companyData.small_logo;
  },
});
