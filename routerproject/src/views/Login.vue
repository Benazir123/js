<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar shadow bg-white">
      <a class="navbar-brand ms-5" href="https://www.novastrid.com" target="_blank">
        NovaStrid.com
      </a>
    </nav>
  </header>
  <!-- <div>
    <input type="text" name="name" id="name" placeholder="Enter your name" required/>
  </div> -->
  <div>
    <input type="email" name="email" id="email" v-model="email" placeholder="Enter your email" pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;" required/>
    <span v-if="email == '' && submitValidation == true">Email is required</span>
    <span v-if="email != pattern && emailValidation == true && submitValidation == false">Please enter a valid email address</span>
  </div>
  <div>
    <input type="password" name="password" id="password" v-model="password" placeholder="Enter password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
    <span v-if="password == '' && submitValidation == true">Password is required</span>
    <span v-if="password !== pattern && passwordValidation == true && submitValidation == false">Password must contain atleast one number,one uppercase and one lowercase, And atleast 8 or more characters</span>
  </div>
  <div>
    <button type="submit" @click="loginFunction()" class="btn btn-success" name="login">Login</button>
  </div>
</template>

<script>

// import myService from "../services/myService"
export default {

    name: "Login",
    data(){
      return{
        emailValidation: false,
        passwordValidation: false,
        submitValidation : false,
         email: '',
         password: '',
      }
    },
    methods:{
        loginFunction(){
          this.submitValidation = true
          this.passwordValidation = true
          this.emailValidation = true
          const loginDetails = {
                 email: this.email,
                 password: this.password,
           }
           console.log("loginDetails=>", loginDetails)
          //  var storedValue =  myService.loginPost(loginDetails)
          // console.log("storedValue", storedValue)
          //  if(storedValue.apiStatus == true){
          //     myService.setToken(storedValue)
          //  }
         }

    },
    created() {
       this.submitValidation = false
       this.emailValidation = false
       this.passwordValidation = false
    },
}
</script>

<!--
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const submitFunction = () => {
      console.log("Submit");
      router.push({
        path: "/",
      });
    };
    return {
      submitFunction,
    };
  },
};
</script>
-->

<style scoped>
div {
  margin-top: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input[type="text"],input[type="email"],input[type="password"] {
  padding: 10px;
  border-radius: 5px;
  width: 300px;
}
input[type="submit"] {
  border-radius: 5px;
}

span{
    color: red;
}
</style>
