## GdChoose 选择办理情形

选择办理情形

:::demo

```html
<template>
  <div style="margin: 20px;">
    <GdChoose :option="option" :title="title" :defaultValue="'a'" @getValue="getValue"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '办理情形',
      option: [
        {label: '选项A', value: 'a'},
        {label: '选项B', value: 'b'},
        {label: '选项C', value: 'c'},
      ],
    };
  },
  methods: {
    getValue(val) {
      console.log('获取值', val)
    }
  }
};
</script>

```

:::

### props

| 参数      | 说明          | 类型      | 可选值     | 是否必填  | 默认值  |
|---------- |-------------- |---------- |--------  |-------- |-------- |
| title   | 标题文案 | string | - | 否 | 办理情形 |
| option   | 选项 | array | - | 是 | - |
| defaultValue   | 默认选择项 | string/number | - | 否 | - |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| getValue  | 获取选项的值，change时触发 | value |
