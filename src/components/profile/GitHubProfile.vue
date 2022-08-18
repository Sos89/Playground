<template>
<div class="git_div">
  <label class="git" for="slack">GitHub</label>
  <q-input color="bg" style="width: 345px" v-model="text" disable>
    <template v-slot:prepend>
      <img
        alt="Quasar logo"
        src="~assets/image/git.jpg"
      >
      {{git}}
    </template>
  </q-input>

</div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "GitHubProfile",
  props: ['git'],
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
.git_div{
  margin-top: 19px;

}
.git{
  height: 15px;
  /*margin-top: 27px;*/
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.4px;
  color: #95A2A7;
}
</style>
