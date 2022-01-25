<template>
     <div>
         <center>
         <h1><b>Login</b></h1>
         <font-awesome-icon icon="coffee"/>
         </center>
         <div>
             <input type="email" name="email" id="email" placeholder="Enter Your Email Address" required>
         </div>
         <div>
             <input type="password" name="password" id="password" placeholder="Enter Your Password" required>
         </div>
         <div>
            <button type="submit" class="btn btn-outline-dark">Login</button>
         </div>
       
        <hr size="5" noshade class="hr-text" data-content="OR"/>
           <!-- <g-signin-button @success="OnSignInSuccess" @error="OnSignInerror">Sign in with Google</g-signin-button>  -->
         </div>
</template>

<!--
<script>
// // import GSignInButton from 'vue-google-signin-button'
// import { defineComponent } from 'vue'
// // Vue.use(GSignInButton)

// export default defineComponent({
//     setup() {
//         // const OnSignInSuccess = (googleUser) => {
//         //       profile = googleUser.getBasicProfile() 
//         // },
//         // const OnSignInerror = () => {
//         //     console.log("OH NOES", error)
//         // }
//         // // return{
//         // //     OnSignInSuccess,
//         // //     OnSignInerror,
//         // //     profile
            
//         // }
//     },
// })
// </script>
-->
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {

    
}
</script>

<style scoped>
 div{
     padding: 1rem;
     display: flex;
     flex-direction: column;
 }

 input[type="email"],input[type="password"]{
      border-radius: 20px;
      padding: 10px;
 }

 button{
     margin-left: 70px;
     width: 50%;
     border-radius: 50%;
 }
</style>
