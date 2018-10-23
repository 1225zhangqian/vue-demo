<template> 
    <div>
      <ul class="list-group">
        <li class="list-group-item">
          <span>声明式渲染</span>
          <p>{{ message }}</p>
          <span v-bind:title="message"> 
          鼠标悬停几秒钟查看此处动态绑定的提示信息！
          </span>
        </li>
        <li class="list-group-item">
          <span>条件与循环</span>
          <p v-if="seen">现在你看到我了</p> 

          <ol>
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
          </ol>
        </li>
        <li class="list-group-item">
          <span>处理用户输入</span>
          <p>{{ message }}</p>
          <button v-on:click="reverseMessage">逆转消息</button>
          <div>
              <p>{{ message }}</p>
              <input v-model="message">
          </div>
    <div>{{nump =num + temp-(num%temp)}}</div> 
        </li> 
        <li class="list-group-item">
          <p id="clickBtn">点击我</p>
        </li>
        <li class="list-group-item">
          <!-- 局部注册组件--> 
          <span>局部注册组件</span>
          <my-component></my-component>  
        </li>
        <li class="list-group-item">
          <!-- 全局注册组件--> 
          <span>全局注册组件</span> 
          <simple-counter ></simple-counter> 
          <simple-counter ></simple-counter> 
          <simple-counter ></simple-counter> 
          <simple-counter ></simple-counter> 
          <todo-item v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id">
          </todo-item>
        </li> 
      </ul>   
    </div>
</template>


<script>
import Vue from 'vue'
import $ from 'jquery'
// 局部注册
var Child = {
  template: '<div>A custom component!</div>'
}
export default {
  name: 'Hello',
  data () {
    return {
      nump: '',
      num: 47503.0,
      temp: 50,
      message: '页面加载于 ' + new Date(),
      seen: true,
      todos: [
          { text: '学习 JavaScript' },
          { text: '学习 Vue' },
          { text: '整个牛项目' }
      ],
      groceryList: [
        { id: 0, text: '苹果' },
        { id: 1, text: '菠萝' },
        { id: 2, text: '梨子' }
      ]
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  },
  components: {
    // <my-component> 将只在父组件模板中可用
    'my-component': Child
  }
}
// 全局组件
Vue.component('simple-counter', {
  props: ['todo'],
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // 技术上 data 的确是一个函数了，因此 Vue 不会警告，
  // 但是我们却给每个组件实例返回了同一个对象的引用
  data: function () {
    return {counter: 0}
  }
})

$(function () {
  $('#clickBtn').click(function () {
    alert('hai')
  })
})
</script>
<style >
  span {
  color: #42b983;
}
</style>