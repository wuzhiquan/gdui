<template>
  <layout class="demo-layout" v-model="layoutState" />
</template>

<script>
export default {
  data() {
    return {
      layoutState: {
        sidebar: {
          opened: true, // 默认展开，false是关闭
          // withoutAnimation: false,
        },
        title: '广东政务服务网',
        sidebarWidth: 250,
        logo: require('../../assets/logo.png'),
        hideFooter: false, // 是否隐藏footer脚注，默认false不隐藏
        hideHeader: false, // 是否隐藏头部
        tagsView: true,
      },
    };
  },
};
</script>

<style lang="less">
.demo-layout {
  section.app-main {
    overflow-y: auto;
    background: #fff;
    padding: 0 20px;
    > .container {
      padding: 24px;
    }
  }
  div.footer {
    background: #fff;
  }
}
.nav-layout.demo-layout{
  width: 100%;
  section.app-main{
    padding: 20px 20px 0;
    border-radius: 6px;
    overflow: hidden;
  }
  .element-doc{
    padding: 0;
  }
}
</style>

