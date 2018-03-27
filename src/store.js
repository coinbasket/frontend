import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const baskets = require('./baskets.json')

export const store = {
  state: {
    totalMarketCapUSD: 0,
    cryptoBaskets: []
  },
  getBaskets () {
    this.state.cryptoBaskets = baskets
  },
  getTotalMarketCapUSD () {
    const getUrl = 'https://api.coinmarketcap.com/v1/global/'
    axios.get(getUrl).then((response) => {
      const globalData = response.data
      this.state.totalMarketCapUSD = globalData.total_market_cap_usd
    })
  }
}
