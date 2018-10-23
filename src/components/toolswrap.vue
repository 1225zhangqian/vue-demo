<template>
  <div>
    <h4>备忘录</h4>
    <hr>
    <router-view/>
    <div>
      <i class=" icon  ion-plus-circled" v-on:click="open">添加</i>  
    </div>
    <!--:visible="visible" visible为子组件的prop 通过绑定prop传递值 v-bind:prop-name v-bind也可以绑定一个对象-->
    <my-component v-if="visible" :visible="visible" @open="open"></my-component>
  </div>
</template>
<script>
import Store from '../common/js/store'
import Bus from '../common/js/bus'
import ToolsDialog from './toolsDialog'
export default {
  name: 'toolswrap',
  data () {
    return {
      items: Store.fetch(),
      visible: false,
      length: ''
    }
  },
  watch: {
    items: {
      handler: function (items) {
        Store.save(items)
      },
      deep: true
    }
  },
  mounted: function () {
    var _this = this
    Bus.$on('removeMsg', function (items) {
      // 监听app组件的removeMsg事件
      _this.items = items
    })
  },
  methods: {
    open: function () {
      this.visible = !this.visible
      console.log(this.visible)
    }
  },
  components: {
    'my-component': ToolsDialog
  }
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

.ion-plus-circled {
    font-size: 24px;
    color: #1890ff;
}
</style>
