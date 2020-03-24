<template lang="html">
  <div v-if="error === 'emptyString'" class="p-2 rounded-lg bg-red-600 shadow-lg sm:p-3 mb-4">
    <div class="flex items-center justify-between flex-wrap">
      <div class="w-0 flex-1 flex items-center">
        <span class="flex p-2 rounded-lg bg-red-800">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-white"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
        </span>
        <p class="ml-3 font-medium text-white truncate">
          <span class="md:hidden">
            You need to enter a title
          </span>
          <span class="hidden md:inline">
            Uh oh! You need to enter a title
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
