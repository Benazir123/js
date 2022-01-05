<!--
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
-->

<!--
<template>
    <h1>Home</h1>
    <p>Welcome to my home page..!</p>
    <p>click below to login</p>
    <div class="forLogin">
       <a href="#" target="_blank">already have an account?</a>
       <button @click="loginFunction()" class="btn btn-outline-primary ms-2">Login</button>
    </div>
</template>

<script>
  import {useRouter} from "vue-router"
  export default {
  setup() {
    const router = useRouter();
    const loginFunction = () => {
      router.push({
        path: "/login",
      });
    }
    return {
      loginFunction
    }
  }
};
 
</script>

<style scoped>
h1,
p {
  display: flex;
  justify-content: center;
  align-items: center;
}
.forLogin{
   display: flex;
  justify-content: center;
  align-items: center;
}
</style>
-->

<template>
  <div class="content"></div>
</template>

<script>
  import axios from "axios"
  export default {
     created(){
      const api = "https://jsonplaceholder.typicode.com/users"
       let post = {
           id: 11,
           name: "bena",
           email: "bena@gmail.com"
       };
       let put ={
            id: 12,
           name: "arun",
           email: "arun@gmail.com"
       };
      axios.get(api)
      .then((result) => {
      console.log("Get Method", result.data);
        });
       axios.post(api, post)
      .then((result) => {
      console.log("Post Method", result.data);
        });
      axios.put(`${api}/${10}`, put)
      .then((result) => {
      console.log("Put Method", result.data);
        }); 
      axios.delete(`${api}/${1}`)
      .then((result) => {
      console.log("Delete Method", result.data);
       });
     }
  };
</script>


