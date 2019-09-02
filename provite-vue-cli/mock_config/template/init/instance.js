import { createAPI } from '{{$$.relative("util")}}'
import axios from 'axios'
import { Message } from 'hui'
import { trimOnlySpace } from '@hui-pro/utils'
import i18n from '@/i18n'

// 可以根据NODE_ENV设置不同的值(可以删除, 只是为了兼容1.x脚手架的写法)
const baseURL = '/'

const http = axios.create({
  timeout: 20000,
  withCredentials: true,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  baseURL
})

// 相应拦截器
http.interceptors.response.use(function (response) {
  // 请求多语言的json文件
  if (response.config.url.indexOf('json') > -1) {
    return response
  }

  // 根据响应数据判断是否登录过期
  if (response.data.errorCode === 'pleaseRefreshByHeader') {
    let refreshUrl = response.headers['refresh-url'].split('?')[0]
    refreshUrl = refreshUrl + '?service=' + location.protocol + '//' + location.host + location.pathname + encodeURIComponent(location.search)
    location.href = refreshUrl
    return
  }

  // 对错误进行统一处理
  if (response.data.code !== '0') {
    if (!response.config.noMsg && response.data.msg) {
      Message.error(i18n.t(response.data.msg, response.data.data))
    }
    return Promise.reject(response)
  } else if (response.data.code === '0' && response.config.successNotify) { // 弹出成功提示
    Message.success(i18n.t(response.data.msg) || 'success !')
  }
  return Promise.resolve({
    msg: response.data.msg,
    data: response.data.data
  })
}, function (error) {
  if (error.message.indexOf('timeout') > -1) {
    // 多语言需要自己在项目中配置
    Message.error(i18n.t('common.timeout'))
  }
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 请求拦截器
http.interceptors.request.use(function (config) {
  // 所有搜索框可输入元素，都不需要去掉前后空格，只有仅输入空格时，此字段搜索无效。(规范: http://iris.hikvision.com.cn/huidesign/bscs/issues/83)
  return trimOnlySpace(config)
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export default createAPI(baseURL, http)

export {
  http
}
