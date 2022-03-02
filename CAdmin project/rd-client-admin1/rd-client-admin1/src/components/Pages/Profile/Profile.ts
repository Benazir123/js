import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import { defineComponent, onBeforeMount, ref } from 'vue';

export default defineComponent({
  name: 'Profile',
  inheritAttrs: false,
  emit: ['close-profile'],
  props: {
    showProfile: {
      type: Boolean,
      default: false,
    },
    id: {
      default: '',
    },
  },
  data() {
    return {
      downArrow: require('@/assets/uparrow.svg'),
      upArrow: require('@/assets/uparrow.svg'),
      ArrowDetail: require('@/assets/uparrow.svg'),
      ArrowHeirechy: require('@/assets/right-arrowb.svg'),
      userProfiledetail: true,
      userProfileHierarchy: false,
      imgErrorSpk: 1,
    };
  },
  methods: {
    userHierarchy(row: any) {
      console.log('row', row);
      if (this.result && this.result.profile_information) {
        this.result.profile_information.forEach((element: any) => {
          if (row.sectiontitle !== element.sectiontitle) {
            element.istoggle = true;
          }
        });
      }
      if (row) {
        row.istoggle = !row.istoggle;
      }
      console.log('this.result.data.profile_information', this.result);
    },
    // Alt Img Handling
    errorImg(data: any) {
      data.errorImg = true;
      this.imgErrorSpk += 1;
    },
    closeProfile() {
      this.isshowProfile = false;
      this.$emit('close-profile');
    },
  },

  setup(props) {
    const isshowProfile = ref(props.showProfile) as any;
    const userId = ref(props.id) as any;
    const result = ref('') as any;
    const loader = ref(true) as any;

    const listProfile = async () => {
      try {
        const url = '/users/' + userId.value + '/profile';
        // var url = '/users/25953' + '/profile'
        const res = await ServiceEngagement.profile('get', url);
        console.log('profileres', res);
        if (res && res.apiStatus && Object.keys(res.data).length !== 0) {
          if (res.data && res.data.profile_information) {
            res.data.profile_information.forEach((element: any) => {
              element.fields.forEach((data: any) => {
                if (data.label === 'Tier Name' && data.value != null && data.value !== '' && data.value.indexOf('-') > -1) {
                  const getLabelVal = data.value.split('-');
                  data.value = getLabelVal[getLabelVal.length - 1];
                }
              });
              element.istoggle = true;
              element.uparrow = require('@/assets/uparrow.svg');
              element.rightarrow = require('@/assets/right-arrowb.svg');
            });
          }
          result.value = res.data;
        } else {
          result.value = '';
        }
      } catch (error) {
        result.value = '';
      }
      console.log('resutl', result.value);
    };
    // On Before mount Function
    onBeforeMount(async () => {
      if (userId.value !== '') {
        loader.value = true;
        await listProfile();
        loader.value = false;
      }
    });
    return {
      isshowProfile,
      listProfile,
      userId,
      result,
      loader,
    };
  },
});
