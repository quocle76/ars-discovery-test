import formatNumber from '~/helpers/common';

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
            default: 0
        },
        unit: {
            type: String,
            default: ''
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
         * Format score with units
         * @returns formatted score with units
         */
        totalUnits () {
            const suffix = this.score > 1 ? 's' : ''
            return `${formatNumber(this.score)} ${this.unit}${suffix}`;
        }
     },
}

export default BaseStickyButton
