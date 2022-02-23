<!--Example1 for transition
<template>
    <div>
        <button @click="show = !show">Toggle</button>
        <Transition>
          <p v-if="show">Hello,It is Transition using Element</p>
        </Transition>
    </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'
import { ref } from '@vue/reactivity'

export default defineComponent({
    setup() {
        const show = ref(true)
        const nextId = 0;      
     return{
            show,
        }
    },
})
</script>

<style scoped>
  .v-enter-active,
  .v-leave-active{
      transition: opacity 0.5s ease;
  }

   .v-enter-from,
   .v-leave-to{
        opacity: 0;
  }
</style>
-->

<!--Example2 for transition group-->
<template>
  <button @click="show = !show">Toggle</button>
  <transition-group tag="div" class="VueOnly" name="fade" appear>
    <div class="graphs" v-for="item in itembyitems" :key="item.id">
      Item {{ item.id }}
    </div>
  </transition-group>
</template>

<script>
let nextId = 0;
export default {
  name: "App",
  data() {
    return {
      show: true,
    };
  },
  computed: {
    itembyitems() {
      if (!this.show) return [];
      return [{ id: nextId++ }, { id: nextId++ }, { id: nextId++ }];
    },
  },
};
</script>

<style>
.fade-enter-active {
  animation: fade-in 1s;
}

.fade-leave-active {
  animation: fade-in 1s reverse;
}

@keyframes fade-in {
  from {
    opacity: 0;
    width: 0;
    background-color: blue;
  }
  to {
    opacity: 1;
    width: 100%;
  }
}
</style>

<!--teleport example
<template>
   <button @click="open = true">Open Modal</button>
<teleport to='#teleport-target'> 
    <div v-if="open" class="modal">
       <p>Hello from the modal!</p>
       <button @click="open = false">Close</button>
    </div>
</teleport>
</template>

<script>
export default {
    data(){
        return{
            open: false
        }
    }
}
</script>

<style scoped>
  .modal {
    font-family: myriad-pro, sans-serif;
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 300px;
    padding: 30px;
    background-color: rgb(148, 135, 135);
  }
</style>
 -->