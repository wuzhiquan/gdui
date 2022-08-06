<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo && !hideHeader" :collapse="isCollapse" :title="title" :logo="logo"/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
    <div
      :class="['collapse-toggle', isCollapse ? 'expand' : 'hide']"
      :title="isCollapse ? '展开左侧栏' : '收起左侧栏'"
      @click="toggleSideBar"
    />
  </div>
</template>

<script>
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '../../styles/variables.less'

export default {
  components: { SidebarItem, Logo },
  props: {
    sidebar: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: ''
    },
    logo: {
      type: String,
      default: ''
    },
    hideHeader: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showLogo: true
    }
  },
  computed: {
    routes() {
      return localStorage.userRouter ? JSON.parse(localStorage.userRouter) : this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    toggleSideBar() {
      this.$emit('toggleSideBar');
    }
  },
}
</script>
<style lang="less" scoped>
.collapse-toggle {
  width: 20px;
  height: 176px;
  position: absolute;
  z-index: 2;
  top: 80%;
  transform: translateY(-50%);
  right: -1px;
  cursor: pointer;
  background-repeat: no-repeat;
  transition: .5s;
  &.hide {
    background-image: url("../../image/left.png");
  }
  &.expand {
    background-image: url("../../image/right.png");
  }
}
</style>
