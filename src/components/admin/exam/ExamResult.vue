<template>
  <section class="bg-main h-full">
    <NavBar />

    <div class="p-7">
      <div class="flex justify-between">
        <div>
          <p class="text-2xl font-medium">Exam Marks</p>
          <span class="font-medium text-gray-500">Exam</span>
        </div>
      </div>

<!-- 
      <div class="w-11/12 mx-auto flex items-center my-10">
        <select id="exam-select" v-model="selectedExam" @change="handleExamSelect"
          class="border py-2 px-3 mr-3 border-gray-300 rounded-md">
          <option value="">Select Exam</option>
          <option v-for="exam in exams" :key="exam.id" :value="exam.id">First Term</option>
        </select>

        <select v-model="selectedClass" @change="handleClassSelect"
          class="border py-2 px-3 mr-3 border-gray-300 rounded-md">
          <option value="">Select Class</option>
          <option v-for="class1 in classes" :key="class1.id" :value="class1.id">{{ class1.number }}</option>
        </select>

        <select v-model="selectedSection" @change="handleSectionSelect"
          class="border py-2 px-3 mr-3 border-gray-300 rounded-md">
          <option value="">Select Section</option>
          <option v-for="section in sections" :key="section.id" :value="section.id">{{ section.name }}</option>
        </select>

        <select v-model="selectedSubject" @change="handleSubjectSelect"
          class="border py-2 px-3 mr-3 border-gray-300 rounded-md">
          <option value="">Select Subject</option>
          <option v-for="subject in subjects" :key="subject.id" :value="subject.id">{{ subject.name }}</option>
        </select>

        <button @click="getExam()"
          class="btn border-2 hover:border-main-text hover:bg-white rounded-md px-2 py-1 hover:text-main-text text-lg font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Load
          Data</button>
      </div> -->

      <div v-if="profile">
        <div class="bg-white rounded-md my-10 pb-5 mb-10">
          <div>
            <h2 class="text-xl font-semibold p-5">Class: </h2>
            <hr>
            <div class="w-full p-5">
              <table class="w-full">
                <thead class="bg-gray-100">
                  <tr class="text-gray-600 text-sm font-light uppercase">
                    <th>Name</th>
                    <th>Roll</th>
                    <th>Section</th>
                    <th>Mark</th>
                  </tr>
                </thead>
                <!-- v-for -->
                <tbody v-for="mark in marks" :key="mark.id">
                  <tr>
                    <td class="text-center">{{ mark.student.name }}</td>
                    <td class="text-center">{{ mark.student.roll }}</td>
                    <td class="text-center">{{ mark.student.section.name }}</td>
                    <td class="text-center">{{ mark.mark }}
                      <!-- <input v-model="mark1" type="number" required class="w-1/2 mx-auto border py-2 mt-2 mb-5 border-gray-300 rounded-md"> -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button @click="saveChanges()"
          class="btn border-2 hover:border-main-text hover:bg-white rounded-md px-2 py-1 ml-5 hover:text-main-text text-lg font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Save Marks</button>
          </div>
        </div>
      </div>

  </div>
</section></template>

<script>
import NavBar from '../Nav.vue'

export default {
  data() {
    return {
      form: false,
      profile: true,
      details: false,

      mark1: '',
      marks: []
    }
  },
  components: {
    NavBar
  },
  methods: {
    getMarks() {
      fetch('http://91.201.214.131:8080/marks')
      .then(response => response.json()) 
         .then(data => { 
          this.marks = data
        }); 
    },
    showForm() {
      this.form = true,
      this.profile = false,
      this.details - false
    },
    closeForm() {
      this.form = false,
      this.profile = true,
      this.details = false
    },
    showDetails() {
      this.form = false,
      this.profile = false,
      this.details = true
    },
    validateTime() {
      if (this.endTime <= this.startTime) {
        alert("The end time must be greater than the start time.");
        this.endTime = "";
      }
    }
  },
  mounted() {
    this.getMarks()
  }
};
</script>
