<template>
  <section
    class="absolute right-0 z-50 w-64 origin-top-right transform -translate-x-8 -translate-y-4 bg-white rounded-lg shadow-lg"
  >
    <div class="p-4">
      <label class="block text-sm font-medium leading-none text-gray-700">Lists in a row</label>
      <div class="mt-1">
        <input
          v-model.trim="$v.value.listsPerRow.$model"
          type="number"
          min="1"
          max="6"
          class="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
          :class="{ 'border-red-500': $v.value.listsPerRow.$error }"
          placeholder="1-12"
        />
      </div>
      <div
        class="mt-2 text-sm text-red-500"
        v-if="!$v.value.listsPerRow.between"
      >Must be between 1 - 6</div>
      <div
        class="mt-2 text-sm text-red-500"
        v-if="!$v.value.listsPerRow.numeric"
      >Value must be a number</div>
    </div>
    <div class="border-t border-gray-100"></div>
    <div class="p-4">
      <label class="block text-sm font-medium leading-5 text-gray-700">Name of PDF</label>
      <p class="mt-1 text-xs leading-5 text-gray-500">This is the name of the exported file</p>
      <div class="mt-1">
        <input
          v-model.trim="$v.value.nameOfPDF.$model"
          type="text"
          class="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
          :class="{ 'border-red-500': $v.value.nameOfPDF.$error }"
          placeholder="my-pros-cons-list"
        />
      </div>
      <div class="mt-2 text-sm text-red-500" v-if="!$v.value.nameOfPDF.required">Field is required</div>
    </div>
  </section>
</template>

<script>
import { required, between, numeric } from 'vuelidate/lib/validators'

export default {
  props: ['value'],
  watch: {
    updateValue(value) {
      this.$emit('input', value)
    },
  },
  validations: {
    value: {
      listsPerRow: {
        numeric,
        between: between(1, 6),
      },
      nameOfPDF: {
        required,
      },
    },
  },
}
</script>
