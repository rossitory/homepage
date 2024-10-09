<script lang="ts" setup>
</script>

<template>
  <section id="about" class="flex flex-col md:flex-row items-start justify-center min-h-screen p-8 w-full">
    <div class="w-full md:w-1/2 order-2 md:order-1">
      <h1 class="custom-header mb-4">About me</h1>
      <p class="custom-paragraph mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
      <p class="custom-paragraph mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p class="custom-paragraph">Here are a few technologies I’ve been recently working with:</p>
      <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div class="pt-4 pr-4 pb-4 pl-0">
          <h2 class="custom-table-header">Languages</h2>
          <ul class="custom-table-item">
            <li>PHP</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>HTML / CSS</li>
            <li>Python</li>
            <li>Java</li>
            <li>SQL</li>
            <li>Dart</li>
          </ul>
        </div>
        <div class="pt-4 pr-4 pb-4">
          <h2 class="custom-table-header">Frameworks</h2>
          <ul class="custom-table-item">
            <li>Vue.js</li>
            <li>Nuxt.js</li>
            <li>Symfony</li>
            <li>Django</li>
            <li>Tailwind</li>
            <li>Flutter</li>
          </ul>
        </div>
        <div class="pt-4 pr-4 pb-4 col-span-2 sm:col-span-1">
          <h2 class="custom-table-header">Tools</h2>
          <ul class="custom-table-item">
            <li>WordPress</li>
            <li>DevTools</li>
            <li>GitHub</li>
            <li>Bash</li>
            <li>Docker</li>
            <li>Postman</li>
            <li>DBeaver</li>
            <li>ChatGPT / Copilot</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 order-1 md:order-2">
      <img src="/static/images/avatar_circle_darkbg.png" alt="Avatar_of_Kevin" class="w-full h-auto md:w-512 md:h-512" />
    </div>
  </section>
</template>