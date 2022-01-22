<template>
   
  <h1>Vue 3 jQuery DataTable Example </h1>
    
   <table class="table table-hover table-bordered" id="example">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <!-- <th>Job Title</th> -->
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
        <!-- <td>{{user.job_title}}</td> -->
      </tr>
       
    </tbody>
  </table>
   
</template>
 
<script>


//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import axios from 'axios';
export default {
  
  mounted(){
    //API Call
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>
    {
      this.users = res.data;
      $('#example').DataTable();
    })
  },
  data: function() {
        return {
            users:[]
        }
    },
}
</script>