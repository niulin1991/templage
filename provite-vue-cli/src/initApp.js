import store from '@/store'
import {
  mountVueInstance,
  errorLoadPage,
  renderThemeFromCssUrl,
  setLanguage as setLanguageInternal } from 'dolphin-plugin-tools'
import router from './router'
import App from './App'
import ErrorPage from '@/components/ErrorPage'

import i18n from './i18n'
import huiLocale from 'hui/lib/locale'
import huiProLocale from '@hui-pro/locale'

import axios from 'axios'

let assetsUrl = process.env.BASE_URL + process.env.VUE_APP_ASSETS

async function initApp (Vue) {
  try {
    let { userInfo } = await store.dispatch('setUserInfo')
    // 设置主题,多语言
    await Promise.all([renderTheme(userInfo), setLanguage(userInfo)])
    // 初始化vue实例
    mountVueInstance(Vue, App, {
      store,
      router,
      i18n
    })
  } catch (error) {
    // 错误处理
    await renderTheme({ skin: 'redblack' })
    errorLoadPage(Vue, ErrorPage)
  }
}

async function renderTheme ({ skin }) {
  try {
    // public/static/skin/xxx/skin.css
    const requestUrl = `${assetsUrl}/skin/${skin}/skin.css`
    await renderThemeFromCssUrl(requestUrl)
  } catch (error) {
    // 设置自定义皮肤失败, 但是由于默认皮肤的存在, 可以继续初始化Vue实例
    console.error('设置自定义皮肤失败')
    throw error
  }
}

async function setLanguage ({ languageId }) {
  // public/static/i18n/xxx/index.json
  const requestUrl = `${assetsUrl}/i18n/${languageId}/index.json`
  const i18nJson = await axios.get(requestUrl)
  await setLanguageInternal(i18nJson.data, languageId, [huiLocale, huiProLocale], i18n)
}

export default initApp
