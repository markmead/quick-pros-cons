<template lang="html">
  <div>
    <div class="grid grid-cols-2 gap-4 mb-4" data-html2canvas-ignore="true">
      <form @submit.prevent="addProsItem">
        <div>
          <label :for="prosInputID" class="sr-only">Add Pro</label>
          <div class="relative rounded-md shadow-sm">
            <input
              v-model.trim="$v.prosItem.$model"
              :id="prosInputID"
              class="form-input block w-full sm:text-sm sm:leading-5 pr-10"
              :class="{ 'border-red-500': submitStatus === 'ERROR_PROS' }"
              placeholder="It's great..."
            />
            <FormButton size="small" />
          </div>
        </div>
        <div class="mt-2 text-sm text-red-500" v-if="submitStatus === 'ERROR_PROS'">Field is required</div>
      </form>

      <form @submit.prevent="addConsItem">
        <div>
          <label :for="consInputID" class="sr-only">Add Con</label>
          <div class="relative rounded-md shadow-sm">
            <input
              v-model.trim="$v.consItem.$model"
              :id="consInputID"
              class="form-input block w-full sm:text-sm sm:leading-5 pr-10"
              :class="{ 'border-red-500': submitStatus === 'ERROR_CONS' }"
              placeholder="It's bad..."
            />
            <FormButton size="small" />
          </div>
          {{ consItem }}
        </div>
        <div class="mt-2 text-sm text-red-500" v-if="submitStatus === 'ERROR_CONS'">Field is required</div>
      </form>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="border-b border-gray-200 p-2 sm:px-4">
          <h2>Pros</h2>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <ul>
            <li v-for="prosItem in prosList" :key="prosItem" class="text-green-600">{{ prosItem }}</li>
          </ul>
        </div>
      </div>

      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="border-b border-gray-200 p-2 sm:px-4">
          <h2>Cons</h2>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <ul>
            <li v-for="consItem in consList" :key="consItem" class="text-red-600">{{ consItem }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

import FormButton from '@/components/FormButton'

export default {
  data() {
    return {
      prosItem: '',
      consItem: '',
      prosList: [],
      consList: [],
      submitStatus: ''
    }
  },
  props: ['title', 'id'],
  computed: {
    prosInputID() {
      return `${this.stringToID(this.title)}_pros_item_${this.id}`
    },
    consInputID() {
      return `${this.stringToID(this.title)}_cons_item_${this.id}`
    }
  },
  components: {
    FormButton
  },
  methods: {
    addProsItem() {
      if (this.$v.prosItem.$invalid) {
        this.submitStatus = 'ERROR_PROS'
      } else {
        this.prosList.push(this.prosItem)
        this.prosItem = ''
        this.submitStatus = 'OK_PROS'
      }
    },
    addConsItem() {
      if (this.$v.consItem.$invalid) {
        this.submitStatus = 'ERROR_CONS'
      } else {
        this.consList.push(this.consItem)
        this.consItem = ''
        this.submitStatus = 'OK_CONS'
      }
    },
    stringToID(value) {
      return value.replace(/ /g, '_').toLowerCase()
    }
  },
  validations: {
    prosItem: {
      required
    },
    consItem: {
      required
    }
  }
}
</script>
