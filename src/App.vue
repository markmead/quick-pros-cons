<template>
  <Layout>
    <div id="app" class="flex flex-col h-screen p-4 sm:p-6 lg:p-8">
      <div class="relative">
        <Title>
          <div class="flex items-center space-x-4">
            <Button @action="exportToPDF">Export to PDF</Button>
            <Button @action="toggleConfig" variant="system">
              <SettingsSVG v-if="!showConfig" />
              <CloseSVG v-if="showConfig" />
            </Button>
          </div>
        </Title>
        <Config v-if="showConfig" v-model="listSettings" />
      </div>

      <div class="h-full p-8 rounded-b-lg bg-indigo-50">
        <form @submit.prevent="addListTitle">
          <div>
            <label for="listTitle" class="sr-only">List Title</label>
            <div class="relative">
              <input
                v-model.trim="$v.listTitle.$model"
                id="listTitle"
                class="w-full py-4 pl-4 pr-20 text-lg leading-none text-indigo-600 placeholder-indigo-400 bg-indigo-100 border-0 form-input"
                placeholder="Should I use..."
                :class="{ 'border-red-500': submitStatus === 'ERROR' }"
              />
              <span class="absolute right-0 transform -translate-x-2 -translate-y-1/2 top-1/2">
                <Button type="submit" variant="input">
                  <AddSVG />
                </Button>
              </span>
            </div>
          </div>
          <div class="mt-2 text-sm text-red-500" v-if="submitStatus === 'ERROR'">Field is required</div>
        </form>

        <div v-if="listTitles.length > 0" ref="allLists">
          <draggable
            v-model="listTitles"
            handle="#handleDrag"
            class="grid gap-8 mt-4 md:mt-8"
            :class="listsPerRowClass"
          >
            <ListWrapper
              v-for="(listTitle, index) in listTitles"
              :key="index"
              :title="listTitle"
              :id="index"
            >
              <Button variant="system" reference="handleDrag">
                <DragSVG />
              </Button>
              <Button variant="system" @action="removeList(index)">
                <CloseSVG />
              </Button>
            </ListWrapper>
          </draggable>
        </div>
        <Empty v-else />
      </div>
    </div>
  </Layout>
</template>

<script>
import html2pdf from 'html2pdf.js'
import draggable from 'vuedraggable'
import { required } from 'vuelidate/lib/validators'

import Layout from '@/components/Layout'
import Config from '@/components/Config'
import Title from '@/components/Title'
import ListWrapper from '@/components/ListWrapper'
import Empty from '@/components/Empty'

export default {
  data() {
    return {
      listTitle: '',
      listTitles: [],
      showConfig: false,
      submitStatus: '',
      listSettings: {
        listsPerRow: 2,
        nameOfPDF: 'pros-cons',
      },
    }
  },
  computed: {
    listsPerRowClass() {
      return `grid-cols-${this.listSettings.listsPerRow}`
    },
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
        jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' },
      })
    },
    removeList(id) {
      this.listTitles.splice(id, 1)
    },
    toggleConfig() {
      this.showConfig = !this.showConfig
    },
  },
  components: {
    draggable,
    Layout,
    Title,
    ListWrapper,
    Empty,
    Config,
  },
  validations: {
    listTitle: {
      required,
    },
  },
}
</script>

<style lang="postcss" scoped>
.sortable-chosen {
  @apply border-2 border-dashed border-gray-300 shadow-lg;
}
</style>
