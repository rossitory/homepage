<script lang="ts" setup>
import { ref } from 'vue';

const isDrawerOpen = ref(false);

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};
</script>

<template>
  <header class="text-customOnBackground font-bold p-8 text-xl">
    <h1 class="sr-only">WebDev Ross</h1>
    <nav class="container mx-auto flex justify-between items-center">
      <NuxtImg
        class="w-24 lg:w-44"
        src="/logo.svg"
        alt="WebDev Ross"
      />
      <div class="md:hidden">
        <button @click="toggleDrawer" class="focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <ul class="hidden md:flex justify-end space-x-8 font-mono">
        <li class="relative">
          <a href="#home" class="group text-customOnBackground hover:text-customPrimary pl-8 flex items-center transition-opacity duration-500">
            <span class="text-customPrimary group-hover:text-customOnBackground mr-1 transition-opacity duration-500">01.</span>Home
          </a>
        </li>
        <li class="relative">
          <a href="#about" class="group text-customOnBackground hover:text-customPrimary pl-8 flex items-center transition-opacity duration-500">
            <span class="text-customPrimary group-hover:text-customOnBackground mr-1 transition-opacity duration-500">02.</span>About
          </a>
        </li>
        <li class="relative">
          <a href="#offer" class="group text-customOnBackground hover:text-customPrimary pl-8 flex items-center transition-opacity duration-500">
            <span class="text-customPrimary group-hover:text-customOnBackground mr-1 transition-opacity duration-500">03.</span>Services
          </a>
        </li>
        <li class="relative">
          <a href="#contact" class="group text-customOnBackground hover:text-customPrimary pl-8 flex items-center transition-opacity duration-500">
            <span class="text-customPrimary group-hover:text-customOnBackground mr-1 transition-opacity duration-500">04.</span>Contact
          </a>
        </li>
      </ul>
    </nav>
    <transition name="slide-fade">
      <div v-if="isDrawerOpen" class="fixed inset-0 bg-customBackground z-50 transition-opacity duration-500">
        <div class="fixed inset-0 p-4">
          <button @click="toggleDrawer" class="focus:outline-none text-white absolute top-4 right-4 transition-opacity duration-500">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul class="space-y-4 text-white mt-12">
            <li>
              <a href="#home" @click="toggleDrawer" class="group hover:text-gray-400 flex items-center transition-opacity duration-500">
                <span class="text-customPrimary group-hover:text-customOnBackground mr-1 transition-opacity duration-500">01.</span>Home
              </a>
            </li>
            <li>
              <a href="#about" @click="toggleDrawer" class="group hover:text-gray-400 flex items-center transition-opacity duration-500">
                <span class="text-customPrimary group-hover:text-customOnBackground mr-1 transition-opacity duration-500">02.</span>About
              </a>
            </li>
            <li>
              <a href="#offer" @click="toggleDrawer" class="group hover:text-gray-400 flex items-center transition-opacity duration-500">
                <span class="text-customPrimary group-hover:text-customOnBackground mr-1 transition-opacity duration-500">03.</span>Services
              </a>
            </li>
            <li>
              <a href="#contact" @click="toggleDrawer" class="group hover:text-gray-400 flex items-center transition-opacity duration-500">
                <span class="text-customPrimary group-hover:text-customOnBackground mr-1 transition-opacity duration-500">04.</span>Contact
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
