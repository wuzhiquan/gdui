<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
    <footer v-if="!hideFooter">
      <p>{{footerText}},<a href="https://beian.miit.gov.cn/" target="_brank">{{beian}}</a> 版权所有.</p>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  props: ['footerText', 'beian', 'hideFooter'],
  computed: {
    cachedViews() {
      return this.$store.state.tagsView ? this.$store.state.tagsView.cachedViews : []
    },
    key() {
      return this.$route.path
    },
  }
}
</script>

<style scoped lang="less">
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  footer{
    p{
      margin: 0;
      padding: 10px;
      text-align: center;
      color: #5e6d82;
      font-size: 14px;
      a{
        color: #7e8c8d;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
}
.fixed-header+.app-main {
  padding-top: 50px;
}
</style>

<style lang="less">
// fix css style bug in open el-dialog
// .el-popup-parent--hidden {
//   .fixed-header {
//     padding-right: 15px;
//   }
// }
.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header+.app-main {
    padding-top: 84px;
  }
}
</style>
