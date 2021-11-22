import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
axios.defaults.baseURL = "https://api.themoviedb.org/3";
import mutations from "./mutations/mutations";
import actions from "./actions/actions";
import getters from "./getters/getters";

Vue.use(Vuex);


let store = new Vuex.Store({
    state: {
        films: [],
        library:[],
        libraryWatched:JSON.parse(localStorage.getItem('libraryWatched') || '[]'),
        libraryQueue:JSON.parse(localStorage.getItem('libraryQueue') || '[]'),
        searchValue:"",
    },
    mutations,
    actions,
    getters,

});


export default store;