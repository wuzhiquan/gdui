<template>
  <div id="tags-view-container" class="tags-view-container">
    <el-page-header :class="{hiddenBack: true}" content="详情页面" @back="$router.back(-1)">
      <template slot="content">
        <!-- <scroll-pane ref="scrollPane" class="tags-view-wrapper"> -->
        <div class="tags-view-wrapper">
          <router-link
            v-for="tag in tagsViewList"
            ref="tag"
            :key="tag.path"
            :to="{ name: tag.name }"
            tag="span"
          >
            <div class="tags-view-item" :class="isActive(tag)?'active':''">{{ tag.title }}</div>
          </router-link>
        </div>
      </template>
    </el-page-header>
  </div>
</template>

<script>

export default {
  props: {
    tagsViewList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    }
  },
  computed: {
    // showBack() {
    //   return this.$route.meta.showBack;
    // },
  },
  methods: {
    isActive(route) {
      return route.name === this.$route.name
    },
  }
}
</script>

<style lang="less" scoped>
::v-deep {
  .el-page-header {
    padding-left: 10px;
    color: #495060;
  }
  .el-page-header__left {
    margin-right: 20px;
    .el-icon-back {
      line-height: 43px;
      font-size: 14px;
      color: #495060;
    }
    &::after {
      right: -15px;
    }
  }
  .el-page-header__title {
    line-height: 40px;
    font-size: 15px;
  }
  .hiddenBack.el-page-header {
    padding-left: 0;
  }
  .hiddenBack .el-page-header__left {
    display: none;
  }
}
.tags-view-container {
  padding-left: 5px;
  height: 40px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 32px;
      line-height: 32px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 14px;
      margin-top: 4px;
      margin-left: 10px;
      &.active {
        background-color: #409eff;
        color: #fff;
        border-color: #409eff;
        &::before {
          content: "";
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>

