<template> 
    <div>
       <h3>child子组件部分</h3>
       <input v-model="childMsg" >
    </div>
</template>
<script>
export default {
  name: 'childs',
  // 声明 props
  props: ['message'],
  data () {
    return {
      childMsg: this.message
    }
  },
  watch: {
    childMsg () {
      this.$parent.msg3 = this.childMsg
    },
    message () {
      this.childMsg = this.message
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