<template>
<div class ="Wrapper">
  <Content/>
  <Library/>

</div>
</template>

<script>

import Content from "./Content.vue"
import Library from "./Library";
export default {
  name: "Wrapper",
  components: {
    Library,
    Content,

  }
}
</script>

<style scoped>

</style>