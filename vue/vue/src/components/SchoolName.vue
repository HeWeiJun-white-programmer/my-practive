<template>
  <div>
    <h1>学校名字：{{ name }}</h1>
    <h1>学校地址：{{ addt }}</h1>
    <button @click="add">点我</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: '广东理工学院',
      addt: '肇庆',
    }
  },

}
</script>

<style></style>
