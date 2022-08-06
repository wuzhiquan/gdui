<template>
  <footer class="footer">
    <div class="wrap" :style="{maxWidth: midWidth}">
      <div class="left">
        <p>
          <span>{{topText[0]}}</span>
          <span>{{topText[1]}}</span>
        </p>
        <p>
          <span>{{bottomText[0]}}</span>
          <span>{{bottomText[1]}}</span>
        </p>
      </div>
      <div class="right">
        <div class="contact">
          <p>联系我们</p>
          <p>热线电话：{{phone}}</p>
        </div>
        <em></em>
        <div>
          <img style="width: 96px;margin: 0 5px 0 0;" src="./zhaocuo.png" @click="$emit('imgClick', 'findWrong')"/>
          <img style="width: 36px;" src="./jiguan.png" @click="$emit('imgClick', 'infoSite')"/>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "GdFooter",
  props: {
    topText: {
      type: Array,
      default: () => [
        '主办：广东省人民政府办公厅',
        '承办：数字广东网络建设有限公司',
      ]
    },
    bottomText: {
      type: Array,
      default: () => [
        '版权所有：广东省人民政府门户网站',
        '粤ICP备05070829号-2 网站标识码4400000084',
      ]
    },
    phone: {
      type: String,
      default: '020-83134264',
    },
    midWidth: {
      type: String,
      default: '1200px',
    },
  },
}
</script>
<style lang="less" scoped>
.footer{
  background:  #e9ebeb;
  font-size: 14px;
  color: #45484B;
  .wrap{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  padding: 30px;
  border-top: 1px solid #c6c7c9;
  p{
    margin: 0;
    span{
      margin-right: 20px;
    }
    &:first-child{
      margin-bottom: 16px;
    }
  }
  .right{
    display: flex;
    justify-content: space-between;
    height: 48px;
    margin-top: 5px;
    em{
      display: inline-block;
      width: 2px;
      background: #c6c7c9;
      height: 100%;
      margin: 0 15px;
    }
  }
  .contact{
    text-align: right;
    p{
      &:first-child{
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 4px;
      }
    }
  }
  img{
    cursor: pointer;
  }
}
</style>