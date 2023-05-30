<template>
  <section class="bg-main h-full">
    <NavBar />
    <div class="p-7">

      <div v-if="profile">
        <div>
          <p class="text-2xl font-medium">Students List</p>
          <span class="font-medium text-gray-500">Admin Setting</span>
        </div>
        <!-- v-for -->
        <div class="flex flex-wrap mt-10">
          <div class="bg-white rounded-md border shadow mr-5 mb-5">
            <img src="/img/user.png" alt="" class="w-1/2 m-auto py-5">
            <p class="text-xl text-center font-medium pb-3">Student</p>
            <p class="text-md text-center font-medium pb-5 text-gray-500">Section</p>
            <div>
              <button @click="showDetails()" class="w-full text-center text-md font-medium py-5 border-t-2">View details</button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="details">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-2xl font-medium">Student details</p>
            <span class="font-medium text-gray-500">StudentsList</span>
          </div>
          <button @click="getBack()" class="btn border-2 hover:border-main-text hover:bg-white rounded-md px-2 py-1 hover:text-main-text text-md font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Back</button>
        </div>
        <div class="user-item bg-white rounded-md p-5 my-5 w-full">
          <div class="w-full">
            <img src="/img/user.png" alt="" class="rounded-full w-32 mx-auto my-5">
            <div class="w-4/5 mx-auto">
              <div class="flex justify-between py-2 border-b">
                <p class="font-semibold">Name</p>
                <p>Student</p>
              </div>
              <hr>
              <hr>
              <div class="flex justify-between py-2 border-b">
                <p class="font-semibold">Email</p>
                <p>student@mail.com</p>
              </div>
              <hr>
              <div class="flex justify-between py-2 border-b">
                <p class="font-semibold">Phone</p>
                <p>+7 (707) 777 73 73</p>
              </div>
              <hr>
              <div class="flex justify-between py-2 border-b">
                <p class="font-semibold">Gender</p>
                <p>Male</p>
              </div>
              <hr>
              <div class="flex justify-between py-2 border-b">
                <p class="font-semibold">Joined Date</p>
                <p>2023-02-15</p>
              </div>
              <hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from './Navbar.vue'

export default {
  data() {
    return {
      profile: true,
      details: false
    }
  },
  components: {
    NavBar
  },

  methods: {
    showDetails() {
      this.profile = false,
      this.details = true
    },
    getBack() {
      this.profile = true,
      this.details = false
    }
  }
}
</script>

<style scoped>
button:hover {
  color: #5985d4;
  background: #f2f6fc;
  transition: all 0.3s;
}
</style>