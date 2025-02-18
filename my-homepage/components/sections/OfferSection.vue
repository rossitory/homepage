<script lang="ts" setup>
import { MonitorCog, MonitorSmartphone, Smartphone } from 'lucide-vue-next'
</script>

<template>
  <section id="offer" class="min-h-screen pt-8 mb-28 sm:mb-0">
    <h2 class="custom-header mb-8">What I can <span class="text-customPrimary">do for you.</span></h2>
    <div class="flex flex-wrap gap-4">

      <InfoRow title="Websites that work for you" :icon="MonitorSmartphone" text="I specialize in creating responsive, user-friendly websites that fit your business like a glove. Whether you’re kicking off a new brand or giving your current one a fresh look, I’ll build a site that captures your vibe and keeps your audience engaged." />
      <InfoRow title="Web Applications" :icon="MonitorCog" text="Need a custom solution? From booking systems to complex platforms, I build web applications that scale with your business. I focus on crafting smooth user experiences on the frontend, while ensuring your backend is powerful and maintainable." />
      <InfoRow title="Mobile Apps" :icon="Smartphone" text="Whether it’s a custom mobile app or advanced features, I build dynamic solutions that evolve with your business. I focus on creating apps that deliver a smooth user experience, solid performance, and the scalability you’ll need as you grow." /> 
    </div>
  </section>
</template>"