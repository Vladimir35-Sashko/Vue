<template>

<div class="ContentItem">

   <li class='content__card'>
    <a href='#!' :data-id='filmData.id' class='content__link'>
      <div class='poster__wraper'>
        <img
            :src='source'
            :alt='posterAlt'
            class='content__poster'
        />
      </div>
      <div class='card__description'>
        <p class='content__title'>{{filmData.title}}</p>
        <p class='content__info'><span class='content__genres'>{{filmData.genre_ids}}</span>
          |
          <span class='content__year'>{{filmData.release_date.slice(0,4)}}</span>
          <span class='content__rating'>{{filmData.vote_average}}</span></p>
      </div>
    </a>
  </li>
  </div>
</template>

<script>
// import genreList from "../vuex/genreList";

export default {
    name:'ContentItem',
  props:{
      filmData:{
        type: Object,
        default(){
          return {}
        }


    }
  },
    data() {
        return {
        }
    },
  computed:{
      posterAlt() {
        return `poster for ${this.filmData.title}`
      },
      source(){
        return `https://image.tmdb.org/t/p/w300${this.filmData.poster_path}`
      },
    // genresText(){
    //       let newGenres = [];
    //   this.filmData.genre_ids.map((id) => {
    //         const found = genreList.find((item) => item.id === id);
    //         newGenres.push(found.name);
    //         return item;
    //       });
    // }

    }

  }


</script>

<style>
.ContentItem{
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>