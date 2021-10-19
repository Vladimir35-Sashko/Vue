import Vue from 'vue'
import Vuex from 'vuex'
// import axiosInstance from '@/api/index';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movie: {}
   
  },
  mutations: {
    setFilms(state,{page,movie}){
      state.movie[page]=movie;
    }
    
  },
  actions: {
    
  },
  getters: {
    

  },
 
})
