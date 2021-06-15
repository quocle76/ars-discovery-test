<template>
  <BaseDialog :backgroundImage="require('~/static/images/cubby-uniform@2x.png')" @click="toggleDialog" :showDialog="show" :isFullScreen="token === ''">
    <div v-show="token === ''">
      <div class="title-dialog">Log in to your ASR account to play and earn rewards.</div>
      <form class="sign-in">
        <BaseInput ref="email" type="email" placeholder="Email address" hasValidate errorMsg="Please enter a valid email address." :icon="['fas', 'envelope']"/>
        <BaseInput ref="password" type="password" placeholder="Password" hasValidate errorMsg="This field is required." :icon="['fas', 'lock']"/>
        <p class="policy">This site is protected by reCAPTCHA and the Google 
          <a href="#" class="link">Privacy Policy</a>
          and
          <a href="#" class="link">Terms of Service</a>
          apply.</p>
        <div class="button-label mb-37 mb-mb-0">
          <Button type="button" @click="handleLogin">Submit</Button>
          <p class="no-account mt-common-16">Don’t have an account? <a href="https://www.the-ascott.com/en/sign-up.html" class="link">Sign up</a> for free.</p>
        </div>
      </form>
    </div>
    <div v-show="token !== ''">
      <slot />
    </div>
  </BaseDialog>
</template>
<script>
import BaseDialog from '~/components/BaseDialog/BaseDialog.vue';
import BaseInput from '~/components/BaseInput/BaseInput.vue';
import Button from '~/components/BaseButton/BaseButton.vue';
import { mapActions } from 'vuex';

export default {
  name: 'LoginDialog',
  components: {
    BaseDialog,
    BaseInput,
    Button,
  },
  data() {
    return{
      hasToken: '',
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    token: {
      type: String,
      default: ''
    }
  },
  methods: {
    ...mapActions({
      login: 'user/login' // map `this.login()` to `this.$store.dispatch('user/login')`
    }),
    toggleDialog () {
      this.$emit('toggleDialog', !this.show)
    },
    async handleLogin () {
      this.$emit("handleClickCountry", 'GREETINGS')
      const {
        email : emailRef,
        password : passwordRef
      } = this.$refs;

      const recaptchaToken = await this.$recaptcha.execute('login')
      const emailChecked = emailRef.triggerValidate(emailRef.value, emailRef.type);
      const passwordChecked = passwordRef.triggerValidate(passwordRef.value, passwordRef.type);
      if (emailChecked && passwordChecked && recaptchaToken) {
        this.login({
          email: emailRef.value,
          password: passwordRef.value
        })
      }
    }
  },
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {}
  },
  beforeDestroy() {
    this.$recaptcha.destroy()
  }
};
</script>
<style lang="scss" scoped>
  @import 'LoginDialog';
</style>