<template>
  <main class="flex flex-start justify-center inset-shadow">
    <div class="q-pa-md col-12-sm col-8-md col-6-lg shadow-1" style="max-width: 800px; width: 100%;">
      <h3 style="margin-top: 20px; text-align: center;">Sponsors</h3>
      <q-markdown>
# $10 Sponsors
      </q-markdown>
      <div class="row items-stretch q-gutter-sm">
        <sponsor
          v-for="sponsor in sponsors10"
          :key="sponsor.name"
          :name="sponsor.name"
          :url="sponsor.url"
          :image="sponsor.image"
        />
      </div>

      <q-markdown>
# $5 Sponsors
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
        { name: 'digitalit', url: 'https://github.com/digitalit' },
        { name: 'dantrevino', url: 'https://github.com/dantrevino' },
        { name: 'nothingismagick', url: 'https://github.com/nothingismagick' },
        { name: 'ex-kimura', url: 'https://github.com/ex-kimura' }
      ],
      sponsors5: [
        { name: 'g3rd', url: 'https://github.com/g3rd' },
        { name: 'BlueRoseStory', url: 'https://github.com/BlueRoseStory' },
        { name: 'ibrainventures', url: 'https://github.com/ibrainventures' },
        { name: 'Mary-Tyler-Moore', url: 'https://github.com/Mary-Tyler-Moore' },
        { name: 'patrickmonteiro', url: 'https://github.com/patrickmonteiro' },
        { name: 'sqnz', url: 'https://github.com/sqnz' }
      ]
    }
  }
}
</script>
