<template>
<div class="LoadMoreButton">
    <div  >
  <button  @click="loadMore" class="content__btn js-load-more" type="button">load more...</button>
</div>
</div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'

export default {
  name: "LoadMoreButton",
  data() {
    return {
      loadMoreSize: 5,
      totalSize: 0

    }
  },
  computed: {
    ...mapGetters([
      'FILMS',

    ]),
    films() {
      let filmsList = this.$store.state.films;
      return filmsList.splice(0, this.totalSize);

    }

  },
  methods: {
    ...mapActions([
      'GET_FILMS_FROM_API',

    ]),
    loadMore() {
      this.totalSize = this.loadMoreSize + this.films.length;

    },
  },
  mounted: function () {
    this.loadMore();
    this.$store.dispatch('GET_FILMS_FROM_API')
  }
}
</script>

<style scoped>

</style>