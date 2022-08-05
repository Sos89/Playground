<template>
  <div style="display: flex; flex-direction: row; align-items: center">
  <v-otp-input
    filled
    ref="otpInput"
    v-model="nn"
    input-classes="otp-input"
    separator=" "
    :num-inputs="6"
    :should-auto-focus="true"
    :is-input-num="false"
    :conditionalClass="['one', 'two', 'three', 'four', 'five', 'six']"
    @on-change="handleOnChange"
    @on-complete="handleOnComplete"
  />
    <span class="material-icons" id="btn" @click="clearInput()">close</span>
  </div>

</template>

<script>
import { ref } from 'vue'
import VOtpInput from 'vue3-otp-input';
export default {
  name: "inputGroup",
  components: {VOtpInput,},
  setup() {
    const otpInput = ref(null)

    const handleOnComplete = (value) => {
      console.log('OTP completed: ', value);
    };

    const handleOnChange = (value) => {
      console.log('OTP changed: ', value);
    };

    const clearInput = () => {
      otpInput.value.clearInput()
    };



    return { handleOnComplete, handleOnChange, clearInput, otpInput };
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
}
</style>
