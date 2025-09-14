<template>
  <div class="flex flex-col items-center justify-center min-h-screen gap-4">
    <h1 class="text-4xl font-bold">JavaScript Basics</h1>
    <div class="flex flex-col items-center gap-4">
      <h4 class="text-2xl">Contador con JavaScript Vue</h4>
      <button id="decrement" class="btn btn-primary" @click="less">-</button>
      <span id="value">{{ count }}</span>
      <button id="increment" class="btn btn-primary" @click="add">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let count = ref(0)

let add = function () {
  count.value++
}

let less = function () {
  count.value--
}
</script>

<style lang="scss" scoped></style>
