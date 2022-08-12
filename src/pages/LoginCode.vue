<template>
<LoginComponent></LoginComponent>
</template>

<script>
import LoginComponent from 'components/LoginComponent'
import { mapGetters } from 'vuex'
export default {
  name: "LoginCode",
  components: { LoginComponent },
mounted() {
  console.log(this.getEmail);
  if (!this.getEmail){
    this.$router.push('/')
  }
},
  computed: {
    ...mapGetters('myStore',['getEmail']),
  },
};
</script>

<style scoped>

</style>
