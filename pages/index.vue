<template>
  <div id="main-page" style="position: relative; width: 100%;">
    <NavBar id="navbar" :faq="faqFlag" />
    <section id="mainSection">
      <div class="mainContent">
        <Intro id="intro" :intro="intro" :volunteerOpen="volunteerFlag" :mentorOpen="mentorFlag" />
        <div id="scaledSection">
          <Events id="events" :items="events" />
          <FAQ id="faq" v-if="faqFlag" :items="FAQs" />
          <Sponza id="sponza" v-if="sponsorFlag" :items="sponsors" />
        </div>
      </div>
    </section>
    <Footer :text="footer" />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Intro from '~/components/Intro.vue'
import Sponza from '~/components/Sponza.vue'
import Footer from '~/components/Footer.vue'
import fireDb from '~/plugins/firebase.js'
import Events from '~/components/Events.vue'
import FAQ from '~/components/Faq.vue'
export default {
  components: {
    NavBar,
    Intro,
    Footer,
    Sponza,
    Events,
    FAQ
  },
  computed: {
    screenWidth() {
      return screen.width
    }
  },
  asyncData: async () => {
    const Sponsors = 'Sponsors'
    const Events = 'Events'
    const FAQ = 'Faq'
    // functions
    // data
    const data = await fireDb.getWebsiteData()
    const listOfSponsors = await fireDb.getCollection(Sponsors)
    const listOfEvents = await fireDb.getCollection(Events)
    const FaqQuestions = await fireDb.getCollection(FAQ)

    return {
      info: data.WelcomeText,
      sponsors: listOfSponsors,
      outro: data.OutroText,
      footer: data.FooterText,
      events: listOfEvents,
      intro: {
        text: data.IntroText,
        introButtonEnabled: data.IntroButtonEnabled,
        introLink: data.IntroButtonLink,
        signUpText: data.SignUpText
      },
      FAQs: FaqQuestions,
      ...data.featureFlags
    }
  }
}
</script>

<style lang="scss">

</style>
