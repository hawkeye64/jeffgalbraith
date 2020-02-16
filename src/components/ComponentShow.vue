<template>
  <q-card
    class="column"
    flat
    bordered
    dark
  >
    <q-card-section
      class=""
    >
      <div class="text-center text-bold" style="width: 100%; color: #7ed8ff;">{{ name }}</div>
      <div class="text-center text-subtitle2" style="width: 100%;">{{ title }}</div>
      <q-img
        v-if="image"
        :src="image"
        :style="imageStyle"
        contain
        class="rounded-borders"
      />
      <q-markdown class="q-pt-md">
{{ blurb }}
      </q-markdown>
    </q-card-section>
  </q-card>

</template>

<script>
export default {
  name: 'ComponentShow',

  props: {
    name: String,
    url: String,
    image: String,
    title: String,
    blurb: String,
    imageStyle: String
  },

  data () {
    return {}
  }
}
</script>
