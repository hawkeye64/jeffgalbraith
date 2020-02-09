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
        { name: 'projects', label: 'Projects' },
        { name: 'about', label: 'About' },
        { name: 'sponsors', label: 'Sponsors' },
        { name: 'blog', label: 'Blog' },
        { name: 'contact', label: 'Contact' }
      ],
      direction: 'next'
    }
  },

  watch: {
    tab (newTab, oldTab) {
      //
    }
  }
}
</script>
