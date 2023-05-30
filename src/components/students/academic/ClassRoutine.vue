<template>
  <section class="bg-main h-full">
    <NavBar />
    <div class="p-7">
      <div class="flex justify-between items-center mb-10">
        <div>
          <p class="text-2xl font-medium">Class Routine</p>
          <span class="font-medium text-gray-500">Academic</span>
        </div>
      </div>
      <Qalendar :events="events" />
      <form @submit.prevent="addEvent">
        <div class="flex flex-col mb-3">
          <label for="event-title" class="font-medium text-gray-500 mb-1">Title:</label>
          <input id="event-title" v-model="newEvent.title" type="text" class="border-gray-400 border-2 p-2 rounded-md" required>
        </div>
        <div class="flex flex-col mb-3">
          <label for="event-date" class="font-medium text-gray-500 mb-1">Date:</label>
          <input id="event-date" v-model="newEvent.date" type="date" class="border-gray-400 border-2 p-2 rounded-md" required>
        </div>
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md">Add Event</button>
      </form>
    </div>
  </section>
  </template>

<script>
import { Qalendar } from "qalendar";
import NavBar from '../Nav.vue'

export default {
  components: {
      Qalendar,
      NavBar
  },

  data() {
      return {
        newEvent: {
            title: '',
            date: ''
          },
          events: [
              // ...
              {
                title: "Advanced algebra",
                with: "Chandler Bing",
                time: { start: "2023-05-01 01:00", end: "2023-05-01 2:00" },
                color: "yellow",
                isEditable: true,
                id: "753944708f0f",
                description: ""
              },
              {
                title: "History",
                with: "Rachel Greene",
                time: { start: "2023-05-01 02:30", end: "2023-05-01 03:15" },
                color: "green",
                isEditable: true,
                id: "5602b6f589fc",
                description: ""
              },
              {
                title: "Advanced algebra",
                with: "Chandler Bing",
                time: { start: "2023-05-02 01:00", end: "2023-05-02 2:00" },
                color: "blue",
                isEditable: true,
                id: "753944708f0f",
                description: ""
              },
              {
                title: "History",
                with: "Rachel Greene",
                time: { start: "2023-05-02 02:30", end: "2023-05-02 03:15" },
                color: "red",
                isEditable: true,
                id: "5602b6f589fc",
                description: ""
              },
              {
                title: "Advanced algebra",
                with: "Chandler Bing",
                time: { start: "2023-05-03 01:00", end: "2023-05-03 2:00" },
                color: "purple",
                isEditable: true,
                id: "753944708f0f",
                description: ""
              },
              {
                title: "History",
                with: "Rachel Greene",
                time: { start: "2023-05-03 02:30", end: "2023-05-03 03:15" },
                color: "green",
                isEditable: true,
                id: "5602b6f589fc",
                description: ""
              },
              {
                title: "Advanced algebra",
                with: "Chandler Bing",
                time: { start: "2023-05-04 01:00", end: "2023-05-04 2:00" },
                color: "yellow",
                isEditable: true,
                id: "753944708f0f",
                description: ""
              },
              {
                title: "History",
                with: "Rachel Greene",
                time: { start: "2023-05-05 02:30", end: "2023-05-05 03:15" },
                color: "green",
                isEditable: true,
                id: "5602b6f589fc",
                description: ""
              }
              // ...
          ],
      }
  },
}
</script>

<style>
  @import "qalendar/dist/style.css";
</style>
<!-- <template>
  <section class="bg-main h-full">
    <NavBar />
    <div class="p-7">
      <div class="flex justify-between items-center mb-10">
        <div>
          <p class="text-2xl font-medium">Class Routine</p>
          <span class="font-medium text-gray-500">Academic</span>
        </div>
      </div>
      <FullCalendar :options="calendarOptions" />
    </div>
  </section>
</template>


<script>
import NavBar from '../Nav.vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar,
    NavBar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        weekends: false // initial value
      }
    }
  },
  methods: {
    toggleWeekends: function() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
    }
  }
}
</script> -->