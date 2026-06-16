import { defineConfig } from '#q-app'

export default defineConfig((/* ctx */) => {
  return {
    boot: [],
    css: ['app.scss'],

    extras: ['roboto-font', 'material-icons'],

    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node24',
      },

      vueRouterMode: 'history',

      vitePlugins: [
        [
          'vite-plugin-checker',
          {
            vueTsc: true,
          },
          { server: false },
        ],
      ],
    },

    devServer: {
      open: true,
      port: 9009,
    },

    framework: {
      config: {},
      plugins: [],
    },

    animations: [],
  }
})
