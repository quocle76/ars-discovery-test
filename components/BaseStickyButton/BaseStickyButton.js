const BaseStickyButton = {
    name: 'BaseStickyButton',
    props: {
        src: {
            type: String,
            default: ''
        },
        customClass: {
            type: String,
            default: ''
        },
        variant: {
            type: String,
            default: null
        },
        score: {
            type: Number,
            default: 10
        },
        click: {
            type: Function,
            default: () => null
        }
    },
    computed: {
        /**
         * Generate class name base on variant prop
         * @returns class name
         */
        variantClass () {
            return this.variant ? `sticky-button--${this.variant}` : ''
        },

        /**
         * Append prefix/suffix text to score prop base on variant prop
         * @returns score with prefix/suffix text 
         */
        textScore () {
            let text = ''
            switch (this.variant) {
                case 'point':
                    text = this.score + ' pts'
                    break
                case 'nft':
                    text = 'x' + this.score
                    break
                default:
                    break
            }
            return text
        }
     },
}

export default BaseStickyButton
