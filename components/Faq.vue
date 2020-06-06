<template>
  <div class="container">
    <h1 class="faq-title">
      FAQ
    </h1>
    <div class="columns">
      <!-- Left column begin -->
      <div class="column is-half is-multiline">
        <!--  -->
        <p class="label">
          General
        </p>
        <div v-for="item in sortedItems" :key="`General-${item.question}`">
          <div v-if="item.selected && item.category == 'General'">
            <button @click="openSesame" class="accordion">
              {{ item.question }}
            </button>
            <div class="panel">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
      <!-- Left column end -->
      <!-- Right column begin -->
      <div class="column is-half is-multiline">
        <!-- logistics start -->
        <p class="label">
          Teams &amp; Projects
        </p>
        <div v-for="item in items" :key="`Teams-${item.question}`">
          <div v-if="item.selected && item.category == 'Teams'">
            <button @click="openSesame" class="accordion">
              {{ item.question }}
            </button>
            <div class="panel">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
        <!-- logistics end -->
        <!-- logistics 2 start -->
        <p class="label">
          Logistics
        </p>
        <div v-for="item in items" :key="`Logistics-${item.question}`">
          <div v-if="item.selected && item.category == 'Logistics'">
            <button @click="openSesame" class="accordion">
              {{ item.question }}
            </button>
            <div class="panel">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
        <!-- logistics 2 end -->
      </div>
      <!-- Right column end -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    sortedItems() {
      return [...this.items].sort((a, b) => {
        if (a.question === 'What is a hackathon?') {
          return -1
        } else if (b.question === 'What is a hackathon?') {
          return 1
        } else {
          return 0
        }
      })
    }
  },
  methods: {
    openSesame: (e) => {
      e.target.classList.toggle('active')
      const panel = e.target.nextElementSibling
      if (panel.style.display === 'block') {
        panel.style.display = 'none'
      } else {
        panel.style.display = 'block'
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
