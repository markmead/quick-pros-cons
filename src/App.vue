<template lang="html">
  <div id="app">
    <Title />
    <Error :error="errorType" />
    <form class="form" v-on:submit.prevent="addListTitle">
      <input type="text" name="List Title" v-model="listTitle">
      <FormButton text="Add List" />
    </form>
    <ListWrapper v-for="listTitle in listTitles" :key="listTitle" :title="listTitle" />
  </div>
</template>

<script>
import Title from '@/components/Title'
import ListWrapper from '@/components/ListWrapper'
import FormButton from '@/components/FormButton'
import Error from '@/components/Error'

export default {
  data() {
    return {
      listTitle: '',
      listTitles: [],
      errorType: null
    }
  },
  methods: {
    addListTitle() {
      try {
        if(!this.listTitle) throw 'emptyString'
        this.listTitles.push(this.listTitle)
        this.listTitle = ''
        this.errorType = ''
      }
      catch(e) {
        this.errorType = e
      }
    }
  },
  components: {
    Title,
    ListWrapper,
    FormButton,
    Error
  }
}
</script>

<style lang="css" scoped>
.form {
  border: 1px solid;
}
</style>
