<template> 
    <div>
       <h3>child子组件部分</h3>
       <p>{{message}}</p>
       <button v-on:click="sendMsgToParent">向父组件传值</button>
       <input v-model="fff" >
       <input v-model="fff" @change="change">
       <!-- <input v-model="message" :change="changedd"> -->
    </div>
</template>
<script>
export default {
  name: 'childs',
  // 声明 props
  props: ['message'],
  data () {
    return {
      fff: this.message
    }
  },
  methods: {
    sendMsgToParent: function () {
      console.log('hai,我是子组件')
      this.$emit('listenToChildEvent', 'hai,我是子组件')
    },
    change () {
      this.$emit('input', this.fff)
    },
    changedd () {
      this.$emit('update:message', this.message)
    }
  },
  computed: {
    fff () {
      return this.message
    }
  },
  watch: {
    message () {
      this.fff = this.message
    },
    fff () {
      this.$emit('dddd', this.fff)
    }
  },
  mounted () {
    this.fff = this.message
  }
}
</script>
<style scoped>
div{
  border:1px dashed #42b983;
}
</style>