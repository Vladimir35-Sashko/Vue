<template>
  <div class="Content container content-wraper  content-section">

    <Buttons></Buttons>
          <ContentItem  v-for="film in FILMS" :key="film.id" :filmData="film"
  />
    <Footer/>
      </div>
</template>

<script>
// @ is an alias to /src
import Buttons from "./Buttons"

import Footer from "./Footer.vue"
import ContentItem from './ContentItem.vue'
import {mapActions,mapGetters} from 'vuex'
export default {
  name:'Content',
  components:{
    ContentItem,

    Footer,
    Buttons

  },
  props:{},
  data() {
    return{
      films: [],
      searchvalue: ''
    }
  },

  computed: {
    ...mapGetters([
        'FILMS',
        'SEARCH_VALUE'
    ])
  },
  methods: {
    ...mapActions([
        'GET_FILMS_FROM_API'
    ]),
    filterFilmsBySearchValue(){
      return this.FILMS.filter(film => {
        return film.title.toLowerCase().includes(this.SEARCH_VALUE)
      })

    }
  },
  watch:{
    SEARCH_VALUE(){
      this.filterFilmsBySearchValue(this.SEARCH_VALUE);
    }

  },
  mounted() {
    this.GET_FILMS_FROM_API()
    .then((response)=>{
      if (response.data) {
        this.filterFilmsBySearchValue(this.SEARCH_VALUE)
      }
    })
  }

}
</script>
<style scoped>

</style>
