<template>
    <div class="mx-10 lg:mx-22">
    <h1 id="title" class="text-4xl sm:text-5xl font-bold">DONATIONS</h1>
    <div class="my-12">
        <h2 id ="bake" class="text-3xl sm:text-4xl font-bold">Bake Sales</h2>
        <p id ="paragraph1" class="text-lg sm:text-xl lg:text-2xl my-6">Food and drink donations would be much appreciated to help launch bake sales during the year. Our students always enjoy these added treats to their daily lunch routine.</p>
        <p id="paragraph2" class="text-lg sm:text-xl lg:text-2xl my-6">Here is a wish list of items that we would like to provide to our students which include : Cookies, Brownies, Plates, Chips, Beverages, Cup Noodles, and any other baked goods. <b>(PLEASE NO NUTS)</b></p>
        <p id="paragraph3" class="text-lg sm:text-xl lg:text-2xl my-6">You can sign up for items you wish to bring in on the google form!</p>
        <a id="button" href="https://docs.google.com/forms/d/e/1FAIpQLSfoRbBX2iCx20Kxcud0IcjT2UhmpjaNxDda78V3BIfN_Mw3Dg/viewform">
            <button class="p-4 font-bold rounded-lg my-2 bg-dark-brown text-white">Donate Item</button>
        </a>
    </div>
    <div class="my-16">
        <h2 id="monetary" class="text-3xl sm:text-4xl font-bold">Monetary Donations</h2>
        <p id="paragraph5" class="text-lg sm:text-xl lg:text-2xl my-6">Monetary donations are always graciously accepted throughout the school year. If you have already donated, we thank you for your generosity and support.</p>
        <p id="paragraph6" class="text-lg sm:text-xl lg:text-2xl my-6">To donate, please bring the completed form and donation to Ms. Barbara Malenfant’s office, Room 117</p>
    </div>
</div>
</template>

<script setup>
import gsap from 'gsap';
onMounted(() => {
    var tl = gsap.timeline();
    tl.from("#title", {opacity: 0, y: 20, duration: 0.5}, "-=0.3")
      .from("#bake", {opacity: 0, y: 20, duration: 0.5}, "-=0.3")
      .from("#paragraph1", {opacity: 0, y: 20, duration: 0.5}, "-=0.3")
      .from("#paragraph2", {opacity: 0, y: 20, duration: 0.5}, "-=0.3")
      .from("#paragraph3", {opacity: 0, y: 20, duration: 0.5}, "-=0.3")
      .from("button", {opacity: 0, y: 20, duration: 0.5}, "-=0.3")
      .from("#monetary", {opacity: 0, y: 20, duration: 0.5}, "-=0.3")
      .from("#paragraph5", {opacity: 0, y: 20, duration: 0.5}, "-=0.3")
      .from("#paragraph6", {opacity: 0, y: 20, duration: 0.5}, "-=0.3")
});
</script>

<style scoped>
</style>