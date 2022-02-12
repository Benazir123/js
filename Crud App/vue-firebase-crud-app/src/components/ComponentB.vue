<!--Template with store example #2-->
<template>
    <div class="text-center">
        <!-- <button @click="store.increment()">Click to increase count</button> -->
        <!-- <h1>ComponentB: {{store.count}}</h1> -->
        <h1>{{$store.state.firstName}} {{$store.state.lastName}}</h1>
        <button @click="$store.commit('increment')">
            {{$store.state.count}}
        </button>
    </div>
</template>

<!--
<script>
import { store } from "../store/index.ts"
export default {
    data(){
      return{
            store
        }
    }
}
</script>
-->