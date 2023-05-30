<template>
      <swiper class="swiper" :modules="modules" :slides-per-view="1" :space-between="30" :loop="true"
      :pagination="{ clickable: true }" :navigation="true">
      <swiper-slide class="relative">
        <img src="../assets/img/11.jpg" alt="" class="img3">
        <h2 class="absolute top-5 lg:top-20 lg:left-50 text-white text-3xl lg:text-6xl animate__animated animate__fadeInDown slick-active">More than just studying</h2>
        <p class="absolute top-20 px-1 lg:top-56 lg:left-50 text-white text-xs lg:text-lg text-center animate__animated animate__fadeInDown slick-active">Interesting lessons, practical exercises and acquired skills will help <br> build a good career in the future. Create a better future for your children now!</p>
        <div class="absolute hidden lg:flex top-72 left-50 mt-10 animate__animated animate__fadeInUp slick-active">
          <button class="sbm1 text-lg text-white bg-hero-text px-7 py-3 rounded-lg mr-10">Start a journey</button>
          <button class="sbm2 text-lg text-white border border-white px-7 py-3 rounded-lg">More about us</button>
        </div>
      </swiper-slide>
      <swiper-slide class="relative">
        <img src="../assets/img/1.jpg" alt="" class="img1">
        <h2 class="absolute top-5 lg:top-20 lg:left-50 text-white text-3xl lg:text-6xl animate__animated animate__fadeInDown slick-active"> Providing Online Education</h2>
        <p class="absolute top-20 lg:top-56 lg:left-50 text-white text-xs lg:text-lg text-center animate__animated animate__fadeInDown slick-active">Every successful career in the future begins with schooling. To get high-quality knowledge, <br> you need to entrust your child to professional teachers</p>
        <div class="absolute hidden lg:flex top-72 left-50 mt-10 animate__animated animate__fadeInUp slick-active">
          <button class="sbm1 text-lg text-white bg-hero-text px-7 py-3 rounded-lg mr-10">Start a journey</button>
          <button class="sbm2 text-lg text-white border border-white px-7 py-3 rounded-lg">More about us</button>
        </div>
      </swiper-slide>
      <swiper-slide class="relative">
        <img src="../assets/img/9.jpg" alt="" class="img2">
        <h2 class="absolute top-5 lg:top-20 lg:left-50 text-white text-3xl lg:text-6xl animate__animated animate__fadeInDown slick-active">Creating a better future</h2>
        <p class="absolute top-20 lg:top-56 lg:left-50 text-white text-xs lg:text-lg text-center animate__animated animate__fadeInDown slick-active">Interesting lessons, practical exercises and acquired skills will help <br> build a good career in the future. Create a better future for your children now!</p>
        <div class="absolute hidden lg:flex top-72 left-50 mt-10 animate__animated animate__fadeInUp slick-active">
          <button class="sbm1 text-lg text-white bg-hero-text px-7 py-3 rounded-lg mr-10">Start a journey</button>
          <button class="sbm2 text-lg text-white border border-white px-7 py-3 rounded-lg">More about us</button>
        </div>
      </swiper-slide>
    </swiper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
export default defineComponent({
  name: 'swiper-example-loop',
  title: 'Loop mode / Infinite loop',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination, Navigation]
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';
@import '../assets/mixins.scss';
@import '../assets/style.scss';

.swiper {
  @include swiper-wrapper();

  ::v-deep(.swiper-slide) {
    @include swiper-slide();
  }
}

h2 {
  font-family: 'Merriweather';
}
p {
  font-weight: 400;
}
.img2 {
	filter: brightness(50%)
}
.img3 {
	filter: brightness(50%)
}
.sbm1:hover {
  background: #FFF;
  color: #05203e;
  transition: 0.5s;
}
.sbm2:hover {
  background: #FFF;
  color: #05203e;
  transition: 0.5s;
}

@media(max-width: 500px) {
  .swiper {
    height: 180px;
  }
  .swiper .swiper-slide {
    align-items: baseline;
  }
}

</style>
