<template>
<div class ="Wrapper container content-wraper container  content-section">
  <Header/>
  <Buttons></Buttons>
  <keep-alive>
  <router-view></router-view>
  </keep-alive>
<!--  <Content/>-->
<!--  <Library/>-->

</div>
</template>

<script>
import Buttons from "./Buttons"

// import Content from "./Content.vue"
// import Library from "./Library";
import Header from "./Header.vue"

export default {
  name: "Wrapper",
  components: {
    Header,
    Buttons
  },
  props:{},
  data(){
    return {}
  }

}
</script>

<style >

</style>