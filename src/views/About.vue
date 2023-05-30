<template>
  <Navbar class="mx-3 lg:mx-0" />
  <div class="bg px-3 lg:px-0">
    <div class="relative">
      <video autoplay muted loop src="/img/video.webm"></video>
      <div class="absolute video">
        <h2 class="text-2xl lg:text-7xl 2xl:ml-20 font-bold text-white uppercase animate__animated animate__fadeInDown slick-active">Your classroom</h2>
        <p class="w-2/3 mt-10 text-center text-white hidden lg:flex animate__animated animate__fadeInDown slick-active">Any successful career starts with good education. Together with us you will have deeper
          knowledge of the subjects that will be especially useful for you when climbing the career
          ladder.</p>
        <div class="hidden lg:flex w-2/3 animate__animated animate__fadeInUp slick-active">
          <h3 class="discover w-1/3 text-2xl my-16 mx-auto text-white text-center px-5 py-5 border border-white cursor-pointer" v-on:click="fadeMe">Discover more</h3>
        </div>
        <transition name="fade">
          <div v-if="show" class="w-3/5 ml-10 flex justify-between link-box">
            <a class="text-lg font-semibold hover:text-gray-200 px-5 py-3 text-gray-200 border border-gray-200 discover cursor-pointer" href="#best">Best Education</a>
            <a class="text-lg font-semibold hover:text-gray-200 px-5 py-3 text-gray-200 border border-gray-200 discover cursor-pointer" href="#manage">Our team</a>
            <a class="text-lg font-semibold hover:text-gray-200 px-5 py-3 text-gray-200 border border-gray-200 discover cursor-pointer" href="#team">Top Management</a>
          </div>
        </transition>
      </div>
    </div>

    <div class="lg:w-11/12 mx-auto lg:flex items-center mt-5 lg:mt-20" id="best">
      <div class="lg:w-1/2 mx-5 text-left">
        <h4 class="text-lg lg:text-xl text-center lg:text-left text-main-text font-semibold mb-5">Learn more about us </h4>
        <h2 class="title-text text-2xl lg:text-4xl text-hero-text font-semibold mb-5">Best education for your kids</h2>
        <p class="lg:w-11/12 text-gray-600 text-md mb-5">An online degree can be a great choice for students who want to continue their education and have either an associate degree or no postsecondary education.</p>
        <div class="lg:w-3/4">
            <div class="flex items-center">
              <font-awesome-icon icon="fa-solid fa-check" class="text-main-text text-lg mr-3 py-5" />
              <p class="text-gray-600 text-md">Take classes virtually, allowing them to learn anywhere.</p>
            </div>
            <div class="flex items-center">
              <font-awesome-icon icon="fa-solid fa-check" class="text-main-text text-lg mr-3 py-5" />
              <p class="text-gray-600 text-md">Pursue the best program for their field of study, even if the school is far from home.</p>
            </div>
            <div class="flex items-center">
              <font-awesome-icon icon="fa-solid fa-check" class="text-main-text text-lg mr-3 py-5" />
              <p class="text-gray-600 text-md">Plan around busy schedules to complete their coursework.</p>
            </div>
        </div>
      </div>
      <div class="relative mt-5 lg:mt-0">
        <img src="../assets/img/12.jpg" class="w-4/5 ml-10 lg:w-3/4 rounded-lg lg:ml-16 animate__animated animate__fadeInLeft" alt="">
        <div class="hidden lg:block photo-main absolute top-0 left-0 right-0 bottom-0 w-3/4 rounded-lg ml-16 cursor-pointer">
          <div class="photo-about">
            <h2 class="text-3xl text-center transition duration-700 ease-in-out">Certification and documents on education of the state standard.</h2>
            <h3>Learn more &#8594;</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 lg:mt-20">
      <h2 class="text-2xl lg:text-3xl text-center lg:text-left font-semibold mx-10 text-hero-block">Choose an option for your purposes:</h2>
    <div class="w-full lg:flex justify-between mt-10 px-5">
      <div v-for="(item, index) in items" :key="index" class="item-block lg:w-1/5 mx-2">
        <div>
            <h2 class="text-xl font-bold text-hero-btext text-center py-3">{{ item.title }}</h2>
        </div>
        <div class="relative p-5 bg-white rounded-sm h-96 animate__animated hover:animate__pulse">
            <img :src="item.img" alt="">
            <p class="text-base mt-5">{{ item.desc }}</p>
            <button class="absolute bottom-5 lg:bottom-10 left-10 hover:text-main-text font-bold text-hero-block px-5 py-2 rounded-full">Learn more &#8594;</button>
        </div>
      </div>
    </div>
  </div>

    <div class="hidden lg:flex mt-24" id="manage">
      <div>
        <h3 class="text-4xl text-hero-text text-center font-bold uppercase">Top School Management System</h3>
        <div class="flex w-5/6 mx-auto justify-end my-20">
            <div class="mr-20 overflow-hidden">
                <transition name="fade">
                    <div class="w-full">
                        <h2 v-for="(service, index) in services" :key="service.id" v-show="isActive(index)" class="text-3xl font-semibold text-hero-btext" :class="{ 'animate__animated animate__fadeInLeft': isActive(index) }">
                            <span class="font-semibold">—</span> {{ service.title }}
                        </h2>
                    </div>
                </transition>
                <div class="service-main flex flex-nowrap justify-between items-end mt-10">
                    <div class="w-2/5 order-first mb-10">
                        <p v-for="(service, index) in services" :key="service.id" v-show="isActive(index)" class="text-base" :class="{ 'animate__animated animate__backInLeft': isActive(index) }">{{ service.desc }}</p>
                    </div>
                    <div class="w-1/2 order-last mb-5">
                        <img v-for="(service, index) in services" :key="service.id" v-show="isActive(index)" :src="service.img" alt="" :class="{ 'animate__animated animate__backInLeft': isActive(index) }">
                    </div>
                </div>
            </div>
            <div>
                <p class="service-item font-semibold text-gray-500 text-xl pb-5 uppercase cursor-pointer" v-for="(service, index) in services" :key="service.id" v-on:click="showContent(index)" :class="{ 'active1': activeLink === `link${index}` }">{{ service.subTitle }}</p>
            </div>
        </div>
      </div>
    </div>

    <div id="team">
      <div>
        <hr class="bg-main-text mt-12 lg:mt-0 mb-10">
        <h4 class="text-md text-main-text font-semibold mb-5 uppercase text-center">Our teachers</h4>
        <h2 class="title-text text-2xl lg:text-4xl text-hero-text font-semibold mb-5 text-center">Meet out teachers</h2>
        <p class="lg:w-2/3 mx-3 lg:mx-auto text-sm lg:text-base text-center text-gray-500">Our dedicated teachers are a major factor in the success of StudHome. Teachers are drawn to the StudHome family because of our robust model that emphasizes project-based learning, art and technology and a supportive environment in which everyone is accountable for helping students reach the goal of attending college.</p>
      </div>
      <div class="lg:flex pl-10 pr-5 py-10 lg:py-20"> 
        <div class="relative mb-5 lg:mb-0"  v-for="teacher in teachers" :key="teacher">
        <img :src="teacher.img" class="teacher w-11/12 rounded-lg" alt="">
        <div class="photo-main absolute top-0 left-0 right-0 bottom-0 w-11/12 rounded-lg cursor-pointer">
          <div class="photo-about">
            <div class="social">
              <p class="text-xl">{{ teacher.name }}</p>
              <p class="text-md mb-5">{{ teacher.subject }}</p>
              <div class="flex w-11/12 mx-auto">
                <font-awesome-icon icon="fa-brands fa-instagram" class="text-3xl text-white pr-5 cursor-pointer hover:text-main-text" />
                <font-awesome-icon icon="fa-brands fa-telegram" class="text-3xl text-white pr-5 cursor-pointer hover:text-main-text" />
                <font-awesome-icon icon="fa-brands fa-twitter" class="text-3xl text-white pr-5 cursor-pointer hover:text-main-text" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <Foot />
