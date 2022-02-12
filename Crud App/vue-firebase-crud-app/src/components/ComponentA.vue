<!-- Normal template without store
<template>
    <div class="text-center">
        <button @click="increment">Click to increase count</button>
       <h1>{{count}}</h1>
    </div>
</template>

<script>
export default {

    data(){
      return{
          count: 0
      }
    },
    methods:{
        increment(){
            this.count++
        }
    }
}
</script>
-->

<!-- Template with store example #1
<template>
    <div class="text-center">
        <button @click="store.count++">click</button>
        <h1>{{store.count}}</h1>
    </div>
</template>

<script>
import {store} from "../store/index.ts"
export default {
     data(){
         console.log("count",store.count)
         return{
           store
         }
     }
}
</script>
-->


<!--Template with store example #2-->
<template>
    <div class="text-center">
        <!-- <button @click="store.increment()">Click to increase count</button> -->
        <!-- <h1>ComponentA: {{store.count}}</h1> -->
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