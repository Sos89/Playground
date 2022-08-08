
<template>
  <div>
    <q-layout view="hHh Lpr lff" container style="height: 100vh; " >
      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="!drawer || miniState"
        @click.capture="drawerClick"
        :width="200"
        :breakpoint="500"
        bordered
        style="background-color: #003367; width: 64px"
      >

        <template v-slot:mini>
          <q-scroll-area class="fit mini-slot cursor-pointer">
            <div class="q-py-lg">
              <div class="column items-center">
                <span @click="drawer" class="material-icons" id="menu">menu</span>
                <span class="material-icons" id="icon_dashboard">dashboard</span>
                <span class="material-icons" id="calendar">perm_contact_calendar</span>
              </div>
            </div>
          </q-scroll-area>
        </template>
        <div class="q-mini-drawer-hide" >
          <q-btn
            dense
            round
            unelevated
            color="accent"
            icon="chevron_left"
            @click="miniState = true"
          />
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
  name: 'side-bar',
  setup () {
    const miniState = ref(true)

    return {
      drawer: ref(false),
      miniState,

      drawerClick (e) {
        if (miniState.value) {
          miniState.value = false
          e.stopPropagation()
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
#menu
  position: absolute
  left: 20px
  top: 26px
  width: 20px
  height: 18px
  color: #DADADA
  font-size: 24px

#icon_dashboard
  position: absolute
  left: 20px
  top: 88px
  width: 20px
  height: 18px
  color: #DADADA
  font-size: 24px

#calendar
  position: absolute
  left: 20px
  top: 132px
  width: 20px
  height: 18px
  color: #DADADA
  font-size: 24px

.mini-slot
  transition: background-color .28s
  &:hover
    background-color: rgba(0, 0, 0, .04)


</style>

