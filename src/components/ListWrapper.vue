<template lang="html">
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="border-b border-gray-200 px-4 py-6">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex-1 min-w-0">
          <ListTitle :title="title" />
        </div>
        <div class="mt-4 flex items-center md:mt-0 md:ml-4">
          <slot />
        </div>
      </div>
    </div>
    <div class="px-4 py-6">
      <List :title="title" :id="id" />
    </div>
  </div>
</template>

<script>
import List from "@/components/List";
import ListTitle from "@/components/ListTitle";

export default {
  components: {
    List,
    ListTitle
  },
  props: ["title", "id"]
};
</script>
