import axios from "axios";


export default {
  async sign(payload) {
    const { status } = await axios.post('https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/GeneratePassword', payload)
    if (status === 200){
      return status
    }
  },
    async verification_code(payload) {
      const response = await axios.post('https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/LoginWithCode', payload)
      const jwt = response.data.jwt.token
      console.log(jwt, 'ukl;kjkl;k');
      return jwt
  }
}


