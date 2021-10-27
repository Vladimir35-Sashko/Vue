<template>
<div class ="Wrapper container content-wraper container  content-section">
  <Header/>
  <keep-alive>
  <router-view></router-view>
  </keep-alive>
<!--  <Content/>-->
<!--  <Library/>-->

</div>
</template>

<script>

// import Content from "./Content.vue"
// import Library from "./Library";
import Header from "./Header.vue"

export default {
  name: "Wrapper",
  components: {
    Header
  },
  props:{},
  data(){
    return {}
  }

}
</script>

<style >

</style>