<template>
    <div>
        <button v-for="tab in tabs" :key="tab" @click="component = tab">
        {{tab}}
        </button>
        <keep-alive>
           <component :is="component"/>
        </keep-alive>
    </div>
</template>

<script>
import About from "../views/About.vue"
import Contact from "../components/Contact.vue"
export default {
    components:{
        About,
        Contact
    },
    data(){
        return{
            tabs:["About","Contact"],
            component: "About"
        }
    }
}
</script>