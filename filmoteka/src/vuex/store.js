import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
axios.defaults.baseURL = "https://api.themoviedb.org/3";



Vue.use(Vuex);


let store = new Vuex.Store({
    state: {
        films: [],
        library:[],
               searchValue:""
    },
    mutations: {
        SET_FILMS_TO_STATE: (state, films) => {
            state.films = films.results;
        },
        SET_SEARCH_VALUE_TO_VUEX: (state,value) => {
            state.searchValue = value;
        },
        SET_LIBRARY:(state,film)=> {
            if (state.library.length) {
                let isFilmExists = false;
                state.library.map(function (item){
                    if (item.id === film.id){
                        isFilmExists=true;
                        alert('This film was allready added to watched')
                    }
                })
                if (!isFilmExists) {
                    state.library.push(film)
                }
            } else {
                state.library.push(film)
            }

        },
        REMOVE_FROM_WATCHED:(state,index) =>{
            state.library.splice(index,1)
        },
        REMOVE_FROM_QUEVE:(state,index)=>{
            state.library.splice(index,1)
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
        },
        ADD_TO_LIBRARY({commit},film){
            commit('SET_LIBRARY',film);
        },
        DELETE_FROM_WATCHED({commit}, index) {
            commit('REMOVE_FROM_WATCHED', index)
        },
        DELETE_FROM_QUEVE({commit},index) {
            commit('REMOVE_FROM_QUEVE',index)
        }

},

    getters: {
        FILMS(state) {
            return state.films;
        },
        SEARCH_VALUE(state) {
            return state.searchValue;
        },
        LIBRARY(state) {
            return state.library;
        }
    }

});


export default store;