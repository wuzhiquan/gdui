<template>
  <div>
    <p class="title">{{title}}</p>
    <el-divider></el-divider>
  </div>
</template>
<script>
export default {
  name: "GdChoose",
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="less" scoped>
.el-divider{
  margin: 15px 0 48px 0;
  height: 4px;
  background: #112534;
}
.title{
  font-size: 24px;
  color: #112534;
  line-height: 30px;
  margin: 15px 0;
}
</style>