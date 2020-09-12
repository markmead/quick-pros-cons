<template>
  <button :class="buttonStyle" :type="type" :id="reference" @click="fireAction">
    <slot />
  </button>
</template>

<script>
export default {
  data() {
    return {
      buttonStyle: '',
    }
  },
  props: {
    variant: {
      type: String,
      default: 'primary',
    },
    type: {
      type: String,
      default: 'button',
    },
    reference: String,
    action: Function,
  },
  beforeMount() {
    let variantStyle = ''
    let defaultStyle =
      'inline-flex items-center text-sm font-medium leading-none rounded focus:outline-none focus:shadow-outline'
    let primaryStyle = 'bg-indigo-600 text-white hover:bg-indigo-500 px-6 py-4'
    let systemStyle = 'bg-gray-100 text-gray-700 hover:bg-gray-50 p-3'
    let inputStyle = 'bg-indigo-200 text-indigo-500 hover:bg-indigo-300 p-1.5'
    let nakedStyle = 'text-indigo-500 w-6 h-6 bg-indigo-100 p-1.5'

    switch (this.variant) {
      case 'system':
        variantStyle = systemStyle
        break
      case 'input':
        variantStyle = inputStyle
        break
      case 'naked':
        variantStyle = nakedStyle
        break
      default:
        variantStyle = primaryStyle
        break
    }

    this.buttonStyle = [defaultStyle, variantStyle].join(' ')
  },
  methods: {
    fireAction() {
      this.$emit('action')
    },
  },
}
</script>
