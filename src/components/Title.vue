<template>
  <div class="flex flex-col p-8 bg-teal-100 rounded-t-lg md:items-center md:justify-between md:flex-row">
    <div class="flex-1">
      <h1 class="text-2xl font-bold leading-none text-teal-700 sm:text-3xl">Quick Pros/Cons Lists</h1>
    </div>
    <div class="flex items-center mt-4 md:mt-0 md:ml-4">
      <slot />
    </div>
  </div>
</template>
