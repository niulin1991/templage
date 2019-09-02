<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        左侧菜单
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  .el-aside {
    width: 300px !important;
    height: 100vh;
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
  }

  .el-main {
    height: 100vh;
    padding: 0 10px !important;
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
  }
</style>
