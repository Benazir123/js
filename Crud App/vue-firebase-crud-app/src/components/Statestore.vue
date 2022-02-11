<!--
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

<!--
<template>
    <div class="text-center">
        <h1>{{store.count}}</h1>
    </div>
</template>

<script>
import store from "../store/index"
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

<template>
    <div>
        <button @click="store.increment()">
            {{store.count}}
        </button>
    </div>
</template>

<script>
import store from "../store/index.ts"
export default {
    data(){
        return{
            store
        }
    }
}
</script>