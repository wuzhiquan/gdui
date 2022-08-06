## GdFooter 底部组件

底部组件

:::demo

```html
<template>
  <div style="margin: 20px;">
    <GdFooter
      :topText="topText"
      :bottomText="bottomText"
      :phone="phone"
      :midWidth="midWidth"
      @imgClick="imgClick"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      topText: [
        '主办：广东省人民政府办公厅',
        '承办：数字广东网络建设有限公司',
      ],
      bottomText: [
        '版权所有：广东省人民政府门户网站',
        '粤ICP备05070829号-2 网站标识码4400000084',
      ],
      phone: '020-83134264',
      midWidth: '1200px',
    };
  },
  methods: {
    imgClick(type) {
      console.log('imgClick', type)
    }
  }
};
</script>

```

:::

### props

| 参数      | 说明          | 类型      | 可选值     | 是否必填  | 默认值  |
|---------- |-------------- |---------- |--------  |-------- |-------- |
| topText   | 第一行文案，有2段 | array | - | 否 | - |
| bottomText   | 第一行文案，有2段 | array | - | 否 | - |
| phone   | 联系方式 | string | - | 否 | - |
| content   | 中间文案最大宽度 | string | - | 否 | 1200px |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| imgClick  | 点击图片回调函数 | 图片类型，findWrong/infoSite |
