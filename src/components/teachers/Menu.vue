<template>
  <section class="flex">
   <div class="panel w-1/5 bg-hero-text min-h-screen">
      <div class="w-4/5 flex mx-auto">
        <h2 class="text-3xl font-semibold my-5 text-gray-200">StudHome</h2>
        <img src="/img/logo1.png" alt="" class="w-16">
      </div>
      <ul class="text-gray-400 cursor-pointer mx-7 py-5">
        <li @click="showDash(), setActiveIndex(0)" :class="{ active: activeIndex === 0 }" class="hover:text-gray-100 text-lg py-3 transition ease-in-out delay-75">
          <font-awesome-icon icon="fa-solid fa-house" />
          <span class="mx-3">Dashboard</span>
        </li>
        <li :class="{ active: activeIndex === 1 }" @click="setActiveIndex(1)" class="text-lg py-3 transition ease-in-out delay-75">
          <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          <span class="mx-3 hover:text-gray-100 " @click="toggleAcademicList" :class="{ active: showAcademicList }">Academic</span>
          <div v-if="showAcademicList">
            <p @click="showAcademic('attendance'), setActiveList(0)" :class="{ active2: activeList === 0 }" class="hover:text-gray-100 text-lg px-9 py-1 transition ease-in-out delay-75">Attendance</p>
            <p @click="showAcademic('classRoutine'), setActiveList(1)" :class="{ active2: activeList === 1 }" class="hover:text-gray-100 text-lg px-9 py-1 transition ease-in-out delay-75">Class Routine</p>
            <p @click="showAcademic('homework'), setActiveList(2)" :class="{ active2: activeList === 2 }" class="hover:text-gray-100 text-lg px-9 py-2 transition ease-in-out delay-75">Homework</p>
            <p @click="showAcademic('subject'), setActiveList(3)" :class="{ active2: activeList === 3 }" class="hover:text-gray-100 text-lg px-9 py-1 transition ease-in-out delay-75">Subject</p>
          </div>
        </li>
        <li :class="{ active: activeIndex === 2 }" @click="setActiveIndex(2)" class="hover:text-gray-100 text-lg py-3 transition ease-in-out delay-75">
          <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          <span class="mx-3" @click="toggleExamList" :class="{ active: showExamList }">Exam</span>
          <div v-if="showExamList">
            <p @click="showExam('routine'), setActiveList(4)" :class="{ active2: activeList === 4 }" class="hover:text-gray-100 text-lg px-9 py-2 transition ease-in-out delay-75">Exam Routine</p>
            <p @click="showExam('result'), setActiveList(5)" :class="{ active2: activeList === 5 }" class="hover:text-gray-100 text-lg px-9 py-1 transition ease-in-out delay-75">Exam Result</p>
          </div>
        </li>
        <li :class="{ active: activeIndex === 3 }" @click="showEvent(), setActiveIndex(3)" class="hover:text-gray-100 text-lg py-3 transition ease-in-out delay-75">
          <font-awesome-icon icon="fa-solid fa-calendar-day" />
          <span class="mx-3">Event</span>
        </li>
        <li :class="{ active: activeIndex === 4 }" @click="showStudentsList(), setActiveIndex(4)" class="hover:text-gray-100 text-lg py-3 transition ease-in-out delay-75">
          <font-awesome-icon icon="fa-solid fa-chalkboard-user" />
          <span class="mx-3">Students List</span>
        </li>
        <li :class="{ active: activeIndex === 5 }" @click="setActiveIndex(5)" class="hover:text-gray-100 text-lg py-3 transition ease-in-out delay-75">
          <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
          <span class="mx-3"  @click="$store.dispatch('logout')">Logout</span>
        </li>
      </ul>
      <button @click="showAcademic('attendance'), setActiveList(0)" class="flex mx-auto text-white text-lg font-semibold mb-10 py-2 px-5 rounded-md bg-logo">Take Attendance</button>
      <div class="clock mx-auto mt-5">
        <div class="hour">
          <div class="hr" id="hr"></div>
        </div>
        <div class="min">
          <div class="mn" id="mn"></div>
        </div>
        <div class="sec">
          <div class="sc" id="sc"></div>
        </div>
      </div>
      <div>
        <div class="w-4/5 flex mx-auto py-2 px-5 rounded-md bg-logo mt-5 cursor-pointer">
          <p class="text-lg text-gray-100 font-semibold">{{ currentDay }}</p>
          <p class="text-lg text-gray-100 font-semibold ml-2">{{ currentDate }}</p>
        </div>
      </div>
    </div>
    <div class="w-4/5">
      <component :is="currentComponent" />
    </div>
  </section>
