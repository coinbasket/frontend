<template>
  <div>
    Did you know that Bitcoin went up 1000% last year?
    <div class="columns" style="margin: 0px 10px">
      <div v-for="cryptoBasket in baskets" class="column">
          <div class="card">
            <div class="card-image">
                <img :src="`/static/${cryptoBasket.logo }_logo.png`" height="50%" width="50%">
            </div>
            <div class="card-content">
              <div class="title is-5">{{ cryptoBasket.title }}</div>
              <p class="title price-title is-5">
                {{ cryptoBasket.price }}
                <span :class="{'positive-percent-change': 10}"> 5.5% 
                  <icon class="arrow-up" name="arrow-up" height="9" width="9"></icon>
                  <icon class="arrow-down" name="arrow-down" height="9" width="9"></icon>
                </span>
              </p>
              <p class="title6">
                {{ cryptoBasket.description }}
              </p>
              <a class="button is-success is-inverted is-outlined" :class="{'hide': isOpenedInIFrame}" @click="test">
                <span>Buy Now</span>
              </a>
            </div>
          </div>
      </div>
    </div>
    <div class="modal" :class="{'is-active': modalActive}">
      <div class="modal-background" @click="test"></div>
        <div class="modal-card">
          <header class="modal-card-head"></header>
          <section class="modal-card-body">
            <div class="content">
              <h3> Test </h3>
            </div>
          </section>
          <button class="modal-close is-medium" @click="test"></button>
        </div>
    </div>
  </div>
</template>

<script>
import { store } from '../../store.js'

export default {
  props: {},
  name: 'bodyHero',
  data () {
    return {
      sharedState: store.state,
      isOpenedInIFrame: false,
      modalActive: false
    }
  },
  created () {
    if (window.self !== window.top) {
      this.isOpenedInIFrame = true
    }
  },
  computed: {
    baskets () {
      return this.sharedState.cryptoBaskets
    }
  },
  methods: {
    getDifferenceInChange (cryptoCurrency) {
      cryptoCurrency.positivePercentChange = !(cryptoCurrency.percent_change_24h.indexOf('-') > -1)
      cryptoCurrency.percentChange24h = cryptoCurrency.percent_change_24h.replace(/^-/, '')
    },
    getPriceUSD (cryptoCurrency) {
      const priceUsd = cryptoCurrency.price_usd
      return Number(priceUsd).toFixed(2)
    },
    getPercentChange (cryptoCurrency) {
      return cryptoCurrency.percentChange24h
    },
    test () {
      this.modalActive = !this.modalActive
    }
  }
}
</script>

<style scoped lang="scss">
$small: 590px;
$medium: 768px;
$large: 1024px;

.card {
  background-color: initial;
  position: relative;
  height: 500px;
  cursor: pointer;
  box-shadow: 0 0 50px 5px rgba(0,0,0,.25);

  @media screen and (max-width: $medium) {
    max-width: 300px;
    display: block;
    margin: 0 auto;
  }

  @media screen and (max-width: $small) {
    max-width: 200px;
  }

  &:hover {
    border-radius: 4px;
    box-shadow: 0 0 5px 0 #fd6721;
    transition: .5s;
  }

  .card-image {
    .image {

      img {
        @media screen and (max-width: $small) {
          height: 90%;
          width: 90%;
          margin: 0 auto;
        }
      }
    }
  }

  .card-image-iframe {
    .image {
      top: -23px;
    }
  }

  .card-content {
    padding: 0;

    .title {
      left: 0;
      right: 0;
    }

    .title-iframe {
      font-size: 0.9rem;
      position: absolute;
      bottom: 12%;
      left: 0;
      right: 0;
    }

    .price-title {
      font-size: 1.0rem;
      font-weight: 600;

      .positive-percent-change {
        font-size: 0.9em;
        color: #00d1b2;

        .arrow-down {
          display: none;
        }
      }

      .negative-percent-change {
        font-size: 0.9em;
        color: #ff3860;

        .arrow-up {
          display: none;
        }
      }
    }

    .price-title-iframe {
      font-size: 0.9rem;
    }
  }
}

@-webkit-keyframes spinner {
    from 
    { 
        -webkit-transform: rotateY(0deg); 
    } 
    to { 
        -webkit-transform: rotateY(-360deg); 
    } 
}
@keyframes spinner { 
    from { 
        -moz-transform: rotateY(0deg); 
        -ms-transform: rotateY(0deg); 
        transform: rotateY(0deg); 
    } 
    to 
    { 
        -moz-transform: rotateY(-360deg); 
        -ms-transform: rotateY(-360deg); 
        transform: rotateY(-360deg); 
    
    } 
}
</style>
