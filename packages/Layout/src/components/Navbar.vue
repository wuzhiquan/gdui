<template>
  <div class="navbar">
    <hamburger class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb class="breadcrumb-container" />

    <div class="navbar-right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Breadcrumb from './Breadcrumb'
import Hamburger from './Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  methods: {
    toggleSideBar() {
      // this.$store.dispatch('app/toggleSideBar')
      this.$emit('toggleSideBar')
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .navbar-right {
    float: right;
    height: 100%;
    line-height: 50px;
    padding-right: 20px;
    &:focus {
      outline: none;
    }

  }
}
</style>
