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
        :src="'https://avatars.githubusercontent.com/' + name"
        :ratio="1"
        class="rounded-borders"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'Sponsor',

  props: {
    name: String
  },

  data () {
    return {}
  },

  methods: {
    onClick () {
      openURL('https://github.com/' + this.name)
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
  color: #777
</style>
