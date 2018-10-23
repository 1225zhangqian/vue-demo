<template>
    <div>
    
    <ul class="list-group">
        <li class="list-group-item">
          <!-- 局部注册组件--> 
          <span>局部注册组件</span>
          <my-component></my-component>  
        </li>
        <li class="list-group-item">
        <!-- 使用全局组件-->
        <span>使用全局组件</span>
        <simple-counter ></simple-counter> 
        </li>
        <li class="list-group-item">
        <!-- 创建一个 todo-item 组件的实例 -->
      <!--
        现在我们为每个 todo-item 提供待办项对象
        待办项对象是变量，即其内容可以是动态的。
        我们也需要为每个组件提供一个“key”，晚些时候我们会做个解释。
      --> 
        <ul>
        <todo-item v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id">
        </todo-item>
        </ul>
        </li>
        <li class="list-group-item"> 
        <!--父组件向子组件传值-->
        <my-childs message="hai!子组件" v-on:listenToChildEvent="showMsgFromChild"></my-childs>
        <!--动态绑定-->
        <Childs :message="msg" v-on:dddd="dddd"></Childs>
        </li> 
        <li class="list-group-item"> 
          <firstChild></firstChild>
          <secondChild></secondChild>
        </li>
    </ul> 
    <input v-model="msg" />
    </div>
</template>

<script>
import Vue from 'vue'
import Childs from './childs'
import firstChild from './firstChild'
import secondChild from './secondChild'
// 局部注册
var Child = {
  template: '<div>A custom component!</div>'
}

export default {
  name: 'toolgroup',
  data () {
    return {
      msg: 'hello!子组件hello!子组件hello!子组件',
      groceryList: [
        { id: 0, text: '蔬菜' },
        { id: 1, text: '奶酪' },
        { id: 2, text: '随便其他什么人吃的东西' }
      ]
    }
  },
  methods: {
    showMsgFromChild: function (data) {
      alert(data)
    },
    dddd: function (data) {
      console.log(data)
      this.msg = data
    }
  },
  components: {
    // <my-component> 将只在父组件模板中可用
    'my-component': Child,
    Childs,
    'my-childs': Childs,
    firstChild,
    secondChild
  }
}
Vue.component('todo-item', {
  // todo-item 组件现在接受一个
  // "prop"，类似于一个自定义属性
  // 这个属性名为 todo。
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

span {
  color: #42b983;
}
</style>
