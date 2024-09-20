<template>
  <ul>
    <li v-if="site">
      <h3>{{ site.name }}</h3>
      <NuxtLink :to="site.url" target="_blank" class="text-decoration-none">
        {{ site.url }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Site {
  name: string;
  url: string;
}

const props = defineProps<{
  site: Site | null;
}>();
</script>

<style scoped>
.text-decoration-none {
  text-decoration: none;
}
</style>