</template>

<script>
import Navbar from '../../src/../src/components/Navbar.vue'
import Foot from '../../src/../src/components/Footer.vue'

export default ({
  data() {
    return {
      show: false,
      activeLink: 'link0',
      activeIndex: 0,
      items: [
        {
          title: 'Preschoolers',
          desc: 'Skills needed for school: we will teach you to read, write and help develop logical thinking',
          img: '/img/14.jpg',  
        },
        {
          title: '1st to 4th grade',
          desc: 'We teach with pleasure: we instill interest in classes and do not let you get bored',
          img: '/img/15.jpg',
          expanded: false
        },
        {
          title: '5th to 9th grade',
          desc: 'Grades will get better: we will tell you how to improve your knowledge in subjects and prepare for scientific competitions',
          img: '/img/16.jpg',
          expanded: false
        },
        {
          title: '9th to 10th grade',
          desc: 'Prepare for university entrance exams: compulsory subjects and electives',
          img: '/img/17.jpg',
          expanded: false
        },
        {
          title: 'Teachers',
          desc: 'We will help improve qualifications, deepen knowledge, update lesson plans and involve students in the learning process',
          img: '/img/18.jpg',
          expanded: false
        }
      ],
      services: [{
        id: 0,
        title: 'At the beginning of any semester',
        subTitle: 'Student enrolment',
        desc: 'Student enrollment refers to the act of signing up for school and/or specific classes or co-curricular activities at that particular school. The enrollment process is completed after a student is granted admission to a particular school.',
        img: '/img/19.webp'
      },
      {
          id: 1,
          title: 'Convenient class schedule',
          subTitle: 'course scheduling',
          desc: 'A class schedule is the list of classes that a student is enrolled in during a specific term. This course schedule typically includes all of the subjects that the student will be taught each week. It details the times of the day and the days of the week that each course will be offered.',
          img: '/img/20.jpg'
      },
      {
          id: 2,
          title: 'Monthly visiting schedule',
          subTitle: 'attendance tracking',
          desc: 'Student attendance tracking is the practice of keeping a regular log of whether students are coming to school or not. Teachers typically track attendance in each class, rather than a homeroom teacher taking attendance just once daily.',
          img: '/img/21.webp'
      },
      {
          id: 3,
          title: 'Convenient rating system',
          subTitle: 'student assessment',
          desc: 'Student ratings of instruction (also known as student evaluations of teaching or course evaluations) are the most commonly used method for evaluating and getting feedback on teaching, as well as one of the most studied topics in higher education.',
          img: '/img/23.png'
      },
      {
          id: 4,
          title: 'Reliable payment system',
          subTitle: 'fee management',
          desc: 'Virtual cards have zero cost to the payer, are speedy, and highly secure due to a process called payment tokenization that ensures the business’s bank account information cannot be compromised. They also allow businesses the opportunity to receive rebates on purchases.',
          img: '/img/22.jpg'
      }
    ],
      teachers: [{
        name: 'Anne Marie',
        subject: 'Maths',
        img: '/img/06.jpg'
      },
      {
        name: 'Andrew Goncharov',
        subject: 'Biology',
        img: '/img/02.jpg'
      },
      {
        name: 'Maxim Pavlov',
        subject: 'Chemistry',
        img: '/img/03.jpg'
      },
      {
        name: 'Milena Akhmetova',
        subject: 'Physics',
        img: '/img/04.jpg'
      },
      {
        name: 'Katherine Osipova',
        subject: 'English',
        img: '/img/05.jpg'
      }
    ]
    }
  },
  components: {
    Navbar,
    Foot
  },
  methods: {

fadeMe: function() {
  this.show = !this.show
},

enter: function(el, done) {

  var that = this;

  setTimeout(function() {
    that.show = false;
  }, 3000); // hide the message after 3 seconds
},

showContent(index) {
        this.activeIndex = index;
        this.activeLink = `link${index}`;
      },
      isActive(index) {
        return index === this.activeIndex;
      }

}

})
</script>

