<template>
  <div>
    <div class="grid grid-cols-2 gap-4 mb-4" data-html2canvas-ignore="true">
      <form @submit.prevent="addProsItem">
        <div>
          <label :for="prosInputID" class="sr-only">Add Pro</label>
          <input
            v-model.trim="$v.prosItem.$model"
            :id="prosInputID"
            class="w-full p-4 text-sm leading-none text-teal-600 placeholder-teal-400 bg-teal-200 bg-opacity-50 border-0 form-input"
            :class="{ 'border-red-500': submitStatus === 'ERROR_PROS' }"
            placeholder="Why is it a pro?"
          />
        </div>
        <div class="mt-2 text-sm text-red-500" v-if="submitStatus === 'ERROR_PROS'">Field is required</div>
      </form>

      <form @submit.prevent="addConsItem">
        <div>
          <label :for="consInputID" class="sr-only">Add Con</label>
          <input
            v-model.trim="$v.consItem.$model"
            :id="consInputID"
            class="w-full p-4 text-sm leading-none text-teal-600 placeholder-teal-400 bg-teal-200 bg-opacity-50 border-0 form-input"
            :class="{ 'border-red-500': submitStatus === 'ERROR_CONS' }"
            placeholder="Why is it a con?"
          />
        </div>
        <div class="mt-2 text-sm text-red-500" v-if="submitStatus === 'ERROR_CONS'">Field is required</div>
      </form>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="overflow-hidden">
        <h2 class="font-medium text-teal-600">
          Pros
          <sup class="text-teal-500">({{ prosList.length }})</sup>
        </h2>
        <div v-if="prosList.length">
          <ul class="mt-2 space-y-2">
            <li v-for="(prosItem, index) in prosList" :key="index" class="flex items-center justify-between">
              <span class="font-medium text-green-500">{{ prosItem }}</span>
              <Button @action="removeProsItem(index)" variant="naked">
                <CloseSVG />
              </Button>
            </li>
          </ul>
        </div>
      </div>

      <div class="overflow-hidden">
        <h2 class="font-medium text-teal-600">
          Cons
          <sup class="text-teal-500">({{ consList.length }})</sup>
        </h2>
        <div v-if="consList.length">
          <ul class="mt-2 space-y-2">
            <li v-for="(consItem, index) in consList" :key="index" class="flex items-center justify-between">
              <span class="font-medium text-red-500">{{ consItem }}</span>
              <Button @action="removeConsItem(index)" variant="naked">
                <CloseSVG />
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      prosItem: '',
      consItem: '',
      prosList: [],
      consList: [],
      submitStatus: '',
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
  },
  validations: {
    prosItem: {
      required,
    },
    consItem: {
      required,
    },
  },
}
</script>
