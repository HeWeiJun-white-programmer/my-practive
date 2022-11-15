<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ sex }}</h1>
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
  props: {},
  methods: {},
}
</script>

<style></style>
