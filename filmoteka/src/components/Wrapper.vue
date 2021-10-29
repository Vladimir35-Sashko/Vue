<template>
<div class ="Wrapper container content-wraper container  content-section">

  <keep-alive>
  <router-view></router-view>
  </keep-alive>
</div>
</template>



<script>
import {mapGetters} from "vuex";

export default {
  name: "Wrapper",
  components: {

  },
  props:{},
  data(){
    return {}
  },
  computed:{
    ...mapGetters([
        'LIBRARY'
    ])

  },
  methods:{

  }

}
</script>

<style >

</style>