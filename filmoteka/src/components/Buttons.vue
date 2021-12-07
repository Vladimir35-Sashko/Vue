<template>
  <div class="Buttons content__btn__list">
    <button class="content__btn" type="button" data-tag="trend" @click="thisWeekFilms()">this week</button>

    <button class="content__btn" type="button" data-tag="popular" @click="allTimePopularFilms()" >all time</button>
  </div>
</template>

<script>
import axios from "axios";
import genres from "../vuex/genresValue";

export default {
  name: "Buttons",
  data() {
    return {}
  },
  methods:{
    allTimePopularFilms(){
      return axios
          .get('https://api.themoviedb.org/3/movie/popular?api_key=699fe261bad37d16f5bc7fa8547e0738')
          .then((response)=>{
            this.$store.commit('SET_FILMS_TO_STATE', response.data);
                const filmList = response.data.results;
                genres(filmList);
          })
          .catch(error=> console.log(error));
    },
    thisWeekFilms(){
      return axios
          .get('https://api.themoviedb.org/3/trending/movie/week?api_key=699fe261bad37d16f5bc7fa8547e0738')
          .then((response)=>{
            this.$store.commit('SET_FILMS_TO_STATE', response.data);
            const filmList = response.data.results;
            genres(filmList);
          })
          .catch(error=> console.log(error));
    }
  }
}

</script>

<style scoped>
.Buttons{
  display: flex;
}

</style>