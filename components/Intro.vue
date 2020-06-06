<template>
  <div class="intro-section">
    <kinesis-container :duration="parallaxDelay" event="scroll" easing="cubic-bezier(0.250, 0.250, 0.750, 0.750)">
      <div :class="{visible: isTimeout}" class="header">
        <div class="header-content">
          <div class="mobile-h1-wrapper">
            <h1 class="mobile-h1">
              change the norm
            </h1>
          </div>
          <p><strong>March 07-08, 2020</strong></p>
          <p>Vancouver’s all-female* hackathon</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0C-8InaaZoTOhlZfowGVhg9R4UwKn4Pdvcw6si2oRGff9TA/viewform" rel="noopener" target="_blank"><button class="hackerButton">Apply Now</button></a>
          <a v-if="mentorOpen" href="https://docs.google.com/forms/d/e/1FAIpQLScAldaf6ABAEI6rVNH6xjjmuBr_dq6fQFviKxMyTURNeV696g/viewform" rel="noopener" target="_blank">Interested in Mentoring?</a>
          <a v-if="volunteerOpen" href="https://docs.google.com/forms/d/e/1FAIpQLSeT1GHNpahF8hYyJiEneFzazKCJddT9M72a_-jmGdInP6NLHw/viewform" rel="noopener" target="_blank">I want to volunteer!</a>
        </div>
      </div>
      <div class="subheader">
        <div class="subheader-content">
          <kinesis-element
            :strength="textParallaxStrength"
            type="translate"
            axis="y"
          >
            <p>Join us on International Women*'s Day at British Columbia's first and largest all-female* hackathon to explore new technologies and celebrate women* in tech.</p>
          </kinesis-element>
        </div>
        <div class="subheader-content-body">
          <kinesis-element
            :strength="textParallaxStrength"
            type="translate"
            axis="y"
          >
            <p id="subheader-body-main">
              We're here to break stereotypes and create a safe space for women* where they can learn new skills, build confidence, and discover a supportive community. Whether you're a first time hacker or a veteran, we want to help you take your next steps in tech. Come join us for a fun weekend of hacking with amazing workshops, social events, and food!
            </p>
          </kinesis-element>
          <kinesis-element
            :strength="textParallaxStrength"
            type="translate"
            axis="y"
          >
            <p id="acknowledgement">
              * The cmd-f team would like to acknowledge that "female" or "women" is not an accurate description for many people and may make some feel unwelcome. We use * to include cis and trans women, as well as non-binary, agender and intersex people.
            </p>
          </kinesis-element>
        </div>
      </div>
    </kinesis-container>
  </div>
</template>

<script>
import Vue from 'vue'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)
export default {
  props: {
    isTimeout: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    volunteerOpen: {
      type: Boolean,
      default: () => false
    },
    mentorOpen: {
      type: Boolean,
      default: () => false
    }
  },
  data: function () {
    return {
      parallaxDelay: 150
    }
  },
  computed: {
    textParallaxStrength() {
      return screen.width > 768 ? -350 : -100
    }
  },

  mounted: function () {
    setTimeout(() => {
      this.isTimeout = true
    }, 300)
  }
}
</script>

<style lang="scss" scoped>

</style>
