<template lang="html">
  <div id="app">
    <Title />
    <form class="form" v-on:submit.prevent="addListTitle">
      <input type="text" name="List Title" v-model="listTitle">
      <button type="submit" name="button">Add List</button>
    </form>
    <ListWrapper v-for="listTitle in listTitles" :key="listTitle" :title="listTitle" />
  </div>
</template>

<script>
import Title from '@/components/Title'
import ListWrapper from '@/components/ListWrapper'

export default {
  data() {
    return {
      listTitle: '',
      listTitles: []
    }
  },
  methods: {
    addListTitle() {
      // TODO: stop the user submitting nothing
      this.listTitles.push(this.listTitle)
      this.listTitle = ''
    }
  },
  components: {
    Title,
    ListWrapper
  }
}
</script>

<style lang="css" scoped>
.form {
  border: 1px solid;
}
</style>
