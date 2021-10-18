import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movie: {}
   
  },
  mutations: {
    setFilms(state,{movie}){
      state.movie=movie;
    }
    
  },
  actions: {
    
  },
  getters: {
    

  },
 
})
