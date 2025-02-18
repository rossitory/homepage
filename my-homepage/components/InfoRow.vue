<template>
  <div class="max-w-[350px]">
  <div class="flex flex-col">
    <component :is="props.icon" class="h-16 w-16 mb-4 text-customPrimary" />
    <h3 class="custom-table-header">{{ title }}</h3>
    <p class="custom-paragraph">{{ text }}</p>
</div>
</div>
</template>

<script lang="ts" setup>
import type { FunctionalComponent } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: [Object, Function] as PropType<FunctionalComponent | VNode>,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
</script>
