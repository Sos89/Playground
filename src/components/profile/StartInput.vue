<template>
<div class="column">
  <label for="birth">Start Date</label>
  <q-input v-model="date" style="width: 223px; " :dense="dense" disable>
    <template v-slot:prepend>
      <p>{{ startData }}</p>
    </template>
  </q-input>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "StartInput",
  props: ['startData'],
  setup () {
    return {
      date: ref(''),
      ph: ref(''),
      dense: ref(true)
    }
  }
};
</script>

<style scoped>
label{
  height: 15px;
  margin-top:  28px;
  margin-left: 120px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.4px;
  color: #95A2A7;
}
q-input{
  margin-top: 8px;
}
p{
  font-size: 18px!important;
}
</style>
