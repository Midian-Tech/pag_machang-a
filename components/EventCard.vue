<template>
  <div class="event-card">
    <h3>{{ event.title }}</h3>
    <p><strong>Date:</strong> {{ formattedDate }}</p>
    <p><strong>Time:</strong> {{ event.time }}</p>
    <p><strong>Location:</strong> {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(this.event.date).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style scoped>
.event-card {
  background-color: #e8f0ff;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 51, 102, 0.15);
  transition: transform 0.2s ease;
}
.event-card:hover {
  transform: translateY(-5px);
}
h3 {
  color: #003366;
  margin-bottom: 0.5rem;
}
p {
  margin: 0.25rem 0;
}
</style>
