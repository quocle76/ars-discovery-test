<template>
  <div class="wrap-btn" :class="showDesktop ? 'wrap-desktop' : 'wrap-mobile'">
    <Button
      :customClass="`btn-start-playing`"
      type="button"
      @click="handleStartPlaying"
      >Start Playing</Button
    >
    <div class="button-link">
      <a href="/art-gallery" target="_self">
        <Button :customClass="`btn-nft-art`" type="button" transparent
          >NFT Art Gallery</Button
        >
      </a>
    </div>
    <a href="#" target="_blank">
      <Button :customClass="`btn-weekly-flash`" type="button" transparent
        >Weekly Flash Sale</Button
      >
    </a>
  </div>
</template>
<script>
import Button from "~/components/BaseButton/BaseButton.vue";

export default {
  name: "TheGroupButton",
  components: {
    Button,
  },
  data() {
    return {};
  },
  props: {
    showDesktop: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleStartPlaying() {
      if (this.showDesktop) {
        this.$emit("scrollToMap");
      } else {
        this.$emit("hiddenScreen");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./TheGroupButton.scss";
</style>