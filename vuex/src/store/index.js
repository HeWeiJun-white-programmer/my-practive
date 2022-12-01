import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import sumber from './sumber'
import Person from './Person'

export default new Vuex.Store({
  modules: {
    sumber,
    Person,
  },
})
