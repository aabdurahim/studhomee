<template>
  <section class="bg-main h-full">
    <NavBar />

    <div class="p-7">
      <div class="flex justify-between">
        <div>
          <p class="text-2xl font-medium">Exams List</p>
          <span class="font-medium text-gray-500">Exam</span>
        </div>
        <button @click="showForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-7">Create</button>
      </div>

      <div v-if="form">
        <div class="bg-white rounded-md my-10 pb-5">
        <div class="flex justify-between items-center p-3 border-b">
            <p class="text-lg font-medium">Create Exam List</p>
            <button @click="closeForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-5">Back</button>
          </div>
        <form @submit.prevent="handleSubmit" class="my-10 w-3/5 mx-auto">

          <label>Name:</label>
          <input v-model="name" type="text" required placeholder="Enter Exam" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          <label>Subject:</label>
          <input v-model="subject" type="text" required placeholder="Enter Subject Name" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          <label>URL:</label>
          <input v-model="url" type="text" required placeholder="Enter URL" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
          
            <label for="message">Note</label>
            <textarea name="message" v-model="note" id="" cols="30" rows="10" class="border w-full"></textarea>

          <button type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-20 py-2 mt-5 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Submit</button>
        </form>
      </div>
      </div>

      <div v-if="profile">
        <div class="flex flex-wrap mt-10">
          <!-- v-for -->
          <div v-for="exam in exams" :key="exam.id" class="bg-white rounded-md border shadow mr-5 mb-5">
            <div class="px-5 pb-5">
              <p class="text-xl text-center font-medium py-5 border-b">{{ exam.name }}</p>
              <p class="font-bold py-3">Subject: <span class="font-normal">{{ exam.subject.name }}</span></p>
              <p class="font-bold">Date: <span class="font-normal">1 May, 23 - 25 May, 23</span></p>
              <p class="font-bold py-3">Note: <span class="font-normal">{{ exam.note }}</span></p>
              <p class="font-bold py-1">URL: <span class="font-normal">{{ exam.url }}</span></p>
              <div class="w-1/5 my-3 mx-auto flex">
                <font-awesome-icon @click="showDetails()"  class="text-lg pr-2 hover:text-main-text cursor-pointer" icon="fa-solid fa-pen-to-square" />
                <font-awesome-icon  class="text-lg hover:text-main-text cursor-pointer" icon="fa-regular fa-trash-can" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="details">
        <div class="bg-white rounded-md my-10 pb-5">
          <div class="flex justify-between items-center p-3 border-b">
              <p class="text-lg font-medium">Edit Exam </p>
              <button @click="closeForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-5">Back</button>
            </div>
          <form @submit.prevent="updateExam" class="my-10 w-3/5 mx-auto">

            <label>Name:</label>
            <input v-model="name" type="text" required placeholder="Change Exam Name" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
           
            <div class="flex mb-5">
              <label class="mr-5">Start Date
                <input type="date" v-model="startDate" class="border p-1" />
              </label>
              <label class="mx-5">End Date
                <input type="date" v-model="endDate" class="border p-1" />
             </label>
            </div>

            <label for="message">Note</label>
            <textarea name="message" v-model="note" id="" cols="30" rows="10" class="border w-full"></textarea>

            <button type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-20 py-2 mt-5 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Save</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from '../Nav.vue'
import axios from 'axios'

export default {
  data() {
    return {
      departments: [],
      form: false,
      profile: true,
      details: false,

      exams: [],
      examId: null,
      name: '',
      subject: '',
      url: '',
      note: ''
    }
  },
  components: {
    NavBar
  },
  methods: {
    handleSubmit() {
        let body = {
          name: this.name,
          subject: this.subject,
          url: this.url,
          note: this.note
      }
      console.log(body)
      fetch('http://91.201.214.131:8080/exams', body)
      .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
    getExams() {
      fetch('http://91.201.214.131:8080/exams')
        .then(response => response.json())
        .then(data => {
          this.exams = data;
        });
    },
    deleteExam(id) {
      const confirmed = window.confirm('Are you sure you want to delete this exam?');
      if (confirmed) {
        fetch(`http://91.201.214.131:8080/exams/${id}/delete`, {
          method: 'POST',
        })
      }
      this.$router.go()
    },
    updateExam(id) {
      axios.post('http://91.201.214.131:8080/exams', {
        id: this.examtId,
        name: this.name,
        subject: this.subject,
        url: this.url,
        note: this.note
      })
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
    async showDetails(id) {
      const response = await axios.get(`http://91.201.214.131:8080/exams/${id}`);
      this.examId = id;
      this.name = response.data.name;
      this.subject = response.data.subject;
      this.url = response.data.url;
      this.note = response.data.note;
      this.startDate = response
      this.form = false,
      this.profile = false,
      this.details = true
    },
  }, 
  mounted() {
    this.getExams();
  },
};
</script>