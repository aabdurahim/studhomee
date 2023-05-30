<template>
  <section class="bg-main h-full">
    <NavBar />
    <div class="p-7">
      <div class="flex justify-between items-center mb-10">
        <div>
          <p class="text-2xl font-medium">Events</p>
        </div>
      </div>
      <FullCalendar :options="calendarOptions" />
    </div>
  </section>
</template>


<script>
import NavBar from './Nav.vue'
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
</script>