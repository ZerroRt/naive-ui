# 文本输入 Input

很多年前，人们还在用打孔纸卡输入。

## 演示

```demo
basic
size
round
icon
password
disabled
clearable
autosize
pair
input-group
passively-activated
count
focus
input-props
```

## API

### Input Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| autofocus | `boolean` | `false` | 是否自动获取焦点 |
| autosize | `boolean \| { minRows?: number, maxRows?: number }` | `false` | 自适应内容高度，只对 type="textarea" 有效，可传入对象，如 { minRows: 1, maxRows: 3 } |
| clearable | `boolean` | `false` | 是否可清空 |
| default-value | `string \| [string, string] \| null` | `null` | 输入框默认值 |
| disabled | `boolean` | `false` | 是否禁用 |
| input-props | `HTMLInputAttributes` | `undefined` | Input 组建内部 input 元素的属性，对 `pair` 类型不生效，[在这里查看原生属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)。注意：input-props 不会覆盖内部 input 元素的已经存在的属性（除了 `type`） |
| loading | `boolean` | `undefined` | 是否展示加载图标，设为非 `undefined` 会占据空间 |
| maxlength | `number` | `undefined` | 最大输入长度 |
| minlength | `number` | `undefined` | 最小输入长度 |
| pair | `boolean` | `false` | 是否输入成对的值 |
| passively-activated | `boolean` | `false` | 是否被动激活输入框 |
| placeholder | `string \| [string, string]` | `undefined` | 文本输入的占位符。如果是 `pair` 是 `true`，`placeholder`是一个数组 |
| readonly | `boolean` | `false` | 是否只读 |
| round | `boolean` | `false` | 输入框是否圆角 |
| rows | `number` | `3` | 输入框行数，对 type="textarea" 有效 |
| separator | `string` | `undefined` | 成对输入框中间的分隔符 |
| show-count | `boolean` | `false` | 是否显示字数统计 |
| show-password-on | `'click' \| 'mousedown'` | `undefined` | 显示密码的时机 |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | 输入框尺寸 |
| type | `'text' \| 'password' \| 'textarea'` | `'text'` | 输入框类型 |
| value | `string \| [string, string] \| null` | `undefined` | 文本输入的值。如果是 `pair` 是 `true`，`value` 是一个数组 |
| on-blur | `() => void` | `undefined` | 输入框失去焦点时触发 |
| on-change | `(value: string \| [string, string]) => void` | `undefined` | 原生 change 事件触发时触发 |
| on-clear | `() => void` | `undefined` | 输入框点击清空按钮时触发 |
| on-focus | `() => void` | `undefined` | 输入框获得焦点时触发 |
| on-input | `(value: string \| [string, string]) => void` | `undefined` | 输入框在用户输入时触发 |
| on-update:value | `(value: string \| [string, string]) => void` | `undefined` | 输入框值 change 时触发 |

### Input Slots

| 属性 | 参数 | 说明 |
| --- | --- | --- |
| count | `(value: string)` | 字数统计 |
| prefix | `()` | 输入框头部内容 |
| separator | `()` | 成对输入框之间分隔符，仅 `pair` = true 生效且优先级高于 separator 属性 |
| suffix | `()` | 输入框尾部内容 |

### InputGroup Slots

| 属性    | 参数 | 说明         |
| ------- | ---- | ------------ |
| default | `()` | 输入组的内容 |

### InputGroupLabel Slots

| 属性    | 参数 | 说明             |
| ------- | ---- | ---------------- |
| default | `()` | 输入组标签的内容 |

### Input Methods

| 名称  | 类型         | 说明             |
| ----- | ------------ | ---------------- |
| blur  | `() => void` | Blur input 元素  |
| focus | `() => void` | Focus input 元素 |
