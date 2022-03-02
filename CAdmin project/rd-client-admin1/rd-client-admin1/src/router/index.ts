import ForgotPassword from '@/components/Auth/ForgotPassword/ForgotPassword.vue';
import LoginPage from '@/components/Auth/LoginPage.vue';
import Dashboard from '@/components/Dashboard/Dashboard.vue';
import Layout from '@/components/Layout/Layout.vue';
import Engagement from '@/components/Pages/Engagement/Engagement.vue';
import EngagementDetail from '@/components/Pages/EngagementDetail/EngagementDetail.vue';
import LiveSession from '@/components/Pages/LiveSession/LiveSession.vue';
import KOLManagement from '@/components/Pages/KOLManagement/Dashboard/Dashboard.vue';
import SpeakerConsultant from '@/components/Pages/KOLManagement/SpeakerConsultant/SpeakerConsultant.vue';
import Summary from '@/components/Pages/KOLManagement/SpeakerConsultant/Summary/Summary.vue';
import MedicalInfo from '@/components/Pages/KOLManagement/SpeakerConsultant/MedicalInfo/MedicalInfo.vue';
import Profile from '@/components/Pages/KOLManagement/SpeakerConsultant/Profile/Profile.vue';
import ContactPreferences from '@/components/Pages/KOLManagement/SpeakerConsultant/ContactPreferences/ContactPreferences.vue';
import Speakeraddress from '@/components/Pages/KOLManagement/SpeakerConsultant/ContactPreferences/Speakeraddress/Speakeraddress.vue';
import Assistantinfo from '@/components/Pages/KOLManagement/SpeakerConsultant/ContactPreferences/Assistantinfo/Assistantinfo.vue';
import Travelpreference from '@/components/Pages/KOLManagement/SpeakerConsultant/ContactPreferences/Travelpreference/Travelpreference.vue';
import SpeakerEngagements from '@/components/Pages/KOLManagement/SpeakerConsultant/ContactPreferences/SpeakerEngagements/SpeakerEngagements.vue';
import Training from '@/components/Pages/KOLManagement/SpeakerConsultant/ContactPreferences/Training/Training.vue';
import ContractLog from '@/components/Pages/KOLManagement/SpeakerConsultant/ContactPreferences/ContractLog/ContractLog.vue';
import Utilization from '@/components/Pages/KOLManagement/SpeakerConsultant/Utilization/Utilization.vue';
import Payment from '@/components/Pages/KOLManagement/SpeakerConsultant/Payment/Payment.vue';
import Calendar from '@/components/Pages/KOLManagement/Calendar/Calendar.vue';
import ContentLibrary from '@/components/Pages/ContentLibrary/ContentLibrary.vue';
import Reports from '@/components/Pages/Reports/Reports.vue';
import store from '@/store';
import { createRouter, createWebHashHistory } from 'vue-router';
import Users from '@/components/Pages/Users/Speaker/Users.vue';
import ViewSpeaker from '@/components/Pages/Users/Speaker/ViewSpeaker/ViewSpeaker.vue';
import Tickets from '@/components/Pages/Tickets/Tickets.vue';
import ContactInformation from '@/components/Pages/Users/Speaker/ViewSpeaker/ContactInformation/ContactInformation.vue';
import ContractInfo from '@/components/Pages/Users/Speaker/ViewSpeaker/ContactInformation/ContractInfo/ContractInfo.vue';
import Client from '@/components/Pages/Users/Speaker/Client.vue';
import Admin from '@/components/Pages/Users/Speaker/Admin.vue';
import TrainingInfo from '@/components/Pages/Users/Speaker/ViewSpeaker/ContactInformation/TrainingInfo/TrainingInfo.vue';
import UserProfile from '@/components/Pages/Users/Speaker/ViewSpeaker/UserProfile/UserProfile.vue';
import Comments from '@/components/Pages/Users/Speaker/ViewSpeaker/Comments/Comments.vue';
import EngagementInfo from '@/components/Pages/Users/Speaker/ViewSpeaker/EngagementInfo/EngagementInfo.vue';
import FFS from '@/components/Pages/Users/Speaker/ViewSpeaker/FFS/FFS.vue';
import Audit from '@/components/Pages/Audit/Audit.vue';
import Aligment from '@/components/Pages/Users/Speaker/ViewSpeaker/Aligment/Aligment.vue';
import Cap from '@/components/Pages/Users/Speaker/ViewSpeaker/Cap/Cap.vue';
import Documents from '@/components/Pages/Users/Speaker/ViewSpeaker/Documents/Documents.vue';
import BIO from '@/components/Pages/Users/Speaker/ViewSpeaker/BIO/BIO.vue'
import AccountSetting from '@/components/Pages/AccountSetting/AccountSetting.vue'
import Budget from '@/components/Pages/Budget/Budget.vue';
import History from '@/components/Pages/Budget/History/History.vue'
import KolProject from '@/components/Pages/KOLManagement/KolProject/KolProject.vue';
import General from '@/components/Pages/KOLManagement/KolProject/AddProject/General/General.vue';
import StrategicInformation from '@/components/Pages/KOLManagement/KolProject/AddProject/StrategicInformation/StrategicInformation.vue';
import HcpDetails from '@/components/Pages/KOLManagement/KolProject/AddProject/HcpDetails/HcpDetails.vue';
import Logistics from '@/components/Pages/KOLManagement/KolProject/AddProject/Logistics/Logistics.vue';
import DocumentProject from '@/components/Pages/KOLManagement/KolProject/AddProject/DocumentProject/DocumentProject.vue';
import Notes from '@/components/Pages/KOLManagement/KolProject/AddProject/Notes/Notes.vue';

