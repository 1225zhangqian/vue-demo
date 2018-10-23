<template> 
    <div>
       <h3>child子组件部分</h3>
       <input v-model="childMsg" >
       <button @click="click">你点我试试</button>
       {{childMsg}}
    </div>
</template>
<script>
export default {
  name: 'childs',
  // 声明 props
  props: ['message'],
  data () {
    return {
      childMsg: ''
    }
  },
  watch: {
    childMsg () {
      this.$emit('update:message', this.childMsg)
    },
    message () {
      this.childMsg = this.message
    }
  },
  methods: {
    click () {
      this.$emit('update:message', '试试就试试')
    }
  },
  mounted () {
    this.childMsg = this.message
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