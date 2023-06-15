<template>
  <section class="bg-main h-full">
    <NavBar />

    <div class="p-7">
      <div class="flex justify-between">
        <div>
          <p class="text-2xl font-medium">User List</p>
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
          <label>Email:</label>
          <input v-model="user.email" type="email" required class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          <label>Password:</label>
          <input v-model="user.password" type="password" required class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          <label>Role:</label>
          <input v-model="user.role" type="number" required class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          <label>Name:</label>
          <input v-model="name" type="text" required class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md">

          <button type="submit" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-20 py-2 mt-5 hover:text-main-text text-xl font-semibold bg-blue-2 text-white cursor-pointer transition ease-in-out delay-75">Submit</button>
        </form>
      </div>
      </div>

      <div v-if="profile">
        <div class="flex flex-wrap mt-10">
          <div v-for="admin in admins" :key="admin.id" class="bg-white rounded-md border shadow mr-5 mb-5">
            <img src="/img/user.png" alt="" class="w-[100px] m-auto py-5">
            <p class="text-xl text-left font-medium pb-5 px-3">Name: {{ admin.name }}</p>
            <p class="text-xl text-left font-medium pb-5 px-3">Email: {{ admin.user.email }}</p>
            <p class="text-xl text-center font-medium pb-5"></p>
            <div class="flex justify-between items-center border-t ">
              <div class="w-1/3 py-5 px-7 border-r cursor-pointer hover:bg-gray-100 hover:text-main-text">
                <font-awesome-icon class="text-lg" icon="fa-solid fa-pen-to-square" />
              </div>
              <div class="w-1/3 py-5 px-7 border-r cursor-pointer hover:bg-gray-100 hover:text-main-text" @click="$router.push({ name: 'UserDetails', params: { id: admin.user.id } })">
                <font-awesome-icon class="text-center text-lg" icon="fa-regular fa-eye" />
              </div>
              <div class="w-1/3 py-5 px-7 cursor-pointer hover:bg-gray-100 hover:text-main-text"  @click="deleteUser(admin.user.id)">
                <font-awesome-icon class="text-center text-lg" icon="fa-regular fa-trash-can" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <UsersAdminDetails v-if="details" />
    </div>
  </section>
</template>

<script>
import NavBar from '../Nav.vue'

export default {
  data() {
    return {
      admins: [],
      form: false,
      profile: true,
      details: false,

      name: '',
      user: {
        email: '',
        password: '',
        role: 1,
      },
      joinDate: "2021-05-13T00:00:00.000+00:00"
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
          const adminBody = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              user: { id: data },
              name: this.name,
            })
          }

          fetch('http://91.201.214.131:8080/admins', adminBody)
          .then(() => {
            alert('Admin successfully established!');
            this.getAdmins();
          })
          .catch(error => {
            console.error(error);
            alert('Error!' + error.message)
          });
        });
    },
    getAdmins() {
      fetch('http://91.201.214.131:8080/admins')
        .then(response => response.json())
        .then(data => {
          this.admins = data; // сохраняем полученные данные в свойство компонента
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
      this.profile = false,
      this.details - false
    },
    closeForm() {
      this.form = false,
      this.profile = true,
      this.details = false
    },
    showDetails() {
      this.form = false,
      this.profile = false,
      this.details = true
    }
  },
  mounted() {
    this.getAdmins(); // вызываем метод для получения данных при монтировании компонента
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
          <p class="text-2xl font-medium">User List</p>
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
          <form @submit.prevent="createAdmin" method="post" class="my-10 w-3/5 mx-auto">
            <label for="name" class="font-semibold">Name</label>
            <input type="text" v-model="name" placeholder="Name" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md" />
            <label for="email" class="font-semibold">Email</label>
            <input type="email" v-model="user.email" placeholder="Email" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md" />
            <label for="password" class="font-semibold">Password</label>
            <input type="password" v-model="user.password" placeholder="Password" class="w-full border py-2 px-3 mt-2 mb-5 border-gray-300 rounded-md"   />
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
</script> -->
