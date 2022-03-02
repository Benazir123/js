import { defineAsyncComponent, defineComponent, ref } from 'vue';
import Assistantinfo from '../ContactInformation/Assistantinfo/Assistantinfo';
import LeftMenu from '../LeftMenu/LeftMenu.vue';
const InstitutionPractice = defineAsyncComponent(() => import('../Summary/InstitutionPractice.vue'));
const TravelPreference = defineAsyncComponent(() => import('../Summary/TravelPreference.vue'));
const AssociatedAffiliations = defineAsyncComponent(() => import('../Summary/AssociatedAffiliations.vue'));
const InstitutionInfo = defineAsyncComponent(() => import('../Summary/InstitutionInfo.vue'));
const LinkedEngagements = defineAsyncComponent(() => import('../Summary/LinkedEngagements.vue'));
const RadiusProfile = defineAsyncComponent(() => import('../Summary/RadiusProfile.vue'));
const AdditionalInformation = defineAsyncComponent(() => import('../Summary/AdditionalInformation.vue'));
export default defineComponent({
  name: 'UserProfile',
  components: {
    'left-menu': LeftMenu,
    'institutionpractice-info': InstitutionPractice,
    'travel-preference': TravelPreference,
    'associated-affiliations': AssociatedAffiliations,
    'institution-info': InstitutionInfo,
    'linked-engagements': LinkedEngagements,
    'radius-profile': RadiusProfile,
    'add-info': AdditionalInformation,
  },

  methods: {
    consultant() {
      this.$router.push('/speakerconsultant');
    },
  },
});
