<template>
  <ul class="todo-main">
    <Item v-for="item in todos" :key="item.id" :todo="item" :checked="checked"  :deletedone="deletedone"/>
  </ul>
</template>

<script>
import Item from './Item.vue'
export default {
  components: {
    Item,
  },
 props:['todos','checked','deletedone']

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
