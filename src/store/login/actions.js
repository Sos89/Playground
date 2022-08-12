import axios from "axios";
export async function fetchCode ({commit}, payload) {
  try {
    const res = await axios.post('https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/LoginWithCode', payload)
    if (res.status === 200){
      const jwt = res.data.jwt
      console.log(jwt);
      commit('setCode', jwt)
    }
  }
  catch (err) {
    return false
  }
    // .then(res => {
      // if (res.status === 200){
      //   this.$router.push('/home')
      // }
    // })
  // payload.email = state
}
