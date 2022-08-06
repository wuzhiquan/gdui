<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar @toggleSideBar="onToggleSidebar" :class="{'sidebar-container': true, 'top50': hideHeader}" :style="`width: ${sidebarWidth}px !important`" :sidebar="sidebar" ref="sidebar" :title="title" :logo="logo" :hideHeader="hideHeader"/>
    <div :class="{hasTagsView:needTagsView}" class="main-container" :style="`margin-left: ${sidebarWidth}px;background: ${bgColor};`">
      <div :class="{'fixed-header':!hideHeader}" :style="`width: calc(100% - ${hideHeader ? 0 : sidebarWidth}px)`">
        <navbar @toggleSideBar="onToggleSidebar" v-if="!hideHeader">
          <slot name="rightPart"></slot>
        </navbar>
        <!-- <tags-view v-if="tagsViewList !== undefined" :tagsViewList="tagsViewList"/> -->
        <tags-view v-if="needTagsView"/>
      </div>
      <app-main :footerText="footerText" :beian="beian" :hideFooter="hideFooter"/>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, TagsView } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import "./styles/sidebar.less";

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView
  },
  mixins: [ResizeMixin],
  props: {
    value: {
      type: Object,
      default: () => {}
    },
  },
  computed: {
    needTagsView() {
      return this.WConfig.tagsView !== undefined ? this.WConfig.tagsView : this.value.tagsView
    },
    sidebar() {
      return this.value.sidebar
    },
    // device() {
    //   return this.value.device
    // },
    title() {
      return this.WConfig.title || this.value.title
    },
    bgColor() {
      return this.value.bgColor || '#fff'
    },
    logo() {
      return this.value.logo
    },
    autoSize() {
      return this.value.autoSize ?? false
    },
    fixedHeader() {
      // return this.$store.state.settings.fixedHeader
      return true
    },
    hideHeader() {
      return this.WConfig.hideHeader !== undefined ? this.WConfig.hideHeader : this.value.hideHeader
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile',
        sidebarAutoSize: this.autoSize,
      }
    },
    footerText() {
      return this.WConfig.footerText || this.value.footerText || `Copyright @2013-${(new Date()).getFullYear()} 广东政务服务网`
    },
    beian() {
      return this.WConfig.beian || this.value.beian || ''
    },
    hideFooter() {
      return this.WConfig.hideFooter !== undefined ? this.WConfig.hideFooter : this.value.hideFooter || false
    },
  },
  watch: {
    sidebar(nextValue) {
      if (!nextValue.opened) {
        this.sidebarWidth = this.device === 'mobile' ? 0 : 50
      } else {
        this.sidebarWidth = this.autoSize ? window.saveWidth : (this.WConfig.sidebarWidth || this.value.sidebarWidth || 210)
      }
    },
    $route(path) {
      this.tagsViewList = sessionStorage.tagsViewList ? JSON.parse(sessionStorage.tagsViewList) : undefined;
    }
  },
  data() {
    const WConfig = window.$config || {}
    return {
      sidebarWidth: WConfig.sidebarWidth || this.value.sidebarWidth || 210,
      device: document.body.clientWidth > 768 ? 'desktop' : 'mobile',
      tagsViewList: sessionStorage.tagsViewList ? JSON.parse(sessionStorage.tagsViewList) : undefined,
      WConfig
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.autoSize) {
        this.sidebarWidth = this.$refs.sidebar.$el.clientWidth;
        window.saveWidth = this.sidebarWidth;
      }
      if(!this.sidebar.opened) {
        this.sidebarWidth = this.device === 'mobile' ? 0 : 50
      }
    });
    window.onresize = () => {
      this.device = document.body.clientWidth > 768 ? 'desktop' : 'mobile';
    };
  },
  methods: {
    onChangeValue(changeValue) {
      const nextValue = {
        ...this.value,
        ...changeValue
      }
      // const nextValue = Object.assign({}, this.value, changeValue);
      this.$emit('input', nextValue)
    },
    handleClickOutside() {
      // this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
      this.onChangeValue({
        sidebar: { opened: false, withoutAnimation: false }
      })
    },
    onToggleSidebar() {
      this.onChangeValue({
        sidebar: { opened: !this.sidebar.opened, withoutAnimation: false }
      })
      // this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style lang="less" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar{
    position: fixed;
    top: 0;
  }
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
.top50{
  top: 50px !important;
  height: calc(100vh - 50px) !important;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - 210px);
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px)
}

.mobile .fixed-header {
  width: 100%;
}
</style>
