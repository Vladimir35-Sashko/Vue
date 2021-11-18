<template>
<div class="Library">
<!--  <LibraryHeader/>-->
  <div class="header__container container lib-container LibraryHeader" >
    <div class="header__nav-wrapper">
      <a class="logo__link" href=""
      ><img
          class="logo__img"
          width="24"
          height="24"
          src="../images/header/logo.svg"
          data-index="home" /></a
      ><a class="title-link" href="" data-index="home">Filmoteka </a>
      <ul class="header__nav list">
        <li class="header__nav-item">
          <router-link :to="{name: 'Content'}">
            <a class="header__nav-link"  href="">HOME</a>
          </router-link>
        </li>

        <li class="header__nav-item">
          <a
              class="header__nav-link header__nav-link--active"
              data-index="liba"
              data-name="Watched"
              href=""
          >MY LIBRARY</a
          >
        </li>
      </ul>
    </div>
    <div class="header__filter-button-wrapper">
      <button
          type="button"
          data-name="Watched"
          class="modal-button header__button--right modal-button--active js-watched"
      @click="currentComponent='LibraryWatched'"
      >
        Watched
      </button>
      <button type="button"
              class="modal-button js-queue"
              data-name="Queue"
              @click="currentComponent='LibraryQueve'"
      >
        Queue
      </button>
    </div>
  </div>
  <keep-alive>
<component :is="currentComponent" ></component>
      </keep-alive>
<!--  <LibraryWatched-->
<!--  @addToQueve="addToQueve"-->
<!--  v-for="(item, index) in library_watched_data"-->
<!--  :key="item.id"-->
<!--  :library_watched_data="item"-->
<!--  @deleteFromWatched="deleteFromWatched(index)"-->
<!--  ></LibraryWatched>-->


<!--  <LibraryQueve-->
<!--  @addToWatched="addToWatched"-->
<!--  v-for="(item,index) in library_queve_data"-->
<!--  :key="item.id"-->
<!--  :library_queve_data="item"-->
<!--  @deleteFromQueve="deleteFromQueve(index)"-->
<!--  ></LibraryQueve>-->

  <Footer/>
</div>

</template>

<script>
import {mapActions,mapGetters} from "vuex";
// import LibraryHeader from "./LibraryHeader"
import Footer from "./Footer"
import LibraryQueve from "./LibraryQueve";
import LibraryWatched from "./LibraryWatched";
export default {
  name: "Library",
  components: {
    // LibraryHeader,
    Footer,
    LibraryQueve,
    LibraryWatched
  },
  props:{
    library_watched_data:{
      type: Array,
      default(){
        return []
      }
    },
    library_queve_data:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentComponent:'LibraryWatched'
    }
  },
  computed: {
    ...mapGetters([
      'LIBRARY_WATCHED',
      'LIBRARY_QUEVE'

    ])
  },
  methods:{
    ...mapActions([
      'DELETE_FROM_WATCHED',
      'DELETE_FROM_QUEVE',
      'ADD_TO_LIBRARY_WATCHED',
      'ADD_TO_LIBRARY_QUEVE'

    ]),
    swapComponent(){
      if (this.currentComponent === LibraryWatched) {
        this.currentComponent = LibraryQueve;
      } else {
        this.currentComponent = LibraryWatched;
      }
    },
    addToWatched(data) {
      this.ADD_TO_LIBRARY_WATCHED(data)
    },
    addToQueve(data) {
      this.ADD_TO_LIBRARY_QUEVE(data)
    },
    deleteFromWatched(index){
      this.DELETE_FROM_WATCHED(index)

    },
    deleteFromQueve(index){
      this.DELETE_FROM_QUEVE(index)
    }
  }
}
</script>

<style scoped>
.LibraryHeader{
  margin-bottom: 60px;
}
</style>