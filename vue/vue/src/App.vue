<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addtodo="addtodo" />
        <Toodlist :todos="todos" />
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
		// 方法二 $emit()
		// 方法三  bus.$emit（）
    addtodo(val) {
      this.todos.unshift(val)
    },
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