</template>

<script>
import Dash from './Dashboard.vue'
import AcademicAttendance from './attendance/studentAttendance.vue';
import AcademicClassRoutine from './academic/ClassRoutine.vue';
import AcademicHomework from './academic/Homework.vue';
import AcademicSubject from './academic/Subjects.vue';
import ExamRoutine from './exam/ExamList.vue';
import ExamResult from './exam/ExamResult.vue';
import Event from './Event.vue';
import StudentsList from './StudentsList.vue';

export default {
  data() {
    return {
      activeIndex: 0,
      activeList: -1,
      showAcademicList: false,
      showExamList: false,
      currentComponent: 'Dash',
      currentDate: new Date().toLocaleDateString(),
      currentDay: new Date().toLocaleDateString('en-US', { weekday: 'long' })
    }
  },
  components: {
    Dash,
    AcademicAttendance,
    AcademicClassRoutine,
    AcademicHomework,
    AcademicSubject,
    ExamRoutine,
    ExamResult,
    Event,
    StudentsList
  },
  mounted() {
    let $ = document;
    
    const deg = 6;

    const hr = $.querySelector("#hr");
    const mn = $.querySelector("#mn");
    const sc = $.querySelector("#sc");

    setInterval(() => {
      let day = new Date();
      
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;

      hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;
    }, 1000);
  },
  methods:{
    setActiveIndex(index) {
      this.activeIndex = index;
    },
    setActiveList(index) {
      this.activeList = index;
    },
    toggleAcademicList() {
      this.showAcademicList = !this.showAcademicList;
      this.showExamList = false;
    },
    toggleExamList() {
      this.showExamList = !this.showExamList;
      this.showAcademicList = false;
    },
    showDash() {
      this.currentComponent = 'Dash';
    },
    showAcademic(type) {
      this.currentComponent = `Academic${type.charAt(0).toUpperCase() + type.slice(1)}`;
    },
    showExam(type) {
      this.currentComponent = `Exam${type.charAt(0).toUpperCase() + type.slice(1)}`;
    },
    showEvent() {
      this.currentComponent = 'Event';
    },
    showStudentsList() {
      this.currentComponent = 'StudentsList';
    },
  },
};
</script>

<style scoped>
.clock{
	width:150px;
	height:150px;
	display:flex;
	justify-content:center;
	align-items:center;
	background:#fff url(https://i.imgur.com/bJOf8Ww.png);
	background-size:cover;
	border-radius:50%;
	border:3px solid #fff;
	box-shadow: inset 0px 0px 30px rgba(0,0,0,0.1), 0 20px 20px rgba(0,0,0,0.2), 0 0 0 4px rgba(255,255,255,1);
}

.clock::before{
	content:"";
	position:absolute;
	width:15px;
	height:15px;
	background:#4F4F4F;
	border:2px solid #fff;
	border-radius:50%;
	z-index:100000;
}

.hour,.min,.sec{
	position:absolute;
}

.hour, .hr{
	width:100px;
	height:100px;
}

.min, .mn{
	width:100px;
	height:100px;
}

.sec, .sc{
	width:100px;
	height:100px;
}

.hr,.mn,.sc{
	display:flex;
	justify-content:center;
	position:absolute;
	border-radius:50%;
}

.hr::before{
	content:"";
	position:absolute;
	width:8px;
	height:50px;
	background:#848484;
	z-index:10;
	border-radius:6px 6px;
}

.mn::before{
	content:"";
	position:absolute;
	width:4px;
	height:60px;
	background:#d0d0d0;
	z-index:11;
	border-radius:6px;
}

.sc::before{
	content:"";
	position:absolute;
	width:2px;
	height:70px;
	background:#4c85d3;
	z-index:12;
	border-radius:6px;
}
.active {
  color: white;
}
.active2 {
  color: #206bc4;
}
</style>