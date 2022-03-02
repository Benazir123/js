import { defineAsyncComponent, defineComponent, ref } from 'vue';
import Assistantinfo from '../ContactPreferences/Assistantinfo/Assistantinfo';
const CALeftMenu = defineAsyncComponent(() => import('../CALeftMenu/CALeftMenu.vue'));
const AssistantInfo = defineAsyncComponent(() => import('../Summary/AssistantInfo.vue'));
const TravelPreference = defineAsyncComponent(() => import('../Summary/TravelPreference.vue'));
const AssociatedAffiliations = defineAsyncComponent(() => import('../Summary/AssociatedAffiliations.vue'));
const MedicalInformation = defineAsyncComponent(() => import('../Summary/MedicalInformation.vue'));
const InstitutionInfo = defineAsyncComponent(() => import('../Summary/InstitutionInfo.vue'));
const LinkedEngagements = defineAsyncComponent(() => import('../Summary/LinkedEngagements.vue'));
const RadiusProfile = defineAsyncComponent(() => import('../Summary/RadiusProfile.vue'));

export default defineComponent({
  name: 'Profile',
  components: {
    'ca-left-menu': CALeftMenu,
    'assitant-info': AssistantInfo,
    'travel-preference': TravelPreference,
    'associated-affiliations': AssociatedAffiliations,
    'medical-information': MedicalInformation,
    'institution-info': InstitutionInfo,
    'linked-engagements': LinkedEngagements,
    'radius-profile': RadiusProfile,
  },

  methods: {
    consultant() {
      this.$router.push('/speakerconsultant');
    },
  },
});
