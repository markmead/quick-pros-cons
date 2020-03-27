<template>
  <div v-show="isOpen" class="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg z-50">
    <div class="rounded-md bg-white shadow-xs">
      <div class="p-4">
        <label class="block text-sm font-medium leading-5 text-gray-700">Lists in a row</label>
        <div class="mt-1">
          <input
            v-model="value.listsPerRow"
            type="number"
            min="1"
            max="6"
            class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        </div>
      </div>
      <div class="border-t border-gray-100"></div>
      <div class="p-4">
        <label class="block text-sm font-medium leading-5 text-gray-700">Name of PDF</label>
        <p class="mt-1 text-xs leading-5 text-gray-500">
          This is the name of the exported file
        </p>
        <div class="mt-1">
          <input
            v-model="value.nameOfPDF"
            type="text"
            class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isOpen', 'value'],
  watch: {
    updateValue: function(value) {
      this.$emit('input', value)
    }
  }
}
</script>
