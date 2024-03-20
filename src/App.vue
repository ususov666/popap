<template>
  <div id="app">
    <StartButton @openPopup="showPopup = true" />
    <MyPopup
      v-if="showPopup"
      @closePopup="showPopup = false"
      @submitData="handleSubmit"
    />
    <div v-if="submittedData">
      <h2>Отправленные данные:</h2>
      <pre>{{ submittedData }}</pre>
    </div>
    <MyMenu />
  </div>
</template>

<script>
import StartButton from "./components/StartButton.vue";
import MyPopup from "./components/MyPopup.vue";
import MyMenu from "./components/MyMenu.vue";

export default {
  name: "App",
  components: {
    StartButton,
    MyPopup,
    MyMenu,
  },
  data() {
    return {
      showPopup: false,
      submittedData: null,
    };
  },
  methods: {
    handleSubmit(data) {
      this.submittedData = data;
    },
  },
};
</script>

<style></style>
