<template>
  <div class="choose">
    <TextDivider :title="`选择${title}`"/>
    <div class="box">
      <span>{{title}}</span>
      <el-radio-group v-model="radio" @change="getValue">
        <el-row v-for="(item, index) in option" :key="index">
          <el-radio :label="item.value">{{item.label}}</el-radio>
        </el-row>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
import TextDivider from '../../../component/TextDivider'

export default {
  name: "GdChoose",
  components: { TextDivider },
  props: {
    title: {
      type: String,
      default: '办理情形',
    },
    option: {
      type: Array,
      default: () => [],
    },
    defaultValue: [String, Number],
  },
  data() {
    return {
      radio: ''
    }
  },
  methods: {
    getValue(val) {
      this.$emit('getValue', val)
    }
  },
  mounted() {
    this.radio = this.defaultValue
  }
}
</script>
<style lang="less" scoped>
.box{
  display: flex;
  >span{
    margin-right: 40px;
    font-size: 18px;
  }
  .el-row{
    margin-bottom: 30px;
    /deep/ .el-radio__label{
      font-size: 18px;
    }
    /deep/ .el-radio__inner{
      width: 18px;
      height: 18px;
    }
  }
}
</style>