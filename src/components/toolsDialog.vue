<template>

    <div  v-bind:class="addBox">
      <div class="mbg"></div>
      <div class="panel panel-default msg-content">
          <div class="panel-heading">
              <h3 class="panel-title">
                  新增备忘录
              </h3>
              <span class="icon ion-close-round " v-on:click="close">X</span>
          </div>
          <div class="panel-body">
            <form class="form-horizontal" role="form">
              <div class="form-group"> 
                <label class="col-xs-2 control-label">内容</label>
                <div class="col-xs-10">
                  <textarea class="form-control" rows="3" v-model="newItem"></textarea> 
                </div>
              </div>
              <div class="col-xs-10 col-xs-push-2">
                  <button type="button" class="btn btn-primary pull-right" v-on:click="close();submit()">保存</button>
              </div>
            </form>
          </div>
      </div>
    </div>
</template>

<script>
import Store from '../common/js/store'
import Bus from '../common/js/bus'
export default {
  name: 'toolsDialog',
  // 声明 props
  props: ['visible'],
  data () {
    return {
      items: Store.fetch(),
      addBox: 'add-box',
      newItem: '',
      // 创建props属性visible的副本--myVisible
      myVisible: this.visible
    }
  },
  methods: {
    close: function () {
      this.myVisible = !this.myVisible
      console.log(this.myVisible)
      // 组件内对myVisible变更后向外部发送事件通知 open为父组件属性
      this.$emit('open', this.myVisible)
    },
    submit: function (e) {
      const myDate = new Date()
      this.length = this.items.length
      this.items.push({
        value: this.newItem,
        key: this.length,
        date: myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate()
      })
      this.newItem = ''
      Store.save()
      // 定义add方法，并将msg通过addMsg传给HelloWorld组件
      Bus.$emit('addMsg', this.items)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.panel{
  position: relative;
  background: #fff;
  border: 1px solid #eee;
}
.add-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 2;
}
/*.mbg{
  position: absolute;
  background-color: #333;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  z-index: -1;
}*/
.msg-content{
  width: 35%;
  margin: 100px auto;
  height: 225px;
}
.icon{
  cursor: pointer;
}
.ion-close-round{
  color: #a9a9a9;
  position: absolute;
  right: 10px;
  top: 10px;
}

.control-label {
    padding-right: 8px;
}
</style>
