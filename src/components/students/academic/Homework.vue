<template>
  <section class="bg-main h-full">
    <NavBar />
    <div class="p-7">
      <div class="flex justify-between items-center">
        <div>
          <p class="text-2xl font-medium">Homework</p>
          <span class="font-medium text-gray-500">Academic</span>
        </div>
      </div>

      <div class="w-1/3 mx-auto">
        <input v-model="date" type="date" class="border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
        <button class="btn border-2 hover:border-main-text hover:bg-white rounded-lg mx-3 px-3 py-1 hover:text-main-text text-lg font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Get Homework</button>
      </div>

      <div>
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
                    <th>Homework</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center">Teacher</td>
                    <td class="text-center">Maths</td>
                    <td class="text-center">21</td>
                    <td class="text-center w-1/4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione nisi nesciunt ipsa animi est facilis optio quaerat dicta corrupti perspiciatis quia ad in dolorum alias quis amet voluptatem, harum hic?</td>
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
  components: {
    NavBar
  }
}

</script>