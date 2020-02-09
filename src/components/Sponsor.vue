<template>
  <q-card
    class="column cursor-pointer sponsor"
    flat
    bordered
    @click="onClick"
  >
    <q-card-section
      class="text-bold"
    >
      <div class="text-center" style="width: 100%;">{{ name }}</div>
      <q-img
        :src="url"
        :ratio="1"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'Sponsor',

  props: {
    name: String,
    url: String,
    image: String
  },

  data () {
    return {}
  },

  mounted () {
    console.log(this.name, this.url, this.image)
  },

  methods: {
    onClick () {
      openURL(this.url)
    }
  }
}
</script>

<style lang="sass" scoped>
.sponsor
  max-width: 175px
  width: 100%
  max-height: 200px
  height: 200px
</style>
