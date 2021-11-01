<template>
<div class="Library">
<LibraryHeader/>
  <LibraryWatched
  @addToWatched="addToWatched"
  v-for="(item, index) in library_data"
  :key="item.id"
  :library_watched_data="item"
  @deleteFromWatched="deleteFromWatched(index)"
  ></LibraryWatched>
  <LibraryQueve
  @addToQueve="addToQueve"
  v-for="(item,index) in library_data"
  :key="item.id"
  :library_queve_data="item"
  @deleteFromQueve="deleteFromQueve(index)"
  ></LibraryQueve>
  <Footer/>
</div>

</template>

<script>
import {mapActions} from "vuex";
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
    library_data:{
      type: Array,
      default(){
        return []
      }
    }
  },
  methods:{
    ...mapActions([
        'DELETE_FROM_WATCHED',
        'DELETE_FROM_QUEVE'
    ]),
    addToWatched(data) {
      console.log(data)
    },
    addToQueve(data) {
      console.log(data)
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