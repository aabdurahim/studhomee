<template>
  <Navbar class="mx-3 lg:mx-0" />
  <section class="mx-3 lg:mx-0">
    <video autoplay muted loop src="https://res.cloudinary.com/dmhy6sxqx/video/upload/v1685880168/video2_b8gxh6.webm"></video>
    <h2 class="absolute top-36 left-7 lg:top-72 lg:left-24 z-50 text-3xl lg:text-7xl text-gray-200 font-bold animate__animated animate__fadeInLeft animate__slow slick-active">NEWS</h2>
    <h3 class="absolute top-44 left-7 lg:top-96 lg:left-24 z-50 text-sm lg:text-2xl mt-2 lg:mt-0 text-gray-200 font-semibold animate__animated animate__fadeInLeft animate__slow slick-active">Stay up to date with the latest educational news</h3>
    <h4 class="absolute top-36 left-7 lg:top-96 lg:left-24 text-xs mt-16 lg:text-xl text-gray-200 animate__animated animate__fadeInLeft animate__slower slick-active">Search / Archive / Gallery / Categories / Recent News</h4>
    <div class="bg-white relative lg:bottom-44 z-40 lg:flex flex-wrap items-center lg:pt-20">
      <div v-for="(neww, index) in news" :key="index" class="lg:w-1/3 px-10 py-5 lg:py-10">
        <img :src="neww.img" alt="" class="w-full h-48 mb-5">
        <h2 class=" text-2xl text-hero-text font-bold hover:text-main-text cursor-pointer mb-5">{{ neww.title }}</h2>
        <p v-if="!neww.readMoreActivated" class="text-gray-700">{{neww.desc.slice(0, 100)}}</p>
        <a class="text-blue-900 font-bold" v-if="!neww.readMoreActivated" @click.prevent="activateReadMore(index)" href="#">
          (read more)
          </a>
        <p v-if="neww.readMoreActivated">{{ neww.desc }}</p>
        <p class="font-semibold text-gray-700 mt-5">
          <font-awesome-icon icon="fa-solid fa-calendar-day" class="text-hero-text" />
          {{ neww.date }}</p>
      </div>
    </div>
  </section>
  <Foot />
</template>

<script>
import Navbar from '../../src/../src/components/Navbar.vue'
import Foot from '../../src/../src/components/Footer.vue'

export default {
  data() {
    return {
      news: [
        {
          title: 'StudHome Launches New Program for Early Learners',
          desc: 'StudHome is excited to announce a new program designed for preschoolers to help them develop the skills and knowledge they need to be successful in school. The program includes engaging lessons, fun activities, and age-appropriate assessments to track progress. With StudHomes early learning program, parents can feel confident that their little ones are getting a head start on their education.',
          img: '/img/25.webp',
          date: '27 May 2023'
        },
        {
          title: 'StudHome Wins Award for Innovative Online Learning Platform',
          desc: 'StudHome is commitment to student-focused online education has earned us an award for our innovative platform. Our platform is cutting-edge technology, personalized learning options, and interactive design have all been recognized as industry-leading features. We are proud to be acknowledged for our dedication to providing high-quality online learning experiences.',
          img: '/img/26.jpg',
          date: '23 April 2023'
        },
        {
          title: 'Study from Anywhere with StudHome ',
          desc: 'StudHome is flexible learning options allow students to study from anywhere, whether it is from home, on the go, or anywhere else they choose. With access to our platform is comprehensive course offerings and supportive community of educators, students can customize their learning experience to fit their unique needs and preferences.',
          img: '/img/27.jpg',
          date: '13 April 2023'
        },
        {
          title: 'StudHome Partners with Local Schools to Expand Access to Education',
          desc: 'StudHome is partnering with schools across the country to provide students with access to high-quality online learning opportunities. Through these partnerships, students can supplement their in-person coursework with online classes and take advantage of StudHome is expert educators and comprehensive course offerings.',
          img: '/img/77.jpg',
          date: '7 April 2023'
        },
        {
          title: 'StudHome Introduces Virtual Reality Learning Experience',
          desc: 'StudHome is excited to announce a new virtual reality (VR) learning experience for students. This innovative tool immerses students in realistic simulations and environments to enhance their learning experience. With VR, students can explore historical sites, conduct virtual science experiments, and more, all while developing important critical thinking and problem-solving skills.',
          img: '/img/29.jpg',
          date: '1 April 2023'
        },
        {
          title: 'Online Learning on the Rise',
          desc: 'StudHome Sees Surge in Enrollment as More Students Turn to Virtual Education: As more students turn to online learning, StudHome has seen a surge in enrollment. Our platform is flexible learning options, personalized support, and comprehensive course offerings have all contributed to our popularity among students looking for high-quality online education.',
          img: '/img/30.jpg',
          date: '30 March 2023'
        }
      ],
      currentActivatedIndex: null,
    }
  },
  components: {
    Navbar,
    Foot
  },
  methods: {
    activateReadMore(index) {
      if (this.currentActivatedIndex !== null) {
        this.news[this.currentActivatedIndex].readMoreActivated = false;
      }
      this.news[index].readMoreActivated = true;
      this.currentActivatedIndex = index;
    }
  } 
}
</script>

<style scoped>
video {
  filter: brightness(60%) 
}

img {
  transition: 0.5s;
  cursor: pointer;
}

img:hover {
  transform: scale(1.1);
}

p .animate__animated.animate__fadeInLeft {
  --animate-duration: 100ms;
  --animate-delay: 1s;
}

</style>
