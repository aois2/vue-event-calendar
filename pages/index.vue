<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-typography variant="h3" class="mb-4">
          Universities and Facilities
        </v-typography>
        <v-typography variant="body1" class="mb-4">
          Browse through the websites of universities and facilities offering
          talks and lectures:
        </v-typography>
        <ul v-for="site in sites">
          <Site :site="site" />
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import Site from '~/components/Site.vue';

interface Site {
  name: string;
  url: string;
}

const sites: Site[] = [
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
.mb-4 {
  margin-bottom: 16px;
}
</style>
