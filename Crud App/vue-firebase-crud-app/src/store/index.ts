// import { createStore } from "vuex";

// export default createStore({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });

// import { increment } from "@firebase/firestore";
import { reactive } from "vue";

export const store = reactive({
    count: 0,
    increment(){
       this.count++
    }
})
