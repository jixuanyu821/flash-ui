
# 快速开始
## 创建项目
```bash
vue create my-project
cd my-project
```

## 安装
:::: code-group
::: code-group-item NPM
```bash
npm i z-flash-ui
```
:::
::: code-group-item YARN
```bash
yarn add z-flash-ui
```
:::
::::


## 引入及使用

```js
//main.js
import flashUi from 'z-flash-ui'

import Antd from 'ant-design-vue'

import 'zrar-ui/src/lib/index.less'

createApp(App).use(Antd).use(flashUi).mount('#app')
```

### 日期组件转译中文

```js
//main.js
import { createApp } from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'

const app = createApp(App)
app.config.globalProperties.locale = locale
app.config.globalProperties.dayjs = dayjs
```