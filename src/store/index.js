import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import myStore from './myStore'



export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      myStore
    },


    strict: process.env.DEBUGGING
  })

  return Store
})
