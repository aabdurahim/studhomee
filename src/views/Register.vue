<template>
  <main class="login bg-gray-100 h-full px-3 lg:px-0">
    <section class="form pt-20">
      <div class="lg:w-1/3 m-auto">
        <div class="w-1/2 flex mx-auto">
          <h2 class="text-3xl lg:text-4xl font-semibold text-center my-5 text-hero-text">StudHome</h2>
          <img src="/img/logo1.png" alt="" class="w-16 lg:w-20">
        </div>
        <div class="bg-white py-7 lg:py-10 px-10 rounded-xl border border-gray-200">
          <h2 class="text-center text-xl font-semibold mb-5 lg:mb-10">Create an account</h2>
          <form class="login" @submit.prevent="registerUser">
            <label for="name" class="font-semibold">Name</label> <br>
            <input type="text" placeholder="Enter your name" v-model="name" class="py-3 w-11/12 pl-5 mb-3 lg:mb-5 bg-gray-100 rounded-lg" /> <br>
            <label for="email" class="font-semibold">Email address</label>
            <input type="email" v-model="email" placeholder="Enter e-mail address" class="py-3 w-11/12 pl-5 mb-5 bg-gray-100 rounded-lg" />
            <label for="password" class="font-semibold">Password</label>
            <input type="password" v-model="password" placeholder="Enter password" class="py-3 w-11/12 pl-5 bg-gray-100 rounded-lg" />
            <div>
              <label>
                <input type="radio" v-model="role" :value="{ id: 3 }">
                Student
              </label>
              <label>
                <input type="radio" v-model="role" :value="{ id: 2 }">
                Teacher
              </label>
            </div>
            <div class="w-full text-center">
              <input type="submit" value="Register" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-10 py-1 lg:px-20 lg:py-2 mt-5 hover:text-main-text text-xl font-semibold bg-main-text text-white cursor-pointer transition ease-in-out delay-75">
            </div>
            <router-link to="/login"><h2 class="text-center mt-5 ">Have an account? <span class="text-main-text hover:underline cursor-pointer">Log in</span> now</h2></router-link>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      role: {
       id: ''
  }
    };
  },
  methods: {
   registerUser() {
    fetch('http://91.201.214.131:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.email,
        password: this.password,
        role: { id: this.role.id}
      })
    })
        .then(response => response.json())
        .then(data => {
          if(this.role.id === 3) {
            
              const studentBody = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  user: { id: data },
                  name: this.name
                })
              }

              fetch('http://91.201.214.131:8080/students', studentBody);
          }
          else if(this.role.id === 2) {
              const teacherBody = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  user: { id: data },
                  name: this.name,
                })
              }

              fetch('http://91.201.214.131:8080/teachers', teacherBody);
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
  async mounted() {
    this.users = (await axios.get('http://91.201.214.131:8080/users')).data
  }
};
</script>

<style scoped>
main {
  min-height: 100vh;
}
.btn {
  transition: 0.3s;
}

</style>

<!-- <template>
  <div>
    <h2>Регистрация</h2>
    <form @submit.prevent="registerUser">
      <label>
        Email:
        <input type="email" v-model="email" required>
      </label>
      <label>
        Пароль:
        <input type="password" v-model="password" required>
      </label>
      <div>
        <label>
          <input type="radio" v-model="role" :value="{ id: 3 }">
          Студент
        </label>
        <label>
          <input type="radio" v-model="role" :value="{ id: 2 }">
          Учитель
        </label>
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      role: {
       id: ''
  }
    };
  },
  methods: {
   registerUser() {
      axios.post('http://91.201.214.131:8080/users', {
        email: this.email,
        password: this.password,
        role: { id: this.role.id}
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
    this.users = (await axios.get('http://91.201.214.131:8080/users')).data
  }
};
</script> -->
