<template>
  <section class="bg-main h-full">
    <NavBar />

    <div class="p-7">
      <div class="flex justify-between">
        <div>
          <p class="text-2xl font-medium">Message Notification</p>
          <span class="font-medium text-gray-500">Message</span>
        </div>
      </div>

      <div class="bg-white rounded-md my-10 pb-5">
        <div class="flex justify-between items-center p-3 border-b">
          <p class="text-lg font-medium">Message Notification</p>
        </div>

        <form @submit.prevent="handleSubmit" class="my-10 w-3/5 mx-auto">

          <label>Recipient</label>
            <select v-model="selectedRecipient" @change="handleRecipientSelect" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
              <option value="">Select Recipient</option>
              <option></option>
            </select>

          <label>Title</label>
          <input v-model="title" type="email" required class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          <label for="message">Message</label>
          <textarea name="message" v-model="text" id="" cols="30" rows="10" class="border w-full"></textarea>
            
          <button type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-5 py-2 mt-5 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Send</button>
          </form>
      </div>

    </div>
  </section>
</template>

<script>
import NavBar from '../Nav.vue'

export default {
  data() {
    return {
      selectedRecipient: '',
      title: '',
      text: ''
      // image: ''
    }
  },
  components: {
    NavBar
  },
  methods: {
    handleSubmit() {
      let body = {
        title: this.title,
        teacher: {id: this.selectedTeacher},
        section: {id: this.selectedSection},
        text: this.text
      }
      console.log(body)
      fetch("http://localhost:8080/notifications", body)
      .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
  }
};
</script>