<template>
    <div class="flex column" style="height: 100vh;">
      <div class="input_div">
      <p class="login">Login</p>
        <label class="enter_email" for="email">Enter your email</label>
        <q-input v-model="model" type="email" class="input" placeholder="myemail@mail.com"/>
      <q-btn class="q-mt-sm" id="button" label="Send code" @click="reset" color="primary"/>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
name: "Log-in",
  setup () {
    const inputRef = ref(null)

    return {
      model: '',
      inputRef,
      dense: ref(false),
    }
  },
  methods: {
    reset() {


      // localStorage.setItem('storedData', this.model)


    }
  }
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
