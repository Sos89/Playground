
import auth from './../../service/auth-service'
export async function  fetchEmail ({ commit }, payload) {
  try {
      await auth.sign(payload)
      commit('setEmail', payload.email)
  }catch (e) {
    console.log(e);
  }
}
