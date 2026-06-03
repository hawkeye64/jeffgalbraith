<template>
  <article class="project-card" :style="{ '--project-accent': project.accent }">
    <div class="project-card__orb" aria-hidden="true" />
    <div class="project-card__top row items-start no-wrap">
      <q-icon class="project-card__icon" :name="project.icon" size="28px" />
      <div class="q-ml-md">
        <div class="project-card__eyebrow">{{ project.eyebrow }}</div>
        <h3>{{ project.name }}</h3>
      </div>
    </div>

    <p>{{ project.summary }}</p>

    <div class="project-card__tags row q-gutter-xs">
      <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
    </div>

    <div class="project-card__links row q-gutter-sm">
      <q-btn
        v-for="link in project.links"
        :key="link.href"
        class="site-btn site-btn--ghost"
        :href="link.href"
        target="_blank"
        rel="noopener"
        no-caps
        rounded
        unelevated
        dense
      >
        {{ link.label }}
        <q-icon name="north_east" size="16px" class="q-ml-xs" />
      </q-btn>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ProjectEntry } from "@/data/projects";

defineOptions({
  name: "ProjectCard",
});

defineProps<{
  project: ProjectEntry;
}>();
</script>
