<template> 
    <div>
       <h3>firstChild组件部分</h3>
       <button v-on:click="sendMsg">向secondChild组件传值</button>
       
    </div>
</template>
<script>
import Bus from '../common/js/bus'
export default {
  methods: {
    sendMsg: function () {
      // 触发组件 firstChild 中的事件
      Bus.$emit('firstChildEvent', '这条信息来自firstChild')
      // console.log('这条信息来自firstChild')
    }
  }
}
</script>
<style scoped>
div{
  border:1px dashed #42b983;
}
</style>