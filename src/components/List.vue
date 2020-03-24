<template lang="html">
  <div>
    <form class="form" v-on:submit.prevent="addProsItem">
      <input type="text" name="prosItem" v-model="prosItem">
      <FormButton text="Add Pro" />
    </form>

    <form class="form" v-on:submit.prevent="addConsItem">
      <input type="text" name="consItem" v-model="consItem">
      <FormButton text="Add Con" />
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
import FormButton from '@/components/FormButton'
export default {
  data() {
    return {
      prosItem: '',
      consItem: '',
      prosList: [],
      consList: []
    }
  },
  components: {
    FormButton
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
