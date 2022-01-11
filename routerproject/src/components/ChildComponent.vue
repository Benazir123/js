
<template>
    <div class="child-component">
        <button @click="sendMessagetoParent()">Click Me!</button> 
    </div>
</template>

<script>
export default {
    name: "ChildComponent",
    data() {
        return {
            message : "ChildMessage"
        }
    },
    methods: {
                 sendMessagetoParent(){
                    this.$emit("messageFromChild", this.message );
                },
            },
        };
</script>

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

