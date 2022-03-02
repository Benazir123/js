<template>
    <div>
        <input type="text" v-model="name">
        <button>Send</button>
    </div>
</template>

<script>
export default {
mounted(){
  console.log("Contact has been mounted")
    },
activated() {
    console.log("Contact has been activated");
  },
  deactivated() {
    console.log("Contact has been deactivated");
  },
data(){
     return{
         name: ""
        }
    }
}
</script>