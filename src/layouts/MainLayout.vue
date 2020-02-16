<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-tabs
        :breakpoint="500"
        v-model="tab"
        class="text-light-blue-11 bg-black"
      >
        <q-tab
          v-for="route in routes"
          :key="route.name"
          :name="route.name"
          :label="route.label"
        />
      </q-tabs>
    </q-header>

    <q-page-container>
      <vue-page-transition :name="transitionName">
        <router-view />
      </vue-page-transition>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  components: {
  },

  data () {
    return {
      tab: 'home',
      routes: [
        { name: 'home', label: 'Home' },
        { name: 'sponsors', label: 'Sponsors' },
        { name: 'blog', label: 'Blog' }
      ],
      direction: 'next'
    }
  },

  mounted () {
    this.tab = this.$router.currentRoute.path.slice(1)
  },

  computed: {
    transitionName () {
      return (this.direction === 'prev' ? 'fade-in-right' : 'fade-in-left')
    }
  },

  watch: {
    tab (newTab, oldTab) {
      const a = this.getPageIndex(newTab)
      const b = this.getPageIndex(oldTab)
      this.direction = a < b ? 'prev' : 'next'
      if (this.$router.currentRoute.path.slice(1) !== newTab) {
        this.$router.push(newTab)
      }
    }
  },

  methods: {
    getPageIndex (tab) {
      let index = 0
      for (const route of this.routes) {
        if (route.name === tab) {
          return index
        }
        ++index
      }
      return -1
    }
  }
}
</script>
