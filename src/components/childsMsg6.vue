<template> 
    <div>
       <p>child子组件部分</p>
       <input :value="value" @input="changeMsg">
    </div>
</template>
<script>
export default {
  name: 'childs',
  // 声明 props
  props: ['value'],
  methods: {
    changeMsg (e) {
      this.$emit('input', e.target.value)
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