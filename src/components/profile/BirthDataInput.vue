<template>
<div class="column">
  <label for="birth">Date of birth</label>
  <q-input v-model="date" style="width: 223px; " :dense="dense" disable>
    <template v-slot:prepend>
      <p>{{birthDay}}</p>
    </template>
    <template v-slot:append>
      <q-icon name="schedule"></q-icon>
    </template>
  </q-input>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "BirthDataInput",
  props: ['birthDay'],
  setup () {
    return {
      date: ref(''),
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
p{
  font-size: 16px;
}
</style>
