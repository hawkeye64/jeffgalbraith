<template>
  <main class="flex flex-start justify-center inset-shadow">
    <div
      class="q-pa-md col-12-sm col-8-md col-6-lg shadow-1"
      style="max-width: 800px; width: 100%;"
    >
      <h3 style="margin-top: 20px; text-align: center;">Sponsors</h3>
      <!-- eslint-disable vue/html-indent -->
      <q-markdown>
On Github, I am known as [@Hawkeye64](https://github.com/hawkeye64). I contribute to FOSS, a lot! And, I am very fortunate to have sponsors. Github doubles your donations in your first year of the Github Sponsors program, which is also very fortunate. If you would like to sponsor me on Github, click [here](https://github.com/sponsors/hawkeye64).

If you would like to do a one-time sponsor, you can do it through [PayPal](https://paypal.me/hawkeye64).
    </q-markdown>
    <!-- eslint-enable vue/html-indent -->
      <!-- <q-markdown>
# Platinum Sponsors
      </q-markdown> -->
      <!-- <q-markdown>
# Gold Sponsors
      </q-markdown> -->
      <!-- eslint-disable vue/html-indent -->
      <q-markdown>
# Silver Sponsors
      </q-markdown>
      <!-- eslint-enable vue/html-indent -->
      <div class="row items-stretch q-gutter-sm">
        <sponsor
          v-for="sponsor in sponsors50"
          :key="sponsor.name"
          :name="sponsor.name"
        />
      </div>

      <!-- eslint-disable vue/html-indent -->
      <q-markdown>
# Bronze Sponsors
      </q-markdown>
      <!-- eslint-enable vue/html-indent -->
      <div class="row items-stretch q-gutter-sm">
        <sponsor
          v-for="sponsor in sponsors25"
          :key="sponsor.name"
          :name="sponsor.name"
        />
      </div>

      <!-- eslint-disable vue/html-indent -->
      <q-markdown>
# A Sponsors
      </q-markdown>
      <!-- eslint-enable vue/html-indent -->
      <div class="row items-stretch q-gutter-sm">
        <sponsor
          v-for="sponsor in sponsors10"
          :key="sponsor.name"
          :name="sponsor.name"
        />
      </div>

      <!-- eslint-disable vue/html-indent -->
      <q-markdown>
# B Sponsors
      </q-markdown>
      <!-- eslint-enable vue/html-indent -->
      <div class="row items-stretch q-gutter-sm">
        <sponsor
          v-for="sponsor in sponsors5"
          :key="sponsor.name"
          :name="sponsor.name"
          :url="sponsor.url"
          :image="sponsor.image"
        />
      </div>
    </div>
  </main>
</template>

<script>
import Sponsor from '../components/Sponsor'

export default {
  name: 'Sponsors',

  meta: {
    title: 'Sponsors - Jeff Galbraith',
    meta: {
      description: { name: 'description', content: 'Jeff Galbraith\'s sponsors on Github' },
      keywords: { name: 'keywords', content: 'sponsor' },

      // Google / Search Engine Tags
      itempropDescription: { itemprop: 'description', content: 'Jeff Galbraith\'s sponsors on Github' },
      itempropImage: { itemprop: 'image', content: 'https://jeffgalbraith.dev/avatar.jpg' },

      // Facebook Meta Tags
      ogUrl: { property: 'og:url', content: 'https://jeffgalbraith.dev' },
      ogType: { property: 'og:type', content: 'website' },
      ogTitle: { property: 'og:title', content: 'Jeff Galbraith' },
      ogDesc: { property: 'og:description', content: 'Jeff Galbraith\'s sponsors on Github' },
      ogImage: { property: 'og:image', content: 'https://jeffgalbraith.dev/avatar.jpg' },

      // Twitter Meta Tags
      twitterCard: { name: 'twitter:card', content: 'summary_large_image' },
      twitterTitle: { name: 'twitter:title', content: 'Jeff Galbraith' },
      twitterDesc: { name: 'twitter:description', content: 'Jeff Galbraith\'s sponsors on Github' },
      twitterImage: { name: 'twitter:image', content: 'https://jeffgalbraith.dev/avatar.jpg' }
    }
  },

  components: {
    Sponsor
  },

  data () {
    return {
      sponsors50: [
        { name: 'mfyang' },
        { name: 'jubalj' }
      ],
      sponsors25: [
        { name: 'dantrevino' }
      ],
      sponsors10: [
        { name: 'ex-kimura' },
        { name: 'digitalit' },
        { name: 'nothingismagick' },
        { name: 'gruppler' },
        { name: 'flowt-au' },
        // { name: 'agalbenus' },
        // { name: 'iohzrd' }
        { name: 'egyel' }
      ],
      sponsors5: [
        // { name: 'g3rd' },
        { name: 'ibrainventures' },
        // { name: 'patrickmonteiro' },
        { name: 'sqnz' },
        // { name: 'rfox12' }, // private
        { name: 'ueda19850603' },
        // { name: '34fame' },
        // { name: 'AlexanderJohnston' },
        { name: 'm0jimo' }
      ]
    }
  }
}
</script>
