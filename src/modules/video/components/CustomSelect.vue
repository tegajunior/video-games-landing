<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div v-for="(option, i) of options" :key="i" @click="handleClick(option)">
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "@/event-bus";

export default {
  name: "CustomSelect",
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: "Release Date",
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0].label
        : null,
      open: false,
    };
  },
  methods: {
    handleClick(option) {
      this.selected = option.label;
      this.open = false;
      EventBus.$emit("sort", option.value);
    },
  },
  mounted() {
    EventBus.$emit("sort", "first_release_date");
  },
};
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.custom-select .selected {
  background-color: #182c47;
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  /* border-radius: 6px 6px 0px 0px; */
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.custom-select .items {
  color: #fff;
  /* border-radius: 0px 0px 6px 6px; */
  overflow: hidden;
  position: absolute;
  background-color: #182c47;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #5692e8;
}

.selectHide {
  display: none;
}
/* MEDIA QUERIES */
@media (max-width: 768px) {
  .custom-select {
    height: 30px;
    line-height: 30px;
    flex: 1;
  }
  .custom-select .selected:after {
    top: 14px;
  }
}
</style>
