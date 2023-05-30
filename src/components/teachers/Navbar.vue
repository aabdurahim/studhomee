<template>
  <div class="bg-white flex items-center justify-between px-7 py-3 w-full overflow-hidden">
    <div class="text-sm font-semibold text-gray-100 bg-hero-text rounded-md px-2">Teacher</div>
    <div class="flex items-center justify-between pr-24">
      <p class="text-gray-500 text-lg border border-gray-300 rounded-md px-3 py-1 mr-3">Session: 2023</p>
      <select name="lan" id="" class="text-gray-500 text-lg border border-gray-300 rounded-md px-3 py-1">
        <option value="">EN</option>
      </select>
      <font-awesome-icon icon="fa-regular fa-bell" class="text-gray-900 relative text-xl mx-3 cursor-pointer" @click="showNotifications" />
      <div class="flex w-10 ml-2">
        <img src="/img/user.png" alt="">
        <div class="ml-2">
          <p class="text-gray-700">Teacher</p>
          <p class="text-xs text-gray-500">teacher@mail.com</p>
        </div>
      </div>
    </div>
    <div v-if="show" class="w-1/3 border absolute right-44 top-14 rounded-md">
      <div class="flex justify-between items-center border-b p-5">
        <h2 class="text-lg font-semibold">Notifications</h2>
        <p class="text-lg text-blue-500 hover:underline cursor-pointer">Mark all as read</p>
      </div>
      <div>
        <div class="flex justify-between items-center border-b p-5">
          <h2>Postponing exams to 22/05/2023</h2>
          <p class="text-sm text-gray-500">18:12</p>
        </div>
      </div>
    </div>
  </div >
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    async showNotifications() {
      // Меняем состояние show на противоположное
      this.show = !this.show;
     
  },
}
}
</script>


<style>
  /* Стили для контейнера уведомлений */
  .notifications {
    position: absolute;
    top: 50px;
    right: 0;
    width: 200px;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
  /* Скрываем контейнер уведомлений по умолчанию */
  .notifications.hidden {
    display: none;
  }
</style>