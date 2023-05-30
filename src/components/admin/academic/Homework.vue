<template>
  <section class="bg-main h-full">
    <NavBar />
  
    <div class="p-7">
      <div class="flex justify-between">
        <div>
          <p class="text-2xl font-medium">Homework</p>
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
        <select id="class-section" v-model="selectedSection" @change="handleSectionSelect" class="border py-2 px-3 mr-3 border-gray-300 rounded-md">
        <option value="">Select Section</option>
        <option v-for="section in sections" :key="section.id" :value="section.id" >{{ section.name }}</option>
      </select>
      </div>

      <div v-if="selectedSection">
        <button @click="getHomework()" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-5 py-2 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Get Homework</button>
      </div>
      </div>

      <div v-if="form">
        <div class="bg-white rounded-md my-10 pb-5">
          <div class="flex justify-between items-center p-3 border-b">
              <p class="text-lg font-medium">Create Homework</p>
              <button @click="closeForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-5">Back</button>
            </div>
          <form @submit.prevent="handleSubmit" class="my-10 w-3/5 mx-auto">

            <label>Title</label>
            <input v-model="title" type="text" required placeholder="Enter Title" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

            
            <label>Teacher</label>
            <select v-model="selectedTeacher" @change="handleTeacherSelect" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
              <option value="">Select Teacher</option>
              <option v-for="teacher in teachers" :key="teacher.id" :value="teacher.id" >{{ teacher.name }}</option>
            </select>

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

            <label>Subject</label>
            <select v-model="selectedSubject" @change="handleSubjectSelect" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
              <option value="">Select Subject</option>
              <option v-for="subject in subjects" :key="subject.id" :value="subject.id">{{ subject.name }}</option>
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

            <div class="flex mb-5">
              <label class="mr-5">Start Date</label>
              <input type="date" v-model="startDate" @change="validateDate" class="border p-1" />
              <label class="mx-5">End Date</label>
              <input type="date" v-model="endDate" @change="validateDate" class="border p-1" />
            </div>

            <label for="message">Description</label>
            <textarea name="message" id="" cols="30" rows="10" class="border w-full"></textarea>

            <button type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-20 py-2 mt-5 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Save</button>
          </form>
        </div>
      </div>


      <div v-if="profile">
        <div class="bg-white rounded-md my-10 pb-5 mb-10">
          <div>
            <h2 class="text-lg font-semibold p-5">Homework</h2>
            <hr>
            <div class="w-full p-5">
              <table class="w-full">
                <thead class="bg-gray-100">
                  <tr class="text-gray-600 text-sm font-light uppercase">
                    <th>Teacher</th>
                    <th>Subject</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody v-for="homework in homeworks" :key="homework.id">
                  <tr>
                    <td class="text-center">{{ homework.teacher.name }}</td>
                    <td class="text-center">{{ homework.subject.name }}</td>
                    <td class="text-center">{{ homework.start.split('T')[0] }} - {{ homework.end.split('T')[0] }}</td>
                    <td class="text-center">
                      <button @click="showDetails(homework.id)" class="bg-main-text text-white m-1 py-1 px-2 rounded-md">Edit</button>
                      <button @click="deleteHomework(homework.id)" class="bg-red-1 text-white m-1 py-1 px-2 rounded-md">Delete</button>
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
              <p class="text-lg font-medium">Edit Homework</p>
              <button @click="closeForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-5">Back</button>
            </div>
            <form @submit.prevent="updateHomework" class="my-10 w-3/5 mx-auto">

              <label>Title</label>
              <input v-model="title" type="text" required placeholder="Enter Title" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">


              <label>Teacher</label>
              <select v-model="selectedTeacher" @change="handleTeacherSelect" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
                <option value="">Select Teacher</option>
                <option v-for="teacher in teachers" :key="teacher.id" :value="teacher.id" >{{ teacher.name }}</option>
              </select>

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

              <label>Subject</label>
              <select v-model="selectedSubject" @change="handleSubjectSelect" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
                <option value="">Select Subject</option>
                <option v-for="subject in subjects" :key="subject.id" :value="subject.id">{{ subject.name }}</option>
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

              <div class="flex mb-5">
                <label class="mr-5">Start Date</label>
                <input type="date" v-model="startDate" @change="validateDate" class="border p-1" />
                <label class="mx-5">End Date</label>
                <input type="date" v-model="endDate" @change="validateDate" class="border p-1" />
              </div>

              <label for="message">Description</label>
              <textarea name="message" id="" cols="30" rows="10" class="border w-full"></textarea>

              <button @click="updateHomework()" type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-20 py-2 mt-5 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Save</button>
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
      form: false,
      profile: true,
      details: false,
      
      selectedClass: '',
      selectedSection: '',
      selectedTeacher: '',
      selectedSubject: '',
      classes: [],
      sections: [],
      class1: null,
      section: null,
      teachers: [],
      subjects: [],

      homeworks: [],
      homeworkId: null,
      title: "",
      teacher: "",
      class1: "",
      section: "",
      subject: "",
      classRoom: "",
      startDate: "",
      endDate: "",
      description: ""
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
        fetch('http://91.201.214.131:8080/teachers')
        .then(response => response.json())
        .then(data => {
          this.teachers = data; 
        });
        
        fetch('http://91.201.214.131:8080/subjects')
        .then(response => response.json())
        .then(data => {
          this.subjects = data; 
        });
    },
  methods: {
    handleSubmit() {
      let body = {
        title: this.title,
        teacher: {id: this.selectedTeacher},
        section: {id: this.selectedSection},
        subject: {id: this.selectedSubject},
        description: this.description,
        start: '2023-04-17',
        end: '2023-04-19'
      }
      console.log(body)
      fetch('http://91.201.214.131:8080/homeworks',  {
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
    handleSectionSelect() {
      let id = this.selectedSection
      // fetch('http://91.201.214.131:8080/sections/' + id) 
      // .then(response => response.json()) 
      //    .then(data => { 
      //     this.section = data; 
      //     console.log(this.section)
      //   }); 
    },
    handleTeacherSelect() {
      let id = this.selectedTeacher
      // fetch('http://91.201.214.131:8080/teachers/' + id) 
      // .then(response => response.json()) 
      //    .then(data => { 
      //     this.teacher = data; 
      //     console.log(this.teacher)
      //   }); 
    },
    handleSubjectSelect() {
      let id = this.selectedClass
      // fetch('http://91.201.214.131:8080/subjects?c=' + id) 
      // .then(response => response.json()) 
      //    .then(data => { 
      //     this.subject = data; 
      //   }); 
    },
    getHomework() {
      fetch('http://91.201.214.131:8080/homeworks?s=' + this.selectedSection)
      .then(response => response.json()) 
         .then(data => { 
          this.homeworks = data
        }); 
    },
    deleteHomework(id) {
      const confirmed = window.confirm('Are you sure you want to delete this homework?');
      if (confirmed) {
        fetch(`http://91.201.214.131:8080/homeworks/${id}/delete`, {
          method: 'POST',
        })
      }
      this.$router.go()
    },
    updateHomework() {
      axios.post(`http://91.201.214.131:8080/homeworks`, {
      id: this.homeworkId,
      title: this.title,
        teacher: {id: this.selectedTeacher},
        section: {id: this.selectedSection},
        subject: {id: this.selectedSubject},
        description: this.description,
        start: '2023-04-17',
        end: '2023-04-19'
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
    },
    async showDetails(id) {
      const response = await axios.get(`http://91.201.214.131:8080/homeworks/${id}`);
      this.homeworkId = id;
      console.log(this.homeworkId)
      this.teacher = response.data.teacher.name;
      this.section = response.data.section.name;
      this.subject = response.data.subject.name;
      this.description = response.data.description;
      this.start = '2023-04-17';
      this.end = '2023-04-19';
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

<style>
input, label{
    display:block;
}

</style>