<template lang="html">
  <Layout>
    <div id="app">
      <Title>
        <span class="shadow-sm rounded-md">
          <button
            @click="exportToPDF"
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Export PDF
          </button>
        </span>
      </Title>
      <div class="py-4 md:py-8">
        <Error :error="errorType" />
        <form v-on:submit.prevent="addListTitle">
          <div>
            <label for="listTitle" class="block text-sm font-medium leading-5 text-gray-700">List Title</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input
                v-model="listTitle"
                id="listTitle"
                class="form-input flex w-full sm:leading-8 py-4 w-full pr-16"
                placeholder="Should I use..."
              />
              <FormButton size="large" />
            </div>
          </div>
        </form>

        <div class="grid grid-cols-2 gap-8 mt-4 md:mt-8" ref="allLists">
          <ListWrapper v-for="listTitle in listTitles" :key="listTitle" :title="listTitle" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import html2pdf from 'html2pdf.js'

import Layout from '@/components/Layout'
import Title from '@/components/Title'
import ListWrapper from '@/components/ListWrapper'
import FormButton from '@/components/FormButton'
import Error from '@/components/Error'

export default {
  data() {
    return {
      listTitle: '',
      listTitles: ['Mark', 'Jordi'],
      errorType: null
    }
  },
  methods: {
    addListTitle() {
      try {
        if (!this.listTitle) throw 'emptyString'
        this.listTitles.push(this.listTitle)
        this.listTitle = ''
        this.errorType = ''
      } catch (e) {
        this.errorType = e
      }
    },
    exportToPDF() {
      html2pdf(this.$refs.allLists, {
        margin: 0.5,
        filename: 'pros-const-list.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { dpi: 192, letterRendering: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
      })
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
