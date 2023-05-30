<template>
  <section class="bg-main h-full">
    <NavBar />

    <div class="p-7">
      <div class="flex justify-between">
        <div>
          <p class="text-2xl font-medium">Exam Schedule List</p>
          <span class="font-medium text-gray-500">Exam</span>
        </div>
        <button @click="showForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-7">Create</button>
      </div>

      
      <div class="w-1/3 mx-auto flex items-center my-10">
        <select id="exam-select" v-model="selectedExam" @change="handleExamSelect" class="border py-2 px-3 mr-3 border-gray-300 rounded-md">
        <option value="">Select Exam</option>
        <option v-for="exam in exams" :key="exam.id" :value="exam.id" >First Term</option>
      </select>
        <button @click="getHomework()" class="btn border-2 hover:border-main-text hover:bg-white rounded-md px-2 py-1 hover:text-main-text text-lg font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Get Exam</button>
      </div>

      <div v-if="form">
        <div class="bg-white rounded-md my-10 pb-5">
          <div class="flex justify-between items-center p-3 border-b">
              <p class="text-lg font-medium">Exam Schedule Create</p>
              <button @click="closeForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-5">Back</button>
            </div>
          <form @submit.prevent="handleSubmit" class="my-10 w-3/5 mx-auto">

            <label>Exam</label>
            <input v-model="exam" type="text" required placeholder="Enter Title" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

            <label>Class</label>
            <select v-model="selectedClass" @change="handleClassSelect" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
              <option value="">Select Class</option>
              <option v-for="class1 in classes" :key="class1.id" :value="class1.id" >{{ class1.number }}</option>
            </select>

            <label>Section</label>
            <select v-model="selectedSection" @change="handleSectionSelect" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
              <option value="">Select Section</option>
              <option v-for="section in sections" :key="section.id" :value="section.id" >{{ section.name }}</option>
            </select>

            <label>Class Room</label>
            <select v-model="classRoom" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
              <option value="">Select Class Room</option>
              <option value="1">100</option>
              <option value="2">101</option>
              <option value="3">102</option>
              <option value="4">103</option>
              <option value="5">104</option>
            </select>

            <label>Subject</label>
            <select v-model="selectedSubject" @change="handleSubjectSelect" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
              <option value="">Select Subject</option>
              <option v-for="subject in subjects" :key="subject.id" :value="subject.id">{{ subject.name }}</option>
            </select>

            <div class="flex mb-5">
              <label class="mr-5">Start Date</label>
              <input type="date" v-model="startDate" @change="validateDate" class="border p-1" />
              
              <div class="flex ml-10">
                <label>Start Time</label>
                <input type="time" v-model="startTime" @change="validateTime" class="mx-5" />
                <label>End Time</label>
                <input type="time" v-model="endTime" @change="validateTime" class="mx-5" />
              </div>
            </div>

            <button type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-20 py-2 mt-5 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Save</button>
          </form>
        </div>
      </div>
      
      <div v-if="profile">
        <div class="bg-white rounded-md my-10 pb-5 mb-10">
          <div>
            <h2 class="text-xl font-semibold p-5">Class: </h2>
            <hr>
            <div class="w-full p-5">
              <table class="w-full">
                <thead class="bg-gray-100">
                  <tr class="text-gray-600 text-sm font-light uppercase">
                    <th>Sl</th>
                    <th>Exam</th>
                    <th>Room</th>
                    <th>Subject</th>
                    <th>Section</th>
                    <th>Time</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <!-- v-for -->
                <tbody>
                  <tr>
                    <td class="text-center">1</td>
                    <td class="text-center">First Term</td>
                    <td class="text-center">102</td>
                    <td class="text-center">Chemistry</td>
                    <td class="text-center">A</td>
                    <td class="text-center">May 19, 2022 <br> 14:00:00 - 15:00:00</td>
                    <td class="text-center">
                      <button @click="showDetails()" class="bg-main-text text-white m-1 py-1 px-2 rounded-md">Edit</button>
                      <button class="bg-red-1 text-white m-1 py-1 px-2 rounded-md">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
     </div>

     <div v-if="details">
        <div class="bg-white rounded-md my-10 pb-5">
          <div class="flex justify-between items-center p-3 border-b">
              <p class="text-lg font-medium">Exam Schedule Edit</p>
              <button @click="closeForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-5">Back</button>
            </div>
          <form @submit.prevent="handleSubmit" class="my-10 w-3/5 mx-auto">

            <label>Exam</label>
            <input v-model="exam" type="text" required placeholder="Enter Title" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

            <label>Class</label>
            <select v-model="selectedClass" @change="handleClassSelect" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
              <option value="">Select Class</option>
              <option v-for="class1 in classes" :key="class1.id" :value="class1.id" >{{ class1.number }}</option>
            </select>

            <label>Section</label>
            <select v-model="selectedSection" @change="handleSectionSelect" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
              <option value="">Select Section</option>
              <option v-for="section in sections" :key="section.id" :value="section.id" >{{ section.name }}</option>
            </select>

            <label>Class Room</label>
            <select v-model="classRoom" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
              <option value="">Select Class Room</option>
              <option value="1">100</option>
              <option value="2">101</option>
              <option value="3">102</option>
              <option value="4">103</option>
              <option value="5">104</option>
            </select>

            <label>Subject</label>
            <select v-model="selectedSubject" @change="handleSubjectSelect" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
              <option value="">Select Subject</option>
              <option v-for="subject in subjects" :key="subject.id" :value="subject.id">{{ subject.name }}</option>
            </select>

            <div class="flex mb-5">
              <label class="mr-5">Start Date</label>
              <input type="date" v-model="startDate" @change="validateDate" class="border p-1" />
              
              <div class="flex ml-10">
                <label>Start Time</label>
                <input type="time" v-model="startTime" @change="validateTime" class="mx-5" />
                <label>End Time</label>
                <input type="time" v-model="endTime" @change="validateTime" class="mx-5" />
              </div>
            </div>

            <button type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-20 py-2 mt-5 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Save</button>
          </form>
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
      form: false,
      profile: true,
      details: false,
    }
  },
  components: {
    NavBar
  },
  methods: {
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
};
</script>
