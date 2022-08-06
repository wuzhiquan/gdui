<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
#app /deep/ .container {
  overflow-y: scroll !important;
}
</style>