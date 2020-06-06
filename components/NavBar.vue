<template>
  <nav>
    <nav :style="{visibility: visible, opacity: opacity}" class="navbar" role="navigation" aria-label="main navigation">
      <a
        href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=black"
        target="_blank"
        rel="noopener"
      >
        <img
          id="MLH-badge"
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-black.svg"
          alt="Major League Hacking 2020 Hackathon Season"
          class="navbar-item"
        ></a>
      <div id="navbar" class="navbar-menu">
        <div class="navbar-start" />
        <div class="navbar-end">
          <div class="buttons">
            <a v-scroll-to="'#events'" href="#" class="navbar-item">About</a>
            <a v-if="faq" v-scroll-to="'#faq'" href="#" class="navbar-item">FAQ</a>
            <a v-scroll-to="'#sponza'" href="#" class="navbar-item">Sponsors</a>
            <a href="https://cmd-f.nwplus.io/" rel="noopener" target="_blank" class="navbar-item">2019</a>
          </div>
          <a href="https://www.nwplus.io/" target="_blank" rel="noopener">
            <img
              id="navbar-logo"
              class="navbar-item"
              src="~@/assets/nwlogos/nwplus-logo.png"
              alt="nwPlus logo"
            >
          </a>
        </div>
      </div>
    </nav>
  </nav>
</template>

<script>
export default {
  props: {
    faq: {
      required: true,
      type: Boolean
    }
  },
  data() {
    return {
      visible: 'visible',
      opacity: '1',
      scrollFunc: () => {}
    }
  },
  mounted() {
    this.scrollFunc = this.handleScroll()
    window.addEventListener('scroll', this.scrollFunc)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollFunc)
  },
  methods: {
    handleScroll() {
      if (screen.width > 768) {
        let lastScroll = 0
        return (event) => {
          const scroll = window.pageYOffset || document.documentElement.scrollTop
          if (scroll <= 0) {
            this.visible = 'visible'
            this.opacity = '1'
          } else if (scroll > lastScroll) {
            this.visible = 'hidden'
            this.opacity = '0'
          } else {
            this.visible = 'visible'
            this.opacity = '1'
          }
          lastScroll = scroll
        }
      } else {
        return (event) => {
          const scroll = window.pageYOffset || document.documentElement.scrollTop
          if (scroll <= 80) {
            this.visible = 'visible'
            this.opacity = '1'
          } else {
            this.visible = 'hidden'
            this.opacity = '0'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
