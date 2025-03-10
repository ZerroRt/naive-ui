import { h, defineComponent, inject, computed } from 'vue'
import { AddIcon } from '../../_internal/icons'
import { NBaseClose, NBaseIcon } from '../../_internal'
import { render } from '../../_utils'
import { OnBeforeLeaveImpl, tabsInjectionKey } from './interface'
import { tabPaneProps } from './TabPane'

export default defineComponent({
  name: 'Tab',
  props: Object.assign(
    {
      leftPadded: Boolean,
      addable: Boolean
    },
    tabPaneProps
  ),
  setup (props) {
    const {
      mergedClsPrefixRef,
      valueRef,
      typeRef,
      closableRef,
      tabStyleRef,
      tabChangeIdRef,
      onBeforeLeaveRef,
      handleAdd,
      handleTabClick,
      handleClose
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(tabsInjectionKey)!
    return {
      mergedClosable: computed(() => {
        if (props.addable) return false
        const { closable } = props
        if (closable === undefined) return closableRef.value
        return closable
      }),
      style: tabStyleRef,
      clsPrefix: mergedClsPrefixRef,
      value: valueRef,
      type: typeRef,
      handleClose (e: MouseEvent) {
        e.stopPropagation()
        if (props.disabled) return
        handleClose(props.name)
      },
      handleClick () {
        if (props.disabled) return
        if (props.addable) {
          handleAdd()
          return
        }
        const { name: nameProp } = props
        const id = ++tabChangeIdRef.id
        if (nameProp !== valueRef.value) {
          const { value: onBeforeLeave } = onBeforeLeaveRef
          if (!onBeforeLeave) {
            handleTabClick(nameProp)
          } else {
            void Promise.resolve(
              (onBeforeLeave as OnBeforeLeaveImpl)(props.name, valueRef.value)
            ).then((allowLeave) => {
              if (allowLeave && tabChangeIdRef.id === id) {
                handleTabClick(nameProp)
              }
            })
          }
        }
      }
    }
  },
  render () {
    const {
      addable,
      clsPrefix,
      name,
      disabled,
      label,
      tab,
      value,
      mergedClosable,
      style,
      $slots: { default: defaultSlot }
    } = this
    const mergedTab = label ?? tab
    return (
      <div class={`${clsPrefix}-tabs-tab-wrapper`}>
        {this.leftPadded ? (
          <div class={`${clsPrefix}-tabs-tab-pad`}></div>
        ) : null}
        <div
          key={name}
          data-name={name}
          data-disabled={disabled ? true : undefined}
          class={[
            `${clsPrefix}-tabs-tab`,
            value === name && `${clsPrefix}-tabs-tab--active`,
            disabled && `${clsPrefix}-tabs-tab--disabled`,
            mergedClosable && `${clsPrefix}-tabs-tab--closable`,
            addable && `${clsPrefix}-tabs-tab--addable`
          ]}
          onClick={this.handleClick}
          style={addable ? undefined : style}
        >
          <span class={`${clsPrefix}-tabs-tab__label`}>
            {addable ? (
              <NBaseIcon clsPrefix={clsPrefix}>
                {{
                  default: () => <AddIcon />
                }}
              </NBaseIcon>
            ) : defaultSlot ? (
              defaultSlot()
            ) : typeof mergedTab === 'object' ? (
              mergedTab // VNode
            ) : (
              render(mergedTab ?? name)
            )}
          </span>
          {mergedClosable && this.type === 'card' ? (
            <NBaseClose
              clsPrefix={clsPrefix}
              class={`${clsPrefix}-tabs-tab__close`}
              onClick={this.handleClose}
              disabled={disabled}
            />
          ) : null}
        </div>
      </div>
    )
  }
})
