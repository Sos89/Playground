<template>
<div class="column">

  <q-input
    v-model="phone"
    mask="(###) ### - ###"
    unmasked-value
    :dense="dense"
    style="width: 345px"
    disable
  >
    <template v-slot:prepend>
      <p>{{phoneNumber}}</p>
    </template>
  </q-input>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "PhoneNumber",
  props: ['phoneNumber'],
  setup () {
    return {
      phone: ref(''),
      ph: ref(''),
      dense: ref(true)
    }
  }
};
</script>

<style scoped>
label{
  height: 15px;
  margin-top:  51px;
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
