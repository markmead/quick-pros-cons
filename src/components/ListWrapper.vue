<template lang="html">
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
      <ListTitle :title="title"/>
    </div>
    <div class="px-4 py-5 sm:p-6">
      <List />
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
  props: ['title']
}
</script>
