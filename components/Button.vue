<template>
  <div class="wrapper">
    <a :href="url" :class="`but-wrapped ${!disabled ? 'hoverable' : ''}`">
      <p :class="`but-text ${disabled ? 'disabled' : ''}`">{{ title }}</p>
      <img
        :class="`but ${disabled ? 'disabled' : ''} ${isWide ? 'wide' : ''}`"
        src="~@/assets/button.png"
      >
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Hello World'
    },
    url: {
      type: String,
      default: '#'
    },
    isWide: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
