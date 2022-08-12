<template>
  <div style="display: flex; flex-direction: row; align-items: center">
    <form @submit.prevent="sendCode">
      <v-otp-input
        ref="otpInput"
        input-classes="otp-input"
        separator=" "
        :num-inputs="6"
        :should-auto-focus="true"
        :is-input-num="false"
        :conditionalClass="['one', 'two', 'three', 'four', 'five', 'six']"
        @on-complete="handleOnComplete"
      />
      <q-btn type="submit" class="q-mt-sm" id="button" label="Submit" color="primary"/>
    </form>
      <span class="material-icons" id="btn" @click="clearInput()">close</span>
  </div>
</template>

<script>
import { ref } from 'vue'
import VOtpInput from 'vue3-otp-input';
import { Notify } from 'quasar'
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  plugins: { Notify },
  name: "inputGroup",
  components: {VOtpInput,},
  setup() {
    const otpInput = ref(null)
    return {
      otpInput,
      code: '',
    };
  },
  computed: {
    ...mapGetters('login',['getCode']),
  },
  methods: {
    ...mapMutations('login', ['setCode']),
    ...mapActions('login', ['fetchCode']),
    handleOnComplete(value) {
      this.code = value
    },

    clearInput() {
      this.$refs.otpInput.clearInput();
    },

    async sendCode() {
      console.log( this.getCode );
      const email = localStorage.res
       await this.fetchCode({code: this.code, email })
      if ( this.code ) {
      localStorage.setItem('token', JSON.stringify(this.getCode))
        this.$router.push('/home')
      }else {
            this.$q.notify({
              message: 'Field',
              position: 'top',
              color: 'red'
            })
      }
      // this.$store.dispatch('login/getCode',{code: this.code, email:localStorage.res } )
      // axios.post('https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/LoginWithCode',{code: this.code, email:localStorage.res } )
      //   .then((res) => {
      //     localStorage.setItem('token', res.data.jwt.token)
      //     localStorage.setItem('refreshToken', res.data.jwt.refreshToken)
      //     if (res.status === 200){
      //       this.$q.notify({
      //         message: 'You have successfully passed the verification',
      //         position: 'top',
      //         color: 'green'
      //       })
      //       setTimeout(() => {
      //         this.$router.push('/home')
      //       }, 2000)
      //     }
      //   })
      //   .catch(err => {
      //     this.$q.notify({
      //       message: 'Field',
      //       position: 'top',
      //       color: 'red'
      //     })
      //   })
    }
  },

};
</script>

<style>
.otp-input {
  width: 46px;
  height: 46px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border: none;
  border-bottom: 2px solid #003367;;
  text-align: center;
}
/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: white;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.5px;
  color: rgba(0, 0, 0, 0.87);
}
#btn{
  color: #95A2A7;
  width: 14px!important;
  height: 14px!important;
  border: none!important;
  font-size: 32px;
  cursor: pointer;
  margin-left: 15px;
  margin-top: -30px;
}

#button{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 9px 16px !important;
  gap: 10px;
  width: 117px;
  height: 36px;
  margin-left: 310px;
  margin-top: 25px!important;
  background: #003367 !important;
  border-radius: 4px;
}
</style>
