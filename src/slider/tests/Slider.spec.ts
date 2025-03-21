import { mount } from '@vue/test-utils'
import { NSlider } from '../index'

describe('n-slider', () => {
  it('should work with import on demand', () => {
    mount(NSlider)
  })

  it('should work with `defaultValue`', async () => {
    const wrapper = mount(NSlider, {
      props: {
        defaultValue: 23
      }
    })

    const sliderRailFill = wrapper.find('.n-slider-rail__fill')
    expect((sliderRailFill.element as HTMLElement).style.width).toEqual('23%')
  })

  it('should work with `marks`', async () => {
    const wrapper = mount(NSlider, {
      props: {
        marks: {
          34: '太棒了',
          75: '不错'
        }
      }
    })

    const sliderDots = wrapper.findAll('.n-slider-dot')
    expect(sliderDots.length).toBe(2)
    expect((sliderDots[0].element as HTMLElement).style.left).toEqual('34%')
    expect((sliderDots[1].element as HTMLElement).style.left).toEqual('75%')

    const sliderMarks = wrapper.findAll('.n-slider-mark')
    expect(sliderMarks.length).toBe(2)

    expect((sliderMarks[0].element as HTMLElement).style.left).toEqual('34%')
    expect(sliderMarks[0].text()).toEqual('太棒了')

    expect((sliderMarks[1].element as HTMLElement).style.left).toEqual('75%')
    expect(sliderMarks[1].text()).toEqual('不错')
  })

  it('accept correct callback types', () => {
    function onUpdateValue1 (value: number): void {}
    function onUpdateValue2 (value: number[]): void {}
    mount(NSlider, {
      props: {
        onUpdateValue: onUpdateValue1
      }
    })
    mount(NSlider, {
      props: {
        onUpdateValue: onUpdateValue2
      }
    })
  })

  it('should work with `disabled` prop', async () => {
    const wrapper = mount(NSlider)

    await wrapper.setProps({ disabled: true })
    expect(wrapper.find('.n-slider').classes()).toContain('n-slider--disabled')
  })

  it('should work with `marks` prop', async () => {
    const wrapper = mount(NSlider, {
      props: {
        marks: {
          30: 'test1',
          70: 'test2'
        }
      }
    })

    expect(wrapper.findAll('.n-slider-mark').length).toBe(2)
    expect(wrapper.findAll('.n-slider-mark')[0].attributes('style')).toContain(
      'left: 30%'
    )
    expect(wrapper.findAll('.n-slider-mark')[0].text()).toContain('test1')
    expect(wrapper.findAll('.n-slider-mark')[1].attributes('style')).toContain(
      'left: 70%'
    )
    expect(wrapper.findAll('.n-slider-mark')[1].text()).toContain('test2')
  })

  it('should work with `range` & `defaultValue` prop', async () => {
    const wrapper = mount(NSlider, {
      props: {
        range: true,
        defaultValue: [24, 49]
      }
    })

    expect(wrapper.findAll('.n-slider-handle').length).toBe(2)

    const sliderRailFill = wrapper.find('.n-slider-rail__fill')
    const element = sliderRailFill.element as HTMLElement
    expect(element.style.left).toEqual('24%')
    expect(element.style.width).toEqual('25%')
  })

  it('should work with `vertical` prop', async () => {
    const wrapper = mount(NSlider, {
      props: {
        defaultValue: 77,
        vertical: true
      }
    })

    const sliderRailFill = wrapper.find('.n-slider-rail__fill')
    const firstHandle = wrapper.find('.n-slider-handle')
    expect((sliderRailFill.element as HTMLElement).style.height).toEqual('77%')
    expect((firstHandle.element as HTMLElement).style.bottom).toEqual('77%')
  })

  it('should work with `range` & `vertical` prop', async () => {
    const wrapper = mount(NSlider, {
      props: {
        range: true,
        defaultValue: [24, 49],
        vertical: true
      }
    })

    const sliderRailFill = wrapper.find('.n-slider-rail__fill')
    const element = sliderRailFill.element as HTMLElement
    expect(element.style.bottom).toEqual('24%')
    expect(element.style.height).toEqual('25%')
    expect(
      wrapper.findAll('.n-slider-handle')[0].attributes('style')
    ).toContain('bottom: 24%')
    expect(
      wrapper.findAll('.n-slider-handle')[1].attributes('style')
    ).toContain('bottom: 49%')
  })

  it('should work with `reverse` prop', async () => {
    const wrapper = mount(NSlider)

    expect(wrapper.find('.n-slider').classes()).not.toContain(
      'n-slider--reverse'
    )

    await wrapper.setProps({ reverse: true })
    expect(wrapper.find('.n-slider').classes()).toContain('n-slider--reverse')
  })
})
