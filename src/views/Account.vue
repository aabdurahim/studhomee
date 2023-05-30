<template>
  <section class="flex">
    <!-- <NavBar /> -->
    <MenuFrame class="w-full absolute" />
  </section>
</template>

<script>
import NavBar from '../components/students/Nav.vue'
import MenuFrame from '../components/students/Menu.vue'

export default {
  data() {
    return {
    }
  },
  components: {
		MenuFrame,
    NavBar
  }
};
</script>

<style scoped>
</style>