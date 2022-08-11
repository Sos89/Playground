<template>
    <div class="flex column">
      <div class="input_div">
      <p class="login">Login</p>
        <label class="enter_email" for="email">Enter your email</label>
        <form @submit.prevent="reset">
          <q-input
            v-model="form.email"
            type="email"
            class="input"
            placeholder="myemail@mail.com"
            :rules="[val => !!val || 'Field is required']"
          />
          <q-btn no-caps unelevated class="q-mt-sm" type="submit" id="button" label="Send code" color="primary"/>
        </form>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from "axios";
import { Notify } from 'quasar'
export default {
  plugins: { Notify },
name: "Log-in",
  setup () {
    const inputRef = ref(null)
    return {
      form: {
        email: ref('')
      },
      model: '',
      inputRef,
    }
  },
  methods: {
    reset() {
      axios.post('https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/GeneratePassword', this.form)
        .then((res) => {
          if (res.status === 200){
            localStorage.setItem('res', this.form.email)
            this.$q.notify({
              message: 'You have successfully passed the verification',
              position: 'top',
              color: 'green'
            })
            setTimeout(() => {
              this.$router.push('/code')
            }, 2000)
          }})
        .catch(err => {
          this.$q.notify({
            message: 'Enter the correct Login',
            position: 'top',
            color: 'red'
          })
        })
    },
  },

}
</script>

<style scoped>

.input_div{
  margin-left: 115px;
  width: 370px;
}
.login{
  width: 370px;
  height: 32px;
  margin-top: 327px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #003367;
  background: white!important;
}
.enter_email{
  height: 15px;
  margin-top: calc(50% - 15px/2 - 18px);
  margin-bottom: 8px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.4px;
  color: #95A2A7;
}
#button{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 9px 16px !important;
  gap: 10px;
  font-size: 12px;
  width: 117px;
  height: 36px;
  margin-left: 253px;
  margin-top: 108px!important;
  background: #003367 !important;
  border-radius: 4px;
}
.input{
  height: 20px;
  width: 370px !important;
  margin-top: 8px;
  margin-bottom: 24px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.87);
}

</style>

