import huiLang from 'hui/lib/locale/lang/zh-CN'
import huiProCommonLang from '@hui-pro/locale/lang/zh_CN'
import hello from './hello.json'
import errorPage from './errorPage.json'
// hui-pro多语言导入示例
// import tableTransfer from '@hui-pro/table-transfer/lang/zh_CN'
// const { h: { tableTransfer }} = tableTransfer
const { el } = huiLang
const { h: { common: huiProCommon } } = huiProCommonLang

const h = {
  common: huiProCommon
  // tableTransfer
}

export default {
  h,
  el,
  hello,
  errorPage
}
