<template>
  <section class="flex">
    <!-- <NavBar /> -->
    <MenuFrame class="w-full absolute" />
  </section>
</template>

<script>
import MenuFrame from '../components/admin/Menu.vue'
import NavBar from '../components/admin/Nav.vue'

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