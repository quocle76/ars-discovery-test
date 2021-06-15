const BaseButton = {
    name: 'BaseButton',
    props: {
        background: {
          type: String,
          default: ''
        },
        customWidth: {
          type: String,
          default: ''
        },
        customPadding: {
          type: String,
          default: ''
        },
        customClass: {
          type: String,
          default: ''
        }
      },
      methods: {
        clickHandle () {
          this.$emit('click')
        }
      }
}
  
export default BaseButton;