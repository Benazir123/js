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
     <div v-if="!show">
        <div>
          <h1>EngagementDetails
            <button type="button" id="addUser" class="btn btn-info mt-3" @click="addUser()">Add User</button>
          </h1>
        </div>

          <div class="container"> 
          <table class="table table-hover">
                <thead>
                <tr>
                   <!-- <th>Id</th> -->
                   <th>Meeting Id</th>
                   <th>Topic</th>
                   <th>Engagement Type</th>
                   <th>EO Name</th>
                   <th>Speaker Name</th>
                   <th>Status</th>
                   <th>Date and Time</th>

                </tr>
                </thead>
                <tbody> 
                  <tr v-for="(result,index) in listArray" :key="index">
                    <!-- <td>{{user.userId}}</td> -->
                    <td>{{result.meeting_id}}</td>
                    <td>{{result.topic}}</td>
                    <td>{{result.engagement_type}}</td>
                    <td>{{result.eo_firstName}}{{result.eo_lastName}}</td>
                    <td>{{result.spk_firstName}}{{result.spk_lastName}}</td>
                    <td>{{result.status}}</td>
                    <td>{{dateFormat(result.createdAt)}}</td>
                    <!-- <td>{{user.email}}</td> -->
                  </tr>
                </tbody>
         </table> 
         </div> 
    </div>
     <div v-if="show">
         <AddUser @backtohome="renderhome()"/>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import myService from "../services/myService";
import { onMounted } from '@vue/runtime-core';
import AddUser from "../views/AddUser.vue"; 
import moment from "moment"
 export default {
      components: {
        AddUser
      },
    setup(){ 
     const dateFormat = (value) => {
           if(value){
              return moment(String(value)).format("MMM DD,yyyy h:mm A")
           }
     }
      const addUser = () => {
             show.value = true
             console.log("add", show.value)
      }
     const renderhome = () => {
         show.value = false
        listusers()
      }
      const show = ref(false)
      var list = new Array
       const listArray = ref()
        async function listusers(){
        list = await myService.userlist()
        listArray.value = list.result
       console.log("Get Method=>", listArray.value)
        
        // var postusers = await myService.postlist()
        // console.log("Post Method=>",postusers)

        // var putuser = await myService.putlist()
        // console.log("Put Method=>", putuser)
        }
        onMounted(listusers)
        return{
          listusers,
          list,
          show,
          addUser,
          renderhome,
          listArray,
          dateFormat
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


