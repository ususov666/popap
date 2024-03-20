<template>
  <button class="start-button" @click="openPopup()">Начать</button>
</template>

<script>
export default {
  methods: {
    openPopup() {
      this.$emit("openPopup");
    },
  },
};
</script>
<style>
.start-button {
  padding: 10px 20px;
  font-size: 16px;
  display: grid;
  place-items: center;
}
</style>
