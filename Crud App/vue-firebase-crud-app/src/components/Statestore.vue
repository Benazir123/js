<template>
    <div>
       <ComponentA/>
       <ComponentB/> 
    </div>
</template>

<script>
import ComponentA from "@/components/ComponentA.vue"
import ComponentB from "@/components/ComponentB.vue"

export default {
    components:{
        ComponentA,
        ComponentB
    }
}
</script>