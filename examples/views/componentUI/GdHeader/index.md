## GdHeader 头部组件

头部组件

:::demo

```html
<template>
  <div style="margin: 20px;">
    <GdHeader :title="title" :content="content" @goHome="goHome"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '广东政务服务网',
      content: '申办流程',
    };
  },
  methods: {
    goHome() {
      console.log('返回首页')
    }
  }
};
</script>

```

:::

### props

| 参数      | 说明          | 类型      | 可选值     | 是否必填  | 默认值  |
|---------- |-------------- |---------- |--------  |-------- |-------- |
| title   | 标题文案 | string | - | 否 | 广东政务服务网 |
| content   | 内容文案 | string | - | 是 | - |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| goHome  | 点击标题回调函数 | - |
