import axios from "axios";
export async function  fetchEmail ({ commit }, payload) {
  try {
    const { status ,config } = await axios.post('https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/GeneratePassword', payload)
    if (status === 200) {
      commit('setEmail', payload.email)
    }
  }catch (e) {
    return false;
  }
}
