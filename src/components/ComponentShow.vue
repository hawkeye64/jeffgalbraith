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
      <q-btn
        no-caps
        flat
        :label="name"
        size="lg"
        type="a"
        :href="url"
        target="_blank"
        style="width: 100%; color: #7ed8ff;"
        class="text-center text-bold"
      />
      <div
        class="text-center text-subtitle2"
        style="width: 100%;"
      >
        {{ title }}
      </div>
      <q-img
        v-if="image"
        :src="image"
        :style="imageStyle"
        contain
        class="rounded-borders"
      />
      <!-- eslint-disable vue/html-indent -->
      <q-markdown class="q-pt-md">
{{ blurb }}
      </q-markdown>
      <!-- eslint-enable vue/html-indent -->
    </q-card-section>
  </q-card>
</template>

<script>
import { openURL } from 'quasar'

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
  },

  methods: {
    openURL
  }
}
</script>
