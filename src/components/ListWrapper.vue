<template lang="html">
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="border-b border-gray-200 px-4 py-6">
      <ListTitle :title="title" />
    </div>
    <div class="px-4 py-6">
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
    ListTitle
  },
  props: ['title', 'id']
}
</script>
