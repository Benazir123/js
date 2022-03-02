import Helper from '@/globalFunctions/Helper';
import ServiceLogin from '@/service/ServiceLogin/ServiceLogin';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ForgotPassword',
  data() {
    return {
      email: '',
      submitted: false,
      showDialog: false,
      showMessage: '',
      companyLogo: '',
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  methods: {
    backtologin() {
      this.$router.push('/login');
    },

    // Set Alternate img handle
    setAltImg() {
      this.companyLogo = '';
    },

    // Submit Form
    submit() {
      this.submitted = true;
      if (this.email !== '' && this.reg.test(this.email)) {
        const param = {
          email: this.email,
        };
        ServiceLogin.resetPassword(param).then(
          async (response: any) => {
            console.log('response', response);
            this.showDialog = true;
            this.showMessage = response.message;
          },
          error => {
            this.showDialog = true;
            this.showMessage = error.message;
          },
        );
      }
    },
  },
  created() {
    this.companyLogo = Helper.getCompanyData();
    console.log('com', this.companyLogo);
  },
});
