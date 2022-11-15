<template>
  <div>
    <h1>学校名字：{{ name }}</h1>
    <h1>学校地址：{{ add }}</h1>
    <button @click="add">点我</button>
  </div>
</template>

<script>
import { hun } from '../mixin'
export default {
  data() {
    return {
      name: '广东理工学院',
      add: '肇庆',
    }
  },
  mixins: ['hun'],
}
</script>

<style></style>
