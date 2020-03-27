<template lang="html">
  <Layout>
    <div id="app" class="relative">
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
        <button
          @click="showConfig = !showConfig"
          class="ml-4 text-gray-700 inline-flex items-center p-2 border border-transparent rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:border-gray-150 active:bg-gray-150 transition duration-150 ease-in-out"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            ></path>
          </svg>
        </button>
      </Title>
      <Config :isOpen="showConfig" v-model="listSettings" />
      <div class="py-4 md:py-8">
        <form @submit.prevent="addListTitle">
          <div>
            <label for="listTitle" class="block text-sm font-medium leading-5 text-gray-700">List Title</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input
                v-model.trim="$v.listTitle.$model"
                id="listTitle"
                class="form-input flex w-full sm:leading-8 py-4 w-full pr-16"
                placeholder="Should I use..."
                :class="{ 'border-red-500': submitStatus === 'ERROR' }"
              />
              <FormButton size="large" />
            </div>
          </div>
          <div class="mt-2 text-sm text-red-500" v-if="submitStatus === 'ERROR'">Field is required</div>
        </form>

        <div class="grid gap-8 mt-4 md:mt-8" :class="listsPerRowClass" ref="allLists">
          <ListWrapper v-for="(listTitle, index) in listTitles" :key="index" :title="listTitle" :id="index" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import html2pdf from 'html2pdf.js'
import { required } from 'vuelidate/lib/validators'

import Layout from '@/components/Layout'
import Config from '@/components/Config'
import Title from '@/components/Title'
import ListWrapper from '@/components/ListWrapper'
import FormButton from '@/components/FormButton'

export default {
  data() {
    return {
      listTitle: '',
      listTitles: ['Mark', 'Jordi'],
      showConfig: false,
      submitStatus: '',
      listSettings: {
        listsPerRow: 2,
        nameOfPDF: 'pros-cons'
      }
    }
  },
  computed: {
    listsPerRowClass() {
      return `grid-cols-${this.listSettings.listsPerRow}`
    }
  },
  methods: {
    addListTitle() {
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.listTitles.push(this.listTitle)
        this.listTitle = ''
        this.submitStatus = 'OK'
      }
    },
    exportToPDF() {
      html2pdf(this.$refs.allLists, {
        margin: 0.5,
        filename: `${this.listSettings.nameOfPDF}.pdf`,
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
    Config
  },
  validations: {
    listTitle: {
      required
    }
  }
}
</script>
