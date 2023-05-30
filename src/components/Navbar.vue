<template>
  <div>
    <div class="hidden lg:flex justify-between py-3 px-5 w-full bg-hero-text">
      <div class="flex">
        <div class="flex items-center mx-5">
          <font-awesome-icon icon="fa-solid fa-phone" class="text-lg text-hero-block mr-2" />
          <p class="text-sm  text-gray-300">+7 (707) 777 7777</p>
        </div>
        <div class="flex items-center mr-5">
          <font-awesome-icon icon="fa-solid fa-location-dot" class="text-lg text-hero-block mr-2" />
          <p class="text-sm  text-gray-300">Abay 254/7</p>
        </div>
        <div class="flex items-center">
          <font-awesome-icon icon="fa-solid fa-envelope-open" class="text-lg text-hero-block mr-2" />
          <p class="text-sm  text-gray-300">studhome.info@gmail.com</p>
        </div>
      </div>
        <div>
        <font-awesome-icon icon="fa-brands fa-instagram" class="text-xl text-gray-300 hover:text-hero-block mr-2 cursor-pointer" />
        <font-awesome-icon icon="fa-brands fa-telegram" class="text-xl text-gray-300 hover:text-hero-block mr-2 cursor-pointer" />
        <font-awesome-icon icon="fa-brands fa-twitter" class="text-xl text-gray-300 hover:text-hero-block mr-2 cursor-pointer" />
        <font-awesome-icon icon="fa-brands fa-whatsapp" class="text-xl text-gray-300 hover:text-hero-block mr-2 cursor-pointer" />
        <font-awesome-icon icon="fa-solid fa-envelope" />
      </div>
    </div>
    <div class="main hidden lg:flex justify-between items-center w-full px-20 py-3">
      <a href="" class=""><img src="../assets/img/logo.png" alt="" class="w-36"></a>
      <div class="flex justify-between mt-5">
        <router-link to="/"  class="pr-10 text-xl font-semibold hover:text-main-text"  active-class="active-link">Home</router-link>
        <div class="dropdown">
          <router-link to="/about" class="dropbtn pr-10 text-xl font-semibold hover:text-main-text"  active-class="active-link">About us <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-sm" /></router-link>
          <div class="dropdown-content">
          <a href="#best">Education</a>
          <a href="#manage">Management</a>
          <a href="#team">Team</a>
          </div>
        </div>
        <router-link to="/news" class="pr-10 text-xl font-semibold hover:text-main-text"  active-class="active-link">News</router-link>
        <router-link to="/contacts" class="pr-10 text-xl font-semibold hover:text-main-text"  active-class="active-link">Contacts</router-link>
        <router-link to="/faqs" class="pr-16 text-xl font-semibold hover:text-main-text"  active-class="active-link">FAQs</router-link>
        <router-link to="/login" class="sub border border-main-text rounded-full font-semibold text-main-text px-10 py-1">Sign in</router-link>
      </div>
    </div>


    <div class="m-3 mobile-menu hide lg:hidden">
      <div class="flex justify-between items-center">
        <a href="" class=""><img src="../assets/img/logo.png" alt="" class="w-28"></a>
        <div>
          <font-awesome-icon @click="clickMenu" class="text-3xl text-hero-block" icon="fa-solid fa-bars" />
          <div v-if="showMenu" class="w-1/2 px-5 pb-3 bg-white border absolute z-50 right-0 top-14 rounded-md">
            <router-link to="/"  class="block text-xl font-semibold mt-4 hover:text-main-text"  active-class="active-link">Home</router-link>
          <div class="dropdown">
            <router-link to="/about" class="dropbtn text-xl font-semibold hover:text-main-text"  active-class="active-link">About us <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-sm mt-4" /></router-link>
              <div class="dropdown-content">
                <a href="#best">Education</a>
                <a href="#manage">Management</a>
                <a href="#team">Team</a>
              </div>
            </div>
            <router-link to="/news" class="block text-xl font-semibold mt-4 hover:text-main-text"  active-class="active-link">News</router-link>
            <router-link to="/contacts" class="block text-xl font-semibold mt-4 hover:text-main-text"  active-class="active-link">Contacts</router-link>
            <router-link to="/faqs" class="block text-xl font-semibold mt-4 hover:text-main-text"  active-class="active-link">FAQs</router-link>
            <router-link to="/login" class="block text-xl font-semibold mt-4 hover:text-main-text"  active-class="active-link">Sign in</router-link>
          </div>
        </div>
      </div>
    </div>
    <hr>
    
  </div>
</template>

<script>
export default {
  data() {
  return {
    activeItem: null,
    showMenu: false
  }
},
methods: {
  clickMenu() {
    this.showMenu = !this.showMenu;
  }
}
}
</script>

<style scoped>
.active-link {
  color: #4c85d3;/* здесь указываем желаемый цвет */
}
.dropdown {
    position: relative;
    display: inline-block;
    z-index: 10;
}
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #fefefe;
    min-width: 200px;
    margin-top: 5px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}
.dropdown-content a {
    color: #00466d;
    padding: 12px 16px;
    border-bottom: 1px solid #00466d;
    text-decoration: none;
    display: block;
}
.dropdown-content a:hover {
  background: #00466d;
  color: #fff;
  transition: 0.3s;
}
.dropdown:hover .dropdown-content {display: block;}
</style>