import axios from "axios";
import { setEmail } from "src/store/myStore/mutations";
export function getEmail (state, payload) {
  axios.post('https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/GeneratePassword', payload)
    .then(res => {
      console.log(payload.email);
          if (res.status === 200){
              this.$router.push('/code')
          }
      })
  payload.email = state
}

