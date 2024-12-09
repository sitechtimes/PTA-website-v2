<template>
  <div class="carousel h-60 w-auto sm:h-80 sm:w-3/4 mx-auto mt-6 lg:mt-0 lg:float-right flex rounded-3xl">
    <div
      v-for="(image, index) in images"
      :key="index"
      :id="'slide' + (index + 1)"
      class="carousel-item relative w-full lg:h-80"
    >
      <img
        :src="image.src"
        class="w-full h-full object-cover"
        :alt="image.alt"
      />
      <div class="absolute left-5 right-5 top-1/2 flex justify-between">
        <a :href="'#slide' + (index === 0 ? images.length : index)" class="btn btn-circle">❮</a>
        <a :href="'#slide' + ((index + 1) % images.length + 1)" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const images =[
{ src: '/photos/carousel1.jpg', alt: 'Image 1' },
{ src: '/photos/carousel2.png', alt: 'Image 2' },
{ src: '/photos/carousel3.jpg', alt: 'Image 3' },
{ src: '/photos/carousel4.jpg', alt: 'Image 4' },
{ src: '/photos/carousel5.jpg', alt: 'Image 5' },
{ src: '/photos/carousel6.jpg', alt: 'Image 6' },
{ src: '/photos/carousel7.jpg', alt: 'Image 7' },
{ src: '/photos/carousel8.jpg', alt: 'Image 8' },
{ src: '/photos/carousel9.jpg', alt: 'Image 9' },
{ src: '/photos/carousel10.jpg', alt: 'Image 10' },
{ src: '/photos/carousel11.jpg', alt: 'Image 11' },
{ src: '/photos/carousel12.jpg', alt: 'Image 12' },
{ src: '/photos/carousel13.jpg', alt: 'Image 13' },
{ src: '/photos/carousel14.jpg', alt: 'Image 14' },
{ src: '/photos/carousel15.jpg', alt: 'Image 15' },
]
</script>

<style scoped>
</style>