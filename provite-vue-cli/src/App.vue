<template>
  <h-page id="app" >
    <h-page-menu :menu="menu" />
    <router-view />
  </h-page>
</template>

<script>
import navList from './nav.config.js'
export default {
  name: 'app',
  computed: {
    menu () {
      navList.forEach(nav => {
        nav.title = this.$t(nav.title)
      })
      // 开发模式菜单全展示
      if (process.env.NODE_ENV !== 'development') {
        const { userInfo } = this.$store.state
        if (userInfo) {
          let isConfigPath = navList
            .filter(nav => !nav.isApp)
            .map(item => item.router)
            .some(path => this.$route.path.indexOf(path) > -1)
          return isConfigPath ? [] : navList.filter(
            nav =>
              nav.isApp &&
            userInfo.code.indexOf(`${process.env.VUE_APP_CONTEXT}_${nav.menuCode}`) > -1
          )
        } else {
          return []
        }
      // 运行态根据`menuCode`和`isApp`判断是否展示，需要在`nav`和`router.config.js`里面做配置
      } else {
        return navList
      }
    }
  }
}
</script>
