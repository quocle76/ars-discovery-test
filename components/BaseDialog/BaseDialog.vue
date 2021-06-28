<template>
    <div class="dialog-transition" :class="isFullScreen ? 'dialog-transition-full-screen' : ''" v-show="showDialog"  @click="clickHandle">
      <div class="dialog-wrapper">
        <div class="dialog-container" @click.stop>
          <div class="dialog-button-close">
            <img :src="require('~/assets/images/close.svg')" alt="close" @click="clickHandle">
          </div>
          <div class="dialog-left">
            <slot />
          </div>
          <div class="dialog-right">
            <img :src="backgroundImage" alt="cubby-uniform">
          </div>
        </div>
      </div>
    </div>
</template>
<script src="./BaseDialog.js"></script>
<style lang="scss" scoped>
@import 'BaseDialog';
</style>
