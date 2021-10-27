<template>
  <div class="Content container content-wraper  content-section">
    <Header/>
    <Buttons></Buttons>
          <ContentItem  v-for="film in FILMS" :key="film.id" :filmData="film"
  />
    <Footer/>
      </div>
</template>

<script>
// @ is an alias to /src
import Buttons from "./Buttons"
import Header from "./Header.vue"
import Footer from "./Footer.vue"
import ContentItem from './ContentItem.vue'
import {mapActions,mapGetters} from 'vuex'
export default {
  name:'Content',
  components:{
    ContentItem,
    Header,
    Footer,
    Buttons

  },
  props:{},
  data() {
    return{
      films: []
    }
  },

  computed: {
    ...mapGetters([
        'FILMS'
    ])
  },
  methods: {
    ...mapActions([
        'GET_FILMS_FROM_API'
    ])
  },
  mounted() {
    this.GET_FILMS_FROM_API()
    .then((response)=>{
      if (response.data) {
        console.log('Data a live')
      }
    })
  }

}
</script>
<style scoped>

</style>
