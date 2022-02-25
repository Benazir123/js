<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Add Employee</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Employee ID</label>
                    <input type="text" class="form-control" v-model="employee.empid" required>
                </div>
                <div class="form-group">
                    <label>Employee Name</label>
                    <input type="email" class="form-control" v-model="employee.name" required>
                </div>
                <div class="form-group">
                    <label>Position</label>
                    <input type="text" class="form-control" v-model="employee.position" required>
                </div>
                 <div class="form-group">
                    <label>System Name</label>
                    <input type="text" class="form-control" v-model="employee.systemname" required>
                </div>
                 <div class="form-group">
                    <label>System Type</label>
                    <input type="text" class="form-control" v-model="employee.systemtype" required>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block mt-3">Add User</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { db }  from '../firebaseDb';
 export default {
        data() {
            return {
                employee: {
                        empid: "",
                        name:"" ,
                        position: "",
                        systemname: "",
                        systemtype: ""
                }
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
              db.collection("employees").add(this.employee)
                .then(() => {
                    alert("Employee data successfully created!");
                    this.employee.empid = ''
                    this.employee.name = ''
                    this.employee.position = ''
                    this.employee.systemname = '' 
                    this.employee.systemtype = ''
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>



