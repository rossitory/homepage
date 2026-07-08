<script lang="ts" setup>
const techStacks = [
  {
    label: 'Frontend',
    items: ['TypeScript', 'Vue.js', 'Nuxt.js', 'React'],
  },
  {
    label: 'Backend & APIs',
    items: ['PHP', 'Symfony', 'PostgreSQL', 'REST Architecture'],
  },
  {
    label: 'Mobile',
    items: ['Flutter', 'Dart'],
  },
  {
    label: 'Infrastructure',
    items: ['Docker', 'Linux', 'Git'],
  },
]
</script>

<template>
  <section id="tech-stack" class="page-section">
    <div class="max-w-5xl">
      <h2 class="section-title mb-8">Core Technologies.</h2>
      <div class="grid gap-4 lg:grid-cols-2">
        <article v-for="stack in techStacks" :key="stack.label" class="tech-stack-card">
          <p class="tech-stack-label">{{ stack.label }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="item in stack.items" :key="item" class="tech-badge">{{ item }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>