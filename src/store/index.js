import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import myStore from './myStore'
import login from './login'


export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      myStore,
      login
    },


    strict: process.env.DEBUGGING
  })

  return Store
})
