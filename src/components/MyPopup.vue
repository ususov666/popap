<template>
  <div class="popup-bg" @click.self="$emit('closePopup')">
    <div class="popup">
      <h2>Попап</h2>
      <!-- Форма с полями ввода -->
      <form @submit.prevent="handleSubmit">
        <!-- Поля ввода -->
        <input
          v-for="(field, index) in fields"
          :key="index"
          v-model="formData[field]"
          :placeholder="field"
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["Имя", "Фамилия", "Email", "Номер телефона", "Описание"],
      formData: {},
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("submitData", this.formData);
      this.$emit("closePopup");
    },
  },
};
</script>

<style>
/* Стили для попапа и его контента */
</style>
