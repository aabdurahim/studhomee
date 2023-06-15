<!--<template>
  <div class="w-full">
    <font-awesome-icon @click="clickMenu" class="text-3xl text-hero-block float-right absolute right-1 top-3" icon="fa-solid fa-bars" />
    <div v-if="showMenu" class="w-2/3 px-5 pb-3 bg-white border absolute z-50 right-0 top-14 rounded-md">
    <ul class="text-gray-700 cursor-pointer py-5">
        <li @click="showDash(), setActiveIndex(0)" :class="{ active: activeIndex === 0 }" class="hover:text-gray-500 text-lg py-3 transition ease-in-out delay-75">
          <font-awesome-icon icon="fa-solid fa-house" />
          <span class="mx-3">Dashboard</span>
        </li>
        <li :class="{ active: activeIndex === 1 }" @click="setActiveIndex(1)"  class="hover:text-gray-500 text-lg py-3 transition ease-in-out delay-75">
          <font-awesome-icon icon="fa-solid fa-book-open" />
          <span @click="toggleAttendanceList" :class="{ active: showAttendanceList }" class="mx-3">Attendance</span>
          <div v-if="showAttendanceList">
            <p @click="showAttendance('student'), setActiveList(10)" :class="{ active2: activeList === 10 }" class="hover:text-gray-500 text-lg px-9 py-1 transition ease-in-out delay-75">Student Attendance</p>
             <p @click="showAttendance('teacher'), setActiveList(11)" :class="{ active2: activeList === 11 }" class="hover:text-gray-500 text-lg px-9 py-1 transition ease-in-out delay-75">Teacher Attendance</p> 
          </div>
        </li>
        <li :class="{ active: activeIndex === 2 }" @click="setActiveIndex(2)" class="text-lg py-3 transition ease-in-out delay-75">
          <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          <span class="mx-3 hover:text-gray-500 " @click="toggleAcademicList" :class="{ active: showAcademicList }">Academic</span>
          <div v-if="showAcademicList">
            <p @click="showAcademic('department'), setActiveList(0)" :class="{ active2: activeList === 0 }" class="hover:text-gray-500 text-lg px-9 py-1 transition ease-in-out delay-75">Department</p>
            <p @click="showAcademic('shedule'), setActiveList(1)" :class="{ active2: activeList === 1 }" class="hover:text-gray-500 text-lg px-9 py-1 transition ease-in-out delay-75">Shedule</p>
            <p @click="showAcademic('classRoom'), setActiveList(2)" :class="{ active2: activeList === 2 }" class="hover:text-gray-500 text-lg px-9 py-2 transition ease-in-out delay-75">Class Room</p>
            <p @click="showAcademic('class'), setActiveList(3)" :class="{ active2: activeList === 3 }" class="hover:text-gray-500 text-lg px-9 py-1 transition ease-in-out delay-75">Class</p>
            <p @click="showAcademic('section'), setActiveList(4)" :class="{ active2: activeList === 4 }" class="hover:text-gray-500 text-lg px-9 py-1 transition ease-in-out delay-75">Section</p>
            <p @click="showAcademic('subject'), setActiveList(5)" :class="{ active2: activeList === 5 }" class="hover:text-gray-500 text-lg px-9 py-2 transition ease-in-out delay-75">Subject</p>
            <p @click="showAcademic('homework'), setActiveList(6)" :class="{ active2: activeList === 6 }" class="hover:text-gray-500 text-lg px-9 py-1 transition ease-in-out delay-75">Homework</p>
          </div>
        </li>
        <li :class="{ active: activeIndex === 3 }" @click="setActiveIndex(3)" class="text-lg py-3 transition ease-in-out delay-75">
          <font-awesome-icon icon="fa-solid fa-user-group" />
          <span class="mx-3 hover:text-gray-500 " @click="toggleUsersList" :class="{ active: showUsersList }">Users</span>
          <div v-if="showUsersList">
            <p @click="showUsers('admin'), setActiveList(7)" :class="{ active2: activeList === 7 }" class="hover:text-gray-500 text-lg px-9 py-2 transition ease-in-out delay-75">Admin</p>
            <p @click="showUsers('student'), setActiveList(8)" :class="{ active2: activeList === 8 }" class="hover:text-gray-500 text-lg px-9 py-1 transition ease-in-out delay-75">Student</p>
            <p @click="showUsers('teacher'), setActiveList(9)" :class="{ active2: activeList === 9 }" class="hover:text-gray-500 text-lg px-9 py-1 transition ease-in-out delay-75">Teacher</p>
          </div>
        </li>
        <li :class="{ active: activeIndex === 4 }" @click="setActiveIndex(4)" class="hover:text-gray-500 text-lg py-3 transition ease-in-out delay-75">
          <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          <span class="mx-3" @click="toggleExamList" :class="{ active: showExamList }">Exam</span>
          <div v-if="showExamList">
            <p @click="showExam('list'), setActiveList(12)" :class="{ active2: activeList === 12 }" class="hover:text-gray-500 text-lg px-9 py-2 transition ease-in-out delay-75">Exam List</p>
            <p @click="showExam('schedule'), setActiveList(13)" :class="{ active2: activeList === 13 }" class="hover:text-gray-500 text-lg px-9 py-1 transition ease-in-out delay-75">Schedule</p>
            <p @click="showExam('result'), setActiveList(14)" :class="{ active2: activeList === 14 }" class="hover:text-gray-500 text-lg px-9 py-1 transition ease-in-out delay-75">Result</p>
          </div>
        </li>
        <!-- <li :class="{ active: activeIndex === 5 }" @click="setActiveIndex(5)" class="hover:text-gray-500 text-lg py-3 transition ease-in-out delay-75">
          <font-awesome-icon icon="fa-solid fa-chalkboard-user" />
          <span class="mx-3">Report</span>
        </li> -->
        <li :class="{ active: activeIndex === 6 }" @click="setActiveIndex(6)" class="hover:text-gray-500 text-lg py-3 transition ease-in-out delay-75">
          <font-awesome-icon icon="fa-regular fa-bell" /> 
          <span class="mx-3" @click="toggleAnnouncementList" :class="{ active: showAnnouncementist }">Announcement</span>
          <div v-if="showAnnouncementList">
            <p @click="showAnnouncement('message'), setActiveList(15)" :class="{ active2: activeList === 15 }" class="hover:text-gray-500 text-lg px-9 py-2 transition ease-in-out delay-75">Message</p>
          </div>
        </li>
        <!-- <li :class="{ active: activeIndex === 7 }" @click="setActiveIndex(7)" class="hover:text-gray-500 text-lg py-3 transition ease-in-out delay-75">
          <font-awesome-icon icon="fa-solid fa-chalkboard-user" />
          <span class="mx-3">Accounting</span>
        </li>
        <li :class="{ active: activeIndex === 8 }" @click="setActiveIndex(8)" class="hover:text-gray-500 text-lg py-3 transition ease-in-out delay-75">
          <font-awesome-icon icon="fa-solid fa-chalkboard-user" />
          <span class="mx-3">Roles</span>
        </li> -->
        <!-- <li :class="{ active: activeIndex === 9 }" @click="setActiveIndex(9)" class="hover:text-gray-500 text-lg py-3 transition ease-in-out delay-75">
          <font-awesome-icon icon="fa-solid fa-chalkboard-user" />
          <span class="mx-3">Settings</span>
        </li> -->
        <li :class="{ active: activeIndex === 10 }" @click="setActiveIndex(10)" class="hover:text-gray-500 text-lg py-3 transition ease-in-out delay-75">
          <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
          <span class="mx-3"  @click="$store.dispatch('logout')">Logout</span>
        </li>
      </ul>
  </div>
  <div class="w-full">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script>
