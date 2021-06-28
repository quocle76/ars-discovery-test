const BaseRadio = {
  name: 'BaseRadio',
  props: {
    type: {
      type: String,
      default: 'radio'
    },
    value: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    keyAnswer: {
      type: String,
      default: ''
    },
    textAnswer: {
      type: String,
      default: ''
    },
    className: {
      type: Boolean,
      default: ''
    },
    showError: {
      type: String,
      default: ''
    },
    handleRadio: {
      type: Function,
      default: _ => _,
    },
    error: {
      type: Boolean,
      default: false
    },

  },
  methods: {
    handleChange (e) {
      this.$emit("handleRadio", {
        value: this.value,
        id: this.id
      });
    },
  },
}

export default BaseRadio