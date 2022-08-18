<template>
<div class="column">
  <label for="email">Personal Email</label>
  <q-input v-model="text" style="width: 345px" :dense="dense" disable>
    <template v-slot:prepend>
      <p>{{personal}}</p>
    </template>
  </q-input>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "PersonalEmail",
  props: ['personal'],
  setup () {
    return {
      text: ref(''),
      ph: ref(''),
      dense: ref(true)
    }
  }
};
</script>

<style scoped>
label{
  height: 15px;
  margin-top:  18px;
  margin-left: 20px;
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
</style>
