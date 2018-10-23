<template> 
    <div>
       <p>child子组件部分</p>
       <input v-model="childMsg">
    </div>
</template>
<script>
export default {
  name: 'childs',
  // 声明 props
  props: ['message'],
  computed: {
    childMsg: {
      get () {
        return this.message
      },
      set (val) {
        this.$parent.msg4 = val
        // this.$emit('inputVal', val)
      }
    }
  }
}
</script>
<style scoped>
div{
  margin-top: 20px;
  padding: 10px; 
  border:1px dashed #42b983;
}
</style>