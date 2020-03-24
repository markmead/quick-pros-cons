<template lang="html">
  <div v-if="error === 'emptyString'" class="error">Please enter a title</div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang="css" scoped>
.error {
  background: red;
  padding: 5px;
}
</style>
