import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoggedIn: !!localStorage.getItem('token'),
    token: localStorage.getItem('token'),
  },
  mutations: {
    LoginUser(state: any, token: any) {
      state.isLoggedIn = true;
      state.token = token;
      localStorage.setItem('token', token);
    },
    LogoutUser(state: any) {
      state.isLoggedIn = false;
      state.token = localStorage.removeItem('token');
    },
    tokenStored(state: any) {
      state.token = localStorage.getItem('token');
    },
    detailStored(state: any, data: any) {
      state.engData = data;
    },
    taskCategoryId(state: any, data: any) {
      state.catId = data;
    },
    notesCategoryId(state: any, data: any) {
      state.notesCatId = data;
    },
    reportsDetails(state: any, data: any) {
      localStorage.setItem('reportEndpoint', data);
    },
  },
  actions: {},
  modules: {},
});
