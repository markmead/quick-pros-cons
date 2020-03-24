<template lang="html">
  <div>
    <div class="grid grid-cols-2 gap-4 mb-4">
      <form v-on:submit.prevent="addProsItem">
        <div>
          <label for="prosItem" class="sr-only">Add Pro</label>
          <div class="relative rounded-md shadow-sm">
            <input
              v-model="prosItem"
              id="prosItem"
              class="form-input block w-full sm:text-sm sm:leading-5 pr-10"
              placeholder="Because it's great..." />
            <FormButton size="small" />
          </div>
        </div>
      </form>

      <form v-on:submit.prevent="addConsItem">
        <div>
          <label for="consItem" class="sr-only">Add Con</label>
          <div class="relative rounded-md shadow-sm">
            <input
              v-model="consItem"
              id="consItem"
              class="form-input block w-full sm:text-sm sm:leading-5 pr-10"
              placeholder="Because it's bad..." />
            <FormButton size="small" />
          </div>
        </div>
      </form>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="border-b border-gray-200 p-2 sm:px-4">
          <h2>Pros</h2>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <ul>
            <li
              v-for="prosItem in prosList"
              :key="prosItem"
              class="text-green-600">{{ prosItem }}</li>
          </ul>
        </div>
      </div>

      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="border-b border-gray-200 p-2 sm:px-4">
          <h2>Cons</h2>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <ul>
            <li
              v-for="consItem in consList"
              :key="consItem"
              class="text-red-600">{{ consItem }}</li>
          </ul>
        </div>
      </div>
    </div>
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
