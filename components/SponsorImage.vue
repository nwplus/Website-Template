<template>
  <a :href="formatURL(item.url)" class="link" target="_blank" rel="noopener noreferrer">
    <img
      :class="{[item.rank]: true}"
      :src="item.imageURL"
      :alt="item.name"
    >
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatURL(url) {
      if (!url.includes('http')) {
        return `http://${url}`
      } else {
        return url
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
