<template>
    <div class="container" v-if="!show">
         <h4>Click below to go back home page</h4>
        <button @click="goBack()" class="btn btn-outline-primary">Go Back</button>
        <h4>Click below to print the message</h4>
        <button @click="sendMessagetoParent()" class="btn btn-outline-dark">Click Me!</button> 
    </div>
    <div v-if="show">
       <Home/>
   </div>
</template>

<script>
import Home from "../views/Home.vue"
import { ref } from '@vue/reactivity'
export default {
    name: "ChildComponent",
    data() {
         const goBack = () => {
            show.value = true
         }
         const show = ref(false)
        return {
            message : "ChildMessage",
            show,
            goBack
        }
    },
    methods: {
                 sendMessagetoParent(){
                    this.$emit("messageFromChild", this.message );
                },
            },
            components:{
        Home
    },
 };
</script>

<style scoped>
   .container{
       display: flex;
       margin:auto;
       flex-direction: column;
        justify-content: center;
        align-items: center;
   }
   button{
       width: 100px;
   }
</style>

<!--
<template>
    <div>
        {{message}}
    </div>
</template>

<script>
export default {
     name: "ChildComponent",
     props: {
         message: String,
     },
};
</script>
-->

