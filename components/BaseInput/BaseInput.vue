<template>
  <div class="input-wrapper">
    <div class="input-container">
      <input
        :type="type === 'password' ? passwordField : type"
        :text="text"
        :placeholder="placeholder"
        :class="[
          'input',
          customWidth? `input--${customWidth}` : '',
          customPadding ? `input--${customPadding}` : '',
          customClass ? `input--${customClass}` : '',
          isValid ? '' : `input-error`,
        ]"
        @input="changeHanlder"
        @blur="handleBlur"
      />
      <fa :icon="icon" />
      <fa :class="['visibility-password', passwordField === 'text' ? 'on' : '']" v-show="type === 'password'" :icon="['fa', 'eye']" @click="switchVisibility" />
    </div>
    <span class="error-msg" v-show="!isValid">{{errorMsg}}</span>
  </div>
</template>
<script src="./BaseInput.js"></script>
<style lang="scss" scoped>
@import 'BaseInput';
</style> 