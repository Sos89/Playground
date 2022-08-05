<template>
  <div>
    <label>start/ end time</label>
    <q-input v-model="time" class="input" style="width: 223px;" mask="time" :rules="['time']">
      <template v-slot:append>
        <q-icon  name="clear" v-model="clear" class="clear" @click="clearInput"/>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-time v-model="time">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "Friday-input",
  setup(){

    return {
      time: ref( '' ),
      clear: ref('')
    }
  },
  methods: {
    clearInput(){
      this.time = ''
    }
  }
};
</script>

<style scoped>
div{
  margin-top: 28px;
  margin-left: 20px;
}
label{
  height: 14px;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #95A2A7;
}
.clear{
  margin-right: 15px;
  font-size: 18px;
}
</style>
