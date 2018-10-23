<template> 
    <div>
       <h3>secondChild组件部分</h3>
       <p>从firstChild组件接收的值<span>{{msg}}</span></p>
    </div>
</template>
<script>
import Bus from '../common/js/bus'
export default {
  data () {
    return {
      msg: '默认值'
    }
  },
  // mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
  mounted () {
    // `this` 指向 vm 实例
    // var self = this
    // 在组件 secondChild 创建的钩子中监听事件
    Bus.$on('firstChildEvent', function (msg) {
      console.log(self.msg)
      this.msg = msg
    }.bind(this))
  }
}
</script>
<style scoped>
div{
  border:1px dashed #42b983;
}
span {
  color: #42b983;
}
</style>