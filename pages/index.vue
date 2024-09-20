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
        <UniversityLinks />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// Import the UniversityLinks component
//import UniversityLinks from '../components/UniversityLinks.vue'
</script>

<style scoped>
.mb-4 {
  margin-bottom: 16px;
}
</style>