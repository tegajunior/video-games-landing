<template>
  <div>
    <LoadingSpinner v-if="isLoading" />
    <div v-else>
      <div v-if="computedGames.length > 0">
        <MovieItem
          v-for="video_game in computedGames"
          :key="video_game.id"
          :video_game="video_game"
        />
      </div>
      <div v-else>
        <h4 class="white-text">
          Empty list, press the clear button to refresh.
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from "@/modules/video/components/MovieItem";
import LoadingSpinner from "@/shared/components/LoadingSpinner";
import { mapActions } from "vuex";

import EventBus from "@/event-bus";

export default {
  name: "VideoList",
  data() {
    return {
      video_games: [],
      video_games_copy: [],
      isLoading: true,
    };
  },
  created() {
    EventBus.$on("filterByName", this.filterByNameHandler);
    EventBus.$on("clear", this.clearHandler);
    EventBus.$on("filterByScore", this.filterByScoreHandler);
    EventBus.$on("sort", this.sortHandler);
  },
  mounted() {
    this.getAllVideoGamesHandler();
  },
  computed: {
    computedGames: function () {
      return this.video_games_copy;
    },
  },
  components: {
    MovieItem,
    LoadingSpinner,
  },
  methods: {
    ...mapActions({ getAllVideoGames: "dbVideo/getAllVideoGames" }),

    getAllVideoGamesHandler() {
      this.getAllVideoGames()
        .then((response) => {
          this.isLoading = false;
          if (response.status === 200) {
            this.video_games = response.data;
            this.video_games_copy = response.data;
            this.video_games_copy.sort((videoGameA, videoGameB) => {
              return videoGameA.first_release_date >
                videoGameB.first_release_date
                ? 1
                : -1;
            });
          } else {
            // TOOD
          }
        })
        .catch((error) => {
          // TODO
          console.log(error);
        });
    },
    filterByNameHandler(filter) {
      this.video_games_copy = this.video_games_copy.filter((game) =>
        game.name.includes(filter)
      );
    },

    filterByScoreHandler(filter) {
      const filterInt = parseInt(filter);
      this.video_games_copy = this.video_games_copy.filter(
        (game) => parseInt(game.rating) >= filterInt
      );
    },
    clearHandler() {
      this.video_games_copy = this.video_games;
    },

    sortHandler(sortField) {
      if (sortField === "first_release_date") {
        this.sortByReleaseDate();
      }
      if (sortField === "name") {
        this.sortByName();
      }
      if (sortField === "rating") {
        return this.sortByRating();
      }
    },

    sortByReleaseDate() {
      this.video_games_copy.sort((videoGameA, videoGameB) => {
        return videoGameA.first_release_date > videoGameB.first_release_date
          ? 1
          : -1;
      });
    },
    sortByName() {
      this.video_games_copy.sort((videoGameA, videoGameB) => {
        return videoGameA.name > videoGameB.name ? 1 : -1;
      });
    },
    sortByRating() {
      this.video_games_copy.sort((videoGameA, videoGameB) => {
        return videoGameA.rating > videoGameB.rating ? 1 : -1;
      });
    },
  },
  destroyed() {
    EventBus.$off("filterByName", this.filterByNameHandler);
    EventBus.$off("clear", this.clearHandler);
  },
};
</script>
