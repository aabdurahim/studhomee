<template>
  <section class="bg-main h-full">
    <NavBar />
  
    <div class="p-7">
      <div class="flex justify-between">
        <div>
          <p class="text-2xl font-medium">Routine</p>
          <span class="font-medium text-gray-500">Academic</span>
        </div>
        <button @click="showForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-7">Create</button>
      </div>

      <div v-if="profile" class="w-2/3 mx-auto flex items-center my-10">
        <select id="class-select" v-model="selectedClass" @change="handleClassSelect" class="border py-2 px-3 mr-3 border-gray-300 rounded-md">
        <option value="">Select Class</option>
        <option v-for="class1 in classes" :key="class1.id" :value="class1.id" >{{ class1.number }}</option>
      </select>
      
      <div v-if="selectedClass">
        <select id="section-select" v-model="selectedSection" @change="handleSectionSelect" class="border py-2 px-3 mr-3 border-gray-300 rounded-md">
          <option value="">Select Section</option>
          <option v-for="section in sections" :key="section.id" :value="section.id" >{{ section.name }}</option>
        </select>
      </div>

      <div v-if="selectedSection">
        <button @click="getRoutine()" type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-5 py-2 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Get routine</button>
      </div>
      </div>

      <div v-if="form">
        <div class="bg-white rounded-md my-10 pb-5">
          <div class="flex justify-between items-center p-3 border-b">
              <p class="text-lg font-medium">Routine Create</p>
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

            <label>Section</label>
            <select v-model="section" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
              <option value="">Select Section</option>
              <option value="1">A</option>
              <option value="2">B</option>
              <option value="3">C</option>
              <option value="4">D</option>
              <option value="5">E</option>
            </select>

            <label>Subject</label>
            <select v-model="subject" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
              <option value="">Select Subject</option>
              <option value="1">A</option>
              <option value="2">B</option>
              <option value="3">C</option>
              <option value="4">D</option>
              <option value="5">E</option>
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

            <label>Teacher</label>
            <select v-model="teacher" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
              <option value="">Select Teacher</option>
              <option value="1">100</option>
              <option value="2">101</option>
              <option value="3">102</option>
              <option value="4">103</option>
              <option value="5">104</option>
            </select>

            <label>Day</label>
            <select v-model="day" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
              <option value="">Select Day</option>
              <option value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Friday</option>
            </select>

            <div class="flex">
              <label>Start Time</label>
              <input type="time" v-model="startTime" @change="validateTime" class="border-gray-300" />
              <label>End Time</label>
              <input type="time" v-model="endTime" @change="validateTime" />
            </div>
            <button type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-20 py-2 mt-5 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Submit</button>
          </form>
        </div>
      </div>

     <div v-if="profile">
        <div class="bg-gray-500 rounded-md p-7 w-1/3 mx-auto">
          <h2 class="text-center text-2xl text-white font-semibold leading-10">Class Routine</h2>
          <h3 class="text-center text-lg text-white font-semibold">Class: Two</h3>
          <h4 class="text-center text-md text-white font-semibold">Section: B</h4>
        </div>
        <div class="bg-white rounded-md my-10 pb-5 mb-10">
          <div>
            <h2 class="text-lg font-semibold p-5">Monday</h2>
            <hr>
            <div class="w-full p-5">
              <table class="w-full">
                <thead class="bg-gray-100">
                  <tr class="text-gray-600 text-sm font-light uppercase">
                    <th>Weekday</th>
                    <th>Subject</th>
                    <th>Teacher</th>
                    <th>Room</th>
                    <th>Time</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody v-for="(routine, day) in routines" :key="day">
                  <tr v-for="rout in routine" :key="rout.id">
                    <td class="text-center">{{ rout.weekday.name }}</td>
                    <td class="text-center">{{ rout.subject.name }}</td>
                    <td class="text-center">{{ rout.teacher.name }}</td>
                    <td class="text-center">{{ rout.classRoom.number }}</td>
                    <td class="text-center">{{ rout.start.split('T')[0] }} - {{ rout.end.split('T')[0] }}</td>
                    <td class="text-center">
                      <button class="bg-main-text text-white m-1 py-1 px-2 rounded-md">Edit</button>
                      <button class="bg-red-1 text-white m-1 py-1 px-2 rounded-md">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
      sections: [],
      classes: [],
      class1: null,
      section: null,

      routines: {},
      routineId: null,
      class1: "",
      section: "",
      subject: "",
      classRoom: "",
      teacher: "",
      weekday: "",  
      startTime: "",
      endTime: ""
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
      let body = {
        teacher: {id: this.selectedTeacher},
        section: {id: this.selectedSection},
        subject: {id: this.selectedSubject},
        classRoom: {id: this.classRoom},
        weekday: {id: this.wwekday},
        start: "2020-01-02T20:20", 
        end: "2021-01-02T12:30"
      }
      console.log(body)
      fetch('http://91.201.214.131:8080/routines',  {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          body
      )})
      .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
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
      fetch('http://91.201.214.131:8080/classes/' + id + '/sections') 
      .then(response => response.json()) 
        .then(data => { 
          this.sections = data; 
        }); 
        this.section = null
    },
    getRoutine() {
      fetch('http://91.201.214.131:8080/routines?s=' + this.selectedSection)
      .then(response => response.json()) 
         .then(data => { 
          this.routines = data
        }); 
    },
    deleteRoutine(id) {
      const confirmed = window.confirm('Are you sure you want to delete this routine?');
      if (confirmed) {
        fetch(`http://91.201.214.131:8080/routines/${id}/delete`, {
          method: 'POST',
        })
      }
      this.$router.go()
    },
    updateRoutine() {
      axios.post(`http://91.201.214.131:8080/routines`, {
      id: this.routineId,
      teacher: {id: this.selectedTeacher},
        section: {id: this.selectedSection},
        subject: {id: this.selectedSubject},
        classRoom: {id: this.classRoom},
        weekday: {id: this.wwekday},
        start: "2020-01-02T20:20", 
        end: "2021-01-02T12:30"
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
    },
    async showDetails(id) {
      const response = await axios.get(`http://91.201.214.131:8080/routine/${id}`);
      this.routineId = id;
      console.log(this.routineId)
      this.teacher = response.data.teacher.name;
      this.section = response.data.section.name;
      this.subject = response.data.subject.name;
      this.classRoom = response.data.classRoom.number;
      this.weekady = response.data.weekday.name
      this.start = '2020-01-02T20:20';
      this.end = '2021-01-02T12:30';
      this.form = false,
      this.profile = false,
      this.details = true
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
    validateTime() {
      if (this.endTime <= this.startTime) {
        alert("The end time must be greater than the start time.");
        this.endTime = "";
      }
    }
  },
};
</script>
