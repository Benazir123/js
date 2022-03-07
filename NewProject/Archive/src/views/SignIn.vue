<template>
  <!-- <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar
          isBlur="blur blur-rounded my-3 py-2 start-0 end-0 mx-4 shadow"
          btnBackground="bg-gradient-success"
          v-bind:darkMode="true"
        />
      </div>
    </div>
  </div> -->
  <main class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-8 card card-plain">
                <div class="pb-0 card-header text-start">
                  <h3 class="font-weight-bolder text-info text-gradient">
                    <img
                      class="w-75 h-75"
                      src="https://www.novastrid.com/images/NOVALOGO.png"
                    />
                  </h3>
                  <p class="mt-3">Admin Panel</p>
                </div>
                <div class="card-body">
                  <form role="form" class="text-start">
                    <div>
                    <label>Email</label>
                    <vsud-input
                      :type="number"
                      :value="email"
                      placeholder="Email"
                      @keyup="validateEmail"
                      name="email"
                    />
                    <span v-if="email == '' && submitValidation == true"
                      >Email is required</span
                    >
                    <span v-if="!RegEmail && email !== ''"
                      >Enter a valid email address</span
                    >
                    </div>
                    <div>
                    <label>Password</label>
                    <vsud-input
                      :type="show ? 'text' : 'password'" id="password" v-model="password"
                      :value="password"
                      placeholder="Password"
                      @keyup="validatePassword"
                      @mousedown="show = !show"
                      @mouseup="show = !show"
                      name="password"
                    />
                    <span v-if="password == '' && submitValidation == true"
                      >Password is required</span
                    >
                    <span v-if="!RegPassword && password !== ''"
                      >Password should be minimum 6 characters</span
                    >
                    </div>
                    <vsud-switch id="rememberMe" checked>
                      Remember me
                    </vsud-switch>
                    <div class="text-center">
                      <vsud-button
                        class="my-4 mb-2"
                        variant="gradient"
                        color="info"
                        fullWidth
                        @click="signinFunction()"
                        >Sign in
                      </vsud-button>
                    </div>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Don't have an account?
                    <a
                      href="javascript:;"
                      class="text-info text-gradient font-weight-bold"
                      >Sign up</a
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="
                  top-0
                  oblique
                  position-absolute
                  h-100
                  d-md-block d-none
                  me-n8
                "
              >
                <div
                  class="
                    bg-cover
                    oblique-image
                    position-absolute
                    fixed-top
                    ms-auto
                    h-100
                    z-index-0
                    ms-n6
                  "
                  :style="{
                    backgroundImage:
                      'url(' +
                      require('@/assets/img/curved-images/systemportal.png') +
                      ')',
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- <app-footer /> -->
</template>

<script>
//import Navbar from "@/examples/PageLayout/Navbar.vue";
// import AppFooter from "@/examples/PageLayout/Footer.vue";
import VsudInput from "@/components/VsudInput.vue";
import VsudSwitch from "@/components/VsudSwitch.vue";
import VsudButton from "@/components/VsudButton.vue";
// import { ref } from "@vue/reactivity";
const body = document.getElementsByTagName("body")[0];
import myService from '@/services/myService';
import { useRouter } from 'vue-router';

export default {
  name: "signin",
  components: {
    //Navbar,
    //AppFooter,
    VsudInput,
    VsudSwitch,
    VsudButton,
  },
  data(){
    let regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    let regexPassword = new RegExp("[a-z0-9A-Z].{6,}");
    let RegEmail = Boolean;
    let RegPassword = Boolean;
    let router = useRouter();
    return{
      regexEmail,
      regexPassword,
      RegEmail,
      RegPassword,
      submitValidation: false,
      email: "admin3@rd.com",
      password: "radius123",
      router,
      // validateEmail
      // email: "",
      // password: ""
    }
  },
  methods: {
    async signinFunction() {
       event.preventDefault();
      this.submitValidation = true;
       const employeeDetails ={
           email: this.email,
          password: this.password
       }
       console.log("EmployeeDetails", employeeDetails)
      var storedValue = await myService.loginPost(employeeDetails)
              console.log("storedValue", storedValue)
      if(storedValue && storedValue.apiStatus == true){
               this.router.push("/employee-system-info")
              console.log("router")
              myService.setToken(storedValue)
              
          }
            
    },
    validateEmail() {
      this.RegEmail = this.regexEmail.test(this.email);
      console.log("email", this.email);
      console.log("RegEmail", this.RegEmail);
    },
    validatePassword() {
      this.RegPassword = this.regexPassword.test(this.password);
      console.log("RegPassword", this.RegPassword);
    },
  },
  beforeMount() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
  created() {
    this.submitValidation = false;
  },
};
</script>

<style scoped>
span {
  color: red;
  font-size: 15px;
}
</style>
