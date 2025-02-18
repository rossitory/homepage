<script lang="ts" setup>
definePageMeta({
  title: 'WebDev Ross - Clean & Modern Web Development',
  meta: [
    { name: 'description', content: 'Building structured, high-performance websites and web apps. Let’s turn your vision into a digital experience that drives results.' },
    
    // OpenGraph (for better previews on social media)
    { property: 'og:title', content: 'WebDev Ross - Clean & Modern Web Development' },
    { property: 'og:description', content: 'Building structured, high-performance websites and web apps. Let’s turn your vision into a digital experience that drives results.' },
    { property: 'og:image', content: '/static/images/og-image.jpg' }, // Replace with your actual OG image
    { property: 'og:url', content: 'https://www.webdev-ross.com' },

    // Twitter Card (for better link previews on Twitter/X)
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'WebDev Ross - Clean & Modern Web Development' },
    { name: 'twitter:description', content: 'Building structured, high-performance websites and web apps. Let’s turn your vision into a digital experience that drives results.' },
    { name: 'twitter:image', content: '/static/images/twitter-image.jpg' }, // Replace with an actual image
  ],
})
</script>

<template>
  <div class="">
    <SectionsIndexSection />
    <SectionsAboutSection />
    <SectionsOfferSection />
    <SectionsContactSection />
  </div>
</template>
