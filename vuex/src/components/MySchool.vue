<template>
  <div>
    <h1>{{ sum }}</h1>
    <input type="text" v-model="name" />
    <button @click="add">点击添加</button>
    <button @click="addhe">点击添加</button>
    <h1>第一个名字:{{ firstname }}</h1>
    <ul>
      <li v-for="item of personal" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  data() {
    return {
      name: '',
    }
  },
  computed: {
    personal() {
      return this.$store.state.Person.personal
    },
    sum() {
      return this.$store.getters['sumber/big']
    },
    firstname() {
      return this.$store.getters['Person/firstname']
    },
  },
  methods: {
    add() {
      const PersonObj = { id: nanoid(), name: this.name }
      // commit 模块化规范
      this.$store.commit('Person/UNshift', PersonObj)
      this.name = ''
    },
    addhe() {
      const PersonObj = { id: nanoid(), name: this.name }
      // commit 模块化规范
      this.$store.dispatch('Person/personhe', PersonObj)
      this.name = ''
    },
  },
  mounted() {
    console.log(this.$store)
  },
}
</script>

<style>
li {
  text-align: center;
}
</style>
