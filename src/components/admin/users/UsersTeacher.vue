<template>
  <section class="bg-main h-full">
    <NavBar />

    <div class="p-7">
      <div class="flex justify-between">
        <div>
          <p class="text-2xl font-medium">Teacher List</p>
          <span class="font-medium text-gray-500">Admin Setting</span>
        </div>
        <button @click="showForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-7">Create</button>
      </div>

      <div v-if="form">
        <div class="bg-white rounded-md my-10 pb-5">
        <div class="flex justify-between items-center p-3 border-b">
            <p class="text-lg font-medium">Add User</p>
            <button @click="closeForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-5">Back</button>
          </div>
        <form @submit.prevent="handleSubmit" class="my-10 w-3/5 mx-auto">

          <label>Name:</label>
          <input v-model="name" type="text" required class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          <label>Email:</label>
          <input v-model="user.email" type="email" required class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          <label>Password:</label>
          <input v-model="user.password" type="password" required class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          <label>Role:</label>
          <input v-model="user.role" type="number" required class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          <label>Gender:</label>
          <select v-model="gender" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>

          <label>Department:</label>
          <input v-model="department" type="text" required class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          <label>Phone</label>
          <input v-model="phone" type="number" required class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          <label>Permanent address</label>
          <input v-model="permanentAddress" type="text" required class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          <button type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-20 py-2 mt-5 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Submit</button>
        </form>
      </div>
      </div>

      <div v-if="profile">
        <div class="flex flex-wrap mt-10">
          <div v-for="teacher in teachers" :key="teacher.id" class="bg-white rounded-md border shadow mr-5 mb-5">
            <img src="/img/user.png" alt="" class="w-[100px] m-auto py-5">
            <p class="text-xl text-left font-medium pb-5 px-3">Name: {{ teacher.name }}</p>
            <!-- <p class="text-xl text-left font-medium pb-5 px-3">Section: {{ teacher.department.name }}</p> -->
            <p class="text-xl text-left font-medium pb-5 px-3">Email: {{ teacher.user.email }}</p>
            <div class="flex justify-between items-center border-t ">
              <div class="w-1/3 py-5 px-7 border-r cursor-pointer hover:bg-gray-100 hover:text-main-text">
                <font-awesome-icon class="text-lg" icon="fa-solid fa-pen-to-square" />
              </div>
              <div class="w-1/3 py-5 px-7 border-r cursor-pointer hover:bg-gray-100 hover:text-main-text">
                <font-awesome-icon class="text-center text-lg" icon="fa-regular fa-eye" />
              </div>
              <div class="w-1/3 py-5 px-7 cursor-pointer hover:bg-gray-100 hover:text-main-text"  @click="deleteUser(teacher.user.id)">
                <font-awesome-icon class="text-center text-lg" icon="fa-regular fa-trash-can" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from '../Nav.vue'

export default {
  data() {
    return {
      teachers: [],
      form: false,
      profile: true,

      user: {
        email: '',
        password: '',
        role: 2,
      },
      gender: '',
      department: '',
      phone: '',
      name: '',
      permanentAddress: ''
    }
  },
  methods: {
    handleSubmit() {
      const userBody = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: this.user.email,
          password: this.user.password,
          role: { id: this.user.role }
        })
      }

      fetch('http://91.201.214.131:8080/users', userBody)
        .then(res => res.json())
        .then(data => {
          const teacherBody = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              gender: { id: this.gender },
              user: { id: data },
              departments: this.department,
              phone: this.phone,
              name: this.name,
              permanentAddress: this.permanentAddress,
            })
          }

          fetch('http://91.201.214.131:8080/teachers', teacherBody)
          .then(() => {
            alert('Teacher successfully established!');
            this.getTeachers();
          })
          .catch(error => {
            console.error(error);
            alert('Error!' + error.message)
          });
        });
    },
    getTeachers() {
      fetch('http://91.201.214.131:8080/teachers')
        .then(response => response.json())
        .then(data => {
          this.teachers = data; // сохраняем полученные данные в свойство компонента
        });
    },
    deleteUser(id) {
      const confirmed = window.confirm('Are you sure you want to delete this user?');
      if (confirmed) {
        fetch(`http://91.201.214.131:8080/users/${id}/delete`, {
          method: 'POST',
        })
      }
      this.$router.go()
    },
    showForm() {
      this.form = true,
      this.profile = false
    },
    closeForm() {
      this.form = false,
      this.profile = true
    }
  },
  mounted() {
    this.getTeachers(); // вызываем метод для получения данных при монтировании компонента
  },
  components: {
    NavBar
  }
};
</script>






