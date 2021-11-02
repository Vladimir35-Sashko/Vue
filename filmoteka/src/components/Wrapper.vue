<template>
<div class ="Wrapper container content-wraper container  content-section">

  <keep-alive>
  <router-view
  :library_watched_data="LIBRARY_WATCHED"
  :library_queve_data="LIBRARY_QUEVE"
  ></router-view>
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
        'LIBRARY_WATCHED',
        'LIBRARY_QUEVE'
    ])

  },
  methods:{

  }

}
</script>

<style >

</style>