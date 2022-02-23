<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar shadow bg-white">
      <a
        class="navbar-brand ms-5"
        href="https://www.novastrid.com"
        target="_blank"
      >
        NovaStrid.com
      </a>
    </nav>
  </header>

  <div class="section">
    <div id="myImage">
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
        target="-blank"
      />
    </div>
  </div>

  <div>
    <center>
      <h1><b>Login</b></h1>
      <p>Click below to Login <i class="fas fa-user"></i></p>
    </center>
    <div>
      <input
        type="email"
        class="border-2 border-black bg-white"
        v-model="email"
        @keyup="validateEmail()"
        name="email"
        id="email"
        placeholder="Enter Your Email Address"
        required
      />
      <span v-if="email == '' && submitValidation == true"
        >Email is required</span
      >
      <span v-if="!RegEmail && email !== ''">Enter a valid email address</span>
    </div>
    <div>
      <input
        type="password"
        class="border-2 border-black bg-white"
        v-model="password"
        @keyup="validatePassword()"
        name="password"
        id="password"
        placeholder="Enter Your Password"
        required
      />
      <span v-if="password == '' && submitValidation == true"
        >Password is required</span
      >
      <span v-if="!RegPassword && password !== ''"
        >Password should be minimum 6 characters</span
      >
    </div>
    <div class="flex flex-row">
      <input
        type="checkbox"
        v-model="selected"
     
        @change="check($event)"
        class="mt-1.5"
      />
      <label class="pl-2" for="rememberMe">Remember Me</label>
    </div>
    <div>
      <button type="submit" class="btn btn-dark" @click="loginFunction()">
        Login
      </button>
    </div>
    <h5>OR</h5>
    <button
      @click="handleClickSignIn"
      class="border-1 border-black hover:bg-gray-200"
    >
      <i class="fab fa-google"></i>
      <!-- <img class="h-5 w-5 ml-10 mt-2 " alt="Google sign-in" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" /> -->
      Sign In with Google
    </button>
  </div>
</template>


<script>
import firebase from "firebase";
import { useRouter } from "vue-router";

export default {
  data() {
    let regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    let regexPassword = new RegExp("[a-z0-9A-Z].{6,}");
    let RegEmail = Boolean;
    let RegPassword = Boolean;
    let router = useRouter();
    return {
      submitValidation: false,
      email: "",
      password: "",
      regexEmail,
      regexPassword,
      RegEmail,
      RegPassword,
      router,
      selected: false,
    };
  },
  methods: {
    check() {
      console.log("selected", this.selected);
    },
    loginFunction() {
      this.remember_me();
      this.submitValidation = true;
      const loginDetails = {
        email: this.email,
        password: this.password,
      };
      console.log("Login Details=>", loginDetails);
      // if (
      //   this.email !== "" &&
      //   this.RegEmail == true &&
      //   this.password !== "" &&
      //   this.RegPassword == true
      // ) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((data) => {
            console.log("data", data);
            console.log("Successfully logged in!");
            // alert("Successfully logged in!")
            localStorage.setItem("loginDetails", JSON.stringify(loginDetails));
            this.router.push("/");
          })
          .catch((error) => {
            console.log(error.code);
            alert(error.message);
          });
        //localStorage.setItem("loginDetails",JSON.stringify(loginDetails))

        //  this.router.push("/")
  // }
      /*if(localStorage.getItem("loginDetails") !== null ){
                               this.router.push("/")
                     }*/
    },
    remember_me() {
      console.log("remember_me", this.email);
      console.log("remember_me", this.password);
      console.log("remember_me", this.selected)
      if (this.selected == true && this.email !== "" && this.password !== "") {
        localStorage.setItem("email", JSON.stringify(this.email));
        localStorage.setItem("password",JSON.stringify(this.password));
        localStorage.setItem("checked", this.selected)
      }
   },
    validateEmail() {
      this.RegEmail = this.regexEmail.test(this.email);
    },
    validatePassword() {
      this.RegPassword = this.regexPassword.test(this.password);
    },
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }

        console.log("googleUser", googleUser);
        var profile = googleUser.getBasicProfile().getEmail();
        console.log("getId", profile);
        console.log("getBasicProfile", googleUser.getBasicProfile());
        console.log("getAuthResponse", googleUser.getAuthResponse());
        console.log(
          "getAuthResponse",
          this.$gAuth.instance.currentUser.get().getAuthResponse()
        );
      } catch (error) {
        //on fail do something
        console.error("OH NOES", error);
        return null;
      }
    },
  },

  created() {
    this.submitValidation = false;
    const Email = JSON.parse(localStorage.getItem('email'))
    const Password = JSON.parse(localStorage.getItem('password'))
    const Checked = JSON.parse(localStorage.getItem('checked'))
    if(Checked && Checked == true && Email !== "" && Password !== ""){
           this.email = Email,
           this.password = Password,
           this.selected = Checked
    }
    console.log("Email", Email)
    console.log("Password", Password)
  },
};
</script>

<style scoped>
div {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

input[type="email"],
input[type="password"] {
  border-radius: 20px;
  padding: 10px;
  border-color: black;
}

.btn {
  margin-left: 100px;
  width: 30%;
}

#p1 {
  margin-left: 45%;
}

h5 {
  display: flex;
  flex-direction: row;
  padding: 1rem;
}

h5:before,
h5:after {
  content: "";
  flex: 1 1;
  border-bottom: 2px solid #000;
  margin: auto;
}

span {
  text-align: center;
  color: red;
}

img {
  width: 100%;
  height: 520px;
  align-items: center;
}
.section {
  float: left;
  width: 75%;
}
.right {
  float: left;
  width: 25%;
}
</style>

<!--
<script setup>
  import { ref } from 'vue'
  import firebase from 'firebase'
  import { useRouter } from 'vue-router'
  const regexEmail = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')
  const regexPassword =  new RegExp('[a-z0-9A-Z].{6,}')
  const RegEmail = ref(true)
  const RegPassword = ref(true)
  const email = ref('')
  const password = ref('')
  const router = useRouter() 
  const submitValidation = ref(true)
  const validateEmail = () => {
      RegEmail.value = regexEmail.test(email.value)
  }
  const validatePassword = () => {
      RegPassword.value = regexPassword.test(password.value)
  }
  const signIn = () => { 
        submitValidation.value = true
    if((email.value !== '' && RegEmail.value == true) && 
                     (password.value !== '' && RegPassword.value == true)){
           
}
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value) 
      .then((data) => {
        console.log('Successfully logged in!');
        router.push('/') 
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
      return{
        signIn,
        RegEmail,
        RegPassword,
        regexEmail,
        regexPassword,
        validateEmail,
        validatePassword,
        submitValidation
      }
      
  }
</script>
-->
 