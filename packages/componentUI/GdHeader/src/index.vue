<template>
  <el-page-header @back="goBack" :content="content">
    <template #title>
      <div class="left-area">
        <img src="./logo.png"/>
        <span>{{title}}</span>
      </div>
    </template>
  </el-page-header>
</template>

<script>
export default {
  name: "GdHeader",
  props: {
    content: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '广东政务服务网',
    },
  },
  methods: {
    goBack() {
      this.$emit('goHome')
    }
  }
}
</script>
<style lang="less" scoped>
/deep/ .el-page-header__left{
  .el-icon-back{
    display: none;
  }
}
/deep/ .el-page-header__content{
  color: #0D1C28;
  line-height: 32px;
}
.left-area{
  font-size: 22px;
  color: #0D1C28;
  display: flex;
  line-height: 32px;
  img{
    width: 32px;
  }
  >span{
    margin-left: 10px;
  }
}
</style>