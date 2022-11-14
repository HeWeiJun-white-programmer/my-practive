<template>
  <div>
    <h1>{{masg}}</h1>
    <button @click="add">请点击</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      masg: 1,
    }
  },
  props: {
    name: {
      type: Number,
      require: true,
    },
  },
  methods: {
    add() {
      this.masg++
      this.$emit('adds', this.masg)
    },
  },
}
</script>

<style></style>
