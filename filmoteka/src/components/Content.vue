<template>

  <div class="Content container content-wraper content__cards content-section">
    <Header/>
    <Buttons @click="allTimePopularFilms();thisWeekFilms()" ></Buttons>
          <ContentItem  v-for="film in FILMS" :key="film.id" :filmData="film"
  />
    <Footer/>
      </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
import Buttons from "./Buttons"
import Header from "./Header.vue"
import Footer from "./Footer.vue"
import ContentItem from './ContentItem.vue'
import {mapActions,mapGetters} from 'vuex'
export default {
  name:'Content',
  components:{
    ContentItem,
    Footer,Header,
    Buttons

  },
  props:{},
  data() {
    return{
      films: [],
      searchValue:''
                      }
  },

  computed: {
    ...mapGetters([
        'FILMS',
      'SEARCH_VALUE'

    ])
  },
  watch:{
    SEARCH_VALUE(){
      this.searchFilmsByValue(this.SEARCH_VALUE);
    }

  },
  methods: {
    ...mapActions([
        'GET_FILMS_FROM_API'
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
          }
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
