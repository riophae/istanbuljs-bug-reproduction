import Vue from 'vue/dist/vue'
import { mount } from '@vue/test-utils'
import { Component, utils } from '../src'

Vue.config.productionTip = false
Vue.config.devtools = false

it('Vue components', () => {
  mount(Component)
})

it('normal ES modules', () => {
  expect(utils.fn1()).toBe('fn1')
})