const routes = [
  {
    path: '/login',
    name: 'the-login',
    component: LoginPage,
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/:catchAll(.*)',
        name: 'the-dashboard',
        component: Dashboard,
      },
      {
        path: '*',
        name: 'the-dashboard',
        component: Dashboard,
      },

      {
        path: '/dashboard',
        name: 'the-dashboard',
        class: 'dashboardwrp',
        component: Dashboard,
      },
      {
        path: '/engagements',
        name: 'Engagement',
        component: Engagement,
      },
      {
        path: '/engagementdetails',
        name: 'EngagementDetail',
        component: EngagementDetail,
      },
      {
        path: '/livesessions',
        name: 'LiveSession',
        component: LiveSession,
      },
      {
        path: '/content-list',
        name: 'ContentLibrary',
        component: ContentLibrary,
      },
      {
        path: '/kolmanagement',
        name: 'KOLManagement',
        component: KOLManagement,
        class: 'dashboardwrp',
      },
      {
        path: '/speakerconsultant',
        name: 'SpeakerConsultant',
        component: SpeakerConsultant,
      },
      {
        path: '/speakersummary',
        name: 'Summary',
        component: Summary,
      },
      {
        path: '/speakermedicalinfo',
        name: 'MedicalInfo',
        component: MedicalInfo,
      },
      {
        path: '/speakerprofile',
        name: 'Profile',
        component: Profile,
      },
      {
        path: '/speakercontactpreferences',
        name: 'ContactPreferences',
        component: ContactPreferences,
      },
      {
        path: '/speakeraddress',
        name: 'Speakeraddress',
        component: Speakeraddress,
      },
      {
        path: '/speakerassistantinfo',
        name: 'Assistantinfo',
        component: Assistantinfo,
      },
      {
        path: '/speakertravelpreference',
        name: 'Travelpreference',
        component: Travelpreference,
      },
      {
        path: '/speakerengagements',
        name: 'SpeakerEngagements',
        component: SpeakerEngagements,
      },
      {
        path: '/speakertraining',
        name: 'Training',
        component: Training,
      },
      {
        path: '/speakercontractlog',
        name: 'ContractLog',
        component: ContractLog,
      },
      {
        path: '/speakerutilization',
        name: 'Utilization',
        component: Utilization,
      },
      {
        path: '/speakerpayment',
        name: 'Payment',
        component: Payment,
      },
      {
        path: '/kolcalendar',
        name: 'Calendar',
        component: Calendar,
      },
      {
        path: '/reports',
        name: 'Reports',
        component: Reports,
      },
      {
        path: '/users',
        name: 'Users',
        component: Users,
      },
      {
        path: '/viewspeaker',
        name: 'viewspeaker',
        component: ViewSpeaker,
      },
      {
        path: '/tickets',
        name: 'Tickets',
        component: Tickets,
      },
      {
        path: '/ContractInfo',
        name: 'ContractInfo',
        component: ContractInfo,
      },
      {
        path: '/ContactInformation',
        name: 'ContactInformation',
        component: ContactInformation,
      },
      {
        path: '/training',
        name: 'TrainingInfo',
        component: TrainingInfo,
      },
      {
        path: '/userprofile',
        name: 'UserProfile',
        component: UserProfile,
      },
      {
        path: '/client',
        name: 'Client',
        component: Client,
      },
      {
        path: '/admin',
        name: 'Admin',
        component: Admin,
      },
      {
        path: '/comments',
        name: 'Comments',
        component: Comments,
      },
      {
        path: '/engagementinfo',
        name: 'EngagementInfo',
        component: EngagementInfo,
      },
      {
        path: '/ffs',
        name: 'FFS',
        component: FFS,
      },
      {
        path: '/audit',
        name: 'Audit',
        component: Audit,
      },
      {
        path: '/aligment',
        name: 'Aligment',
        component: Aligment,
      },
      {
        path: '/cap',
        name: 'Cap',
        component: Cap,
      },
      {
        path: '/documents',
        name: 'documents',
        component: Documents,
      },
      {
        path: '/bio',
        name: 'BIO',
        component: BIO,
      },
      {
        path: '/account-setting',
        name: 'AccountSetting',
        component: AccountSetting
      },
      {
        path: '/budget',
        name: 'Budget',
        component: Budget
      },
      {
        path: '/history',
        name: 'History',
        component: History
      },
      {
        path: '/project',
        name: 'KolProject',
        component: KolProject
      },
      {
        path: '/general',
        name: 'General',
        component: General
      },
      {
        path: '/strategicinformation',
        name: 'StrategicInformation',
        component: StrategicInformation
      },
      {
        path: '/HcpDetails',
        name: 'HcpDetails',
        component: HcpDetails
      },
      {
        path: '/logistics',
        name: 'Logistics',
        component: Logistics
      },
      {
        path: '/documentProject',
        name: 'DocumentProject',
        component: DocumentProject
      },
      {
        path: '/notes',
        name: 'Notes',
        component: Notes
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.VUE_APP_BASE_URL),
  routes,
});
// auth guard
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/forgotpassword'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = store.state.isLoggedIn;

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  if (to.path === '/login' && store.state.isLoggedIn) {
    next({ name: 'the-dashboard' });
    return;
  }
  if (to.path === '/' && store.state.isLoggedIn) {
    next({ name: 'the-dashboard' });
    return;
  }

  next();
});

export default router;
