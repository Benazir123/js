import { createStore, storeKey } from "vuex";

export default createStore({
  state: {
      firstName: "Benazir",
      lastName: "Fathima",
      count: 0
  },
  mutations: {
      increment(state){
          state.count++
      }
  },
  actions: {
    // increment(context){
    //   context.commit("increment")
    // }
  },
  modules: {},
});

// import { reactive } from "vue";

// export const store = reactive({
//     count: 0,
//     increment(){
//        this.count++
//     }
// })
