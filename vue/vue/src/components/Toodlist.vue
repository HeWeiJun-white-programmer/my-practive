<template>
  <ul class="todo-main">
    <Item v-for="item in todos" :key="item.id" :todo="item"/>
  </ul>
</template>

<script>
import Item from './Item.vue'
export default {
  components: {
    Item,
  },
  data() {
    return {
      todos: [
        { id: '01', title: '吃饭', done: true },
        { id: '02', title: '喝水', done: false },
        { id: '03', title: '睡觉', done: true },
      ],
    }
  },
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
