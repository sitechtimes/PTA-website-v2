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
{ src: '/photos/carousel1.jpg', alt: 'Tech Life Cafe' },
{ src: '/photos/carousel2.png', alt: 'Drop off and pick up map' },
{ src: '/photos/carousel3.jpg', alt: 'Staten Island Tech' },
{ src: '/photos/carousel4.jpg', alt: 'Bake sale goods' },
{ src: '/photos/carousel5.jpg', alt: 'People in line for the bake sale' },
{ src: '/photos/carousel6.jpg', alt: 'Our PTA selling ramen at the bake sale' },
{ src: '/photos/carousel7.jpg', alt: 'Our PTA selling cake at the bake sale' },
{ src: '/photos/carousel8.jpg', alt: 'Our PTA selling snacks' },
{ src: '/photos/carousel9.jpg', alt: 'Spooky Halloween cupcakes' },
{ src: '/photos/carousel10.jpg', alt: 'Students in line for the bake sale' },
{ src: '/photos/carousel11.jpg', alt: 'Jewelry stand at the holiday fair' },
{ src: '/photos/carousel12.jpg', alt: 'Holiday fair backdrop' },
{ src: '/photos/carousel13.jpg', alt: 'Decoration stand at the holiday fair' },
{ src: '/photos/carousel14.jpg', alt: 'Trinkets being sold at the holiday fair' },
{ src: '/photos/carousel15.jpg', alt: 'SITHS themed hat' },
]
</script>

<style scoped>
</style>