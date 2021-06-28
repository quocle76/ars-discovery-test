<template>
    <div>
        <label :for="id" class="radio-wrapper" @click="handleChange" :class="{'horizontal': className}" >
           <input :type="type" :value="value" :name="name" :id="id" @change="handleChange">
            <span class="input-text">{{ keyAnswer }}</span>
            <span>
                <span class="label-text">{{ textAnswer }}</span>
                <span class="error-msg" :class="{'horizontal': className}" v-show="error">Oops. Please try again.</span>
            </span>
        </label>
    </div>
</template>
<script src="./BaseRadio.js"></script>
<style lang="scss" scoped>
@import 'BaseRadio';
</style> 