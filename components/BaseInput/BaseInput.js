import { validateInput } from '~/helpers/validate'

const BaseInput = {
  name: 'BaseInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    placeholder: {
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
    },
    isHiddenValue: {
      type: Boolean,
      default: false
    },
    hasValidate: {
      type: Boolean,
      default: true
    },
    errorMsg: {
      type: String,
      default: 'Please enter a valid email address.'
    },
    icon: {
      type: Array,
      default: [],
    },
    classPostion: {
      type: String,
      default: 'left-icon'
    }
  },
  methods: {
    switchVisibility () {
      this.passwordField = this.passwordField === "password" ? "text" : "password"
    },
    triggerValidate (value, type, cb) {
      if (validateInput(value, type)) {
        this.isValid = true;
        if (cb) cb();
        return true;
      } else {
        this.isValid = false
        return false;
      }
    },
    changeHanlder (e) {
      this.$emit('change', e.target.value);
      this.value = e.target.value
    },
    handleBlur (e) {
      if (this.hasValidate) {
        this.triggerValidate(e.target.value, this.type, () => {
          this.value = e.target.value
        })
      }
    }
  },
  data: function () {
    return {
      isValid: true,
      value: '',
      passwordField: 'password'
    }
  }
}

export default BaseInput