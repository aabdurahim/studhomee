<template>
  <section class="bg-main h-full">
    <NavBar />
    
    <div class="p-7">
      <div class="flex justify-between items-center">
        <div>
          <p class="text-2xl font-medium">Attendance</p>
          <span class="font-medium text-gray-500">Academic</span>
        </div>
      </div>

      <div class="w-1/3 mx-auto">
        <input v-model="date" type="date" class="border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
        <div class="bg-gray-500 rounded-md p-3">
          <h2 class="text-xl font-semibold text-white text-center">Attendance Report</h2>
          <p class="text-lg text-white font-semibold text-center">Month: {{ monthName  }}</p>
          <p class="text-white font-semibold text-center">Year: {{ year }}</p>
        </div>
      </div>

      <div class="mt-10">
        <div>
          Present - <span class="bg-green-500 text-green-500 px-1 rounded-sm">.</span>
          Absent - <span class="bg-red-1 text-red-1 px-1 rounded-sm">.</span>
          Not Entry - <span class="bg-gray-500 text-gray-500 px-1 rounded-sm">.</span>
        </div>
        <div class="bg-white grid grid-cols-6 gap-2 p-5 mt-10 rounded-md">
          <div v-for="n in 30" :key="n" class="number-block bg-gray-300 p-16 text-center rounded-md">
            <p class="bg-gray-500 rounded-full text-center py-2 text-xl font-bold text-white">{{ n }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue';
import NavBar from '../Nav.vue'

export default {
  data() {
    return {
      date: '',
    };
  },
  components: {
    NavBar
  },
  computed: {
    month() {
      const d = new Date(this.date);
      return d.getMonth();
    },
    monthName() {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return months[this.month];
    },
    year() {
      const d = new Date(this.date);
      return d.getFullYear();
    },
  },
}
</script>