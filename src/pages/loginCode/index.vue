<template>
<LoginComponent></LoginComponent>
</template>

<script>
import LoginComponent from 'components/LoginComponent'
import { mapGetters } from 'vuex'
import { Notify } from 'quasar'
export default {
  plugins: { Notify },
  name: "LoginCode",
  components: { LoginComponent },
mounted() {
  if (!this.getEmail){
    this.$router.push('/')
  }
},
  computed: {
    ...mapGetters('email',['getEmail']),
  },
};
</script>

<style scoped>

</style>
