<template>
<div class ="Wrapper container content-wraper container  content-section">

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

// import axios from "axios";

export default {
  name: "Wrapper",
  components: {

  },
  props:{},
  data(){
    return {}
  },
  methods:{

  }

}
</script>

<style >

</style>