import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    films: {}
   
  },
  mutations: {
    setFilms(state,{films}){
      state.films=films;
    }
    
  },
  actions: {
    
  },
  getters: {
    

  },
 
})
