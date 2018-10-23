<template>
  <div class="hello"> 
  <div class="row">
    <div class="col-xs-4"></div>
    <div class="col-xs-4">
      <form role="form">
          <div class="form-group"> 
              <input type="text" class="form-control" placeholder="搜索笔记" v-model="searchMsgs">
          </div> 
      </form> 
      <ul class="timeline"  name="staggered-fade" tag="ul"
          v-bind:css="false"
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:leave="leave">
        <li class="timeline-item"  v-for="(item, index) in computedList" :id="item.key">
            <p><span>{{item.date}}</span><a v-on:click="edit($event);getDataId(item.key)" >{{index}} - {{item.value}}</a> <span class="icon ion-close-circled" v-on:click="remove(index)">删除</span></p>
        </li>
    </ul>
    </div>
    <div class="col-xs-4"></div>
  </div> 

    <div v-bind:class="[isActive ?  '' : activeClass ,addBox]">
      <div class="mbg"></div>
      <div class="panel panel-default msg-content">
          <div class="panel-heading">
              <h3 class="panel-title">
                  编辑备忘录
              </h3>
              <span class="icon ion-close-round " v-on:click="edit">X</span>
          </div>
          <div class="panel-body">
            <form class="form-horizontal" role="form">
              <div class="form-group"> 
                <label class="col-xs-2 control-label">内容</label>
                <div class="col-xs-10">
                  <textarea class="form-control" rows="3" v-on:keyup.enter="changeMsg" v-model="msg"></textarea> 
                </div>
              </div>
              <div class="col-xs-10 col-xs-push-2">
                  <button type="button" class="btn btn-primary pull-right" v-on:click="submit()">保存</button>
              </div>
            </form>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
import Store from '../common/js/store'
import Bus from '../common/js/bus'
export default {
  name: 'toolsList',
  data () {
    return {
      items: Store.fetch(),
      addBox: 'add-box',
      activeClass: 'activeClass',
      isActive: true,
      length: '',
      indexOfItem: '',
      temp: '',
      msg: '',
      searchMsgs: ''
    }
  },
  watch: {
    items: {
      handler: function (items) {
        Store.save(items)
      },
      deep: true
    }
  },
  mounted: function () {
    var _this = this
    Bus.$on('addMsg', function (items) {
      // 监听app组件的addMsg事件
      _this.items = items
    })
  },
  computed: {
    computedList: function () {
      var vm = this
      return this.items.filter(function (item) {
        return item.value.toLowerCase().indexOf(vm.searchMsgs.toLowerCase()) !== -1
      })
    }
  },
  methods: {
    edit: function (e) {
      if (this.isActive) {
        this.isActive = false
      } else {
        this.isActive = true
      }
    },
    getDataId: function (id) {
      console.log(id)
      this.indexOfItem = id
      var itemTemp = this.items
      this.length = this.items.length
      for (var i = 0; i < this.length; i++) {
        if (itemTemp[i].key === id) {
          this.msg = itemTemp[i].value
        }
      }
    },
    changeMsg: function () {
      console.log(this.msg)
    },
    remove: function (id) {
      Store.remove(id)
      this.items = Store.fetch()
      Bus.$emit('removeMsg', this.items)
    },
    submit: function () {
      if (this.isActive) {
        this.isActive = false
      } else {
        this.isActive = true
      }
      // this.msg = 'eeeee'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => '更新完成'
      })
      console.log(this.msg)
      const myDate = new Date()
      this.temp = {
        value: this.msg,
        key: this.indexOfItem,
        date: myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate()
      }
      this.items.splice(this.indexOfItem, 1, this.temp)
      Store.save()
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: '1.6em' },
          { complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        )
      }, delay)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
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
  display: none;
  z-index: 2;
}
.activeClass {
  display: block;
}
.font {
  color: #fff;
}
/*:-moz-last-node.mbg{
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

.ion-close-circled{    
  float: right;
  font-size: 18px;
  color: #ed3f14;
  cursor: pointer;
}
.timeline-item-head{
  left: 80px;
} 
.timeline-item-tail{
      left: 85px;
}
.timeline-item-content{
  padding: 0 0 10px 100px;
  text-align: left;
}

.timeline-item-content-left{
    position: absolute;
    top: -3px;
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
