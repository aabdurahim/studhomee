<template>
  <Navbar class="mx-3 lg:mx-0" />
  <section class="mx-3 lg:mx-0">
    <video autoplay muted loop src="/img/video2.webm"></video>
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
          title: 'Teacher strikes: How do teachers salaries compare across Europe?',
          desc: 'Teachers are often hailed as heroes that are to be celebrated, but in many countries across Europe, theyre feeling undervalued and are even taking to the streets. Thousands of schools in England and Wales are set to close in February after teachers unions voted to strike. In Hungary, thousands of teachers marched in Budapest late last year, calling for higher salaries and urgent reforms from the government following strikes in September. Around 50 teachers have even been fired for "civil disobedience" after staging walkouts.Its part of a wider picture of malaise in education, with a growing teacher shortage spreading across Europe. In France, there are currently 4,000 vacancies, with the latest estimates in Germany suggesting a shortfall of 25,000 teachers by 2025.',
          img: '/img/25.webp',
          date: '27 May 2023'
        },
        {
          title: '10 Law Schools Where the Most Accepted Students Enroll',
          desc: 'Estime had hoped to attend Smith College, but says the school costs too much, at more than $45,000 a year for tuition and fees. The liberal arts major enrolled in Holyoke Community College last fall and plans to transfer to nearby Smith or the University of Massachusetts–Amherst for her junior year, depending on the financial aid award. Estime, in the meantime, has managed to keep her debt under $2,000, paying for college with private scholarships, Pell grants and a small loan.',
          img: '/img/26.jpg',
          date: '23 April 2023'
        },
        {
          title: 'Ways Parents and Counselors Can Help Students Earn Scholarships',
          desc: 'Pell grants: Pell grants function like vouchers for students to pay for higher education-related expenses, covering items such as books, transportation or tuition. Awards are based on financial need to students who have not earned a bachelors degree. More than two-thirds of Pell grants go to families making less than $50,000, according to Columbia Universitys Community College Research Center at Teachers College. These awards are also contingent on the students household size.',
          img: '/img/27.jpg',
          date: '13 April 2023'
        },
        {
          title: 'Consider MBA Programs That Offer Summer Prep in Namibia',
          desc: 'Summer preparatory programs offered through schools allow students to get a head start on making connections and building skills.',
          img: '/img/28.jpg',
          date: '7 April 2023'
        },
        {
          title: 'Teacher strikes: How do teachers salaries compare across Europe?',
          desc: 'Teachers are often hailed as heroes that are to be celebrated, but in many countries across Europe, theyre feeling undervalued and are even taking to the streets. Thousands of schools in England and Wales are set to close in February after teachers unions voted to strike. In Hungary, thousands of teachers marched in Budapest late last year, calling for higher salaries and urgent reforms from the government following strikes in September. Around 50 teachers have even been fired for "civil disobedience" after staging walkouts.Its part of a wider picture of malaise in education, with a growing teacher shortage spreading across Europe. In France, there are currently 4,000 vacancies, with the latest estimates in Germany suggesting a shortfall of 25,000 teachers by 2025.',
          img: '/img/29.jpg',
          date: '1 April 2023'
        },
        {
          title: 'Teacher strikes: How do teachers salaries compare across Europe?',
          desc: 'Teachers are often hailed as heroes that are to be celebrated, but in many countries across Europe, theyre feeling undervalued and are even taking to the streets. Thousands of schools in England and Wales are set to close in February after teachers unions voted to strike. In Hungary, thousands of teachers marched in Budapest late last year, calling for higher salaries and urgent reforms from the government following strikes in September. Around 50 teachers have even been fired for "civil disobedience" after staging walkouts.Its part of a wider picture of malaise in education, with a growing teacher shortage spreading across Europe. In France, there are currently 4,000 vacancies, with the latest estimates in Germany suggesting a shortfall of 25,000 teachers by 2025.',
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