<template>
   <button
    :class="[
      'button',
      transparent ? `button--transparent` : '',
      customClass ? `button--${customClass}` : '',
      medium ? `button--medium` : ''
    ]"
    :disabled="disabled"
    @click="clickHandle"
  >
    <slot />
  </button>
</template>
<script src="./BaseButton.js"></script>
<style lang="scss" scoped>
@import 'BaseButton';
</style>