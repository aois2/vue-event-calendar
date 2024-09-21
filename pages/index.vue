<template>
  <div>
    <h1>Event List</h1>
    <ul>
      <li v-for="event in events" :key="event._id">
        <strong>{{ event.name }}</strong> - {{ event.date }} -
        {{ event.location }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import type { Event } from '~/types/event';

export default defineComponent({
  setup() {
    const events = ref<Event[]>([]);

    onMounted(async () => {
      const response = await fetch('/api/events');
      const data = await response.json();
      events.value = data.data;
    });

    return {
      events,
    };
  },
});
</script>
