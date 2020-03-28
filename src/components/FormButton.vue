<template lang="html">
  <div
    class="absolute inset-y-0 right-0 inline-flex justify-center items-center"
    :class="{ 'mr-2': size === 'small', 'mr-4': size === 'large' }"
  >
    <button
      type="submit"
      name="button"
      class="inline-flex justify-center items-center bg-gray-100 hover:bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline p-2 rounded-md"
    >
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        :class="{ 'w-3 h-3': size === 'small', 'w-6 h-6': size === 'large' }"
      >
        <path d="M12 4v16m8-8H4"></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: ["size"]
};
</script>
