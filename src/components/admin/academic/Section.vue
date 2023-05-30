<template>
  <section class="bg-main h-full">
    <NavBar />

    <div class="p-7">
      <div class="flex justify-between">
        <div>
          <p class="text-2xl font-medium">Section</p>
          <span class="font-medium text-gray-500">Academic</span>
        </div>
        <button @click="showForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-7">Create</button>
      </div>

      <div v-if="form">
        <div class="bg-white rounded-md my-10 pb-5">
        <div class="flex justify-between items-center p-3 border-b">
            <p class="text-lg font-medium">Create Section</p>
            <button @click="closeForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-5">Back</button>
          </div>
        <form @submit.prevent="handleSubmit" class="my-10 w-3/5 mx-auto">

          <label>Name</label>
          <input v-model="name" type="text" required placeholder="Enter Name" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          <label>Capacity</label>
          <input v-model="capacity" type="text" required placeholder="Enter Capacity" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
          <button type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-20 py-2 mt-5 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Save</button>
        </form>
      </div>
      </div>

      <div v-if="profile">
        <div class="flex flex-wrap mt-10">
          <!-- v-for -->
          <div v-for="section in sections" :key="section.id" class="bg-white rounded-md border shadow mr-5 mb-5">
            <p class="text-xl bg-gray-300 text-gray-700 w-1/2 mx-auto text-center my-12 py-5">{{ section.name }}</p>
            <div class="flex justify-between items-center px-5 pb-5">
              <div>
                <p class="text-xl text-center font-medium pr-5">Capacity: {{ section.capacity }}</p>
              </div>
              <div class="">
                <font-awesome-icon @click="showDetails(section.id)" class="text-lg pr-2 hover:text-main-text cursor-pointer" icon="fa-solid fa-pen-to-square" />
                <font-awesome-icon @click="deleteSections(section.id)" class="text-lg hover:text-main-text cursor-pointer" icon="fa-regular fa-trash-can" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="details">
        <div class="bg-white rounded-md my-10 pb-5">
          <div class="flex justify-between items-center p-3 border-b">
              <p class="text-lg font-medium">Update Section</p>
              <button @click="closeForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-5">Back</button>
            </div>
          <form class="my-10 w-3/5 mx-auto">

            <label>Name</label>
            <input v-model="name" type="text" required placeholder="Change Room No" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

            <label>Capacity</label>
          <input v-model="capacity" type="text" required placeholder="Change Capacity" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
            <button @click="updateSections()" type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-20 py-2 mt-5 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Save</button>
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

      sectionId: null,
      sections: [],
      name: '',
      capacity: ''
    }
  },
  components: {
    NavBar
  },
  
  methods: {
    handleSubmit() {
      axios.post('http://91.201.214.131:8080/sections', {
        name: this.name,
        capacity: this.capacity
      })

      .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
    getSections() {
      fetch('http://91.201.214.131:8080/sections')
        .then(response => response.json())
        .then(data => {
          this.sections = data;
        });
    },
    deleteSections(id) {
      const confirmed = window.confirm('Are you sure you want to delete this section?');
      if (confirmed) {
        fetch(`http://91.201.214.131:8080/sections/${id}/delete`, {
          method: 'POST',
        })
      }
      this.$router.go()
    },
    updateSections() {
      axios.post(`http://91.201.214.131:8080/sections`, {
      id: this.sectionId,
      name: this.name,
      capacity: this.capacity
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
    },
    async showDetails(id) {
      const response = await axios.get(`http://91.201.214.131:8080/sections/${id}`);
      this.sectionId = id;
      this.name = response.data.name;
      this.capacity = response.data.capacity;
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
    }
  },
  mounted() {
    this.getSections();
  },
};
</script>