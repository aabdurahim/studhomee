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
            <p class="text-lg font-medium">Create Department</p>
            <button @click="closeForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-5">Back</button>
          </div>
        <form @submit.prevent="handleSubmit" class="my-10 w-3/5 mx-auto">

          <label>Name:</label>
          <input v-model="name" type="text" required placeholder="Enter Department Name" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          
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

          <button type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-20 py-2 mt-5 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Submit</button>
        </form>
      </div>
      </div>

      <div v-if="profile">
        <div class="flex flex-wrap mt-10">
          <!-- v-for -->
          <div class="bg-white rounded-md border shadow mr-5 mb-5">
            <div class="px-2 pb-5">
              <p class="text-xl text-center font-medium p-5">First Term</p>
              <p class="px-10 font-bold">1 Apr, 21 - 25 Apr, 21</p>
              <p class="text-center py-3">This is a note</p>
              <div class="w-1/5 my-2 mx-auto flex">
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
          <form @submit.prevent="updateDepartment" class="my-10 w-3/5 mx-auto">

            <label>Name:</label>
            <input v-model="name" type="text" required placeholder="Change Department Name" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
           
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
import NavBar from '../Navbar.vue'
import axios from 'axios'

export default {
  data() {
    return {
      departments: [],
      form: false,
      profile: true,
      details: false,

      name: '',
      startDate: '',
      endDate: '',
      note: ''
    }
  },
  components: {
    NavBar
  },
  methods: {
    handleSubmit() {
      axios.post('http://91.201.214.131:8080/departments', {
        name: this.name
      })

      .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
    getDepartments() {
      fetch('http://91.201.214.131:8080/departments')
        .then(response => response.json())
        .then(data => {
          this.departments = data;
        });
    },
    deleteDepartment(id) {
      const confirmed = window.confirm('Are you sure you want to delete this department?');
      if (confirmed) {
        fetch(`http://91.201.214.131:8080/departments/${id}/delete`, {
          method: 'POST',
        })
      }
      this.$router.go()
    },
    updateDepartment(id) {
      axios.post('http://91.201.214.131:8080/departments', {
        id: this.departmentId,
        name: this.name
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
      const response = await axios.get(`http://91.201.214.131:8080/departments/${id}`);
      this.departmentId = id;
      this.name = response.data.name;
      this.form = false,
      this.profile = false,
      this.details = true
    },
  }, 
  mounted() {
    this.getDepartments();
  },
};
</script>