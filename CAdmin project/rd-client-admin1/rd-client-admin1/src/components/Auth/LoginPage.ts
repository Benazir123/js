import Helper from '@/globalFunctions/Helper';
import ServiceLogin from '@/service/ServiceLogin/ServiceLogin';
import { defineComponent, defineAsyncComponent } from 'vue';
const ForgotPassword = defineAsyncComponent(() => import('../Auth/ForgotPassword/ForgotPassword.vue'));
export default defineComponent({
  name: 'LoginPage',
  components: {
    'forgot-password': ForgotPassword,
  },
  data() {
    return {
      visible: false,
      loginvisible: true,
      username: '',
      password: '',
      submitted: false,
      showError: false,
      companyLogo: '',
      errorMsg: '',
      usernotfound: false,
      loader: false,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  methods: {
    LoginSubmit() {
      console.log('form submit');
      this.submitted = true;
      console.log('email', this.reg.test(this.username));
      const passdata = { username: this.username, password: this.password };
      if (this.username !== '' && this.password !== '' && this.reg.test(this.username)) {
        this.loader = true;
        ServiceLogin.Login(passdata).then(
          async (response: any) => {
            console.log('response', response);
            if (response.status) {
              console.log('success');
              this.$router.push('/');
            } else {
              console.log('Error');
              this.errorMsg = response.msg;
              this.showError = true;
              this.loader = false;
            }
          },
          error => {
            console.log('Error', error);
            this.errorMsg = error.data.error.message;
            this.showError = true;
            this.loader = false;
          },
        );
      }
    },
    forgotPage() {
      this.$router.push('/forgotpassword');
    },
    setAltImg() {
      this.companyLogo = require('@/assets/tgt-logo.png');
    },
  },

  // Company Logo
  created() {
    const getdate = Helper.getCompanyData() as any;
    console.log('companyData', getdate);
    if (getdate === '') {
      ServiceLogin.getCompany().then(async (res: any) => {
        console.log('Company Logo', res);
        if (res.is_success) {
          console.log('Company Logo', this.companyLogo);
          if (this.companyLogo === '') {
            this.companyLogo = res.company_logo;
          }
        }
      });
    } else {
      this.companyLogo = getdate.company_logo;
    }
  },
});
