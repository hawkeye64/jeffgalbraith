<template>
  <q-card
    class="column sponsor"
    flat
    bordered
  >
    <q-card-section
      class="text-bold"
    >
      {{ name }}
      <q-img
        alt="avatar"
        :src="url"
        :ratio="1"
      />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'Sponsor',

  props: {
    name: String,
    url: String,
    image: String
  },

  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
.sponsor
  max-width: 175px
  width: 100%
</style>
