import axios from "axios";

export default {
  async userInfo() {
    const token = JSON.parse(localStorage.getItem('token'))
    const res = await axios.get('https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/GetCurrentAppUser',
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
    return res
  },
}
