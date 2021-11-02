<template>
<div class="Library">
  <KeepAlive>
    <router-view></router-view>
  </KeepAlive>

  <LibraryHeader/>


  <LibraryWatched
  @addToQueve="addToQueve"
  v-for="(item, index) in library_watched_data"
  :key="item.id"
  :library_watched_data="item"
  @deleteFromWatched="deleteFromWatched(index)"
  ></LibraryWatched>


  <LibraryQueve
  @addToWatched="addToWatched"
  v-for="(item,index) in library_queve_data"
  :key="item.id"
  :library_queve_data="item"
  @deleteFromQueve="deleteFromQueve(index)"
  ></LibraryQueve>

  <Footer/>
</div>

</template>

<script>
import {mapActions,mapGetters} from "vuex";
import LibraryHeader from "./LibraryHeader"
import Footer from "./Footer"
import LibraryQueve from "./LibraryQueve";
import LibraryWatched from "./LibraryWatched";
export default {
  name: "Library",
  components: {
    LibraryHeader,
    Footer,
    LibraryQueve,
    LibraryWatched
  },
  props:{
    library_watched_data:{
      type: Array,
      default(){
        return []
      }
    },
    library_queve_data:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      libraryWatched:[],
      libraryQueve:[]
    }
  },
  computed: {
    ...mapGetters([
      'LIBRARY_WATCHED',
      'LIBRARY_QUEVE'

    ])
  },
  methods:{
    ...mapActions([
        'DELETE_FROM_WATCHED',
        'DELETE_FROM_QUEVE',
      'ADD_TO_LIBRARY_WATCHED',
      'ADD_TO_LIBRARY_QUEVE'

    ]),
    addToWatched(data) {
      this.ADD_TO_LIBRARY_WATCHED(data)
    },
    addToQueve(data) {
      this.ADD_TO_LIBRARY_QUEVE(data)
    },
    deleteFromWatched(index){
      this.DELETE_FROM_WATCHED(index)

    },
    deleteFromQueve(index){
      this.DELETE_FROM_QUEVE(index)
    }
  }
}
</script>

<style scoped>

</style>