<template>
  <div>
    <the-site-navigation
      :isSignedIn="isSignedIn"
      @onSignInButtonClick="onSignInButtonClick"
      @onSignOutButtonClick="onSignOutButtonClick"
    >
    </the-site-navigation>
    <Nuxt />
    <the-site-footer>
    </the-site-footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("user", ["getToken"]),
    isSignedIn () {
      return this.getToken ? true : false
    }
  },
  methods: {
    ...mapActions('user', {
      logout: 'logout',
      setToken: 'setToken'
    }),
    onSignInButtonClick () {
      this.setToken()
      this.$nuxt.$emit('signin', 'header');
    },
    onSignOutButtonClick () {
      this.setToken()
      this.logout;
    }
  }
}
</script>
