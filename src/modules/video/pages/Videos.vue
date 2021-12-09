<template>
  <div class="page-wrapper">
    <SideFilter class="side-filter" />
    <MoviesList class="videos-list" />
  </div>
</template>

<script>
import SideFilter from "@/modules/video/components/SideFilter";
import MoviesList from "@/modules/video/components/MoviesList";
export default {
  name: "Video",
  mounted() {
    this.route_name = this.$route.name;
    console.log(this.route_name);
  },
  components: {
    SideFilter,
    MoviesList,
  },
};
</script>

<style scoped>
.page-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.videos-list {
  flex: 1;
}
/* MEDIA QUERIES */
@media (max-width: 768px) {
  .page-wrapper {
    flex-direction: column;
  }
}
</style>
