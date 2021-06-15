<template>
   <button
    :class="[
      'button',
      background ? `button--${background}` : '',
      customWidth? `button--${customWidth}` : '',
      customPadding ? `button--${customPadding}` : '',
      customClass ? `button--${customClass}` : ''
    ]"
    @click="clickHandle"
  >
    <slot />
  </button>
</template>
<script src="./BaseButton.js"></script>
<style lang="scss" scoped>
@import 'BaseButton';
</style>