<template>
  <header class="header">
    <nav class="navbar">
      <div class="logo">Pentecostal Assemblies of God Machanga</div>
      <button @click="toggleMenu" class="hamburger" aria-label="Toggle menu">
        ☰
      </button>
      <ul :class="['nav-links', { show: showMenu }]">
        <li><a href="index.html" :class="{ active: activePage === 'home' }">Home</a></li>
        <li><a href="leadership.html" :class="{ active: activePage === 'leadership' }">Leadership</a></li>
        <li><a href="ministries.html" :class="{ active: activePage === 'ministries' }">Ministries</a></li>
        <li><a href="events.html" :class="{ active: activePage === 'events' }">Upcoming Events</a></li>
        <li><a href="contact.html" :class="{ active: activePage === 'contact' }">Contact</a></li>
        <li><a href="give.html" :class="{ active: activePage === 'give' }">Give</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      activePage: window.location.pathname.split("/").pop().replace('.html', '') || 'home'
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #003366;
  padding: 1rem 2rem;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  font-weight: 700;
  font-size: 1.4rem;
}
.hamburger {
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  display: none;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}
.nav-links li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}
.nav-links li a:hover,
.nav-links li a.active {
  background-color: #1e90ff;
}
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
  .nav-links {
    position: absolute;
    right: 1rem;
    top: 60px;
    background: #003366;
    flex-direction: column;
    width: 180px;
    display: none;
    padding: 1rem;
    border-radius: 8px;
  }
  .nav-links.show {
    display: flex;
  }
}
</style>
