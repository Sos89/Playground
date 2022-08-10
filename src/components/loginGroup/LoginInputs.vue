<template>
  <div class="flex column">
    <div class="input_div">
      <p class="login">Login</p>
      <p class="text">To finalize your verification, please enter the code that has been sent to your email address / SMS</p>
      <InputGroup></InputGroup>
      <p class="msg">If you do not receive the confirmation message within a few minutes, please check your Spam or Bulk E-Mail folder</p>
    </div>
  </div>
</template>

<script>
import InputGroup from "components/loginGroup/inputGroup";
export default {
  name: "LoginInputs",
  components: {InputGroup}
};
</script>

<style scoped>
.text{
  height: 40px;
  margin-top: 20px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.87);
}
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

.msg{
  height: 30px;
  margin-top: 24px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.4px;
  color: #95A2A7;
}
</style>
