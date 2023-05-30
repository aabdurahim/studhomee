<template>
  <main class="login bg-gray-100 h-full px-3 lg:px-0">
    <section class="form pt-20 py-36">
      <div class="lg:w-1/3 mx-auto">
        <div class="w-1/2 flex mx-auto">
          <h2 class="text-3xl lg:text-4xl font-semibold text-center my-5 text-hero-text">StudHome</h2>
          <img src="/img/logo1.png" alt="" class="w-16 lg:w-20">
        </div>
        <div class="bg-white py-7 lg:py-10 px-10 rounded-xl border border-gray-200">
          <h2 class="text-center text-xl font-semibold mb-5 lg:mb-10">Login to your account</h2>
          <form class="login" @submit.prevent="loginUser">
            <label for="email" class="font-semibold">Email address</label>
            <input type="text" placeholder="Enter e-mail address" v-model="email" class="py-3 w-11/12 pl-5 mb-3 lg:mb-5 bg-gray-100 rounded-lg" />
            <label for="password" class="font-semibold">Password</label>
            <input type="password" placeholder="Enter password" v-model="password" class="py-3 w-11/12 pl-5 bg-gray-100 rounded-lg" />
            <div class="w-full text-center">
              <input type="submit" value="Log in" class="btn border-2 hover:border-main-text hover:bg-white rounded-lg px-10 py-1 lg:px-20 lg:py-2 mt-5 hover:text-main-text text-xl font-semibold bg-main-text text-white cursor-pointer transition ease-in-out delay-75">
            </div>
            <router-link to="/register"><h2 class="text-center mt-5 ">Don't have an account? <span class="text-main-text hover:underline cursor-pointer">Register</span> now</h2></router-link>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await fetch(`http://91.201.214.131:8080/auth?email=${this.email}&password=${this.password}`, {
          method: 'GET',
          redirect: 'follow'
        });
        const result = await response.json();
        console.log(result);
        for (let key in result ) {
          if (key === 'admin') {
            this.$router.push('/admin');
          } 
          else if (key === 'student') {
            this.$router.push({ path: '/account/' + result[key]});
            console.log('/account/' + result[key])
          } 
          else if (key === 'teacher') {
            this.$router.push({ path: '/teacher/' + result[key]});
            console.log('/teacher/' + result[key])
          }
        }
      } 
   catch (error) {
        console.log('error', error);
      }
    }
  }
};
</script>

<style scoped>

.btn {
  transition: 0.3s;
}

</style>