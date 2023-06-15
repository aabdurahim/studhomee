<template>
  <section class="bg-main h-full">
    <NavBar />

    <div class="p-7">
      <div class="flex justify-between">
        <div>
          <p class="text-2xl font-medium">Class Room</p>
          <span class="font-medium text-gray-500">Academic</span>
        </div>
        <button @click="showForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-7">Create</button>
      </div>

      <div v-if="form">
        <div class="bg-white rounded-md my-10 pb-5">
        <div class="flex justify-between items-center p-3 border-b">
            <p class="text-lg font-medium">Create Class Room</p>
            <button @click="closeForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-5">Back</button>
          </div>
        <form @submit.prevent="handleSubmit" class="my-10 w-3/5 mx-auto">

          <label>Room No</label>
          <input v-model="number" type="text" required placeholder="Enter Room No" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          <label>Capacity</label>
          <input v-model="capacity" type="text" required placeholder="Enter Capacity" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
          <button type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-20 py-2 mt-5 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Save</button>
        </form>
      </div>
      </div>

      <div v-if="profile">
        <div class="flex flex-wrap mt-10">
          <!-- v-for -->
          <div v-for="room in rooms" :key="room.id" class="bg-white rounded-md border shadow mr-5 mb-5 w-[30%]">
            <img src="/img/demo.png" alt="" class="m-auto py-5">
            <div class="flex justify-between items-center px-5 pb-5">
              <div>
                <p class="text-xl text-center font-medium pr-5">Room No: {{ room.number }}</p>
                <p class="text-xl font-medium pr-5">( {{ room.capacity }} )</p>
              </div>
              <div class="">
                <font-awesome-icon @click="showDetails(room.id)" class="text-lg pr-2 hover:text-main-text cursor-pointer" icon="fa-solid fa-pen-to-square" />
                <font-awesome-icon @click="deleteClassRoom(room.id)" class="text-lg hover:text-main-text cursor-pointer" icon="fa-regular fa-trash-can" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="details">
        <div class="bg-white rounded-md my-10 pb-5">
          <div class="flex justify-between items-center p-3 border-b">
              <p class="text-lg font-medium">Update Class Room</p>
              <button @click="closeForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-5">Back</button>
            </div>
          <form @submit.prevent="updateClassRoom" class="my-10 w-3/5 mx-auto">

            <label>Room No</label>
            <input v-model="number" type="text" required placeholder="Change Room No" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

            <label>Capacity</label>
          <input v-model="capacity" type="text" required placeholder="Change Capacity" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
            <button @click="updateClassRoom()" type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-20 py-2 mt-5 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Save</button>
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
      rooms: [],
      form: false,
      profile: true,
      details: false,

      classRoomId: null,
      number: '',
      capacity: '',
      image: ''
    }
  },
  components: {
    NavBar
  },
  methods: {
    handleSubmit() {
      axios.post('http://91.201.214.131:8080/rooms', {
        number: this.number,
        capacity: this.capacity
      })

      .then(response => {
          console.log(response.data);
          alert('Classroom successfully established!');
          this.getClassRooms();
        })
        .catch(error => {
          console.error(error);
          alert('Error!' + error.message)
        });
    },
    getClassRooms() {
      fetch('http://91.201.214.131:8080/rooms')
        .then(response => response.json())
        .then(data => {
          this.rooms = data;
        });
    },
    deleteClassRoom(id) {
      const confirmed = window.confirm('Are you sure you want to delete this class room?');
      if (confirmed) {
        fetch(`http://91.201.214.131:8080/rooms/${id}/delete`, {
          method: 'POST',
        })
      }
      this.$router.go()
    },
    updateClassRoom() {
      axios.post(`http://91.201.214.131:8080/rooms`, {
      id: this.classRoomId,
      number: this.number,
      capacity: this.capacity
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
    console.log(this.classRoomId)
    },
    async showDetails(id) {
      const response = await axios.get(`http://91.201.214.131:8080/rooms/${id}`);
      this.classRoomId = id;
      console.log(this.classRoomId)
      this.number = response.data.number;
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
    this.getClassRooms();
  },
};
</script>
