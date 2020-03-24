<template lang="html">
  <div>
    <form class="form" v-on:submit.prevent="addProsItem">
      <input type="text" name="prosItem" v-model="prosItem">
      <button type="submit" name="button">Add Pro</button>
    </form>

    <form class="form" v-on:submit.prevent="addConsItem">
      <input type="text" name="consItem" v-model="constItem">
      <button type="submit" name="button">Add Con</button>
    </form>
    <ul class="list">
      <li v-for="prosItem in prosList" :key="prosItem">{{ prosItem }}</li>
    </ul>
    <ul class="list">
      <li v-for="consItem in consList" :key="consItem">{{ consItem }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prosItem: '',
      consItem: '',
      prosList: [],
      consList: []
    }
  },
  methods: {
    addProsItem() {
      this.prosList.push(this.prosItem)
      this.prosItem = ''
    },
    addConsItem() {
      this.consList.push(this.consItem)
      this.consItem = ''
    }
  }
}
</script>

<style lang="css" scoped>
.list {
  border: 1px solid red;
  margin: 10px;
  padding: 10px;
}
</style>
