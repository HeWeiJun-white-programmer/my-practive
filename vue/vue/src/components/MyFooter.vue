<template>
  <div class="todo-footer" v-show="todoall">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <!-- <input type="checkbox" :checked="todoalls" @change="changed" /> -->
      <!-- 利用vmodel -->
      <input type="checkbox" v-model="todoalls" />
    </label>
    <span>
      <span>已完成{{ totaldone }}</span> / 全部{{ todoall }}
    </span>
    <button class="btn btn-danger" @click="clearall">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: ['todos', 'Ischecked', 'clearall'],
  computed: {
    // 全部属性
    todoall() {
      return this.todos.length
    },
    //过滤出done1为true的数组 计算总数
    totaldone() {
      // return this.todos.filter((item) => item.done).length
      //过滤出done1为true的数组
      return this.todos.reduce((pre, item) => {
        // console.log(item.index)
        if (item.done) {
          return pre + 1
        }
        return pre
      }, 0)
      // let arr=[1,2,3,4,5]
      // return arr.reduce((toals,item,index)=>{console.log(`${toals} ${item}  ${index} `);     return toals=toals+item},0)
    },
    // 全选按钮
    todoalls: {
      get() {
        return this.totaldone === this.todoall && this.totaldone > 0
      },
      set(val) {
        this.Ischecked(val)
      },
    },
  },
  methods: {
    // changed(e) {
    //   // console.log(e.target.checked);
    //   this.Ischecked(e.target.checked)
    // },
    Clearall() {
      if (confirm('确认删除吗')) {
        this.clearall()
      }
    },
  },
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
