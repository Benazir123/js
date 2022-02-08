<template>
    <div>
        <Header></Header>
    <div class="container mt-5">
         <router-view/>
    </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
    components: {
        Header,
    }
}
</script>