<template>

  <div class="Content container content-wraper content__cards content-section">
    <Header/>
    <Buttons @click="allTimePopularFilms();thisWeekFilms()" ></Buttons>
          <ContentItem  v-for="film in films" :key="film.id" :filmData="film" @addToWatched="addToWatched"
                        @addToQueve="addToQueve"
  />

    <Footer/>
    <GoToTop></GoToTop>
      </div>
</template>

<script>
// @ is an alias to /src

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
            let api = response.data.results
            this.films.push(...api);
            if (this.bottomVisible()) {
              this.addFilm()
            }
          })
     this.page++;

  },
    ...mapActions([
        'GET_FILMS_FROM_API',
        'ADD_TO_LIBRARY_WATCHED',
        'ADD_TO_LIBRARY_QUEVE',

    ]),
    searchFilmsByValue(value){
      if (value){
        return axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=699fe261bad37d16f5bc7fa8547e0738&query='+this.SEARCH_VALUE)
            .then((response)=>{
                            this.$store.commit('SET_FILMS_TO_STATE', response.data)
            })
            .catch(error=> console.log(error));
      }
          },
    addToWatched(data){
      this.ADD_TO_LIBRARY_WATCHED(data)
    },
    addToQueve(data){
      this.ADD_TO_LIBRARY_QUEVE(data)
    },

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
      }
    })
  }

}
</script>
<style scoped>

</style>
