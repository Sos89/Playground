<template>
<div class="column">
  <label for="firstname">First name</label>
  <q-input v-model="text" style="width: 223px" :dense="dense" disable>
    <template v-slot:prepend>
          <p>{{firstName}}</p>
    </template>
  </q-input>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "FirstName",
  props: ['firstName'],
  setup () {
    return {
      text: ref(''),
      dense: ref(true)
    }
  }
};
</script>

<style scoped>
label{
  height: 15px;
  margin-top:  18px;
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
</style>
