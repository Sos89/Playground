import user from './../../service/user'
export async function fetchUsers ({ commit }) {
  try {
    const res = await user.userInfo()
    console.log(res.data, 'user action');
    commit('setUsers', res.data)
  }
  catch ({response}){
    if (response.status === 401){
      localStorage.removeItem('token')
      localStorage.removeItem('res')
      this.$router.push('/')
    }
    console.log(response);
  }
}

