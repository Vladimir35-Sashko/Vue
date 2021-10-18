<template>
  <div class="Content">
  content
  <contentItem/>
      </div>
</template>

<script>
// @ is an alias to /src
import ContentItem from '@/components/ContentItem.vue';
export default {
  name:'Content',
  components:{
    ContentItem
  }
   
}
</script>
