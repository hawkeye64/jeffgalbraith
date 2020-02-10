<template>
  <main class="flex flex-start justify-center inset-shadow">
    <div class="q-pa-md col-12-sm col-8-md col-6-lg shadow-1" style="max-width: 800px; width: 100%;">
      <h3 style="margin-top: 20px; text-align: center;">Sponsors</h3>
      <q-markdown>
On Github, I am known as [@Hawkeye64](https://github.com/hawkeye64). I contribute to FOSS, a lot! And, I am very fortunate to have sponsors. Github doubles your donations in your first year of the Github Sponsors program, which is also very fortunate. If you would like to sponsor me, click [here](https://github.com/sponsors/hawkeye64).

If you would like to do a one-time sponsor, you can do it through [PayPal](https://paypal.me/hawkeye64).
      </q-markdown>
      <q-markdown>
# Platinum Sponsors
      </q-markdown>
      <q-markdown>
# Gold Sponsors
      </q-markdown>
      <q-markdown>
# Silver Sponsors
      </q-markdown>
      <q-markdown>
# Bronze Sponsors
      </q-markdown>
      <q-markdown>
# A Sponsors
      </q-markdown>
      <div class="row items-stretch q-gutter-sm">
        <sponsor
          v-for="sponsor in sponsors10"
          :key="sponsor.name"
          :name="sponsor.name"
        />
      </div>

      <q-markdown>
# B Sponsors
      </q-markdown>
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
export default {
  name: 'Sponsors',

  components: {
    Sponsor: () => import('../components/Sponsor')
  },

  data () {
    return {
      sponsors10: [
        { name: 'digitalit' },
        { name: 'dantrevino' },
        { name: 'nothingismagick' },
        { name: 'ex-kimura' }
      ],
      sponsors5: [
        { name: 'g3rd' },
        { name: 'BlueRoseStory' },
        { name: 'ibrainventures' },
        { name: 'Mary-Tyler-Moore' },
        { name: 'patrickmonteiro' },
        { name: 'sqnz' }
      ]
    }
  }
}
</script>
