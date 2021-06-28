export default {
  name: 'TheSiteNavigation',
  data () {
    return {
      applyWithBgClass: false,
      navigationMenuActive: false,
      expandDiscoverBrands: false,
      expandMembersBenefit: false,
      selectedItem: '',
    }
  },
  props: {
    isSignedIn: {
        type: Boolean,
        default: false
    },
  },
  mounted () {
    // if (window.outerWidth >= 1024) {
    // this.headerHeight = document.querySelector('.header').getBoundingClientRect().height
    this.scrollY = window.scrollY || document.body.scrollTop || document.documentElement.scrollTop
    document.addEventListener('scroll', () => {
      const currentScroll = (window.scrollY || document.body.scrollTop || document.documentElement.scrollTop)

      if (currentScroll > 0) {
        // this.applyHideHeaderClass = true
        this.applyWithBgClass = true
      } else {
        this.applyWithBgClass = false
      }

      this.scrollY = currentScroll
    });
    // }
  },
  computed: {
    userIsLoggedIn () {
      return this.isSignedIn
    }
  },
  methods: {
    onSignInButtonClick () {
      this.$emit('onSignInButtonClick', 'sign in clicked!')
    },
    onSignOutButtonClick () {
      this.$emit('onSignOutButtonClick')

    },
    handleExpandSubNavigation(item) {
      if(this.selectedItem != item){
        this.selectedItem = item
      }else{
        this.selectedItem = ''
      }
    }
  }
}
