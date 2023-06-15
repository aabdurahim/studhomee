<template>
  <Navbar class="lg:mx-0 mx-3" />
  <hr class="bg-hero-text">
  <section class="lg:mx-0 mx-3 overflow-x-hidden">
    <div class="lg:flex justify-center my-5 lg:my-24 w-11/12 mx-auto">
      <div class="lg:w-2/3">
        <h2 class="text-2xl lg:text-4xl font-semibold">Get in Touch</h2>
        <hr class="w-1/6 bg-hero-text my-2">
        <p class="text-sm text-hero-text lg:w-2/3 my-5 lg:my-7">You can contact us any way that is convenient for you. We are available 24/7 via fax or email. You can also use a quick contact form below or visit our office personally. We would be happy to answer your questions.</p>
        <form target="_blank" action="https://formsubmit.co/alban.2001@mail.ru" method="POST" class="block">
          <div class="lg:flex">
            <div>
              <label for="first-name" class="text-gray-700">First Name</label>
              <input type="text" name="first name" class="mb-3 mr-5">
            </div>
            <div>
              <label for="last-name" class="text-gray-700">Last Name</label> 
              <input type="text" name="last name" class="mb-3">
            </div>
          </div>
          <div class="lg:flex">
            <div>
              <label for="email" class="text-gray-700">E-mail</label>
              <input type="text" name="email" class="mb-3 mr-5">
            </div>
            <div>
              <label for="phone" class="text-gray-700">Phone</label> 
              <input type="text" name="phone" class="mb-3">
            </div>
          </div>
          <label for="message">Message</label>
          <textarea name="message" id="" cols="30" rows="10"></textarea> <br>
          <button type="submit" class="text-white bg-hero-block px-10 py-3 rounded-lg mt-5 hover:bg-main-text font-semibold">Send Message</button>
        </form>
      </div>

      <div class="lg:w-1/4 my-10 lg:my-0">
        <div class="mb-12">
          <h4 class="text-xl font-semibold">Socials</h4>
          <hr class="w-full bg-hero-text my-2">
          <div class="flex mt-5">
            <a href="https://api.whatsapp.com/send?phone=77081512439"><font-awesome-icon icon="fa-brands fa-whatsapp" class="text-3xl text-gray-500 hover:text-hero-block mr-2 cursor-pointer" /></a>
            <a href="https://t.me/@Kind_er_surprise"><font-awesome-icon icon="fa-brands fa-telegram" class="text-3xl text-gray-500 hover:text-hero-block mr-2 cursor-pointer" /></a>
            <font-awesome-icon icon="fa-brands fa-instagram" class="text-3xl text-gray-500 hover:text-hero-block mr-2 cursor-pointer" />
            <font-awesome-icon icon="fa-brands fa-twitter" class="text-3xl text-gray-500 hover:text-hero-block mr-2 cursor-pointer" />
          </div>
        </div>

        <div class="mb-12">
          <h4 class="text-xl font-semibold">Phones</h4>
          <hr class="w-full bg-hero-text my-2">
          <div class="flex mt-5 items-center">
            <font-awesome-icon icon="fa-solid fa-phone" class="text-xl text-hero-block mr-2 cursor-pointer" />
            <p class="cursor-pointer text-gray-500 hover:text-hero-block">+7 (707) 777 77 77 </p>
          </div>
          <div class="flex mt-5 items-center">
            <font-awesome-icon icon="fa-solid fa-phone" class="text-xl text-hero-block mr-2 cursor-pointer" />
            <p class="cursor-pointer text-gray-500 hover:text-hero-block">+7 (707) 777 77 77 </p>
          </div>
        </div>

        <div class="mb-12">
          <h4 class="text-xl font-semibold">E-mail</h4>
          <hr class="w-full bg-hero-text my-2">
          <div class="flex mt-5 items-center">
            <font-awesome-icon icon="fa-regular fa-envelope" class="text-xl text-hero-block mr-2 cursor-pointer" />
            <p class="cursor-pointer text-gray-500 hover:text-hero-block">studhome.info@gmail.com </p>
          </div>
        </div>

        <div class="mb-12">
          <h4 class="text-xl font-semibold">Address</h4>
          <hr class="w-full bg-hero-text my-2">
          <div class="flex mt-5 items-center">
            <font-awesome-icon icon="fa-solid fa-location-dot" class="text-lg text-hero-block mr-2 cursor-pointer" />
            <p class="cursor-pointer text-gray-500 hover:text-hero-block">Abay 254/7</p>
          </div>
        </div>

        <div>
          <h4 class="text-xl font-semibold">Opening Hours</h4>
          <hr class="w-full bg-hero-text my-2">
          <div class="flex mt-5 items-start">
            <font-awesome-icon icon="fa-solid fa-calendar-day" class="text-lg text-hero-block mr-2 cursor-pointer" />
            <p class="cursor-pointer text-gray-500 hover:text-hero-block">Mon-Fri: 8:00am-8:00pm <br> Sat: 8:00am-3:00pm <br> Sun: Closed</p>
          </div>
        </div>
      </div>
    </div>  
  </section>
  <Foot />
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Foot from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    Foot
  }
}
</script>

<style scoped>
h2 {
  font-family: 'SourceSansPro', sans-serif;
}
hr {
  height: 2px;
}
label {
  font-size: 13px;
}
input {
  border: 1px solid gray;
  padding: 10px 20px;
  border-radius: 5px;
}
textarea {
  width: 50%;
  border: 1px solid gray;
  padding: 10px 20px;
  border-radius: 5px;
}
input, label{
    display:block;
}
</style>
