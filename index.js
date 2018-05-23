import Date from './src/lib/date'
import { Currency, Number } from './src/lib/number'
import { Lowercase, Uppercase } from './src/lib/string'

const filters = {
  install (Vue, options) {
    options = options || {};
    let defaultOptions = {
      dateFormat: 'YYYY-MM-DD',
      symbol: '¥',
      currencySize: 2,
      numberSize: 0
    }
    options = Object.assign(defaultOptions,options)

    Vue.filter('date',Date(options))

    Vue.filter('currency',Currency(options))

    Vue.filter('number',Number(options))

    Vue.filter('lowercase',Lowercase)
    
    Vue.filter('uppercase',Uppercase)
  }
}

export default filters;