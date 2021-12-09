<template>
  <div class="header">
    <nav class="nav">
      <ul>
        <li>
          <router-link to="/" :class="current === 'videos' ? 'active' : ''"
            >VIDEO GAMES</router-link
          >
        </li>
        <li>
          <router-link
            to="/contact"
            :class="current === 'contact' ? 'active' : ''"
            >CONTACT</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  mounted() {
    this.current = this.$route.name;
  },
  watch: {
    $route: function () {
      this.current = this.$route.name;
    },
  },
  data() {
    return {
      current: "",
    };
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 5rem;
  display: flex;
  padding: 0 10%;
  justify-content: space-between;
  align-items: center;
  /* background-color: #008080; */
}

.nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav li {
  margin-left: 1.5rem;
  font-size: 1.25rem;
}

.nav a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1.5px;
}

.nav a:hover,
.nav a:active,
.nav a.active {
  color: #5692e8;
}

/* MEDIA QUERIES */
@media (max-width: 768px) {
  .header {
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
    padding: 0 1%;
  }
  .nav ul {
    display: block;
  }
  .nav li:last-child {
    margin-top: 1rem;
  }
}
</style>