<script setup>

</script>

<style scoped>
.video {
  top: 30%;
  left: 30%;
}
hr {
  height: 2px;
}
.teacher {
  filter: brightness(80%) 
}
.item-block:hover {
  transform: scale(0.9);
  transition: 0.5s;
  cursor: pointer;
}
.photo-main::after{
    content: '';
    width: 100%;
    height: 100%;
    background: rgb(0,70,109);
    background: linear-gradient(90deg, rgba(0,70,109,1) 23%, rgba(76,133,211,1) 51%, rgba(0,70,109,1) 78%);
    position: absolute;
    z-index: 1;
    opacity: 0;
    left: 0;
    top: 0;
    transition: all 0.3s;
}
.photo-main .photo-about h2 {
    position: absolute;
    color: #fff;
    top: 50%; 
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    opacity: 0;
    left: 50%;
    transform: translate(-50%, -50%); 
    z-index: 2;
    transition: all 0.3s;
}
.photo-main .photo-about h3 {
    position: absolute;
    color: #fff;
    top: 90%; 
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    opacity: 0;
    left: 50%;
    transform: translate(-50%, -50%); 
    z-index: 2;
    transition: all 0.3s;
}
.photo-main .social {
    position: absolute;
    color: #fff;
    top: 50%;
    font-weight: 700;
    text-transform: uppercase;
    opacity: 0;
    left: 40%;
    transform: translate(-50%, -50%); 
    z-index: 2;
    transition: all 0.3s;
}
.photo-main .photo-about h3:hover {
  color: #000;
  transition: 0.5s;
}
.photo-main:hover h2,
.photo-main:hover h3,
.photo-main:hover .social,
.photo-main:hover::after{
    opacity: 0.8;
}
h4 {
  font-family: 'Nunito', sans-serif;
}
.title-text {
  font-family: 'Nunito', sans-serif;
}
.service-main img {
  filter: brightness(70%)
}
video {
  filter: brightness(40%)
}
.discover {
  background: rgba(11, 11, 11, 0.1);
}
.discover:hover {
  background: rgba(255, 255, 255, 0.3);
  transition: 0.3s;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */

{
  opacity: 0
}
.service-item:hover {
    background: linear-gradient(90deg, rgba(0,70,109,1) 23%, rgba(76,133,211,1) 51%, rgba(0,70,109,1) 78%);
    color: transparent;
    background-clip: text;
    transition: all 0.3s;
}
.active1 {
    background: linear-gradient(90deg, rgba(0,70,109,1) 23%, rgba(76,133,211,1) 51%, rgba(0,70,109,1) 78%);
    color: transparent;
    background-clip: text;
}

@media(max-width: 1024px) {
  .video {
  top: 20%;
  left: 20%;
}
}
</style>
