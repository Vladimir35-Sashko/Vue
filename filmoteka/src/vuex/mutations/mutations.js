export default {
    SET_FILMS_TO_STATE: (state, films) => {
        state.films = films.results;
    },
    ADD_FILMS_TO_STATE:(state,payload)=>{
        state.films.push(payload);
    },
    SET_SEARCH_VALUE_TO_VUEX: (state,value) => {
        state.searchValue = value;
    },
    SET_LIBRARY_WATCHED:(state,film)=> {
        if (state.libraryWatched.length) {
            let isFilmExists = false;
            state.libraryWatched.map(function (item){
                if (item.id === film.id){
                    isFilmExists=true;
                    alert('This film was already added to watched')
                }
            })
            if (!isFilmExists) {
                state.libraryWatched.push(film)
            }
        } else {
            state.libraryWatched.push(film)
        }
        localStorage.setItem('libraryWatched',JSON.stringify(state.libraryWatched))

    },
    SET_LIBRARY_QUEVE:(state,film)=> {
        if (state.libraryQueve.length) {
            let isFilmExists = false;
            state.libraryQueve.map(function (item){
                if (item.id === film.id){
                    isFilmExists=true;
                    alert('This film was already added to watched')
                }
            })
            if (!isFilmExists) {
                state.libraryQueve.push(film)
            }
        } else {
            state.libraryQueve.push(film)
        }
        localStorage.setItem('libraryQueve',JSON.stringify(state.libraryQueve))

    },
    REMOVE_FROM_WATCHED:(state,index) =>{
        state.libraryWatched.splice(index,1)
        localStorage.removeItem('libraryWatched')
    },
    REMOVE_FROM_QUEVE:(state,index)=>{
        state.libraryQueve.splice(index,1)
        localStorage.removeItem('libraryQueve')
    }
}