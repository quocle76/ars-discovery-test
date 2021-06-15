const BaseDialog = {
    name: 'BaseDialog',
    props: {
        backgroundImage: {
          type: String,
          default: ''
        },
        showDialog: {
            type: Boolean,
            default: false, 
        },
        isFullScreen: {
          type: Boolean,
            default: false, 
        }
    },
    methods: {
        clickHandle () {
          this.$emit('click')
        }
    },
}
  
export default BaseDialog
