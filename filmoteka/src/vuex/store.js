import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
axios.defaults.baseURL = "https://api.themoviedb.org/3";



Vue.use(Vuex);


let store = new Vuex.Store({
    state: {
        films: [],
        searchValue:""
    },
    mutations: {
        SET_FILMS_TO_STATE: (state, films) => {
            state.films = films.results;
        },
        SET_SEARCH_VALUE_TO_VUEX: (state,value) => {
            state.searchValue = value;
        }
    },
    actions: {
        GET_FILMS_FROM_API({commit}) {
            return axios("https://api.themoviedb.org/3/trending/movie/week?api_key=699fe261bad37d16f5bc7fa8547e0738", {
                method: "GET"

            })
                .then((films) => {
                    commit('SET_FILMS_TO_STATE', films.data);
                    return films;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        GET_SEARCH_VALUE_TO_VUEX({commit},value) {
            commit ('SET_SEARCH_VALUE_TO_VUEX',value)
        }

},

    getters: {
        FILMS(state) {
            return state.films;
        },
        SEARCH_VALUE(state) {
            return state.searchValue;
        }
    }

});


export default store;