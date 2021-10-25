<template>
<div class ="Wrapper">
  <Header/>
  <Content/>
  <Footer/>
</div>
</template>

<script>
import Header from "./Header.vue"
import Footer from "./Footer.vue"
import Content from "./Content.vue"
export default {
  name: "Wrapper",
  components: {
    Content,
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>