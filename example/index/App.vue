<template>
  <div class="page">
    <h3>飞象定制ui</h3>
    <Button type="primary">primary</Button>
    <Button type="success">success</Button>
    <Button type="info">info</Button>
    <Button type="warnning">warnning</Button>
    <Button type="danger">danger</Button>
    <Button type="text">text</Button>
  </div>
</template>
<script>
  // import Button from '../../packages/button/src/button.vue'
  import {
    Button
  } from '../../lib/fxqifu-ui.common'
  export default {
    components: {
      Button: Button
    },
    created() {
      document.getElementById('global-loading').style.display = "none"
    }
  }
</script>
<style lang="scss">
  .page {
    background: #fff;
    padding: 30px;
  }
</style>