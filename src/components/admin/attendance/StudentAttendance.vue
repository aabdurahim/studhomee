<template>
  <section class="bg-main h-full">
    <NavBar />
  
    <div class="p-7">
      <div class="flex justify-between items-center">
        <div>
          <p class="text-2xl font-medium">Student Attendance</p>
          <span class="font-medium text-gray-500">Academic</span>
        </div>
      </div>

      <div class="w-3/4 md:w-2/3 mx-auto sm:flex grid grid-cols-2 items-center my-10">
        <div>
        <input type="date" id="selected-date" @change="handleDateSelect" v-model="selectedDate" class="border py-2 px-3 mr-3 border-gray-300 rounded-md">
      </div>

      <div v-if="selectedDate" class="sm:m-0 m-2">
        <select id="class-select" v-model="selectedClass" @change="handleClassSelect" class="border py-2 px-3 mr-3 border-gray-300 rounded-md">
          <option value="">Select Class</option>
          <option v-for="class1 in classes" :key="class1.id" :value="class1.id" >{{ class1.number }}</option>
        </select>
      </div>


      <div v-if="selectedClass">
        <select id="class-section" v-model="selectedSection" @change="handleSectionSelect" class="border py-2 px-3 mr-3 border-gray-300 rounded-md">
        <option value="">Select Section</option>
        <option v-for="section in sections" :key="section.id" :value="section.id" >{{ section.name }}</option>
      </select>
      </div>

      <div v-if="selectedSection">
        <button @click="getAttendance()" class="lg:block hidden btn border-2 hover:border-main-text hover:bg-white rounded-lg px-3 lg:py-1 py-2 hover:text-main-text text-sm lg:text-lg font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Get Students List</button>
        <button @click="getAttendance()" class="lg:hidden block btn border-2 hover:border-main-text hover:bg-white rounded-lg px-3 lg:py-1 py-2 hover:text-main-text text-sm lg:text-lg font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Get List</button>
      </div>
      </div>

      <div v-if="profile">
        <div class="bg-white rounded-md my-10 pb-5 mb-10">
          <div>
            <h2 class="text-lg font-semibold p-5">Attendance</h2>
            <hr>
            <div class="w-full p-5">
              <table class="w-full">
                <thead class="bg-gray-100">
                  <tr class="text-gray-600 text-sm font-light uppercase">
                    <th>Name</th>
                    <th>Attendance</th>
                    <th>Action</th>
                  </tr>
                </thead> 
                <!-- v-for -->
                <tbody  v-for="attendance in attendances" :key="attendance.id"> 
                  <tr>
                    <td class="text-center">{{ attendance.student.name }}</td>
                    <td class="flex">
                      <div class="mx-auto flex">
                        <label class="flex">
                          <input type="radio" @change="updateAttendance(attendance)" name="attendance" value="present" v-model="present" >
                          Present
                        </label>
                        <label class="flex ml-3">
                          <input type="radio" @change="updateAttendance(attendance)" name="attendance" value="absent" v-model="absent">
                          Absent
                        </label>
                      </div>
                    </td>
                    <td>
                      <p @click="SaveAttendance(attendance)" class="text-main-text font-semibold text-center cursor-pointer">Save</p>
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

export default {
  data() {
    return {
      form: false,
      profile: true,
      details: false,
      
      selectedDate: '',
      selectedClass: '',
      selectedSection: '',
      selectedTeacher: '',
      selectedSubject: '',
      class1: null,
      section: null,
      present: '',
      absent: '',
      classes: [],
      sections: [],
      attendances: []
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
    },
    getAttendance() {
      console.log(this.selectedDate)
      fetch("http://91.201.214.131:8080/attendance?d=" + this.selectedDate + "&s=" + this.selectedSection)
        .then(response => response.json())
        .then(data => { 
          this.attendances = data
        })
    },
    SaveAttendance(attendance) {
      console.log(attendance)
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
};
</script>

<style>
input, label{
    display:block;
}

</style>
