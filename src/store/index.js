import Vuex from 'vuex'
import memesModule from '@/modules/memes'

export default new Vuex.Store({
  strict: false,
  state: {},
  modules: {
    memesModule
  },
})
