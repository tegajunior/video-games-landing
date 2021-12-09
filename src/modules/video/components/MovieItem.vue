<template>
  <div class="movie">
    <div class="movie-thumbnail"></div>
    <div class="movie-details">
      <div class="game-details-text">
        <div class="game-title">
          <h4 class="game-title-name">{{ video_game.name }}</h4>
          <span class="release-date-string"
            >Release Date:
            {{ convertMilliseconds(video_game.first_release_date) }}</span
          >
        </div>
        <p class="game-text">
          {{ video_game.summary }}
        </p>
      </div>
      <div class="game-rating">
        <span class="rating">{{ parseInt(video_game.rating) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    video_game: {
      type: Object,
    },
  },
  methods: {
    convertMilliseconds(milliseconds) {
      const date = new Date(milliseconds);
      const year = date.getFullYear();
      let month = date.getMonth();
      if (month == 9) {
        month += 1;
      } else {
        if (month < 9) {
          month += 1;
          month = "0" + month;
        }
      }

      const customDay =
        String(date.getDate()).length === 1
          ? `0${date.getDate()}`
          : date.getDate();

      const fDate = `${customDay}/${month}/${year}`;
      return fDate;
    },
  },
};
</script>

<style scoped>
.movie {
  display: flex;
  gap: 0;
  margin-bottom: 10px;
  width: 100%;
  height: auto;
  background-color: #0e1a2b;
}
.movie-thumbnail {
  width: 7rem;
  /* height: 100%; */
  background-color: #000;
}
.movie-details {
  flex: 1;
  padding: 15px;
  display: flex;
  align-items: center;
}

.game-details-text {
  width: 95%;
}
.game-title {
  margin-bottom: 12px;
}

.game-title h4 {
  margin-bottom: 1px;
  color: #fff;
}

.game-rating {
  background-color: #5692e8;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.game-rating .rating {
  color: #fff;
  font-weight: 900;
}
/* MEDIA QUERIES */
@media (max-width: 768px) {
  .movie-details {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .movie {
    height: auto;
  }
}
@media (max-width: 577px) {
  .movie {
    /* display: block; */
    flex-direction: column;
    height: auto;
  }
  .movie-thumbnail {
    width: 100%;
    height: 10rem;
  }
  .movie-details {
    position: relative;
  }
  .game-rating {
    position: absolute;
    top: -140px;
    right: 18px;
  }
}
</style>
