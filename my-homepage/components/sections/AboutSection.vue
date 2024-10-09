<script lang="ts" setup>
</script>

<template>
  <section id="about" class="flex flex-col md:flex-row items-start justify-center min-h-screen p-8 w-full">
    <div class="w-full md:w-1/2 order-2 md:order-1">
      <h1 class="custom-header mb-4">About me</h1>
      <p class="custom-paragraph mb-4">
        I’m Kevin Ross, a freelance full-stack engineer based in Portugal. I started WebDev Ross after an inspiring encounter with a business owner I met at a surf camp in Portugal. What began as a freelance opportunity quickly turned into a passion for collaborating with businesses to develop tailored digital solutions.
      </p>
      <p class="custom-paragraph mb-4">I hold a Bachelor's degree in Computer Science from Bremen and spent a year studying at IST Lisbon through the Erasmus program. Currently, I’m working on my master’s thesis, which I’ll complete in 2025.</p>
      <p class="custom-paragraph mb-4">What sets me apart? I like to keep communication relaxed and easy-going while making sure to deliver high-quality work. For me, it’s all about the best results without unnecessary complications.</p>
      <p class="custom-paragraph mb-4">Here are a few technologies I’ve been recently working with:</p>
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
        <div class="pt-0 sm:pt-4 pr-4 pb-4 -mt-4 sm:mt-0 col-span-2 sm:col-span-1">
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