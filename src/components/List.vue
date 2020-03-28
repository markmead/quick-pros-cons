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
        </div>
        <div class="mt-2 text-sm text-red-500" v-if="submitStatus === 'ERROR_CONS'">Field is required</div>
      </form>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="border-b border-gray-200 p-2 sm:px-4">
          <h2>
            Pros
            <sup class="text-gray-500">{{ prosList.length }}</sup>
          </h2>
        </div>
        <div class="p-2 sm:px-4">
          <div v-if="prosList.length">
            <ul class="-mt-2">
              <li v-for="(prosItem, index) in prosList" :key="index" class="text-green-600 flex justify-between mt-2">
                <span>{{ prosItem }}</span>
                <button
                  @click="removeProsItem(index)"
                  class="ml-4 inline-flex justify-center items-center bg-gray-100 hover:bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline p-2 rounded-md"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-3 h-3"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          <div v-else>
            <div class="text-gray-400">{{ emptyMessage.proMessage }}</div>
          </div>
        </div>
      </div>

      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="border-b border-gray-200 p-2 sm:px-4">
          <h2>
            Cons
            <sup class="text-gray-500">{{ consList.length }}</sup>
          </h2>
        </div>
        <div class="p-2 sm:px-4">
          <div v-if="consList.length">
            <ul class="-mt-2">
              <li v-for="(consItem, index) in consList" :key="index" class="text-red-600 flex justify-between mt-2">
                <span>{{ consItem }}</span>
                <button
                  @click="removeConsItem(index)"
                  class="ml-4 inline-flex justify-center items-center bg-gray-100 hover:bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline p-2 rounded-md"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-3 h-3"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          <div v-else>
            <div class="text-gray-400">{{ emptyMessage.conMessage }}</div>
          </div>
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
      submitStatus: '',
      emptyMessages: [
        {
          proMessage: 'What makes this great?',
          conMessage: 'What makes this bad?'
        },
        {
          proMessage: 'Why is it a pro?',
          conMessage: 'Why is it a con?'
        },
        {
          proMessage: 'You love it',
          conMessage: 'You hate it'
        }
      ]
    }
  },
  props: ['title', 'id'],
  computed: {
    prosInputID() {
      return `${this.stringToID(this.title)}_pros_item_${this.id}`
    },
    consInputID() {
      return `${this.stringToID(this.title)}_cons_item_${this.id}`
    },
    emptyMessage() {
      return this.emptyMessages[this.getRandomNumber()]
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
    removeProsItem(id) {
      this.prosList.splice(id, 1)
    },
    removeConsItem(id) {
      this.consList.splice(id, 1)
    },
    stringToID(value) {
      return value.replace(/ /g, '_').toLowerCase()
    },
    getRandomNumber() {
      return Math.floor(Math.random() * this.emptyMessages.length)
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
