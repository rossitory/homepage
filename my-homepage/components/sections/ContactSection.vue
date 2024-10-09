<script lang="ts" setup>
import { ref } from 'vue';

const showForm = ref(false);

const toggleForm = () => {
  showForm.value = !showForm.value;
};
</script>

<template>
  <section id="contact" class="flex flex-col min-h-screen text-white p-8">
    <h2 class="custom-header mb-4">Get in <span class="text-customPrimary">touch.</span></h2>
    <p class="custom-paragraph mb-4">
      If you’re looking for a developer who values easy-going, personal communication and is dedicated to delivering the best possible result for your project, feel free to reach out. I’d love to hear about your ideas and how we can make them happen!
    </p>
    <div v-if="!showForm">
      <button class="custom-button" @click="toggleForm">Say hello</button>
    </div>
    
    <div v-if="showForm" class="mt-4 w-full md:w-1/2">
      <form class="flex flex-col space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-customOnBackground">Your Name</label>
          <input type="text" id="name" class="mt-1 block w-full px-3 py-2 bg-customSurface text-customOnSurface border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-customOnBackground">Your Email</label>
          <input type="email" id="email" class="mt-1 block w-full px-3 py-2 bg-customSurface text-customOnSurface border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-customOnBackground">Your Message</label>
          <textarea id="message" rows="4" class="mt-1 block w-full px-3 py-2 bg-customSurface text-customOnSurface border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
        </div>
        <p class="text-xs text-customOnBackground">By clicking send, you agree to receive an e-mail by me.</p>
        <button type="submit" class="custom-button self-start">Send</button>
      </form>
      <div class="mt-8 text-sm text-customOnBackground">
        <h3 class="text-lg font-semibold mb-2">Impressum</h3>
        <div class="flex items-center mb-1">
          <i class="fas fa-building mr-2"></i>
          <span>WebDev Ross</span>
        </div>
        <div class="flex items-center mb-1">
          <i class="fas fa-user mr-2"></i>
          <span>Kevin Ross</span>
        </div>
        <div class="flex items-center mb-1">
          <i class="fas fa-map-marker-alt mr-2"></i>
          <span>Johann-Beckmann-Str. 5, 27318 Hoya</span>
        </div>
        <div class="flex items-center">
          <i class="fas fa-envelope mr-2"></i>
          <span><a href="mailto:rossletterbox@gmail.com" class="underline">rossletterbox@gmail.com</a></span>
        </div>
      </div>
    </div>
    
  </section>
</template>