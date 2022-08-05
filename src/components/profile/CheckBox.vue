<template>
  <div class="checkbox">
      <q-checkbox v-model="val" />
      <p class="num">Core team member</p>
  </div>

</template>

<script>
import { ref } from 'vue'
export default {
  name: "CheckBox",
  setup () {
    return {
      val: ref(true)
    }
  }
};
</script>

<style scoped>
.checkbox{
  margin-left: 23px;
  margin-top: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.num{
  width: 216px;
  margin-left: 16px;
  margin-top: 12px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;ing: 0.25px;
  color: rgba(0, 0, 0, 0.87);
}
</style>
