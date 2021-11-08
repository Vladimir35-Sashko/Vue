<template>
<div class="libraryQueve">


  <Popup
      v-if="isInfoPopupVisible"
      @closePopup="closeInfoPopup"

  >
    <div class='lightbox__overlay' ref="popup_wrapper"></div>
    <div class='lightbox__content'>
      <button type='button' class='lightbox__button' data-action='close-lightbox'
              @click="closeInfoPopup">
      </button>
      <img
          class='lightbox__image'
          :src='source'
          :alt='posterAlt'
      />
      <div class='lightbox__information'>
        <h2 class='lightbox__title'> {{library_queve_data.title}}</h2>
        <ul class='lightbox__list list'>
          <li class='lightbox__list__item'>
            <p class='item__list-title'> Vote / Votes</p>
            <p class=''>
              <span class='content__rating'> {{library_queve_data.vote_average}}</span>

              /
              <span class='content__vote'>{{library_queve_data.vote_count}}</span>
            </p>
          </li>
          <li class='lightbox__list__item'>
            <p class='item__list-title'>Popularity</p>
            <p class='item-info-popul'>
              {{library_queve_data.popularity}}</p>
          </li>
          <li class='lightbox__list__item'>
            <p class='item__list-title'>Original Title</p>
            <span class='item-info-orig'>
            {{library_queve_data.original_title}}
          </span>
          </li>
          <li class='lightbox__list__item'>
            <p class='item__list-title'>Genre</p>
            <span class='item-info-gen'>
{{library_queve_data.genre_ids}}
          </span>
          </li>
        </ul>
        <h3 class='lightbox__about'>About</h3>
        <p class='lightbox__text'>{{library_queve_data.overview}}
        </p>
        <div class='buttons-content'>
          <button
              class='content__btn js-modal-watched'
              type='button'
              data-action='btn-to-wached'
              value='Watched'
              @click="addToWatched"
          >{{ buttonTitle }}</button>
          <button
              class='content__btn js-modal-queue'
              type='button'
              data-action='btn-to-queue'
              value='Queue'
              @click="deleteFromQueve"
          >{{ buttonTitleQueve }}</button>
        </div>
      </div>
    </div>
  </Popup>




  <li class='content__card content__card__show__info' @click="showPopupInfo">
    <a href='#' :data-id='library_queve_data.id' class='content__link'>
      <div class='poster__wraper'>
        <img
            :src='source'
            :alt='posterAlt'
            class='content__poster'
        />
      </div>
      <div class='card__description'>
        <p class='content__title'>{{library_queve_data.title}}</p>
        <p class='content__info'><span class='content__genres'>{{library_queve_data.genre_ids}}</span>
          |
          <span class='content__year'>{{library_queve_data.release_date.slice(0,4)}}</span>
          <span class='content__rating'>{{library_queve_data.vote_average}}</span></p>
      </div>
    </a>
  </li>

</div>
</template>

<script>
import Popup from "../popup/Popup";
export default {
  name: "LibraryQueve",
  components: {
    Popup
  },

  props: {
    library_queve_data: {
      type: Array,
      default() {
        return []
      }
    },
    buttonTitle:{
      type:String,
      default: 'Add to watched'
    },
    buttonTitleQueve:{
      type:String,
      default: 'Del from Queve'
    }
  },
  data() {
      return {
        isInfoPopupVisible: false
      }
        },
  methods: {
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
    },
    deleteFromQueve(){
      this.$emit('deleteFromQueve',this.library_queve_data);
    },
    addToWatched(){
      this.$emit('addToWatched',this.library_queve_data);
    }
  },

    computed:{
      posterAlt() {
        return `poster for ${this.library_queve_data.title}`
      },
      source(){
        return `https://image.tmdb.org/t/p/w300${this.library_queve_data.poster_path}`
      },
},
  mounted() {
    let vm = this;
    document.addEventListener('click', function (item){
      if (item.target === vm.$refs['popup_wrapper']){
        vm.closeInfoPopup()
      }
    })
  }
}
</script>

<style scoped>
.libraryQueve{
  /*display:none;*/
}



</style>