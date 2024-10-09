<script setup>
const props = defineProps({
  son: Number
})
const emit = defineEmits(['SonSpend'])
const spend = () => {
  emit('SonSpend', 5)
}

</script>

<template>
  <div class="son">
    我是儿子组件-老爸给我了{{ son }}元
    <button @click="spend">儿子花5块</button>
  </div>
</template>

<style scoped>
.son {
  border: solid 1px black;
  padding: 10px 0;
  background-color: aquamarine;
}
</style>