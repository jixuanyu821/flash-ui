---
title: Button 按钮
---

# 按钮

<clientOnly>
  <ButtonDemo1></ButtonDemo1>
</clientOnly>

#### 常规

```bash
  <buttondemo></buttondemo>
```

#### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- |  --- | --- |
| type | 按钮类型 | string | default | primary \| success \| danger \| warning \| dashed \| text \| link |
| icon-position | 图标位置 | string | --- | icon-left |
| loading | 是否加载 | boolean | --- |  false | 
| disabled | 禁用 | boolean | --- | false | 

#### Event

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时的回调 | (event) => void |
