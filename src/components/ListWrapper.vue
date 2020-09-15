<template>
  <div class="overflow-hidden rounded-lg">
    <div class="px-4 py-6 bg-teal-200 bg-opacity-50">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex-1">
          <ListTitle :title="title" />
        </div>
        <div class="flex items-center mt-4 space-x-4 md:ml-4 md:mt-0" data-html2canvas-ignore="true">
          <slot />
        </div>
      </div>
    </div>
    <div class="px-4 py-6 bg-teal-100 bg-opacity-75">
      <List :title="title" :id="id" />
    </div>
  </div>
</template>

<script>
import List from '@/components/List'
import ListTitle from '@/components/ListTitle'

export default {
  components: {
    List,
    ListTitle,
  },
  props: ['title', 'id'],
}
</script>
