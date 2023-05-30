<template>
  <Navbar />
    <div class="lg:mb-0 mb-10">
      <h2 class="text-2xl lg:text-3xl font-semibold text-center py-5 lg:py-10">Frequent Asked Questions</h2>
      <div class="accordion w-4/5 lg:w-2/3 mx-auto">
      <div v-for="(item, index) in items" :key="index" @click="toggleAccordion(index)" :class="{ active: activeIndex === index }" class="bg accordion-item">
        <div class="bg accordion-item-header text-lg lg:text-2xl font-semibold">{{ item.title }}</div>
        <div v-if="activeIndex === index" class="accordion-item-content">
          {{ item.content }}
        </div>
      </div>
  </div>
  </div>
  <Foot />
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Foot from '../components/Footer.vue'

export default {
  data() {
    return {
      items: [
        { title: "Item 1", content: "Content for Item 1" },
        { title: "Item 2", content: "Content for Item 2" },
        { title: "Item 3", content: "Content for Item 3" },
        { title: "Item 2", content: "Content for Item 2" },
        { title: "Item 3", content: "Content for Item 3" },
        { title: "Item 2", content: "Content for Item 2" },
        { title: "Item 3", content: "Content for Item 3" },
        { title: "Item 2", content: "Content for Item 2" },
        { title: "Item 3", content: "Content for Item 3" },
        { title: "Item 2", content: "Content for Item 2" },
        { title: "Item 3", content: "Content for Item 3" },
      ],
      activeIndex: null,
      contentHeight: 0,
    };
  },
  methods: {
    toggleAccordion(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
        this.contentHeight = 0;
      } else {
        this.activeIndex = index;
        this.$nextTick(() => {
          this.contentHeight = this.$refs.content[index].clientHeight;
        });
      }
    },
  },
  components: {
    Navbar,
    Foot
  }
}
</script>

<style scoped>
.accordion-item {
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;
}
.accordion-item-header {
  cursor: pointer;
  padding: 10px;
}

.accordion-item:hover {
  color: #00466d;
  transition: 0.3s;
}
.accordion-item.active .accordion-item-header {
  color: #00466d;
}
.accordion-item-content {
  padding: 10px;
  transition: max-height 0.5s ease-out;
}
</style>