<!-- <template>
  <section class="bg-main">
    <NavBar />
    
    <div class="p-7">
      <div class="flex justify-between">
        <div>
          <p class="text-2xl font-medium">Teacher List</p>
          <span class="font-medium text-gray-500">Admin Setting</span>
        </div>
        <button @click="showForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-7">Create</button>
      </div>

      <div v-if="form">
        <div class="bg-white rounded-md my-10 pb-5">
          <div class="flex justify-between items-center p-3 border-b">
            <p class="text-lg font-medium">Add User</p>
            <button @click="closeForm()" class="text-lg font-semibold border-2 hover:border-main-text hover:bg-white hover:text-main-text text-white bg-blue-2 rounded-lg px-5">Back</button>
          </div>
          <form @submit.prevent="createAdmin" method="post" class="my-10 px-5 w-1/2 mx-auto flex flex-wrap">
            <label for="name" class="font-semibold mr-3">Name
              <input type="text" v-model="name" placeholder="Name" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md" />
            </label>
            <label for="email" class="font-semibold">Email
              <input type="email" v-model="user.email" placeholder="Email" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md" />
            </label>
            <label for="password" class="font-semibold mr-3">Password
              <input type="password" v-model="user.password" placeholder="Enter Password" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md"   />
            </label>
            <label for="phone" class="font-semibold">Phone
              <input type="number" v-model="user.password" placeholder="Choose a Parent" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md"   />
            </label>
            <label for="class" class="font-semibold mr-3">Department
              <select class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md" name="class" placeholder="Select Class" id="">
                <option value="1">Maths</option>
                <option value="2">Science</option>
                <option value="3">IT</option>
                <option value="4">Chemistry</option>
                <option value="5">History</option>
              </select>
            </label>
            <label for="date" class="font-semibold">Joining Date
              <input type="date" v-model="user.password" placeholder="Select Date" class="w-full border py-1 px-3 mt-2 mb-5 border-gray-300 rounded-md"   />
            </label>
            <label for="date" class="font-semibold">Joining Letter
              <input type="file" placeholder="Select Date" class="w-full border py-1 px-3 mt-2 mb-5 border-gray-300 rounded-md"   />
            </label>
            <label for="date" class="font-semibold">Resume
              <input type="file" placeholder="Select Date" class="w-full border py-1 px-3 mt-2 mb-5 border-gray-300 rounded-md"   />
            </label>
            <label for="date" class="font-semibold w-full">Gender
              <div class="w-1/5 flex justify-between">
                <div class="flex pr-3">
                  <input type="radio" name="gender" value="male" class="mr-3" /> Male 
                </div>
                <div class="flex">
                  <input type="radio" name="gender" value="female" class="mr-3" /> Female
                </div>
              </div>
            </label>
            <div class="w-full text-center">
              <input type="submit" value="Save" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-20 py-2 mt-5 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">
            </div>
          </form>
        </div>
      </div>

      <div v-if="profile">
        <div class="flex flex-wrap mt-10">
          <div v-for="admin in admins" :key="admin" class="bg-white rounded-md border shadow mr-5">
            <img src="/img/user.png" alt="" class="w-2/5 m-auto py-5">
            <p class="text-xl text-center font-medium pb-5">{{ admin.name }}</p>
            <div class="flex justify-between items-center border-t ">
              <div class="w-1/3 py-5 px-7 border-r cursor-pointer hover:bg-gray-100 hover:text-main-text">
                <font-awesome-icon class="text-lg" icon="fa-solid fa-pen-to-square" />
              </div>
              <div class="w-1/3 py-5 px-7 border-r cursor-pointer hover:bg-gray-100 hover:text-main-text">
                <font-awesome-icon class="text-center text-lg" icon="fa-regular fa-eye" />
              </div>
              <div class="w-1/3 py-5 px-7 cursor-pointer hover:bg-gray-100 hover:text-main-text">
                <font-awesome-icon class="text-center text-lg" icon="fa-regular fa-trash-can" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from './Nav.vue'
import axios from 'axios';

export default {
  data() {
    return {
      admins: [{
        name: 'Kuku'
      },
      {
        name: 'Bla bla'
      } 
    ],
      form: false,
      profile: true,
      name: '',
      userId: '',
      user: { 
        email: '',
        password: '',
        role: {
          id: 1,
        },
      joinDate: "2021-04-15T00:00:00.000+00:00"
    }
  }
},
  methods: {
   async createAdmin() {
     await axios.post("http://91.201.214.131:8080/users", { email: this.user.email, password: this.user.password,  role: { id:1 } }).then(res => {axios.post('http://91.201.214.131:8080/admins', {
        name: this.name,
        user: { id: res
        },
        joinDate: this.joinDate
      })
    })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
  async mounted() {
    this.users = (await axios.get('http://91.201.214.131:8080/admins')).data
  },
  components: {
    NavBar
  },
  methods: {
    showForm() {
      this.form = true,
      this.profile = false
    },
    closeForm() {
      this.form = false,
      this.profile = true
    }
  }
}
</script>

<style scoped>
input, label{
    display:block;
}

</style> -->
