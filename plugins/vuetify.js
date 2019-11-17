import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  themes: {
    light: {
      prime: '#df8421'
    },
    dark: {
      prime: '#333'
    }
  },
  icons: {
    iconfont: 'mdi'
  }
})
