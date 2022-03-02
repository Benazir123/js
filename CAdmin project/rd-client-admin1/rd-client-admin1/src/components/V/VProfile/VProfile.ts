import { defineAsyncComponent, defineComponent, ref } from 'vue';
const Profile = defineAsyncComponent(() => import('@/components/Pages/Profile/Profile.vue'));
export default defineComponent({
  name: 'VProfile',
  inheritAttrs: false,
  emits: ['errorImg'],
  components: {
    profile: Profile,
  },
  props: {
    smallProfile: {
      type: Boolean,
      default: false,
    },
    sideMenu: {
      type: Boolean,
      default: false,
    },
    userInfo: {
      type: Object,
    },
    width: {
      type: [String, Number],
      default: 'w-8',
    },
    height: {
      type: [String, Number],
      default: 'h-8',
    },
    isShowprofile: {
      default: true,
    },
  },

  methods: {
    setAltImg() {
      this.$emit('errorImg');
    },
    profile(userInfo: any) {
      console.log('userInfo', userInfo);
      if (userInfo && userInfo.id) {
        this.userId = userInfo.id;
        this.showProfile = true;
      }
    },
  },

  setup() {
    const showProfile = ref(false) as any;
    const userId = ref('') as any;
    return {
      showProfile,
      userId,
    };
  },
});
