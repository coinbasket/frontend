<template>
  <div class="hero-head">
    <header class="nav" :class="{'nav-iframe': isOpenedInIFrame}">
      <div class="container">
        <div class="nav-left">
          <router-link to="/" class="nav-item" :class="{'hide': isOpenedInIFrame}">
            <img src="/static/app-logo-2.png" class="app-logo" /> <p class="app-logo-name">Coin<span>Basket</span></p>
          </router-link>
        </div>
        <div class="nav-right nav-menu">
          <span class="nav-item">
            <img src="/static/app-logo.png" class="iframe-app-logo" :class="{'show': isOpenedInIFrame}"/>
            <a class="button is-success is-inverted is-outlined" :class="{'hide': isOpenedInIFrame}" @click="toggleModal">
              <span>My Account</span>
            </a>
          </span>
        </div>
      </div>
    </header>
  </div>
</template>

<script>

export default {
  name: 'headerHero',
  data () {
    return {
      modalActive: false,
      isOpenedInIFrame: false
    }
  },
  created () {
    if (window.self !== window.top) {
      this.isOpenedInIFrame = true
    }
  },
  methods: {
    toggleModal () {
      this.modalActive = !this.modalActive
    }
  }
}
</script>

<style scoped lang="scss">
$small: 590px;
$medium: 768px;
$large: 1024px;

.nav {
  font-family: Nunito, sans-serif;
  -webkit-box-shadow: 0px 0px 0px 0px !important;
  box-shadow: 0px 0px 0px 0px !important;

  .nav-left {
    overflow-y: hidden;

    .nav-item {
      @media screen and (max-width: $medium) {
        padding-top: 15px;
      }

      .app-logo {
        max-height: 35px;
        padding-right: 5px;
      }

      .app-logo-name {
        font-size: 18px;
        color: #FFF;
        letter-spacing: 5px;
        padding-top: 2px;

        @media screen and (max-width: $small) {
          display: none;
        }
      }
    }
  }

  .nav-right {
    @media screen and (max-width: $medium) {
      background-color: transparent;
      display: block;
      top: 0;
      left: inherit;
    }

    .nav-item {
      .iframe-app-logo {
        max-height: 25px;
        padding-right: 5px;
        display: none;
      }

      .button {
        &:hover {
          color: #fd6721;
        }
      }
    }
  }
}
.modal {
  .modal-card {
    border-radius: 10px;
    max-width: 500px;

     @media screen and (max-width: $medium) {
      margin: 0px;
    }

    .modal-card-head {
      display: block;
      background-color: #FFF;
      border-bottom: 0px;
      padding-bottom: 0px;

      .modal-logo {
        height: 80px;
        display: block;
        margin: 0 auto;
        margin-bottom: 10px;

        @media screen and (max-width: $medium) {
          height: 40px;
        }
      }

      .modal-card-title {
        font-size: 25px;
        letter-spacing: 5px;
      }
    }

    .modal-card-body {
      font-family: Nunito, sans-serif;
      color: #000;
      padding: 0px 20px;
      padding-bottom: 20px;

      p {
        font-size: 14px;

        @media screen and (max-width: $medium) {
          font-size: 12px;
        }

        a {
          color: #fd6721;
          font-weight: 700;
          text-decoration: none;
        }
      }

      h3 {
        color: #fd6721;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 10px;
      }

      #app-logo {
        height: 60px;
      }

      #vue-logo {
        height: 60px;

        -webkit-animation-name: spinner;
        -webkit-animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-duration: 30s;
        animation-name: spinner;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-duration: 30s;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        transform-style: preserve-3d;

        @media screen and (max-width: $medium) {
          height: 40px;
        }
      }

      .is-success {
        background-color: #fd6721;

        @media screen and (max-width: $medium) {
          display: none;
        }
      }
    }

    .modal-card-foot {
      font-family: Nunito, sans-serif;
      padding-bottom: 1px;
      background-color: transparent;

      @media screen and (max-width: $medium) {
        padding-top: 5px;
      }

      .content {
        color: #FFF;
        display: block;
        margin: 0 auto;

        @media screen and (max-width: $medium) {
          display: none;
        }

        .footer-title {
          font-size: 15px;
          font-weight: 400;
        }

        .footer-social-media {
          height: 30px;
          color: #fd6721;

          .icon {
            text-decoration: none;
            -webkit-transform: scale(0.8);
            -moz-transform: scale(0.8);
            -o-transfrom: scale(0.8);
            -webkit-transition-duration: 0.5s;
            -moz-transition-duration: 0.5s;
            -o-transition-duration: 0.5s;
            transition: 0.5s;

            &:hover {
              color: #4fc08d;
            }
          }
        }

        .wallet-content {
          display: block;
          margin: 0 auto;
          font-size: 11px;

          .wallet-tag {
            font-weight: 600;
            cursor: pointer;
            margin-bottom: 0px;
            -o-transition: .5s;
            -ms-transition: .5s;
            -moz-transition: .5s;
            -webkit-transition: .5s;
            transition: .5s;

            &:hover {
              color: #fd6721;
            }
          }

          .wallet-id {
            color: #00d1b2;
          }
        }
      }
    }
  }

  .modal-close {
    background-color: #fd6721;

    @media screen and (max-width: $medium) {
      position: absolute;
      top: 15px;
      right: 5px;
    }
  }
}

.hide {
  display: none !important;
}

.show {
  display: block !important;
}

.nav-iframe {
  height: 2.5rem;
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
