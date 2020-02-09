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
      <transition :name="transitionName" appear>
        <router-view />
      </transition>
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
        { name: 'projects', label: 'Projects' },
        { name: 'about', label: 'About' },
        { name: 'sponsors', label: 'Sponsors' },
        { name: 'blog', label: 'Blog' },
        { name: 'contact', label: 'Contact' }
      ],
      direction: 'next'
    }
  },

  mounted () {
    this.tab = this.$router.currentRoute.path.slice(1)
  },

  computed: {
    transitionName () {
      return 'q-transition--' + (this.direction === 'prev' ? 'slide-right' : 'slide-left')
    }
  },

  watch: {
    tab (newTab, oldTab) {
      let a = this.getPageIndex(newTab)
      let b = this.getPageIndex(oldTab)
      this.direction = a < b ? 'prev' : 'next'
      if (this.$router.currentRoute.path.slice(1) !== newTab) {
        this.$router.push(newTab)
      }
    }
  },

  methods: {
    getPageIndex (tab) {
      let index = 0
      for (let route of this.routes) {
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
