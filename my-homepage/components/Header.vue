<script lang="ts" setup>
import { ref } from 'vue';

const isDrawerOpen = ref(false);
const cvDownloadUrl = '/cv-kevin-ross-jul-26.pdf';

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};
</script>

<template>
  <header class="text-customOnBackground font-bold py-5 px-6 sm:px-6 lg:p-8 text-xl">
    <h1 class="sr-only">WebDev Ross</h1>
    <nav class="container mx-auto flex items-center justify-between gap-4">
      <NuxtImg
        class="w-20 sm:w-24 lg:w-44 shrink-0"
        src="/logo.svg"
        alt="WebDev Ross"
      />
      <div class="md:hidden">
        <button @click="toggleDrawer" class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 focus:outline-none">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <ul class="hidden md:flex justify-end gap-6 lg:gap-8 font-mono text-base lg:text-lg">
        <li class="relative">
          <a href="#home" class="group text-customOnBackground hover:text-customPrimary flex items-center transition-opacity duration-500">
            <span class="text-customPrimary group-hover:text-customOnBackground mr-1 transition-opacity duration-500">01.</span>Home
          </a>
        </li>
        <li class="relative">
          <a href="#offer" class="group text-customOnBackground hover:text-customPrimary flex items-center transition-opacity duration-500">
            <span class="text-customPrimary group-hover:text-customOnBackground mr-1 transition-opacity duration-500">02.</span>Services
          </a>
        </li>
        <li class="relative">
          <a href="#contact" class="group text-customOnBackground hover:text-customPrimary flex items-center transition-opacity duration-500">
            <span class="text-customPrimary group-hover:text-customOnBackground mr-1 transition-opacity duration-500">03.</span>Contact
          </a>
        </li>
        <li class="relative">
          <a :href="cvDownloadUrl" download="cv-kevin-ross-jul-26.pdf" class="group text-customOnBackground hover:text-customPrimary flex items-center transition-opacity duration-500">
            <span class="text-customPrimary group-hover:text-customOnBackground mr-1 transition-opacity duration-500">04.</span>Download CV
          </a>
        </li>
      </ul>
    </nav>
    <transition name="slide-fade">
      <div v-if="isDrawerOpen" class="fixed inset-0 z-50 bg-customBackground/95 backdrop-blur-sm transition-opacity duration-500 md:hidden">
        <div class="fixed inset-0 p-5">
          <button @click="toggleDrawer" class="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white focus:outline-none transition-opacity duration-500">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul class="mx-auto mt-20 flex max-w-sm flex-col items-center gap-5 text-white">
            <li>
              <a href="#home" @click="toggleDrawer" class="group flex items-center justify-center rounded-full px-5 py-3 text-xl transition-opacity duration-500 hover:text-gray-400">
                <span class="text-customPrimary group-hover:text-customOnBackground mr-1 transition-opacity duration-500">01.</span>Home
              </a>
            </li>
            <li>
              <a href="#offer" @click="toggleDrawer" class="group flex items-center justify-center rounded-full px-5 py-3 text-xl transition-opacity duration-500 hover:text-gray-400">
                <span class="text-customPrimary group-hover:text-customOnBackground mr-1 transition-opacity duration-500">02.</span>Services
              </a>
            </li>
            <li>
              <a href="#contact" @click="toggleDrawer" class="group flex items-center justify-center rounded-full px-5 py-3 text-xl transition-opacity duration-500 hover:text-gray-400">
                <span class="text-customPrimary group-hover:text-customOnBackground mr-1 transition-opacity duration-500">03.</span>Contact
              </a>
            </li>
            <li>
              <a :href="cvDownloadUrl" download="cv-kevin-ross-jul-26.pdf" @click="toggleDrawer" class="group flex items-center justify-center rounded-full px-5 py-3 text-xl transition-opacity duration-500 hover:text-gray-400">
                <span class="text-customPrimary group-hover:text-customOnBackground mr-1 transition-opacity duration-500">04.</span>Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.5s;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}
</style>
