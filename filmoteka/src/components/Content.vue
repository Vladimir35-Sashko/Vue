<template>

  <div class="Content ">
    <div class=" container header__container home-container">
    <Header/>
    </div>
    <Buttons @click="allTimePopularFilms();thisWeekFilms()" ></Buttons>
    <div class="content__cards">
          <ContentItem  v-for="film in FILMS" :key="film.id" :filmData="film" @addToWatched="addToWatched"
                        @addToQueue="addToQueue"
  />
    </div>
    <Footer/>
    <GoToTop></GoToTop>
      </div>
</template>

<script>

import axios from "axios";
import Buttons from "./Buttons"
import Header from "./Header.vue"
import Footer from "./Footer.vue"
import GoToTop from "./GoToTop";
import ContentItem from './ContentItem.vue'
import {mapActions,mapGetters} from 'vuex'
export default {
  name:'Content',
  components:{
    ContentItem,
    Footer,
    Header,
    Buttons,
    GoToTop

  },
  props:{},
  data() {
    return{
      films: [],
      searchValue:'',
      page: 1,
      bottom: false
    }
  },

  computed: {
    ...mapGetters([
        'FILMS',
      'SEARCH_VALUE'

    ]),

  },
  watch:{
    SEARCH_VALUE(){
      this.searchFilmsByValue(this.SEARCH_VALUE);

    },
    bottom (bottom) {
      if (bottom) {
        this.addFilm()
      }
    }

  },
  methods: {
    bottomVisible () {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight

      return bottomOfPage || pageHeight < visible
    },
    addFilm () {
     axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=699fe261bad37d16f5bc7fa8547e0738&page=${this.page}`)
          .then(response => {
            const newFilm=response.data.results;
            this.$store.commit('ADD_FILMS_TO_STATE',...newFilm)
            if (this.bottomVisible()) {
              this.addFilm()
            }
          })
     this.page++;

  },
    ...mapActions([
        'GET_FILMS_FROM_API',
        'ADD_TO_LIBRARY_WATCHED',
        'ADD_TO_LIBRARY_QUEUE',

    ]),
    "searchFilmsByValue"(value){
      if (value){
        return axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=699fe261bad37d16f5bc7fa8547e0738&query='+this.SEARCH_VALUE)
            .then((response)=>{
                            this.$store.commit('SET_FILMS_TO_STATE', response.data)
            })
            .catch(error=> console.log(error));
      }
      else if(value===''){
        this.GET_FILMS_FROM_API()
      }
          },
    addToWatched(data){
      this.ADD_TO_LIBRARY_WATCHED(data)
    },
    addToQueue(data){
      this.ADD_TO_LIBRARY_QUEUE(data)
    },
    allTimePopularFilms(){
      return axios
          .get('https://api.themoviedb.org/3/movie/popular?api_key=699fe261bad37d16f5bc7fa8547e0738')
          .then((response)=>{
            this.$store.commit('SET_FILMS_TO_STATE', response.data)
          })
          .catch(error=> console.log(error));
    },
    thisWeekFilms(){
      return axios
          .get('https://api.themoviedb.org/3/trending/movie/week?api_key=699fe261bad37d16f5bc7fa8547e0738')
          .then((response)=>{
            this.$store.commit('SET_FILMS_TO_STATE', response.data)
          })
          .catch(error=> console.log(error));
    }

  },

  created () {
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
    this.addFilm()
  },

  mounted() {
    this.GET_FILMS_FROM_API()
    .then((response)=>{
      if (response.data) {
        this.searchFilmsByValue(this.SEARCH_VALUE)
        this.addFilm()
      }
    })
  }

}
</script>
<style scoped>

</style>
