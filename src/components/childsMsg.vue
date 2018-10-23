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
  data () {
    return {
      childMsg: this.message
    }
  },
  watch: {
    message () {
      this.childMsg = this.message
    },
    childMsg () {
      this.$emit('inputVal', this.childMsg)
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