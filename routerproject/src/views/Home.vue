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
            <button type="button" id="addUser" class="btn btn-info mt-3" >Add User</button>
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
                 <tbody id="table-body">
                 	<!--users api data displays here in table-->
                   
                 </tbody>
         </table> 
         </div>    

      </div>
</template>

<script>
     import axios from "axios";
      export default{
        mounted() {
              var list = new Array(
         axios.get("https://jsonplaceholder.typicode.com/users")
         .then((response) => {
             console.log("list", response.data);
              getTable(response.data)
         })
        
     )
     
            const getTable = (users) => {
            if(users.length > 0){
             var tableData = "";
        list.forEach(users => {
             tableData += "<tr><td>" + users.id + "</td>";
             tableData += "<td>" + users.name + "</td>";
             tableData += "<td>" + users.email + "</td></tr>";
         });
           document.getElementById("table-body").innerHTML = tableData;
      }
          return getTable() 
        }
            
        },
        

      

      //  var len = list.length;
      //  for(var i=0; i < len; i++);
      //  const getTable = (users) => {
      //    array.forEach(element => {
           
      //    });

      //  }



      // import myService from "../services/myService"
      // const tableBody = document.querySelector("#table-body");
       
      //  var user = myService.userlist()
      //   console.log("Get Method=>", user)
     
    //  const getTable = (users) => {
    //     if(users.length > 0){
    //       var temp = "";
    //       users.forEach(data => {
    //             temp += "<tr>";
    //             temp += "<td>" + data.id + "</td>"
    //             temp += "<td>" + data.name + "</td>"
    //             temp += "<td>" + data.email + "</td>"
    //             temp += "</tr>"
    //          });
    //         tableBody.innerHTML = temp; 
    //       }
    //  }

    //  function renderTable(){
    //      axios.get("https://jsonplaceholder.typicode.com/users")
    //      .then((response) => {
    //          console.log("B=>",response.data)
    //          getTable(response.data)
    //      })

    //  }

    //  window.addEventListener("load" , (e) => {
    //      e.preventDefault();
         
    //      renderTable();
    //  })

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


