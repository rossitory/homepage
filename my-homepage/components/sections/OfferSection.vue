<script lang="ts" setup>
import { Code2, Smartphone, Workflow } from 'lucide-vue-next'

const services = [
  {
    title: 'Custom SaaS & Web Platforms',
    text: 'Architecting and developing highly scalable, custom-built web applications and booking systems using modern frameworks like Vue.js and Nuxt.',
    icon: Code2,
  },
  {
    title: 'Native Mobile Apps',
    text: 'Designing and developing cross-platform mobile solutions with Flutter and Dart, integrating complex features and ensuring smooth hardware communication.',
    icon: Smartphone,
  },
  {
    title: 'API Design & System Migration',
    text: 'Modernizing legacy infrastructure by migrating third-party tools into robust in-house solutions powered by Symfony, PHP, and scalable REST APIs.',
    icon: Workflow,
  },
]
</script>

<template>
  <section id="offer" class="page-section">
    <div class="max-w-6xl">
      <h2 class="section-title mb-8">Engineering Services.</h2>
      <div class="grid gap-4 md:grid-cols-3">
        <article v-for="service in services" :key="service.title" class="feature-card">
          <component :is="service.icon" class="feature-icon" aria-hidden="true" />
          <h3 class="feature-title">{{ service.title }}</h3>
          <p class="section-copy mt-4">{{ service.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>