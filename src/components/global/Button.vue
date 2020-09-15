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
    let primaryStyle = 'bg-teal-600 text-white hover:bg-teal-500 px-6 py-4'
    let systemStyle = 'bg-teal-200 text-teal-500 hover:bg-teal-300 p-3'
    let inputStyle = 'bg-teal-200 text-teal-500 hover:bg-teal-300 p-1.5'
    let nakedStyle = 'text-teal-500 w-6 h-6 bg-teal-100 p-1.5'

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
