<template>
  <div>
    <li>
      <label>
        <!-- 不建议修改props的值 -->
        <!-- <input type="checkbox" v-model="todo.done"  /> -->
        <input
          type="checkbox"
          :checked="todo.done"
          @change="changechecked(todo.id)"
        />

        <span>{{ todo.title }}</span>
      </label>
      <button class="btn btn-danger" @click.prevent="d1eleted(todo.id)">
        删除
      </button>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: '吃饭',
    }
  },
  props: ['todo', 'checked', 'deletedone'],
  methods: {
    // 修改done
    changechecked(id) {
      this.checked(id)
    },
    // 删除按钮
    d1eleted(id) {
      if (confirm('确认删除吗')) {
        console.log(this.todo.length)
      }
      this.deletedone(id)
    },
  },
}
</script>
<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
