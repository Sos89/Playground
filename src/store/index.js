import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import email from './email'
import login from './login'
import user from './user'


export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      email,
      login,
      user
    },


    strict: process.env.DEBUGGING
  })

  return Store
})
