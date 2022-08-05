<template>
  <div class="flex">
    <LoginInputs></LoginInputs>
  </div>
</template>

<script>
import LoginInputs from "components/loginGroup/LoginInputs";

export default {
  name: "LoginComponent",
  components: { LoginInputs },
  setup () {

    return {
      model: '',

    }
  }
};
</script>

<style scoped>

</style>
