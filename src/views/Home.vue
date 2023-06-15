<template>
  <Navbar />
  <div class="bg-main overflow-hidden">

    <SlaiderHero />

    <div class="lg:flex justify-between items-center p-3 pt-10 lg:pt-20 lg:p-20" v-scroll="handleScroll" :class="{ 'active' : 'isActive' }" id="google_translate_element">
      <div class="container w-full lg:w-2/5">
        <h2 data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-quad" class="text-hero-text text-xl sm:text-2xl md:text-3xl font-bold mb-5">Welcome to our online school platform! We offer a complete learning model that allows you to study at your convenience!</h2>
        <p data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-quad" class="text-base md:text-lg">Our online platform provides access to a wide range of educational resources, including interactive exercises, multimedia content, and high-quality educational materials. You can officially enroll in our online school or use our platform to supplement your existing education.</p> <br>
        <p data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-quad" class="text-xl font-semibold">#1 Complete learning model</p> <br>
        <p data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-quad" class="text-base md:text-lg">We have been refining our online education system  and have developed a blended learning model that combines online and offline learning.</p>
        <br>
        <h2 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-quad" class="text-xl font-semibold">#2 Blended learning model</h2> <br>
        <p data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-quad" class="text-base md:text-lg">In addition to our online platform, we offer regular online classes and consultations with experienced teachers. This allows you to get personalized feedback, ask questions, and interact with other students in a virtual classroom setting.Our online school platform provides a convenient, flexible, and effective way to learn and achieve your educational goals. Join our community of students from all over the world and start your online learning journey today!</p>
      </div>
      <img src="../assets/img/4.jpg" alt="" class="py-10 lg:py-0 lg:w-1/2 lg:rounded-full">
    </div>

    <div class="lg:flex justify-between items-center px-3 lg:px-20">
      <img src="../assets/img/5.jpg" alt="" class="hidden lg:flex lg:w-2/5 lg:rounded-full">
      <div class="container lg:w-2/5" margin-top="20">  
        <h2 data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-quad" class="text-hero-text text-xl sm:text-2xl md:text-3xl font-bold mb-5">StudHome is a complete ecosystem for distance learning</h2>
        <p data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-quad" class="text-base md:text-lg">Our online school platform, StudHome, offers a comprehensive ecosystem for distance learning. We provide high-quality learning materials, interactive tests and simulators, and dedicated teachers who are available to answer your questions, check your homework, and provide feedback to help you succeed.</p> <br>
        <a href="#contact" class="border-2 border-main-text rounded-full px-5 py-1 md:px-12 md:py-3 text-main-text text-lg lg:text-xl font-semibold transition ease-in-out delay-75 hover:bg-main-text hover:text-white">Contact me!</a>
      
      </div>
    </div>

    <div class="bg-hero-block px-3 py-10 lg:p-16 mt-20">
      <h2 class="text-3xl lg:text-4xl text-white text-center font-bold">Why choose StudHome?</h2>
      <div class="lg:flex flex-wrap justify-evenly w-full pt-5 lg:pt-20">
        <div class="lg:w-1/4 mt-10 lg:mt-0">
          <p class="text-2xl text-white lg:text-center font-bold mb-3 lg:mb-5">Preparation for school</p>
          <p class="text-base text-white lg:text-center">We believe in making online learning accessible to everyone, which is why we offer a trial period for you to explore our platform and choose the learning format that works best for you. You can start studying today and pay for your chosen format at the end of the trial period.</p>
        </div>
        <div class="lg:w-1/4 mt-10 lg:mt-0">
          <p class="text-2xl text-white lg:text-center font-bold mb-3 lg:mb-5">Parents are always up to date</p>
          <p class="text-base text-white lg:text-center">Parents of StudHome students receive weekly reports on student
            progress and class attendance.</p>
        </div>
        <div class="lg:w-1/4 mt-10 lg:mt-0">
          <p class="text-2xl text-white lg:text-center font-bold mb-3 lg:mb-5">Convenient schedule</p>
          <p class="text-base text-white lg:text-center">With our platform, you can access your class schedule and journal with grades, ensuring that you stay on track and motivated. And, upon successful completion of the UNT, you can enroll in our school and obtain a state certificate.</p>
        </div>
        <div class="lg:w-1/3 mt-10 lg:mt-20">
          <p class="text-2xl text-white lg:text-center font-bold mb-3 lg:mb-5">Addition to standard school education</p>
          <p class="text-base text-white lg:text-center">Everything you need for a full-fledged learning process: tests,
            homework and teachers who will answer student questions, check homework and give feedback, as well as a class
            schedule and a journal with grades.</p>
        </div>
        <div class="lg:w-1/3 mt-10 lg:mt-20">
          <p class="text-2xl text-white lg:text-center font-bold mb-3 lg:mb-5">Control and transparency of the educational process
          </p>
          <p class="text-base text-white lg:text-center">Students gain access to StudHome's global network of admissions
            experts, leading educators and extracurricular activities.</p>
        </div>
      </div>
    </div>

    <div class="pt-16 pb-10">
      <h2 class="text-hero-text text-3xl font-bold text-center">What we provide to platform students?</h2>
      <div class="lg:flex justify-between items-center">
        <div class="lg:w-1/3 my-5 lg:my-16 cursor-pointer">
          <img src="../assets/img/6.jpg" alt="" class="w-10/12 mx-auto rounded-xl">
          <div class="w-10/12 mx-auto">
            <p class="text-2xl text-hero-btext font-bold text-center my-2">Loading homework</p>
            <p class="text-lg text-hero-btext text-center">Teachers upload homework to the platform, so the student can
              study anytime, anywhere</p>
          </div>
        </div>
        <div class="lg:w-1/3 my-5 lg:my-16 cursor-pointer">
          <img src="../assets/img/7.jpg" alt="" class="w-11/12 mx-auto rounded-xl">
          <div class="w-10/12 mx-auto">
            <p class="text-2xl text-hero-btext font-bold text-center my-2">Choosing a class schedule</p>
            <p class="text-lg text-hero-btext text-center">StudHome students themselves choose the time of classes and
              make their schedule</p>
          </div>
        </div>
        <div class="lg:w-1/3 my-5 lg:my-16 cursor-pointer">
          <img src="../assets/img/8.jpg" alt="" class="w-10/12 mx-auto rounded-xl">
          <div class="w-10/12 mx-auto">
            <p class="text-2xl text-hero-btext font-bold text-center my-2">Taking tests online</p>
            <p class="text-lg text-hero-btext text-center">After each completed section, teachers open access to thematic
              tests</p>
          </div>
        </div>
      </div>
    </div>

    <div class="pb-20">
      <div id="contact" class="bg-white mx-3 md:w-3/5 md:mx-auto p-7 lg:p-12 rounded-xl">
        <h2 class="text-2xl lg:text-3xl text-hero-text font-bold">Have questions? <span class="text-main-text">We will contact
            you!</span></h2>
        <p class="text-base lg:text-lg mt-5">Leave your contact details and our manager will call you back within fifteen minutes</p>
        <form target="_blank" action="https://formsubmit.co/alban.2001@mail.ru" method="POST" class="my-5">
          <input id="name" name="name" type="text" v-model="name" placeholder="Enter your name"
            class="pl-5 pr-12 py-3 mr-5 rounded-xl cursor-pointer text-xl border-none bg-gray-200" required>
          <input name="number" placeholder="Enter your number"
            class="pl-5 pr-12 py-3 mt-5 lg:mt-0 rounded-xl cursor-pointer text-xl border-none bg-gray-200" required>
          <input id="email" type="email" name="email" v-model="email" placeholder="Enter your email"
            class="lg:w-5/6 pl-5 pr-12 lg:pr-5 py-3 mt-5 rounded-xl cursor-pointer text-xl border-none bg-gray-200" required>
          <button
          type="submit" class="border-2 hover:border-main-text hover:bg-white rounded-xl transition ease-in-out delay-100 px-20 py-3 mt-5 hover:text-main-text text-xl font-semibold bg-main-text text-white">Send</button>
        </form>
      </div>
    </div>
    
  </div>
  <Foot />
</template>


<script type="text/javascript">
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
import Navbar from '../components/Navbar.vue'
import Foot from '../components/Footer.vue'
import SlaiderHero from '../components/SlaiderHero.vue'
import VueScrollTo from 'vue-scrollto';
export default ({
  components: {
    Navbar,
    Foot,
    SlaiderHero
  },
  data() {
    return {
      name: '',
      email: '',
      tel: ''
    }
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.scrollable > div');
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isActive = scrollY >= rect.top && scrollY < rect.bottom;
        this.items[index].isActive = isActive;
      });
    },
  },
  mounted() {
    const smooth = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      duration: 0.1
    })
  }
})
</script>

<style scoped>
.anime__left1 {
	transform: translateX(-120%);
	transition: all .8s ease 0.5s;
	transition-delay: 100ms;
	opacity: 0;
}

.anime__right1 {
	transform: translateX(350%);
	transition: all .8s ease 0.5s;
	transition-delay: 100ms;
	opacity: 0;
}
.active .anime__left1 {
    transform: translateX(0%);
    opacity: 1;
}
</style>
