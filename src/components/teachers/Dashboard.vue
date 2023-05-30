<template>
  <section class="bg-main h-full">
    <Navv />
    <div class="p-7">

      <div class="pb-7 flex">
        <h2 class="text-xl font-semibold">Dashboard</h2>
      </div>
      <div class="flex justify-between">
        <div class="flex bg-white rounded-md p-5 w-1/5">
          <font-awesome-icon icon="fa-solid fa-divide" class="text-2xl text-white bg-red-1 p-4 rounded-md" />
          <div class="ml-3">
            <p class="text-xl">Attendance</p>
            <p class="text-xl font-semibold">204</p>
          </div>
        </div>
        <div class="flex bg-white rounded-md p-5 w-1/5">
          <font-awesome-icon icon="fa-solid fa-pen-to-square" class="text-2xl text-white bg-blue-1 p-4 rounded-md" />
          <div class="ml-3">
            <p class="text-xl">Exams</p>
            <p class="text-xl font-semibold">0</p>
          </div>
        </div>        
        <div class="flex bg-white rounded-md p-5 w-1/5">
          <font-awesome-icon icon="fa-regular fa-bell" class="text-2xl text-white bg-blue-2 p-4 rounded-md" />
          <div class="ml-3">
            <p class="text-xl">{{ teacher.department ? teacher.department.name : '' }}</p>
            <p class="text-xl font-semibold"></p>
          </div>
        </div>
        <div class="flex bg-white rounded-md p-5 w-1/5">
          <font-awesome-icon icon="fa-solid fa-calendar-day" class="text-2xl text-white bg-orange-1 p-4 rounded-md" />
          <div class="ml-3">
            <p class="text-xl">Events</p>
            <p class="text-xl font-semibold">1</p>
          </div>
        </div>
      </div>

      <div class="flex justify-evenly">
        <div class="user-item bg-white rounded-md my-5">
        <div class="w-full">
          <p class="text-lg font-medium p-3">About me</p>
          <hr>
          <img src="/img/user.png" alt="" class="rounded-full w-24 mx-auto my-5">
          <div class="w-2/3 mx-auto">
            <div class="flex justify-between py-2 border-b">
              <p class="font-semibold">First Name</p>
              <p>{{ teacher.name }}</p>
             </div>
             <hr>
             <div class="flex justify-between py-2 border-b">
              <p class="font-semibold">Last Name</p>
              <p>Teacher</p>
             </div>
             <hr>
             <div class="flex justify-between py-2 border-b">
              <p class="font-semibold">Email</p>
              <p>{{ teacher.user ? teacher.user.email : '' }}</p>
             </div>
             <hr>
             <div class="flex justify-between py-2 border-b">
              <p class="font-semibold">Class</p>
              <p>One</p>
             </div>
             <hr>
             <div class="flex justify-between py-2 border-b">
              <p class="font-semibold">Department</p>
              <p>{{ teacher.department ? teacher.department.name : '' }}</p>
             </div>
             <hr>
             <div class="flex justify-between py-2 border-b">
              <p class="font-semibold">Admitted	</p>
              <p>01.05.2023</p>
             </div>
             <hr>
             <div class="flex justify-between py-2 border-b">
              <p class="font-semibold">Gender</p>
              <p>{{ teacher.gender ? teacher.gender.name : '' }}</p>
             </div>
             <div class="flex justify-between py-2 border-b">
              <p class="font-semibold">Permanent Address</p>
              <p>{{ teacher.permanentAddress }}</p>
             </div>
             <hr>
          </div>
        </div>
      </div>

      <div class="user-item bg-white rounded-md my-5">
        <p class="text-lg font-medium p-3">Upcoming Exams</p>
        <hr>
        <div class="flex p-3 border-b justify-between items-center border-gray-300" v-for="exam in exams" :key="exam.index">
          <div>
            <p class="text-lg text-main-text font-medium">{{ exam.name }}</p>
            <p class="text-sm text-gray-700">{{ exam.date }}</p>
          </div>
          <p>{{ exam.time }}</p>
        </div>
      </div>
      </div>

    </div>
  </section>
</template>

<script>
import Navv from './Navbar.vue'
import axios from 'axios'

export default {
  props: ['id'],
  components: {
    Navv
  },
  data() {
    return {
      exams: [{
        name: 'First Term',
        date: '01 Apr, 2023 - 25 Apr, 2023',
        time: '10:00'
      },
      {
        name: 'Second Term',
        date: '01 Apr, 2023 - 25 Apr, 2023',
        time: '10:00'
      },
      {
        name: 'Maths',
        date: '01 Apr, 2023 - 25 Apr, 2023',
        time: '10:00'
      },
      {
        name: 'Biology',
        date: '01 Apr, 2023 - 25 Apr, 2023',
        time: '10:00'
      },
      {
        name: 'English',
        date: '01 Apr, 2023 - 25 Apr, 2023',
        time: '10:00'
      },
      {
        name: 'Art',
        date: '01 Apr, 2023 - 25 Apr, 2023',
        time: '10:00'
      },
      {
        name: 'Chemistry',
        date: '01 Apr, 2023 - 25 Apr, 2023',
        time: '10:00'
      },
      {
        name: 'Physics',
        date: '01 Apr, 2023 - 25 Apr, 2023',
        time: '10:00'
      },
      {
        name: 'Kazakh',
        date: '01 Apr, 2023 - 25 Apr, 2023',
        time: '10:00'
      },
    ],
    teacher: {},
    examSchedulesCount: 0,
    subjectsCount: 0
    }
  }, 
  created() {
    this.teacherId = this.$route.params.id;
    this.getTeacherData();
    // this.getExamSchedulesCount();
    // this.getSubjectsCount();
  },
  methods: {
    async getTeacherData() {
      try {
        const response = await fetch(`http://91.201.214.131:8080/teachers/${this.teacherId}`);
        const result = await response.json();
        this.teacher = result;
        console.log(this.teacher);
        await this.getExamSchedulesCount();
        await this.getSubjectsCount();
      } catch (error) {
        console.log('error', error);
      }
      axios.get()
    },
    // async getExamSchedulesCount() {
    //   try {
    //     const response = await axios.get('http://91.201.214.131:8080/exam_schedules/count', {
    //       params: {
    //         s: this.student.section.id
    //       }
    //     });
    //     console.log(response.data); // Количество экзаменов
    //   } catch (error) {
    //     console.log('error', error);
    //   }
    // },
    // async getSubjectsCount() {
    //   try {
    //     const response = await axios.get('http://91.201.214.131:8080/subjects/count', {
    //       params: {
    //         s: this.student.section.id
    //       }
    //     });
    //     console.log(response.data); // Количество экзаменов
    //   } catch (error) {
    //     console.log('error', error);
    //   }
    // },
  },
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