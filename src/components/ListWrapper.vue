<template lang="html">
  <div class="list-wrapper">
    <ListTitle :title="title"/>
    <List />
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
