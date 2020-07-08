<template>
  <div class="row full-width justify-center">
    <div class="page-column">
      <div class="q-pa-md col-12-sm col-8-md col-6-lg shadow-1 q-gutter-sm" style="max-width: 800px; width: 100%;">
        <q-markdown>
# Components

My passion is creating components. Check out some of the ones I have done.
        </q-markdown>
        <template v-for="item in items">
          <component-show
            :key="item.name"
            :name="item.name"
            :url="item.url"
            :image="item.image"
            :title="item.title"
            :blurb="item.blurb"
            :image-style="item.imageStyle"
          />
        </template>
        <q-markdown>
Other projects:
        </q-markdown>
        <template v-for="other in others">
          <component-show
            :key="other.name"
            :name="other.name"
            :url="other.url"
            :title="other.title"
            :blurb="other.blurb"
          />
        </template>
        <q-markdown class="q-py-xl">
If you have an idea for a component or would like to pay to have a (private) component done, feel free to contact me for a quote.
        </q-markdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Components',

  components: {
    ComponentShow: () => import('./ComponentShow')
  },

  data () {
    return {
      items: [
        {
          name: 'QCalendar',
          url: 'https://quasarframework.github.io/quasar-ui-qcalendar/docs',
          image: 'https://quasarframework.github.io/quasar-ui-qcalendar/qcalendar-week-view.png',
          title: 'Monthly, Weekly, Day, Scheduler, Agenda, Resource and Monthly Mini-Mode views',
          blurb: '**QCalendar** is a powerful calendar component that plugs right into your Quasar application. It allows for viewing of **day** (1-6 days), **week**, **monthly** (including mini-mode), **scheduler**, **resource** and **agenda** views. Painstaking care has been given to make almost every aspect of QCalendar configurable and/or modifiable in some way and control given to the developer.'
        },
        {
          name: 'QMarkdown',
          url: 'https://quasarframework.github.io/quasar-ui-qmarkdown/docs',
          image: 'q-markdown.png',
          title: 'QMarkdown provides the ability for your Quasar app to display inline markdown',
          blurb: '**QMarkdown** is a powerful markdown component that has a multitude of markdown commands.'
        },
        {
          name: 'QMediaPlayer',
          url: 'https://quasarframework.github.io/quasar-ui-qmediaplayer/docs',
          image: 'https://quasarframework.github.io/quasar-ui-qmediaplayer/qmediaplayer.png',
          title: 'QMediaPlayer provides the ability for your Quasar app play HTML5 video and audio',
          blurb: '**QMediaPlayer** is an HTML5 video and audio player with subtitle and language support.'
        },
        {
          name: 'QScroller',
          url: 'https://quasarframework.github.io/quasar-ui-qscroller/docs',
          image: 'https://quasarframework.github.io/quasar-ui-qscroller/q-date-time-scroller-ampm.png',
          title: 'QScroller is a barrel-roll scroller',
          blurb: '**QScroller** has **string**, **time**, **date**, **time-range**, **date-range** and **date-time** selectors.',
          imageStyle: 'height: 280px; max-width: 525px;'
        },
        {
          name: 'QFlashcard',
          url: 'https://quasarframework.github.io/quasar-ui-qflashcard/docs',
          image: 'q-flashcard.png',
          title: 'QFlashcard for beautiful animations',
          blurb: '**QFlashcard** can bring your site to life by providing beautiful animations that can be put together in combos or mashups.'
        },
        {
          name: 'QPdfviewer',
          url: 'https://quasarframework.github.io/app-extension-qpdfviewer/docs',
          image: 'https://quasarframework.github.io/app-extension-qpdfviewer/qpdfviewer.png',
          title: 'QPdfviewer for HTML5 PDF Viewing capabilities',
          blurb: '**QPdfviewer** allows you to display PDF documents in your Quasar App'
        },
        {
          name: 'QIconPicker',
          url: 'https://quasarframework.github.io/quasar-ui-qiconpicker/docs',
          image: 'q-icon-picker.png',
          title: 'QIconPicker allows your users to pick from icon sets',
          blurb: '**QIconPicker** is a fully customizable icon picker component.',
          imageStyle: 'height: 280px; max-width: 525px;'
        },
        {
          name: 'QPlaceholder',
          url: 'https://quasarframework.github.io/app-extension-qplaceholder/docs',
          image: 'https://quasarframework.github.io/app-extension-qplaceholder/qplaceholder.png',
          title: 'Use QPlaceholder to display a placeholder before your data arrives from your server',
          blurb: '**QPlaceholder** is a fully customizable placeholder creator.'
        },
        {
          name: 'QZoom',
          url: 'https://quasarframework.github.io/app-extension-qzoom/docs',
          image: 'q-zoom.png',
          title: 'Use QZoom to zoom in on anything',
          blurb: '**QZoom** is a Medium-like image zoomer, except you can zoom in on anything.'
        },
        {
          name: 'QActivity',
          url: 'https://quasarframework.github.io/app-extension-qactivity',
          image: 'q-activity.png',
          title: 'Create activity timelines',
          blurb: '**QActivity** is an activity timeline manager.',
          imageStyle: 'height: 280px; max-width: 525px;'
        },
        {
          name: 'Example Viewer',
          url: 'https://github.com/hawkeye64/example-viewer',
          image: 'https://raw.githubusercontent.com/hawkeye64/example-viewer/master/images/example-viewer--QCalendar-week-view.png',
          title: 'Show coding examples',
          blurb: '**Example Viewer** shows run-time coding examples with ability to view source, view source on Github and use sources on Codepen.'
        },
        {
          name: 'JSON API Viewer',
          url: 'https://github.com/hawkeye64/json-api-viewer',
          image: 'https://raw.githubusercontent.com/hawkeye64/json-api-viewer/master/images/json-api-viewer--qcalendar.png',
          title: 'Show and search JSON API',
          blurb: '**JSON API Viewer** uses the output from **quasar-json-api** (below) to display a searchable documentation viewer of the JSON API data for your component.'
        }
      ],
      others: [
        {
          name: 'eslint-plugin-quasar',
          url: 'https://github.com/quasarframework/eslint-plugin-quasar',
          title: 'ESlinter plugin for Quasar Framework',
          blurb: 'This linter integrates with ESLint to provide real-time proper Quasar component usage.'
        },
        {
          name: 'app-extension-dotenv',
          url: 'https://github.com/quasarframework/app-extension-dotenv',
          title: 'Wrapper for dotenv',
          blurb: 'Build-time Quasar app extension that allows targeted environment variables to be injected to the browser-level.'
        },
        {
          name: 'app-extension-qenv',
          url: 'https://github.com/quasarframework/app-extension-qenv',
          title: 'Less opinionated than dotenv',
          blurb: 'Build-time Quasar app extension that allows targeted environment variables to be injected to the browser-level.'
        },
        {
          name: 'quasar-json-api',
          url: 'https://github.com/hawkeye64/quasar-json-api',
          title: 'Used at build-time to create JSON API',
          blurb: 'See **JSON API VIEWER** (above) for more information.'
        },
        {
          name: 'q-colorize-mixin',
          url: 'https://github.com/hawkeye64/q-colorize-mixin',
          title: 'A Quasar Framework component mix-in for color management',
          blurb: 'Use the **q-colorize-mixin** to allow your components to be "colorized". Supports Quasar Color Palette, CSS named colors, hex colors, rgb(a) and hsl(a) colors.'
        },
        {
          name: 'q-theme-mixin',
          url: 'https://github.com/hawkeye64/q-theme-mixin',
          title: 'A Quasar Framework component mix-in for theme management',
          blurb: 'Use the **q-theme-mixin** to allow your components to be "themable" (see QCalendar above).'
        },
        {
          name: 'onvif-nvt',
          url: 'https://github.com/hawkeye64/onvif-nvt',
          title: 'ONVIF library for NVT (Network Video Transmitter) devices',
          blurb: 'Use the **onvif-nvt** package to connect and display from any ONVIF-enabled camera.'
        }
      ]
    }
  }
}
</script>
