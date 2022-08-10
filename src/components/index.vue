<template>
  <div class="flex column">
    <div>
      <img
        alt="Quasar logo"
        src="~assets/image/image12.png"
      >
    </div>
    <p class="for_coming">Coming soon</p>
    <router-link id="edit" to="profile">EDIT MY PROFILE AND MY WORKLOG</router-link>
    <form @submit.prevent="logouth">
      <q-btn type="submit" color="white" text-color="black" id="logout" label="LOGOUT" />
    </form>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "index-list",
  methods: {
    logouth(){
      if (localStorage.res || localStorage.token || localStorage.refreshToken){
        localStorage.removeItem('res')
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        this.$q.notify({
          message: 'logouth successfully',
          position: 'top',
          color: 'green'
        })
        setTimeout(() => {
          this.$router.push('/code')
        }, 2000)
      }
      this.$q.notify({
        message: 'You have dont login',
        position: 'top',
        color: 'red'
      })
    }
  }
};
</script>

<style scoped>
.menu_bar{
  position: absolute;
  left: 0%;
  right: 96%;
  top: 0%;
  bottom: 0%;
  height: 900px;
  background: #003367;
}
img{
  width: 598px;
  height: 455px;
  margin-left: 476px;
  margin-top: 147px;
  margin-right: 462px;
}
.for_coming{
  width: 482px;
  height: 32px;
  margin-left: 534px;
  margin-top: 56px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 32px;
  text-align: center;
  text-transform: uppercase;
  color: #003367!important;
}

#edit{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 9px 16px;
  gap: 10px;
  width: 305px;
  height: 36px;
  background: #003367 !important;
  color: #FFFFFF!important;
  border-radius: 4px;
  margin-left: 622px;
  margin-top: 30px;
  text-decoration: none;
}
#logout{
  width: 92px;
  height: 18px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #003367 !important;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-left: 728px;
  margin-top: 16px;
  margin-bottom: 92px;
}
</style>
