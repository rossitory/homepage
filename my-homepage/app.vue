<script setup lang="ts">
useHead({
  title: 'WebDev Ross – Modern Web Applications & Websites',
  meta: [
    { name: 'description', content: 'I build fast, intuitive websites and web applications designed for performance and usability.' },
    
    // OpenGraph (for WhatsApp, Facebook, LinkedIn)
    { property: 'og:title', content: 'WebDev Ross – Modern Web Applications & Websites' },
    { property: 'og:description', content: 'I build fast, intuitive websites and web applications designed for performance and usability.' },
    { property: 'og:image', content: 'https://www.webdev-ross.com/og-image.jpg?v=2' },
    { property: 'og:url', content: 'https://www.webdev-ross.com' },
    { property: 'og:type', content: 'website' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'WebDev Ross – Modern Web Applications & Websites' },
    { name: 'twitter:description', content: 'I build fast, intuitive websites and web applications designed for performance and usability.' },
    { name: 'twitter:image', content: 'https://www.webdev-ross.com/og-image.jpg?v=2' },
  ],
})
</script>


<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
      <NuxtRouteAnnouncer />
    </NuxtLayout>
  </div>
</template>
