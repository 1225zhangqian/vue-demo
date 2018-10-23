<template> 
  <div class="wrap">
    <div>
      <h4>一.通过$on , $emit 来进行双向通信（input）</h4>
      <p>props不可以直接改变，因此提供一个临时变量作为中转</p>
      <input type="text" v-model="msg">
      <ChildsMsg :message="msg" @inputVal="inputVal"/>
    </div> 
    <div>
      <h4>二.在2.3回归的特性.sync</h4>
      <input type="text" v-model="msg2">
      <ChildsMsg2 :message.sync="msg2"/>
    </div>
    <div>
      <h4>三.$parent用法</h4>
      <input type="text" v-model="msg3">
      <ChildsMsg3 :message="msg3"/>
    </div>
    
    <div>
      <h4>四.利用computed的set和get方法</h4>
      <p>不建议多次使用watch,消耗性能</p>
      <p>computed不可以直接改变，通过set方法转变</p>
      <input type="text" v-model="msg4">
      <ChildsMsg4 :message="msg4"/>
    </div>
    <div>
      <h4>五.使用input本身事件</h4>
      <p>不建议多次使用watch,消耗性能</p>
      <input type="text" v-model="msg5">
      <ChildsMsg5 :message="msg5"/>
    </div>
    <div>
      <h4>六.通过 v-model 来进行双父子通信</h4>
      <p>1.input v-model v-bind:value="something"</p>
      <p>2.v-on:input="something = $event.target.value"</p>
      <input type="text" v-model="msg6">
      <ChildsMsg6 v-model="msg6" />
    </div>
  </div>
</template>
<script>
import ChildsMsg from './childsMsg'
import ChildsMsg2 from './childsMsg2'
import ChildsMsg3 from './childsMsg3'
import ChildsMsg4 from './childsMsg4'
import ChildsMsg5 from './childsMsg5'
import ChildsMsg6 from './childsMsg6'
export default {
  name: 'demoMsg',
  data () {
    return {
      msg: '11',
      msg2: '11',
      msg3: '11',
      msg4: '11',
      msg5: '11',
      msg6: '11'
    }
  },
  methods: {
    inputVal (data) {
      this.msg = data
    }
  },
  components: {
    ChildsMsg,
    ChildsMsg2,
    ChildsMsg3,
    ChildsMsg4,
    ChildsMsg5,
    ChildsMsg6
  }
}
</script>
<style >
  span {
  color: #42b983;
  }
  .wrap{
    display: flex;
    flex-wrap: wrap;
  }
  .wrap>div{
    margin: 10px;
    padding: 20px;
    width: 360px;
    background: #fff;
    border: 10px solid #eee;
  }
</style>