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
          :image="sponsor.url"
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
          :image="sponsor.url"
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
        { name: 'digitalit', url: 'https://github.com/digitalit', image: 'https://avatars3.githubusercontent.com/u/6569136' },
        { name: 'dantrevino', url: 'https://github.com/dantrevino', image: 'https://avatars1.githubusercontent.com/u/7738' },
        { name: 'nothingismagick', url: 'https://github.com/nothingismagick', image: 'https://avatars1.githubusercontent.com/u/35242872' },
        { name: 'ex-kimura', url: 'https://github.com/ex-kimura', image: 'https://avatars2.githubusercontent.com/u/60215365' }
      ],
      sponsors5: [
        { name: 'g3rd', url: 'https://github.com/g3rd', image: 'https://avatars1.githubusercontent.com/u/746731' },
        { name: 'BlueRoseStory', url: 'https://github.com/BlueRoseStory', image: 'https://avatars2.githubusercontent.com/u/45610596' },
        { name: 'ibrainventures', url: 'https://github.com/ibrainventures', image: 'https://avatars0.githubusercontent.com/u/8803626' },
        { name: 'Mary-Tyler-Moore', url: 'https://github.com/Mary-Tyler-Moore', image: 'https://avatars0.githubusercontent.com/u/46167401' },
        { name: 'patrickmonteiro', url: 'https://github.com/patrickmonteiro', image: 'https://avatars3.githubusercontent.com/u/13258255' },
        { name: 'sqnz', url: 'https://github.com/sqnz', image: 'https://avatars2.githubusercontent.com/u/6564582' }
      ]
    }
  }
}
</script>
