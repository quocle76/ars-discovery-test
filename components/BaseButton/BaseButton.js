const BaseButton = {
  name: 'BaseButton',
  props: {
    customClass: {
      type: String,
      default: ''
    },
    medium: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickHandle() {
      this.$emit('click')
    }
  }
}

export default BaseButton;