import Dash from './Dashboard.vue';
import AttendanceStudent from './attendance/StudentAttendance.vue';
import AttendanceTeacher from './attendance/TeacherAttendance.vue';
import UsersTeacher from './users/UsersTeacher.vue';
import UsersStudent from './users/UsersStudent.vue';
import UsersAdmin from './users/UsersAdmin.vue';
import AcademicDepartment from './academic/Department.vue';
import AcademicShedule from './academic/Shedule.vue';
import AcademicClassRoom from './academic/ClassRoom.vue';
import AcademicClass from './academic/Class.vue';
import AcademicSection from './academic/Section.vue';
import AcademicSubject from './academic/Subject.vue';
import AcademicHomework from './academic/Homework.vue';
import ExamList from './exam/ExamList.vue';
import ExamSchedule from './exam/ExamSchedule.vue';
import ExamResult from './exam/ExamResult.vue';
import AnnouncementMessage from './announcement/Message.vue'

export default {
  data() {
    return {
      activeItem: null,
      showMenu: false,
      activeIndex: 0,
      activeList: -1,
      showUsersList: false,
      showAcademicList: false,
      showAttendanceList: false,
      showExamList: false,
      showAnnouncementList: false,
      currentComponent: 'Dash',
      currentDate: new Date().toLocaleDateString(),
      currentDay: new Date().toLocaleDateString('en-US', { weekday: 'long' })
    }
  },
  mounted() {
    // Define the document object as $
    let $ = document;
    
    // Define the degrees of rotation for each second, minute, and hour on the clock
    const deg = 6;

    // Get references to the hour, minute, and second hands on the clock
    const hr = $.querySelector("#hr");
    const mn = $.querySelector("#mn");
    const sc = $.querySelector("#sc");

    // Update the clock every second
    setInterval(() => {
      // Get the current date and time
      let day = new Date();
      
      // Calculate the rotation angle for the hour, minute, and second hands
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;

      // Set the rotation angle for the hour, minute, and second hands on the clock
      hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;
    }, 1000);
  },
  components: {
    Dash,
    AttendanceStudent,
    AttendanceTeacher,
    UsersTeacher,
    UsersStudent,
    UsersAdmin,
    AcademicDepartment,
    AcademicShedule,
    AcademicClassRoom,
    AcademicClass,
    AcademicSection,
    AcademicSubject,
    AcademicHomework,
    ExamList,
    ExamSchedule,
    ExamResult,
    AnnouncementMessage
  },
  methods:{
    clickMenu() {
    this.showMenu = !this.showMenu;
  },
    setActiveIndex(index) {
      this.activeIndex = index;
    },
    setActiveList(index) {
      this.activeList = index;
    },
    toggleUsersList() {
      this.showUsersList = !this.showUsersList;
      this.showAcademicList = false;
      this.showAttendanceList = false;
      this.showExamList = false;
      this.showAnnouncementList = false;
    },
    toggleAcademicList() {
      this.showAcademicList = !this.showAcademicList;
      this.showUsersList = false;
      this.showAttendanceList = false;
      this.showExamList = false;
      this.showAnnouncementList = false;
    },
    toggleAttendanceList() {
      this.showAttendanceList = !this.showAttendanceList;
      this.showUsersList = false;
      this.showAcademicList = false;
      this.showExamList = false;
      this.showAnnouncementList = false;
    },
    toggleExamList() {
      this.showExamList = !this.showExamList;
      this.showUsersList = false;
      this.showAcademicList = false;
      this.showAttendanceList = false;
      this.showAnnouncementList = false;
    },
    toggleAnnouncementList() {
      this.showAnnouncementList = !this.showAnnouncementList;
      this.showUsersList = false;
      this.showAcademicList = false;
      this.showAttendanceList = false;
      this.showExamList = false;
    },
    showDash() {
      this.currentComponent = 'Dash';
    },
    showAttendance(type) {
      this.currentComponent = `Attendance${type.charAt(0).toUpperCase() + type.slice(1)}`;
    },
    showUsers(type) {
      this.currentComponent = `Users${type.charAt(0).toUpperCase() + type.slice(1)}`;
    },
    showAcademic(type) {
      this.currentComponent = `Academic${type.charAt(0).toUpperCase() + type.slice(1)}`;
    },
    showExam(type) {
      this.currentComponent = `Exam${type.charAt(0).toUpperCase() + type.slice(1)}`;
    },
    showAnnouncement(type) {
      this.currentComponent = `Announcement${type.charAt(0).toUpperCase() + type.slice(1)}`;
    }
  },
};
</script>

<style scoped>
section {
  min-height: 100vh;
}
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
  color: #596b7e;
}
.active2 {
  color: #206bc4;
}
</style>-->
