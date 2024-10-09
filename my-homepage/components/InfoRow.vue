<template>
  <div class="flex flex-col">
    <div class="">
      <img :src="image" alt="Icon" class="h-16 w-16 mb-4">
    </div>
    <h3 class="custom-table-header">{{ title }}</h3>
    <p class="custom-paragraph">{{ text }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

const { title, image, text } = props;
</script>
