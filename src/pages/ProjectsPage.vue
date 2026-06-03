<template>
  <q-page class="site-page">
    <section class="projects-hero site-shell">
      <div class="projects-hero__copy">
        <p class="site-kicker">Open-source lab</p>
        <h1>Quasar app extensions, docs tooling, and experiments with fingerprints.</h1>
        <p>
          A living map of the things I keep nudging forward: component libraries, documentation
          workflows, icon catalogs, and Quasar-powered applications.
        </p>
      </div>

      <div class="projects-hero__panel">
        <div class="projects-hero__rail" aria-hidden="true">
          <span v-for="project in featuredProjects.slice(0, 6)" :key="project.name">
            {{ project.name }}
          </span>
          <span class="projects-hero__more">And many more...</span>
        </div>
        <div class="projects-hero__callout">
          <q-icon name="psychology_alt" size="36px" />
          <strong>Pattern first. Polish second. Keep shipping.</strong>
          <span>
            The best tools here come from repeated friction: examples that broke, docs that needed
            shared parts, or UI gaps that deserved a small focused component.
          </span>
        </div>
      </div>
    </section>

    <section class="site-shell project-highlights">
      <article
        v-for="highlight in projectHighlights"
        :key="highlight.title"
        class="project-highlight"
      >
        <q-icon :name="highlight.icon" size="28px" />
        <h2>{{ highlight.title }}</h2>
        <p>{{ highlight.text }}</p>
      </article>
    </section>

    <section class="site-shell">
      <div class="section-heading">
        <p class="site-kicker">Project Shelf</p>
        <h2>App extensions and companion projects</h2>
        <p>
          A curated pass through the tools, libraries, and experiments I keep moving forward across
          the Quasar ecosystem and adjacent app work.
        </p>
      </div>

      <div class="project-grid">
        <ProjectCard v-for="project in featuredProjects" :key="project.name" :project="project" />
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue";
import { featuredProjects, projectHighlights } from "@/data/projects";

defineOptions({
  name: "ProjectsPage",
});
</script>
