<template lang="html">
  <div v-if="error === 'emptyString'" class="error">Please enter a title</div>
</template>

<script>
export default {
  props: ['error']
}
</script>
