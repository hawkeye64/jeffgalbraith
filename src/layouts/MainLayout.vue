<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-tabs
        v-model="tab"
        :breakpoint="500"
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

    <q-page-container class="relative-position">
      <router-view />
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

  // computed: {
  //   transitionName () {
  //     return (this.direction === 'prev' ? 'fade-in-right' : 'fade-in-left')
  //   }
  // },

  watch: {
    tab (newTab, oldTab) {
      const a = this.getPageIndex(newTab)
      const b = this.getPageIndex(oldTab)
      this.direction = a < b ? 'prev' : 'next'
      this.$nextTick(() => {
        if (this.$router.currentRoute.value.path.slice(1) !== newTab) {
          this.$router.push(newTab)
        }
      })
    }
  },

  mounted () {
    this.tab = this.$router.currentRoute.value.path.slice(1)
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
