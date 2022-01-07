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
     <div>
        <div>
          <h1>Users Data
            <button type="button" id="addUser" class="btn btn-info mt-3" @click="addUser()">Add User</button>
          </h1>
        </div>

          <div class="container"> 
          <table class="table table-stripped">
                <thead>
                <tr>
                   <th>Id</th>
                   <th>Name</th>
                   <th>Email</th>
                </tr>
                </thead>
                <tbody> 
                  <tr v-for="(user,index) in list" :key="index">
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                  </tr>
                </tbody>
         </table> 
         </div> 
     <div v-if="show">
         <addUser/>
    </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import myService from "../services/myService";
import { defineAsyncComponent, onMounted } from '@vue/runtime-core';
import AddUser from "../views/AddUser.vue"
// import { useRouter } from 'vue-router';
 export default {
      component: {
        addUser : AddUser
      },
    setup(){
      // const router = useRouter();
      // const addUser = () => {
      //      router.push({
      //           path:"/adduser"
      //      });
      // }
      const addUser = () => {
             show.value = true
      }
      const show = ref(false)
      const list = ref()
        async function listusers() {
        list.value = await myService.userlist()
        console.log("Get Method=>", list.value)
        
        var postuser = await myService.postlist()
        console.log("Post Method=>", postuser)

        var putuser = await myService.putlist()
        console.log("Put Method=>", putuser)
        }
        onMounted(listusers)
        return{
          listusers,
          list,
          show,
          addUser
       }
     }
     
    }
 </script>

<style scoped>
 #addUser{
	float: right;
	width: 10%;
	border-radius: 8px;
	margin-right: 10px;
}
</style>


