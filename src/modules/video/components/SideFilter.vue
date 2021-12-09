<template>
  <div class="card">
    <h5 class="white-text">Filter Results</h5>
    <div class="form-control-div">
      <label for="name">Name (contains)</label>
      <input
        type="text"
        id="name"
        class="input-control"
        placeholder="Text strings"
        v-model.trim="form.name"
        @input="filterByName"
      />
    </div>
    <div class="score-order-actions-wrapper">
      <div class="form-control-div min-score">
        <label for="minScore" class="white-text">Minimum Score</label>
        <input
          type="number"
          id="minScore"
          class="input-control"
          v-model.trim="form.score"
          placeholder="1 - 10"
          @change="filterByScore"
        />
      </div>
      <div class="form-control-div order">
        <label for="order" class="white-text">Order By</label>
        <div class="icon-select-con">
          <IconBadge />
          <CustomSelect
            :options="options"
            :default="'Release Date'"
          />
        </div>
      </div>
      <div class="actions">
        <button class="white-text" @click="clear">Clear</button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from "./CustomSelect";
import IconBadge from "./IconBadge";

import EventBus from "@/event-bus";

export default {
  name: "SideFilter",
  components: {
    CustomSelect,
    IconBadge,
  },
  data() {
    return {
      options: [
        { value: "first_release_date", label: "Release Date" },
        { value: "name", label: "Name" },
        { value: "rating", label: "Score" },
      ],
      form: {
        name: "",
        score: "",
      },
    };
  },
  methods: {
    filterByName() {
      EventBus.$emit("filterByName", this.form.name);
    },
    filterByScore() {
      EventBus.$emit("filterByScore", this.form.score);
    },
    clear() {
      this.form.name = "";
      this.form.score = "";
      EventBus.$emit("clear");
    },
  },
};
</script>

<style scoped>
.card {
  width: 22rem;
  height: 30rem;
  background-color: #0e1a2b;
  border-radius: 5px;
  padding: 0.8rem;
}

.form-control-div {
  margin-top: 1.2rem;
}
.icon-select-con {
  display: flex;
  gap: 0;
  margin-top: 10px;
}
.actions {
  float: right;
  margin-top: 141px;
}

/* MEDIA QUERIES */
@media (max-width: 768px) {
  .card {
    width: 100%;
    height: auto;
    margin-bottom: 55px;
  }
  .score-order-actions-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .min-score {
    width: 9rem;
  }
  .order {
    width: 20rem;
  }
  .actions {
    float: none;
    margin-top: 42px;
  }
  .icon-select-con {
    margin-top: 5px;
  }
  .actions button {
    height: 32px;
  }

  @media (max-width: 577px) {
    .score-order-actions-wrapper {
      display: block;
    }
  }
}
</style>
