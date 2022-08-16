import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import myStore from './myStore'
import login from './login'
import user from './user'


export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      myStore,
      login,
      user
    },


    strict: process.env.DEBUGGING
  })

  return Store
})
