<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Add User</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="user.name" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="user.email" required>
                </div>
                <div class="form-group">
                    <label>Contact</label>
                    <input type="text" class="form-control" v-model="user.contact" required>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block mt-3">Add User</button>
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
                user: {
                    name: "",
                    email: "",
                    contact: ""
                }
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
              db.collection("users").add(this.user)
                .then(() => {
                    alert("User successfully created!");
                    this.user.name = ''
                    this.user.email = ''
                    this.user.contact = ''
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>



