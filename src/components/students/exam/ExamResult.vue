<template>
  <section class="bg-main h-full">
    <NavBar />
  
    <div class="p-7">
      <div class="flex justify-between">
        <div>
          <p class="text-2xl font-medium">Exam Result</p>
          <span class="font-medium text-gray-500">Exam</span>
        </div>
      </div>

      <div class="w-1/3 mx-auto flex items-center my-10">
        <select id="exam-select" v-model="selectedExam" @change="handleExamSelect" class="border py-2 px-3 mr-3 border-gray-300 rounded-md">
        <option value="">Select Exam</option>
        <option v-for="exam in exams" :key="exam.id" :value="exam.id" >First Term</option>
      </select>
        <button @click="getHomework()" class="btn border-2 hover:border-main-text hover:bg-white rounded-md px-2 py-1 hover:text-main-text text-md font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Get Exam Results</button>
      </div>

      <div class="bg-white rounded-md my-10 pb-5 mb-10">
          <div>
            <h2 class="text-xl font-semibold p-5">Results: </h2>
            <hr>
            <div class="w-full p-5">
              <table class="w-full">
                <thead class="bg-gray-100">
                  <tr class="text-gray-600 text-sm font-light uppercase">
                    <th>Subject</th>
                    <th>Marks</th>
                    <th>Grade</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <!-- v-for -->
                <tbody>
                  <tr>
                    <td class="text-center">Chemistry</td>
                    <td class="text-center">80 Out of 100</td>
                    <td class="text-center">5</td>
                    <td class="text-center text-white bg-green-500 py-1">Passed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import NavBar from '../Nav.vue'

export default {
  data() {
    return {
    };
  },
  components: {
    NavBar
  },
}
</script>
