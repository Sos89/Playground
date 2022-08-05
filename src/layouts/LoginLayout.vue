<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lff" container style="height: 900px" class="shadow-2 rounded-borders">
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="800"
      >
        <div class="flex column">
          <div>
            <p class="paragraph">PLAYGROUND</p>
          </div>
          <div>
            <img
              alt="Quasar logo"
              src="~assets/image/image1.png"
            >
          </div>
        </div>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      drawer: ref(false)
    }
  }
}
</script>
<style scoped>
.paragraph{
  color: #003367;
  width: 370px;
  height: 32px;
  margin-top: 196px;
  margin-left: 215px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 32px;
  text-align: center;
  text-transform: uppercase;
}
img{
  width: 598px;
  height: 455px;
  margin-left: 122px;
  margin-top: 47px;
  margin-bottom: 140px;
}
</style>
