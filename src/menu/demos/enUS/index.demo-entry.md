# Menu

<!--single-column-->

No Food.

## Demos

```demo
horizontal
select
render-label
default-expanded-keys
indent
collapse
inverted
long-label
accordion
router-link
customize-field
```

## API

### Menu Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| accordion | `boolean` | `false` | Whether to use accordion mode. |
| children-field | `string` | `'children'` | Field name of children. |
| collapsed-icon-size | `number` | `24` | The icon size when menu is collapsed. If not set, menu will use `icon-size` in place of it. |
| collapsed-width | `number` | `48` | The menu width after collapsed. |
| collapsed | `boolean` | `false` | The collapsed status of menu, only works when menu is vertical. |
| default-expand-all | `boolean` | `false` | Whether to expand all menus. |
| default-expanded-keys | `Array<string>` | `[]` | The default expanded submenu keys of menu in uncontrolled manner. |
| default-value | `string \| null` | `null` | Whether selected by default in uncontrolled mode. |
| dropdown-placement | `'top-start' \| 'top' \| 'top-end' \| 'right-start' \| 'right' \| 'right-end' \| 'bottom-start' \| 'bottom' \| 'bottom-end' \| 'left-start' \| 'left' \| 'left-end' \| ` | `'top'` | Only effective in horizontal mode. |
| dropdown-props | `DropdownProps` | `undefined` | The dropdown's props when menu is collapsed or horizontal mode，please see [Dropdown Props](dropdown#Dropdown-Props) |
| expanded-keys | `Array<string>` | `undefined` | The expanded submenu keys. If set, menu will work in controlled manner and `default-expanded-names` won't work. |
| expand-icon | `(option: MenuOption) => VNodeChild` | `undefined` | Render function that renders all expand icon. |
| icon-size | `number` | `20` | The icon size when menu is not collapsed. |
| indent | `number` | `32` | The indent of menu. |
| inverted | `boolean` | `false` | Use inverted style. |
| key-field | `string` | `'key'` | Field name of key. |
| label-field | `string` | `'label'` | Field name of label. |
| options | `Array<MenuOption \| MenuGroupOption>` | `[]` | Items data of menu. |
| mode | `'vertical' \| 'horizontal'` | `'vertical'` | Menu layout. |
| render-extra | `(option: MenuOption \| MenuGroupOption) => VNodeChild` | `undefined` | Render function that renders all extras. |
| render-icon | `(option: MenuOption) => VNodeChild` | `undefined` | Render function that renders all icons. |
| render-label | `(option: MenuOption \| MenuGroupOption) => VNodeChild` | `undefined` | Render function that renders all labels. |
| root-indent | `number` | `undefined` | The indent of menu's first level children. If not set, menu will use `indent` in place of it. |
| value | `string \| null` | `undefined` | The selected name of menu. |
| watch-props | `Array<'defaultValue' \| 'defaultExpandedKeys'>` | `undefined` | Default prop names that needed to be watched. Components will be updated after the prop is changed. Note: the `watch-props` itself is not reactive. |
| on-update:expanded-keys | `(keys: string[]) => void` | `undefined` | `keys` is the array of expanded menu options' `key`. |
| on-update:value | `(key: string, item: MenuOption) => void` | `undefined` | Callback when select a menu item. `key` is the `key` of the selected menu item. `item` is then original data of the menu item. |

### MenuOption Properties

| Name | Type | Description |
| --- | --- | --- |
| children? | `Array<MenuOption \| MenuGroupOption>` | Child menu options. |
| disabled? | `boolean` | Whether to disable the menu item. |
| extra? | `string \| (() => VNodeChild)` | The extra parts of the menu item. |
| icon? | `() => VNodeChild` | The icon for the menu item. |
| key | `string` | The indentifier of the menu item. |
| label | `string \| (() => VNodeChild)` | The label of the menu item. |

### MenuGroupOption Properties

| Name | Type | Description |
| --- | --- | --- |
| children | `Array<MenuOption \| MenuGroupOption>` | Group items. **required!** |
| key | `string` | The indentifier of the menu group. |
| label | `string \| (() => VNodeChild)` | The label of the menu item. |
| type | `'group'` | The type of the menu item, **required!** |
