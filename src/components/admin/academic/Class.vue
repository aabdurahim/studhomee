<template>
  <section class="bg-main h-full">
    <NavBar />

    <div class="p-7">
      <div class="flex justify-between">
        <div>
          <p class="text-2xl font-medium">Class</p>
          <span class="font-medium text-gray-500">Academic</span>
        </div>
        <button @click="showForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-7">Create</button>
      </div>

      <div v-if="form">
        <div class="bg-white rounded-md my-10 pb-5">
        <div class="flex justify-between items-center p-3 border-b">
            <p class="text-lg font-medium">Create Class</p>
            <button @click="closeForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-5">Back</button>
          </div>
        <form @submit.prevent="handleSubmit" class="my-10 w-3/5 mx-auto">

          <label>Class Number</label>
          <input v-model="number" type="text" required placeholder="Name" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          <label>Class Numeric</label>
          <input v-model="numeric" type="text" required placeholder="Enter Class Numeric" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          <label>Section</label>
          <select v-model="selectedSection" placeholder="Select Section" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
            <option value="">Choose Section</option>
            <option v-for="section in sections" :key="section.id" :value="section.id" >{{ section.name }}</option>
          </select>
          <button type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-20 py-2 mt-5 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Save</button>
        </form>
      </div>
      </div>

      <div v-if="profile">
        <div class="flex flex-wrap mt-10">
          <!-- v-for -->
          <div v-for="class1 in classes" :key="class1.id" class="bg-white w-[30%] rounded-md border shadow mr-5 mb-5">
            <div class="bg-gray-300 rounded-md mx-auto w-1/3 py-5 my-10">
              <h2 class="text-5xl font-semibold text-gray-700 mx-auto text-center">{{ class1.numeric }}</h2>
            </div>
            <div class="flex justify-between items-center px-5 pb-5">
              <div>
                <p class="text-xl font-medium pr-5">Class: {{ class1.number }}</p>
                <p v-for="section in class1.sections" :key="section.id" class="text-md text-gray-500 font-medium pr-5">{{ section.name }}</p>
              </div>
              <div class="">
                <font-awesome-icon @click="showDetails(class1.id)" class="text-lg pr-2 hover:text-main-text cursor-pointer" icon="fa-solid fa-pen-to-square" />
                <font-awesome-icon @click="deleteClasses(class1.id)" class="text-lg hover:text-main-text cursor-pointer" icon="fa-regular fa-trash-can" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="details">
        <div class="bg-white rounded-md my-10 pb-5">
          <div class="flex justify-between items-center p-3 border-b">
              <p class="text-lg font-medium">Update Department</p>
              <button @click="closeForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-5">Back</button>
            </div>
          <form @submit.prevent="updateClasses" class="my-10 w-3/5 mx-auto">

            <label>Class Name</label>
          <input v-model="name" type="text" required placeholder="Change Name" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          <label>Class Numeric</label>
          <input v-model="numeric" type="text" required placeholder="Change Class Numeric" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          <label>Section</label>
          <select v-model="section" placeholder="Change Section" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
            <option value="4">D</option>
            <option value="5">E</option>
          </select>
            <button type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-20 py-2 mt-5 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Save</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import NavBar from '../Nav.vue'

export default {
  data() {
    return {
      form: false,
      profile: true,
      details: false,

      classes: [],
      sections: [],
      selectedSection: '',
      section: '',
      number: '',
      numeric: ''
    }
  },
  components: {
    NavBar
  },
  created() {
    fetch('http://91.201.214.131:8080/sections')
        .then(response => response.json())
        .then(data => {
          this.sections = data; 
          console.log(this.sections)
        });
      },
  methods: {
    handleSubmit() {
      axios.post('http://91.201.214.131:8080/classes', {
        number: this.number,
        numeric: this.numeric,
        sections: [{ id:this.selectedSection }]
      })

      .then(response => {
          console.log(response.data);
          alert('Class successfully established!');
          this.getClasses();
        })
        .catch(error => {
          console.error(error);
          alert('Error!' + error.message)
        });
    },
    getClasses() {
      fetch('http://91.201.214.131:8080/classes')
        .then(response => response.json())
        .then(data => {
          this.classes = data;
        });
    },
    deleteClasses(id) {
      const confirmed = window.confirm('Are you sure you want to delete this class?');
      if (confirmed) {
        fetch(`http://91.201.214.131:8080/classes/${id}/delete`, {
          method: 'POST',
        })
      }
      this.$router.go()
    },
    updateClasses() {
      axios.post(`http://91.201.214.131:8080/classes/${this.classId}`, {
      name: this.name,
      numeric: this.numeric,
      sections: {id: this.section.id}
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
    },
    async showDetails(id) {
      const response = await axios.get(`http://91.201.214.131:8080/classes/${id}`);
      this.classId = id;
      this.name = response.data.name;
      this.numeric = response.data.numeric;
      this.sections = response.data.section.id;
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
    showDetails() {
      this.form = false,
      this.profile = false,
      this.details = true
    }
  },
  mounted() {
    this.getClasses();
  },
}
</script>
