<template>
<div>
  <index></index>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import index from 'components/index'
import { mapGetters } from "vuex";
export default defineComponent({
  name: 'IndexPage',
  components: { index},
  data(){
    return {
    }
  },
  mounted() {
      if (!this.getCode.token){
        this.$router.push('/')
      }
  },
  computed: {
    ...mapGetters('login',['getCode']),
  },
})
</script>
