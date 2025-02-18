<template>
  <section id="about" class="min-h-screen pt-8 mb-28 sm:mb-0">
    <div class="lg:hidden flex justify-center items-center"> 
      <img src="/static/images/avatar_circle_darkbg.png" alt="Avatar_of_Kevin" 
        class="w-56 md:w-80"/>
    </div>
    <h2 class="custom-header mb-4">About <span class="text-customPrimary">me.</span></h2>
    <div class="flex flex-col md:flex-row gap-4"> 
      <!-- Text Section -->
      <div class="w-full lg:w-2/3">
        <p class="custom-paragraph mb-4">
          I build websites and web applications with a clean, structured approach—well-organized code makes all the difference. My biggest project so far? The new 
          <a 
            class="font-semibold text-white hover:text-customPrimary"
            href="https://deinschrauberplatz.de/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Dein Schrauberplatz (opens in a new tab)"
          >
            "Dein Schrauberplatz"
          </a>
          site, including a custom booking system built from scratch.
        </p>
        <p class="custom-paragraph mb-4">
          I collaborate with businesses of all sizes (with a soft spot for smaller ones). I’m all for straightforward, efficient communication, whether it’s a quick call when needed or a simple email update.
        </p>
        <p class="custom-paragraph mb-4">
          When I’m not coding, you’ll find me in the ocean catching waves and clearing my mind—nothing beats the reset a surf session brings. 🌊
        </p>
        <p class="custom-paragraph mb-4">By the way, these are the technologies I've most recently been working with:</p>
        
        <div class="flex flex-wrap gap-4">
          <div class="pt-4 pr-4 pb-4 pl-0">
            <h2 class="custom-table-header">Languages</h2>
            <ul class="custom-table-item">
              <li>PHP</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>SQL</li>
              <li>Dart</li>
            </ul>
          </div>
          <div class="pt-4 pr-4 pb-4">
            <h2 class="custom-table-header">Frameworks</h2>
            <ul class="custom-table-item">
              <li>Vue.js / Nuxt.js</li>
              <li>WordPress</li>
              <li>Symfony</li>
              <li>Flutter</li>
            </ul>
          </div>
          <div class="pt-0 sm:pt-4 pr-4 pb-4 -mt-4 sm:mt-0 col-span-2 sm:col-span-1">
            <h2 class="custom-table-header">Tools</h2>
            <ul class="custom-table-item">
              <li>Gimp</li>
              <li>Inkscape</li>
              <li>Postman</li>
              <li>DBeaver</li>
              <li>ChatGPT / Copilot</li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Image Section -->
      <div class="hidden lg:flex lg:w-1/3 justify-center items-start"> 
        <img src="/static/images/avatar_circle_darkbg.png" alt="Avatar_of_Kevin" 
          class="w-auto h-auto max-w-xs sm:max-w-sm md:max-w-sm object-contain" />
      </div>

    </div>
  </section>
</template>
