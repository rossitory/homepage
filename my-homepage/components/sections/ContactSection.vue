<script lang="ts" setup>
import { ref } from 'vue';

const showForm = ref(false);

const toggleForm = () => {
  showForm.value = !showForm.value;
};
</script>

<template>
  <section id="contact" class="flex flex-col items-start justify-center min-h-screen text-white p-8">
    <h2 class="custom-header mb-4">Get in touch.</h2>
    <p class="custom-paragraph mb-4">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book.
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
        <button type="submit" class="custom-button">Send</button>
      </form>
    </div>
  </section>
</template>