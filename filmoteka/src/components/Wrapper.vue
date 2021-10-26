<template>
<div class ="Wrapper">
  <Header/>
  <Buttons></Buttons>
  <Content/>
  <Footer/>
</div>
</template>

<script>
import Buttons from "./Buttons";
import Header from "./Header.vue"
import Footer from "./Footer.vue"
import Content from "./Content.vue"
export default {
  name: "Wrapper",
  components: {
    Content,
    Header,
    Footer,
    Buttons
  }
}
</script>

<style scoped>

</style>