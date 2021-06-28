/**
 * Format an integer with a comma as a thousands separators
 * @param {*} number 
 * @returns formatted number in string
 */
export default function formatNumber (number = 0) {
    let regex = /(\d)(?=(\d{3})+(?!\d))/g;
    return number.toString().replace(regex, '$1,')
}
