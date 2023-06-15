<template>
  <section class="bg-main h-full">
    <NavBar />
  
    <div class="p-7">
      <div class="flex justify-between">
        <div>
          <p class="text-2xl font-medium">Subject</p>
          <span class="font-medium text-gray-500">Academic</span>
        </div>
        <button @click="showForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-7">Create</button>
      </div>

      <div class="w-2/3 mx-auto flex items-center my-10">
        <select id="class-select" v-model="selectedClass" @change="handleClassSelect" class="border py-2 px-3 mr-3 border-gray-300 rounded-md">
        <option value="">Select Class</option>
        <option v-for="class1 in classes" :key="class1.id" :value="class1.id" >{{ class1.number }}</option>
      </select>

      <div v-if="selectedClass">
        <button  @click="getSubjects()" type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-5 py-1 hover:text-main-text text-lg font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Get Subject</button>
      </div>
      </div>

      <div v-if="form">
        <div class="bg-white rounded-md my-10 pb-5">
          <div class="flex justify-between items-center p-3 border-b">
              <p class="text-lg font-medium">Create Subject</p>
              <button @click="closeForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-5">Back</button>
            </div>
          <form @submit.prevent="handleSubmit" class="my-10 w-3/5 mx-auto">

            <label>Class</label>
            <select v-model="class1" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
              <option value="">Select Class</option>
              <option v-for="class1 in classes" :key="class1.id" :value="class1.id" >{{ class1.number }}</option>
            </select>

            <label>Name</label>
            <input v-model="name" type="text" required placeholder="Enter Name" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

            <label>Code</label>
            <input v-model="code" type="text" required placeholder="Enter Code" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
            
            <label>Optional</label>
            <div class="my-5">
              <label>
                <input type="radio" v-model="optional" :value="true">
                Yes
              </label>
              <label>
                <input type="radio" v-model="optional" :value="false">
                No
              </label>
            </div>
            
            <!-- <label>Type</label>
            <select v-model="type" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
              <option value="1">Theory</option>
              <option value="2">Practical</option>
            </select> -->

            <label>Pass Marks</label>
            <input v-model="passMark" type="text" required placeholder="Enter Name" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

            <label>Total Marks</label>
            <input v-model="totalMark" type="text" required placeholder="Enter Name" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

            <button type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-20 py-2 mt-5 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Submit</button>
          </form>
        </div>
      </div>

      <div v-if="profile">
        <div class="flex flex-wrap mt-10">
          <div v-for="subject in subjects" :key="subject.id" class="bg-white rounded-md border shadow mr-5 mb-5">
            <p class="text-xl text-center font-medium py-5 px-10">{{ subject.name }} ({{ subject.code }})</p>
            <p class="text-md px-5 font-medium">Type:  {{ subject.type }}</p>
            <p class="text-md px-5 font-medium">Pass:  {{ subject.passMark }} of 100</p>
            <p class="text-md px-5 pb-5 font-medium">Marks: {{ subject.totalMark }} </p>
            <div class="flex justify-between items-center border-t ">
              <div class="w-1/3 py-5 px-7 cursor-pointer hover:bg-gray-100 hover:text-main-text">
                <font-awesome-icon @click="showDetails()" class="text-lg" icon="fa-solid fa-pen-to-square" />
              </div>
              <div class="w-1/3 py-5 px-7 cursor-pointer hover:bg-gray-100 hover:text-main-text"  @click="deleteSubject(subject.id)">
                <font-awesome-icon class="text-center text-lg" icon="fa-regular fa-trash-can" />
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div v-if="details">
        <div class="bg-white rounded-md my-10 pb-5">
          <div class="flex justify-between items-center p-3 border-b">
              <p class="text-lg font-medium">Update Subject</p>
              <button @click="closeForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-5">Back</button>
            </div>
            <form @submit.prevent="handleSubmit" class="my-10 w-3/5 mx-auto">

              <label>Class</label>
              <select v-model="class1" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
                <option value="">Select Class</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
              </select>

              <label>Name</label>
              <input v-model="name" type="text" required placeholder="Enter Name" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

              <label>Code</label>
              <input v-model="code" type="text" required placeholder="Enter Code" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

              <label>Optional</label>
              <div class="my-5">
                <label>
                  <input type="radio" v-model="role" :value="{ id: 1 }">
                  Yes
                </label>
                <label>
                  <input type="radio" v-model="role" :value="{ id: 2 }">
                  No
                </label>
              </div>
<!-- 
              <label>Type</label>
              <select v-model="type" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
                <option value="1">Theory</option>
                <option value="2">Practical</option>
              </select> -->

              <label>Pass Marks</label>
              <input v-model="passMark" type="text" required placeholder="Enter Name" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

              <label>Total Marks</label>
              <input v-model="totalMark" type="text" required placeholder="Enter Name" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

              <button type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-20 py-2 mt-5 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Submit</button>
              </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from '../Nav.vue'
import axios from 'axios';

export default {
  data() {
    return {
      form: false,
      profile: true,
      details: false,
      
      selectedClass: '',
      selectedSection: '',
      classes: [],
      subjects: [],

      class1: '',
      name: '',
      code: '',
      optional: '',
      // type: '',
      passMark: '',
      totalMark: ''
    };
  },
  components: {
    NavBar
  },
  created() {
    fetch('http://91.201.214.131:8080/classes')
        .then(response => response.json())
        .then(data => {
          this.classes = data; 
          console.log(this.classes)
        });
  },
  methods: {
    handleSubmit() {
      axios.post('http://91.201.214.131:8080/subjects', {
        classs: {id: this.class1},
        name: this.name,
        code: this.code,
        optional: this.optional,
        passMark: this.passMark,
        totalMark: this.totalMark
      })
      .then(response => {
          console.log(response.data);
          alert('Subject successfully established!');
          this.getSubjects();
        })
        .catch(error => {
          console.error(error);
          alert('Error!' + error.message)
        });
    },
    handleClassSelect() {
      console.log(this.selectedClass)
      let id = this.selectedClass
      fetch('http://91.201.214.131:8080/classes/' + id) 
      .then(response => response.json()) 
        .then(data => { 
          this.class1 = data; 
          console.log(this.class1)
        });
    },
    getSubjects() {
      console.log(this.selectedClass)
      fetch("http://91.201.214.131:8080/subjects?c=" + this.selectedClass)
        .then(response => response.json())
        .then(data => { 
          this.subjects = data
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
    showDetails() {
      this.form = false,
      this.profile = false,
      this.details = true
    },
  },
};
</script>
