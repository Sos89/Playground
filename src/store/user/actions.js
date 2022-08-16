import axios from "axios";
export async function fetchUsers ({ commit }) {
  try {

     const token = JSON.parse(localStorage.getItem('token'))
    const {data} = await axios.get('https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/GetCurrentAppUser',{
      headers: {
        "Authorization": `Bearer ${token.token}`
      }
    })
    commit('setUsers', data)
  }
  catch ({response}){
    if (response.status === 401){
      localStorage.removeItem('token')
      localStorage.removeItem('res')
      this.$router.push('/')
    }
  }
}

