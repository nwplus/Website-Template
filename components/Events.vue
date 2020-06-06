<template>
  <div class="mainContainer ">
    <div class="headerText">
      Main Values
    </div>
    <div class="subText">
      cmd-f was established according to our 3 main values:
    </div>
    <div class="no-overflow columns is-3-tablet">
      <div v-for="item in sortedEvents" :key="item.order">
        <div
          class="events column"
        >
          <div class="image-container">
            <img :src="item.imageLink" :class="{smaller: isWomenSupportingWomen(item)}" class="image">
          </div>
          <h3 class="title">
            {{ item.title }}
          </h3>
          <p class="valuesText">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import orderBy from 'lodash.orderby'
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    sortedEvents: function () {
      return orderBy(this.items, 'order')
    }
  },
  methods: {
    isWomenSupportingWomen(item) {
      return item.title === 'Women* Supporting Women*'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
