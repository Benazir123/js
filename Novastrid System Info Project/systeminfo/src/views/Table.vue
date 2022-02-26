<template>
<div>
   <h1>Personnel's System Database
         <button
          type="button"
          id="addUser"
          class="btn btn-info mt-3"
          @click="addEmployee()"
        >
          Add Employee
        </button>
    </h1>
</div>
<div>
    <div>
        <input type="text" v-model="search" placeholder="Search by Name" class="rounded"/>
    </div>
      <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Position</th>
                        <th>System Type</th>
                        <th>System State</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(employee,index) in employees,filteredRows" :key="index">
                        <td>{{ employee.empId }}</td>
                        <td>{{ employee.name }}</td>
                        <td>{{ employee.position }}</td>
                        <td>{{ employee.systemname }}</td>
                        <td>{{ employee.systemtype }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
 <!-- <div>
    <Pagination
      v-model="page"
      @paginate="pageChangeEvent($event)"
    />
  </div> -->
</template>

<script>
// import Pagination from 'v-pagination-3';
import { useRouter } from 'vue-router'
export default {
    // components:{
    //    Pagination
    // },
    data(){
        let router = useRouter();
        return{
          router,
          employees: [],
          search:""
          
        }
    },
    methods:{
       addEmployee(){
           this.router.push("/add")
        },
        filteredRows(){
             return this.employees.filter(employee => {
                 const empName = employee.name.toString().toLowerCase();
                 const searchTerm = this.filter.toLowerCase();
                 return empName.includes(searchTerm)
             })
        }
     },
    // created() {
    //        var formData = JSON.parse(localStorage.getItem("submitDetails")) 
    //         console.log("ADD Employee", formData)
    //       this.employees.push(formData)
    // },
}
</script>

<style>
    #addUser {
  float: right;
  width: 12%;
  border-radius: 8px;
  margin-right: 10px;
}

</style>