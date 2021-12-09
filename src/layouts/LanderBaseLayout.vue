<template>
  <div class="layout-wrapper">
    <!-- NAVBAR SECTION -->
    <TopNav />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import TopNav from "@/shared/components/TopNav.vue";
export default {
  name: "LanderBaseLayout",
  components: {
    TopNav,
  },
};
</script>

<style scoped>
  .layout-wrapper {
    padding-top: 1rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
    padding-left: 6rem;
  }

  /* MEDIA QUERIES */
  @media (max-width: 768px) {
    .layout-wrapper {
      padding-left: 1.3rem;
      padding-right: 1.3rem;
    }
  }
</style>
