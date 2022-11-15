<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addtodo="addtodo" />
        <Toodlist :todos="todos"  :checked="checked" :deletedone="deletedone"/>
        <MyFooter />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import Toodlist from './components/Toodlist.vue'

export default {
  name: 'App',
  data() {
    return {
      todos: [],
    }
  },
  components: {
    MyHeader,
    MyFooter,
    Toodlist,
  },
  methods: {
		// 父组件给子组件传一个带形参函数，然后子组件传实参给父组件 方法一
		// 方法二 $emit()  子组件传值个父组件
		// 方法三  bus.$emit（）兄弟组件互相通信
		// 添加事件
    addtodo(val) {
      this.todos.unshift(val)
    },
		// 勾选事件,勾选的是当前id的事件则将checked取反,形参为输入的id复选框，实参为勾选的id(更新数组的属性)
		checked(id){
			this.todos.forEach(item=>{
				if(item.id===id){item.done=!item.done}
			})
		},
    // 过滤当前id（更新数组）
		deletedone(id){
				this.todos=this.todos.filter(item=>item.id!==id
			)
		}
  },
}
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
