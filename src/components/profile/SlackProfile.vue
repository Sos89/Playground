<template>
<div>
  <p class="myAccount">My accounts</p>
  <label class="slack" for="slack">Slack</label>
  <q-input color="bg" style="width: 345px" v-model="text" disable>
    <template v-slot:prepend>
      <img
        alt="Quasar logo"
        src="~assets/image/slack.svg"
      >
      {{slack}}
    </template>
  </q-input>

</div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "SlackProfile",
  props: ['slack'],
  setup(){
    return {
      text: ref('')
    }
  }
};
</script>

<style scoped>
img{
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.slack{
  height: 15px;
  margin-top: 17px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.4px;
  color: #95A2A7;
}
.myAccount{
  width: 92px;
  height: 32px;
  /*margin-left: 20px;*/
  margin-top: 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
  color: #003367;
}
</style>
