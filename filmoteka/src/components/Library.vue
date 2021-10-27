<template>
<div class="Library">
<LibraryHeader/>
  <Footer/>
</div>

</template>

<script>
import LibraryHeader from "./LibraryHeader"
import Footer from "./Footer";
export default {
  name: "Library",
  components: {
    LibraryHeader,
    Footer
  }
}
</script>

<style scoped>

</style>