<template>
  <div>
    <h1>学生名字：{{ name }}</h1>
    <h1>学生性别：{{ sex }}</h1>
    <button @click="add">点我</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '张三',
      sex: '男',
    }
  },
}
</script>
<style lang="less" scoped></style>
