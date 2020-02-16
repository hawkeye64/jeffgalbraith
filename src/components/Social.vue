<template>
  <div class="row justify-center items-center q-pb-xl">
    <q-btn class="q-mx-md social" type="a" href="https://twitter.com/jgalbraith64" target="_blank" flat round color="primary" :icon="fabTwitter" size="md" />
    <q-btn class="q-mx-md social" type="a" href="https://github.com/hawkeye64" target="_blank" flat round color="primary" :icon="fabGithub" size="md" />
    <q-btn class="q-mx-md social" type="a" href="https://codepen.io/Hawkeye64" target="_blank" flat round color="primary" :icon="fabCodepen" size="md" />
    <q-btn class="q-mx-md social" type="a" href="mailto:jeff@quasar.dev" target="_blank" flat round color="primary" :icon="farEnvelope" size="md" />
    <q-btn class="q-mx-md social" type="a" href="https://github.com/sponsors/hawkeye64" target="_blank" flat round color="primary" :icon="farHeart" size="md" />
  </div>
</template>

<script>
import {
  fabGithub, fabTwitter, fabCodepen, farEnvelope, farHeart
} from '@quasar/extras/fontawesome-v5'

export default {
  name: 'Social',
  data () {
    return {
      fabGithub,
      fabTwitter,
      fabCodepen,
      farEnvelope,
      farHeart
    }
  }
}
</script>

<style lang="sass">
.social
  &:hover
    color: #c0c0c0 !important
    // font-size: 24px !important
</style>
