<template>
  <div>
    <!-- Plus point -->
    <div
      class="result-container"
      v-if="
        gameState.submitSuccess &&
        gameState.country[gameCountry] &&
        gameState.country[gameCountry].chances < 2
      "
    >
      <div class="country">{{ title }}</div>
      <label>Awesome! You've earned:</label>
      <h1 class="title-lucky">100 ASR points</h1>
      <p class="sub-prize">+1 <a href="/art-gallery" target="_blank">NFT lucky draw chance</a></p>
      <p v-html="textLucky"></p>
      <BaseButton :transparent="true" @click="handleReplay" class="button-replay"
        >Play Again</BaseButton
      >
      <BaseButton @click="clickHandle" class="button-nextcountry button-label" :class="gameCountry.toLowerCase()"
        >Back to Map</BaseButton
      >
    </div>
    <!-- Plus Chance -->

    <div
      class="result-container"
      v-if="
        gameState.submitSuccess &&
        gameState.country[gameCountry] &&
        gameState.country[gameCountry].chances >= 2
      "
    >
      <div class="country">{{ title }}</div>
      <label>Awesome! You've earned:</label>
      <h1 class="title-lucky">+1 NFT lucky draw chance</h1>
      <p>
        Play again to earn more chances or check out all our prizes in the
        <a class="NFTlink" href="/art-gallery" target="_blank">NFT Art Gallery</a>.
      </p>
      <BaseButton :transparent="true" @click="handleReplay" class="button-replay"
        >Play Again</BaseButton
      >
      <BaseButton @click="clickHandle" class="button-nextcountry button-label" :class="gameCountry.toLowerCase()"
        >Back to Map</BaseButton
      >
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  components: {},
  props: {
    gameState: {
      type: Object,
      default: {},
    },
    title: {
      type: String,
      default: "",
    },
    textLucky: {
      type: String,
      default: "",
    },
    gameCountry: {
      type: String,
      default: "",
    },
  },
  computed: {},
  methods: {
    ...mapActions("country", ["getAttemptId",]),
    clickHandle() {
      this.$emit("closeDialog");
    },
    handleReplay() {
      this.$emit("handleReplay");
      if (this.gameCountry) {
        this.getAttemptId({ gameId: this.gameState.country[this.gameCountry]?.gameId });
      }
    },
  },
  destroyed: function () {},
};
</script>
<style lang="scss" scoped>
@import "./FormPlusChanceAndPoint.scss";
</style>