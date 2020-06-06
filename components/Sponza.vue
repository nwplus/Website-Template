<template>
  <div class="sponza">
    <p class="sponsor-title">
      Sponsors
    </p>
    <br>
    <div id="sponsors-list" class="sponsorCategory">
      <div v-for="item in listOfTera" :key="item.name" class="sponsorWrapper">
        <SponsorImage :item="item" />
      </div>
    </div>
    <div id="sponsors-list" class="sponsorCategory">
      <div v-for="item in listOfGiga" :key="item.name" class="sponsorWrapper">
        <SponsorImage :item="item" />
      </div>
    </div>
    <div id="sponsors-list" class="sponsorCategory">
      <div v-for="item in listOfMega" :key="item.name" class="sponsorWrapper">
        <SponsorImage :item="item" />
      </div>
    </div>
    <div id="sponsors-list" class="sponsorCategory">
      <div v-for="item in listOfKilo" :key="item.name" class="sponsorWrapper">
        <SponsorImage :item="item" />
      </div>
    </div>
    <div id="sponsors-list" class="sponsorCategory">
      <div v-for="item in listOfInKind" :key="item.name" class="sponsorWrapper">
        <SponsorImage :item="item" />
      </div>
    </div>
    <!--  -->
    <BecomeSponsorButton />
  </div>
</template>

<script>
import SponsorImage from '~/components/SponsorImage'
import BecomeSponsorButton from '~/components/becomeSponsorButton'
export default {
  components: { SponsorImage, BecomeSponsorButton },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    listOfTera: function () {
      return this.items.filter(item => item.rank === 'tera')
    },
    listOfGiga: function () {
      return this.items.filter(item => item.rank === 'giga')
    },
    listOfMega: function () {
      return this.items.filter(item => item.rank === 'mega')
    },
    listOfKilo: function () {
      return this.items.filter(item => item.rank === 'kilo')
    },
    listOfInKind: function () {
      return this.items.filter(item => item.rank === 'in-kind')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
