<template>
  <div class="Content">

  <ContentItem  v-for="film in FILMS" :key="film.id" :film-data="film"
  />
      </div>
</template>

<script>
// @ is an alias to /src
import ContentItem from './ContentItem.vue'
import {mapActions,mapGetters} from 'vuex'
export default {
  name:'Content',
  components:{
    ContentItem
  },
  props:{},
  data() {
    return{
      films: []

    }
  },
  computed: {
    ...mapGetters([
        'FILMS'
    ])
  },
  methods: {
    ...mapActions([
        'GET_FILMS_FROM_API'
    ])
  },
  mounted() {
    this.GET_FILMS_FROM_API()
    .then((response)=>{
      if (response.data) {
        console.log('Data a live')
      }
    })
  }

}
</script>
