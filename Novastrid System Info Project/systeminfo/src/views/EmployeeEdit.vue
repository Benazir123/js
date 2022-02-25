<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Update User</h3>
            <form @submit.prevent="onUpdateForm">
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
                    <button class="btn btn-success btn-block mt-3">Update User</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { db } from '../firebaseDb';
export default {
        data() {
            return {
                employee: {
                }
            }
        },
        created() {
            let dbRef = db.collection('employees').doc(this.$route.params.id);
            dbRef.get().then((doc) => {
                this.employee = doc.data();
            }).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                db.collection('employees').doc(this.$route.params.id)
                .update(this.employee).then(() => {
                    console.log("Employee data successfully updated!");
                    this.$router.push('/')
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>