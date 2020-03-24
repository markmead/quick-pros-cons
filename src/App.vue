<template lang="html">
  <Layout>
    <div id="app">
      <Title />
      <div class="py-4 md:py-8">
        <Error :error="errorType" />
        <form v-on:submit.prevent="addListTitle">
          <div>
            <label for="listTitle" class="block text-sm font-medium leading-5 text-gray-700">List Title</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input
                v-model="listTitle"
                id="listTitle"
                class="form-input flex w-full sm:leading-8 py-4 w-full"
                placeholder="Should I use..." />
              <FormButton text="Add List" />
            </div>
          </div>
        </form>
        <div class="grid grid-cols-3 gap-8 mt-4 md:mt-8">
          <ListWrapper v-for="listTitle in listTitles" :key="listTitle" :title="listTitle" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import Title from '@/components/Title'
import ListWrapper from '@/components/ListWrapper'
import FormButton from '@/components/FormButton'
import Error from '@/components/Error'

export default {
  data() {
    return {
      listTitle: '',
      listTitles: [],
      errorType: null
    }
  },
  methods: {
    addListTitle() {
      try {
        if(!this.listTitle) throw 'emptyString'
        this.listTitles.push(this.listTitle)
        this.listTitle = ''
        this.errorType = ''
      }
      catch(e) {
        this.errorType = e
      }
    }
  },
  components: {
    Layout,
    Title,
    ListWrapper,
    FormButton,
    Error
  }
}
</script>
