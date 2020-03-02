<template>
  <main class="flex flex-start justify-center inset-shadow">
    <div class="q-pa-md col-12-sm col-8-md col-6-lg shadow-1" style="max-width: 800px; width: 100%;">
      <h3 style="margin-top: 20px; text-align: center;">Blog</h3>
      <q-markdown>
Nothing to see here at this time...
      </q-markdown>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Blog',

  meta: {
    title: 'Blog - Jeff Galbraith',
    meta: {
      description: { name: 'description', content: 'Jeff Galbraith\' blog' },
      keywords: { name: 'keywords', content: 'blog' },
      twitterCard: { name: 'twitter:card', content: 'summary' },
      twitterSite: { name: 'twitter:site', content: '@jgalbraith64' },
      ogType: { name: 'og:type', content: 'article' },
      ogImage: { name: 'og:image', content: 'https://jeffgalbraith.dev/statics/avatar.jpg' },
      ogSiteName: { name: 'og:site_name', content: 'Jeff Galbraith' }
    }
  }
}
</script>
