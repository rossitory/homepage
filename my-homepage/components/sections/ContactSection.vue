<script lang="ts" setup>
import { ref } from 'vue';
import { useFetch } from '#app';

const showForm = ref(false);
const form = ref({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const responseMessage = ref<string | null>(null);
const showThankYou = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;
  responseMessage.value = null;

  try {
    const response = await useFetch('/api/send', {
      method: 'POST',
      body: JSON.stringify(form.value),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.error.value) {
      throw new Error(response.error.value.message);
    }
    
    responseMessage.value = 'Your message has been sent successfully!';
    showThankYou.value = true;
    showForm.value = false;
  } catch (error) {
    responseMessage.value = 'There was an error sending your message. Please try again.';
  } finally {
    isSubmitting.value = false;
  }
};

const toggleForm = () => {
  showForm.value = !showForm.value;
};
</script>

<template>
  <section id="contact" class="flex flex-col min-h-screen text-white pt-8">
    <h2 class="custom-header mb-4">Get in <span class="text-customPrimary">touch.</span></h2>
    <p class="custom-paragraph mb-4 max-w-2xl">
      If you’re looking for a developer who values straightforward, personal communication and is dedicated to delivering outstanding results, let’s talk. I’d love to hear your ideas and explore how we can bring them to life.
    </p>
    <div v-if="!showForm && !showThankYou">
      <button class="custom-button" @click="toggleForm">Say hello</button>
    </div>
    
    <div v-if="showForm && !showThankYou" class="mt-4 w-full md:w-1/2">
      <form class="flex flex-col space-y-4" @submit.prevent="submitForm">
        <div>
          <label for="name" class="block text-md font-mono text-customOnBackground">Your Name</label>
          <input v-model="form.name" type="text" id="name" class="mt-1 block w-full px-3 py-2 bg-customSurface text-customOnSurface border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div>
          <label for="email" class="block text-md font-mono text-customOnBackground">Your Email</label>
          <input v-model="form.email" type="email" id="email" class="mt-1 block w-full px-3 py-2 bg-customSurface text-customOnSurface border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div>
          <label for="message" class="block text-md font-mono text-customOnBackground">Your Message</label>
          <textarea v-model="form.message" id="message" rows="4" class="mt-1 block w-full px-3 py-2 bg-customSurface text-customOnSurface border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
        </div>
        <p class="text-xs text-customOnBackground">By clicking send, you agree to receive an e-mail by me.</p>
        <button type="submit" class="custom-button self-start" :disabled="isSubmitting">Send</button>
      </form>
    </div>

    <div v-if="showThankYou" class="mt-4 w-full md:w-1/2">
      <h3 class="text-lg font-semibold mb-2">Thank you for your message. I'll get in touch with you soon!</h3>
    </div>

    <div class="mt-8 text-sm text-customOnBackground font-mono">
      <h2 class="text-lg font-sans font-semibold mb-2">Impressum</h2>
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
  </section>
</template>