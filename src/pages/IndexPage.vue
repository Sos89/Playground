<template>
<div>
  <index></index>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import index from 'components/index'
export default defineComponent({
  name: 'IndexPage',
  components: { index},
  data(){
    return {
    }
  },
})
</script>
