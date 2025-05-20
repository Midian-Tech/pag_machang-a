<template>
  <div id="app">
    <Navbar />
    <main>
      <section class="events-section">
        <h1>Upcoming Events</h1>
        <div v-if="events.length === 0">No upcoming events found.</div>
        <EventCard
          v-for="event in events"
          :key="event.id"
          :event="event"
        />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import EventCard from './components/EventCard.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    EventCard,
  },
  data() {
    return {
      events: [],
    };
  },
  async created() {
    try {
      const response = await fetch('/data/events.json');
      this.events = await response.json();
    } catch (error) {
      console.error('Failed to load events:', error);
    }
  },
};
</script>

<style>
/* You can add global styles here or import your CSS */
</style>
