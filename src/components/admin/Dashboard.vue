<template>
  <section class="bg-main h-full">
    <NavBar />
    <div class="p-7">

      <div class="pb-7 flex">
        <h2 class="text-xl font-semibold">Dashboard</h2>
      </div>
      <div class="flex flex-wrap justify-between">
        <div class="flex bg-white rounded-md p-5 w-[22%]">
          <font-awesome-icon icon="fa-solid fa-user-group" class="text-2xl text-white bg-blue-1 p-4 rounded-md" />
          <div class="ml-3">
            <p class="text-xl">Students</p>
            <p class="text-xl font-semibold">8</p>
          </div>
        </div>
        <div class="flex bg-white rounded-md p-5 w-[22%]">
          <font-awesome-icon icon="fa-solid fa-user-group" class="text-2xl text-white bg-blue-2 p-4 rounded-md" />
          <div class="ml-3">
            <p class="text-xl">Teachers</p>
            <p class="text-xl font-semibold">5</p>
          </div>
        </div>  
        <div class="flex bg-white rounded-md p-5 w-[22%]">
          <font-awesome-icon icon="fa-regular fa-file-lines" class="text-2xl text-white bg-orange-1 p-4 rounded-md" />
          <div class="ml-3">
            <p class="text-xl">Exams</p>
            <p class="text-xl font-semibold">13</p>
          </div>
        </div>
        <div class="flex bg-white rounded-md p-5 w-[22%]">
          <font-awesome-icon icon="fa-solid fa-calendar-day" class="text-2xl text-white bg-blue-2 p-4 rounded-md" />
          <div class="ml-3">
            <p class="text-xl">Events</p>
            <p class="text-xl font-semibold">11</p>
          </div>
        </div>
      </div>

      <!-- <div class="flex flex-wrap my-10 w-full">
        <div class="w-1/2 bg-white rounded-md">
          <p class="text-lg font-medium p-3 border-b">Income vs Expense Chart</p>
          <InChart />
        </div>

      <div class="user-item bg-white rounded-md w-1/2 ml-20">
        <p class="text-lg font-medium p-3 border-b">Comparison Chart</p>
        <div>
          <pie-chart :data="[30, 70]" />
        </div>
      </div>

      </div> -->

      <div class="p-7">
      <div class="flex justify-between items-center mb-10">
        <div>
          <p class="text-2xl font-medium">Events</p>
        </div>
      </div>
      <FullCalendar :options="calendarOptions" />
    </div>

    </div>
  </section>
</template>

<script>
import NavBar from './Nav.vue'
import InChart from '../charts/IncomeChart.vue'
import PieChart from '../charts/PieChart.vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    NavBar,
    FullCalendar,
    InChart,
    PieChart
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

<style>
.pie-chart {
	background:
		radial-gradient(
			circle closest-side,
			white 0,
			white 34.16%,
			transparent 34.16%,
			transparent 61%,
			white 0
		),
		conic-gradient(
			from 144deg,
			#4e79a7 0,
			#4e79a7 64%,
			#e15759 0,
			#e15759 100%
	);
	position: relative;
	min-height: 350px;
	margin: 0;
	outline: 1px solid #ccc;
}
.pie-chart h2 {
	position: absolute;
	margin: 1rem;
}
.pie-chart cite {
	position: absolute;
	bottom: 0;
	font-size: 80%;
	padding: 1rem;
	color: gray;
}
.pie-chart figcaption {
	position: absolute;
	bottom: 1em;
	right: 1em;
	font-size: smaller;
	text-align: right;
  width: 255px;
}
.pie-chart span:after {
	display: inline-block;
	content: "";
	width: 0.8em;
	height: 0.8em;
	margin-left: 0.4em;
	height: 0.8em;
	border-radius: 0.2em;
	background: currentColor;
}

.user-item {
  width: 32%;
}
</style>