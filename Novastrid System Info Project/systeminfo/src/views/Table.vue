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
                    <tr v-for="employee in Employees" :key="employee.key">
                        <td>{{ employee.empid }}</td>
                        <td>{{ employee.name }}</td>
                        <td>{{ employee.position }}</td>
                        <td>{{ employee.systemname }}</td>
                        <td>{{ employee.systemtype }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: employee.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deleteEmployee(employee.key)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import { db } from '../firebaseDb';
export default {
        data() {
            return {
                Employees: []
            }
        },
        created() {
            db.collection('employees').onSnapshot((snapshotChange) => {
                this.Employees = [];
                snapshotChange.forEach((doc) => {
                    this.Employees.push({
                        key: doc.id,
                        empid: doc.data().empid,
                        name: doc.data().name,
                        position: doc.data().position,
                        systemname: doc.data().systemname,
                        systemtype: doc.data().systemtype,
                     })
                });
            })
        },
        methods: {
            deleteEmployee(id){
              if (window.confirm("Do you really want to delete?")) {
                db.collection("employees").doc(id).delete()
                .then(() => {
                    console.log("Document deleted!");
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            },
            addEmployee(){
                this.$router.push('/add')
            }
        }
    }
</script>
<style>
    .btn-primary {
        margin-right: 12px;
    }
</style>