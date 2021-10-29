<template>
<div class="Library">
<LibraryHeader/>
  <LibraryWatched
  @addToWatched="addToWatched"
  ></LibraryWatched>
  <LibraryQueve></LibraryQueve>
  <Footer/>
</div>

</template>

<script>
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
  methods:{
    addToWatched(data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>

</style>