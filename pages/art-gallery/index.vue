<template>
  <div class="art-gallery">
    <div class="back-to-map-link">
      <a
        href="/"
        class="link"
      ><img
          class="icon"
          :src="require('~/assets/images/icon-back.png')"
          alt=""
        />Back to Map</a>
    </div>
    <div class="art-gallery__wrap-content">
      <div class="art-gallery__title">
        <img :src="require('~/assets/images/art-gallery.png')" alt="" />
        <h1>NFT Art Gallery </h1>
        <h5>Stand to win weekly NFT prizes in 11 different designs. Keep playing to earn more lucky draw chances.</h5>
      </div>
      <div class="art-gallery__content__desktop">
        <div class="art-gallery__image" v-for="item in dataImages" :key="item.id">
            <img :src="require('~/assets/images/' + item.src)" alt="#" v-if="item.id !== '11'"/>
            <div class="art-gallery__image__description" v-html="item.text" v-if="item.id !== '11'"></div>
            <a href="#" target="_blank" v-if="item.id === '11'" class="link-target">
              <img :src="require('~/assets/images/' + item.src)" alt="#"/>
            </a>
        </div>
      </div>
      <div class="art-gallery__content__mobile">
        <VueSlickCarousel v-bind="settings">
          <div class="art-gallery__image" v-for="item in dataImages" :key="item.id">
            <img :src="require('~/assets/images/' + item.src)" alt="#" v-if="item.id !== '11'"/>
            <div class="art-gallery__image__description" v-html="item.text" v-if="item.id !== '11'"></div>
            <a href="#" target="_blank" v-if="item.id === '11'" class="link-target">
              <img :src="require('~/assets/images/' + item.src)" alt="#"/>
            </a>
          </div>
        </VueSlickCarousel>
      </div>
      <div class="art-gallery__wrapper-button">
        <NuxtLink to="/">
          <Button
          :customClass="`btn-start-playing`"
          type="button"
          >Start Playing</Button
        >
        </NuxtLink>
      </div>
    </div>
     <div class="border-line">
        <div class="line-custom-left">
          <span></span>
          <span></span>
        </div>
        <div class="line-custom-right">
          <span></span>
        </div>
        <div class="border-left">
          <img :src="require('~/assets/images/border-left.svg')" alt="" />
        </div>
        <div class="border-right">
          <img :src="require('~/assets/images/border-left.svg')" alt="" />
        </div>
      </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Button from "~/components/BaseButton/BaseButton.vue";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  // optional style for arrows & dots
export default {
  layout: 'outside',
  data() {
    return {
      settings: {
        "centerMode": true,
        "focusOnSelect": true,
        "infinite": true,
        "slidesToShow": 1,
        "autoplay": true,
        "edgeFriction": 0.35,
        "autoplaySpeed": 4000,
        "swipeToSlide": true,
        "dots": true,
        "swipe": true,
      },
      dataImages: [
        {
          id: '0',
          src: 'gallery-fr.png',
          text: 'WEEK 1 <br /> 12 - 16 JULY'
        },
        {
          id: '1',
          src: 'gallery-aus.png',
          text: 'WEEK 2 <br /> 19 - 23  JULY'
        },
        {
          id: '2',
          src: 'gallery-cn.png',
          text: 'WEEK 3 <br /> 26 - 30  JULY'
        },
        {
          id: '3',
          src: 'gallery-id.png',
          text: 'WEEK 4 <br /> 2 - 6 AUGUST',
        },
        {
          id: '4',
          src: 'gallery-sg.png',
          text: 'WEEK 5 <br /> 9 - 13 AUGUST'
        },
        {
          id: '5',
          src: 'gallery-th.png',
          text: 'WEEK 6 <br /> 16 - 20 AUGUST'
        },
        {
          id: '6',
          src: 'gallery-kr.png',
          text: 'WEEK 7 <br /> 23 - 27 AUGUST'
        },
        {
          id: '7',
          src: 'gallery-india.png',
          text: 'WEEK 8 <br /> 30 AUGUST - 3 SEPTEMBER'
        },
        {
          id: '8',
          src: 'gallery-ph.png',
          text: 'WEEK 9 <br /> 6 - 10 SEPTEMBER'
        },
        {
          id: '9',
          src: 'gallery-vn.png',
          text: 'WEEK 10 <br /> 13 - 17 SEPTEMBER'
        },
        {
          id: '10',
          src: 'gallery-my.png',
          text: 'WEEK 11 <br /> 20 - 24 SEPTEMBER'
        },
        {
          id: '11',
          src: 'gallery-opensea.png',
          text: '',
        }
      ]
    };
  },
  components: {
    VueSlickCarousel,
    Button
  },
  props: {},
  computed: {},
  methods: {},
  destroyed: function () {},
};
</script>
<style lang="scss" scoped>
@import "./styles.scss";
</style>