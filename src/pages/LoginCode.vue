<template>
<LoginComponent></LoginComponent>
</template>

<script>
import LoginComponent from 'components/LoginComponent'
export default {
  name: "LoginCode",
  components: { LoginComponent },
mounted() {
  if (!localStorage.res){
    this.$router.push('/')
  }
},
};
</script>

<style scoped>

</style>
