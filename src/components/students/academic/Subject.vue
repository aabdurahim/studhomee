<template>
  <section class="bg-main h-full">
    <NavBar />
  
    <div class="p-7">
      <div class="flex justify-between">
        <div>
          <p class="text-2xl font-medium">Subjects</p>
          <span class="font-medium text-gray-500">Academic</span>
        </div>
      </div>

      <div>
        <div class="flex flex-wrap mt-10">
          <div class="w-1/3 bg-white rounded-md border shadow mr-5 mb-5">
            <img src="/img/demo.png" alt="">
            <p class="text-xl text-center font-medium py-5 px-10">English (101)</p>
            <p class="text-md px-5 font-medium">Type:  Theory</p>
            <p class="text-md px-5 font-medium">Pass:  40 of 100</p>
            <p class="text-md px-5 pb-5 font-medium">Marks: </p>
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
    };
  },
  components: {
    NavBar
  },
}
</script>
