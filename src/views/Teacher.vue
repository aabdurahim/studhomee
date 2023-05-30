<template>
  <section class="flex">
    <!-- <NavBar /> -->
    <MenuFrame class="w-full absolute" />
  </section>
</template>

<script>
import MenuFrame from '../components/teachers/Menu.vue'
import NavBar from '../components/teachers/Navbar.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    MenuFrame,
    NavBar
  },
  methods: {
  }
};
</script>

<style scoped>
</style>