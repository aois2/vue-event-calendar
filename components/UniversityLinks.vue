<template>
  <ul>
    <li v-for="n in universities" :key="n.url">
      <h3>{{ n.name }}</h3>
      <NuxtLink :to="n.url" target="_blank" class="text-decoration-none">{{
        n.url
      }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface University {
  name: string;
  url: string;
}

const universities: University[] = [
  { name: 'University of Tokyo', url: 'https://www.u-tokyo.ac.jp/' },
  { name: 'Kyoto University', url: 'https://www.kyoto-u.ac.jp/' },
  { name: 'Osaka University', url: 'https://www.osaka-u.ac.jp/' },
  { name: 'Tokyo Institute of Technology', url: 'https://www.titech.ac.jp/' },
  { name: 'Keio University', url: 'https://www.keio.ac.jp/' },
  { name: 'Waseda University', url: 'https://www.waseda.jp/' },
  { name: 'Sophia University', url: 'https://www.sophia.ac.jp/' },
  { name: 'Nagoya University', url: 'https://www.nagoya-u.ac.jp/' },
];
</script>

<style scoped>
.text-decoration-none {
  text-decoration: none;
}
</style>
