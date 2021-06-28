<template>
  <button
    :class="[
            'sticky-button',
            variantClass,
            customClass
            ]"
    @click="$emit('click', $event)"
  >
    <img
      v-if="this.variant"
      :src="require(`~/assets/images/${this.variant}.png`)"
      class="sticky-button__image"
      alt=""
    />
    <span class="sticky-button__text">
      {{totalUnits}}
    </span>
  </button>
</template>

<script src="./BaseStickyButton.js"></script>

<style lang="scss" scoped>
@import "BaseStickyButton";
</style>