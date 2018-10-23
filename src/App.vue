<template>
  <div id="app">
    <!-- 使用栅格系统来规划导航菜单的宽度 -->
    <div class="row">
        <!-- 这里使用 24 栅格系统的 1/4 宽度 -->
        <div class="col-4">
            <ul class="menu menu-light menu-inline">
                <li class="menu-item menu-item-selected"><router-link to='/demo'>基础用例</router-link></li>
                <li class="menu-item"><router-link to='/demo2'>基础组件用例</router-link></li>
                <li class="menu-item"><router-link to='/demoMsg'>父子组件实现数据双向绑定</router-link></li>
                <li class="menu-item"><router-link to='/toolswrap'>备忘录</router-link></li>
                <li class="menu-item"><router-link to='/listDemo'>列表用例</router-link></li>
            </ul>
        </div>
        <div class="col-18">
          <router-view/>
        </div>
    </div>
    
    
  </div>
</template>

<script>
// import Store from './common/js/store'
// import Bus from './common/js/bus'
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
