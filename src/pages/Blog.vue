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
      description: { name: 'description', content: 'Software Development Blog for Jeff Galbraith' },
      keywords: { name: 'keywords', content: 'blog' },

      // Google / Search Engine Tags
      itempropDescription: { itemprop: 'description', content: 'Software Development Blog for Jeff Galbraith' },
      itempropImage: { itemprop: 'image', content: 'https://jeffgalbraith.dev/avatar.jpg' },

      // Facebook Meta Tags
      ogUrl: { property: 'og:url', content: 'https://jeffgalbraith.dev' },
      ogType: { property: 'og:type', content: 'website' },
      ogTitle: { property: 'og:title', content: 'Jeff Galbraith' },
      ogDesc: { property: 'og:description', content: 'Software Development Blog for Jeff Galbraith' },
      ogImage: { property: 'og:image', content: 'https://jeffgalbraith.dev/avatar.jpg' },

      // Twitter Meta Tags
      twitterCard: { name: 'twitter:card', content: 'summary_large_image' },
      twitterTitle: { name: 'twitter:title', content: 'Jeff Galbraith' },
      twitterDesc: { name: 'twitter:description', content: 'Software Development Blog for Jeff Galbraith' },
      twitterImage: { name: 'twitter:image', content: 'https://jeffgalbraith.dev/avatar.jpg' }
    }
  }
}
</script>
