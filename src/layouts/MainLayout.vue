<template>
  <q-layout view="lHh Lpr lFf" class="site-layout">
    <q-header class="site-header" bordered>
      <q-toolbar class="site-shell">
        <q-btn class="site-brand" flat no-caps rounded @click="goHome">
          <q-avatar size="34px">
            <img src="/jeff.png" alt="Jeff Galbraith portrait" />
          </q-avatar>
          <span>Jeff Galbraith</span>
        </q-btn>

        <q-space />

        <nav class="site-nav row items-center q-gutter-sm" aria-label="Primary">
          <q-btn flat no-caps rounded label="Home" @click="goHome" />
          <q-btn flat no-caps rounded label="Projects" @click="goProjects" />
          <q-btn
            href="https://github.com/hawkeye64"
            target="_blank"
            rel="noopener"
            flat
            no-caps
            rounded
            label="GitHub"
          />
          <q-btn
            class="site-btn site-btn--primary"
            href="https://github.com/sponsors/hawkeye64"
            target="_blank"
            rel="noopener"
            no-caps
            rounded
            unelevated
            label="Sponsor"
          />
        </nav>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer class="site-footer">
      <div class="site-shell site-footer__inner">
        <div>
          <strong>Part-time Open-Sourcerer. Full-time curious human.</strong>
          <p>
            Built from Bassano, Alberta with Quasar, stubborn patience, and just enough coffee to
            keep the compiler honest.
          </p>
        </div>
        <div class="row q-gutter-sm">
          <q-btn
            class="site-btn site-btn--ghost"
            href="https://github.com/hawkeye64"
            target="_blank"
            rel="noopener"
            no-caps
            rounded
            label="GitHub"
          />
          <q-btn
            class="site-btn site-btn--ghost"
            href="https://github.com/sponsors/hawkeye64"
            target="_blank"
            rel="noopener"
            no-caps
            rounded
            label="Sponsor"
          />
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

defineOptions({
  name: 'MainLayout',
})

const router = useRouter()

function goHome() {
  void router.push('/')
}

function goProjects() {
  void router.push('/projects')
}
</script>
