<template>
  <footer>
    <div id="sections" class="flex flex-col sm:flex-row my-7 mx-4 xl:mx-14 p-4">
      <div id="firstSection" class="flex-1 w-full lg:w-auto mx-4 mb-8 lg:mb-0">
        <img src="/logo/pta-logo.png" alt="PTA Logo" class="w-4/11" />
        <div id="links" class="mt-5 text-md">
          <NuxtLink to="/">Home</NuxtLink> |
          <NuxtLink to="/events">Events</NuxtLink> |
          <NuxtLink to="/contact">Contact Us</NuxtLink> |
          <NuxtLink to="/donate">Donate</NuxtLink>
        </div>
        <h2 class="text-xs mt-2">SITHS PTA @2024</h2>
      </div>
      <div id="secondSection" class="flex-1 w-full lg:w-auto mx-4 mb-8 lg:mb-0">
        <div id="email" class="flex my-4">
          <img src="/icons/envelope.svg" alt="Email" class="w-6">
          <h2 class="ml-3">sitechpta@gmail.com</h2>
        </div>
        <div id="location" class="flex my-4 mb-8">
          <img src="/icons/location.svg" alt="Location" class="w-5 h-6">
          <h2 class="ml-3">485 Clawson Street, Staten Island, NY 10306</h2>
        </div>
        <div id="social media" class="flex">
          <a href="https://www.instagram.com/_sammytheseagull/">
            <img src="/social-media/instagram.svg" alt="Instagram" class="mr-8">
          </a>
          <a href="https://www.facebook.com/SITECHPTA/">
            <img src="/social-media/facebook.svg" alt="Facebook">
          </a>
        </div>
      </div>
      <div id="thirdSection" class="flex-1 w-full lg:w-auto mx-4">
        <h2 class="font-bold">About Us</h2>
        <p class="text-sm mb-8">
          The mission of Staten Island Tech’s PTA is to support our school through advocacy, volunteerism, and fundraising. From our bake sales to our annual Spring Gala, we work diligently to raise money in order to financially support our school’s needs such as online and software services, facility upgrades, and social events/celebrations.
        </p>
        <NuxtLink to="/Donate" class="bg-dark-brown text-white p-3 text-sm rounded-lg">Donate Now!</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
</style>