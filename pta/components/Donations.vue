<template>
    <div class="mx-24">
    <h1 id="title" class="text-5xl font-bold">DONATIONS</h1>
    <div class="my-12">
        <h2 id ="bake" class="text-4xl font-bold">Bake Sales</h2>
        <p id ="paragraph1" class="text-2xl my-6">Food and drink donations would be much appreciated to help launch bake sales during the year. Our students always enjoy these added treats to their daily lunch routine.</p>
        <p id="paragraph2" class="text-2xl my-6">Here is a wish list of items that we would like to provide to our students which include : Cookies, Brownies, Plates, Chips, Beverages, Cup Noodles, and any other baked goods. <b>(PLEASE NO NUTS)</b></p>
        <p id="paragraph3" class="text-2xl my-6">You can sign up for items you wish to bring in on the google form!</p>
        <a id="button" href="https://docs.google.com/forms/d/e/1FAIpQLSfoRbBX2iCx20Kxcud0IcjT2UhmpjaNxDda78V3BIfN_Mw3Dg/viewform">
            <button class="p-4 font-bold rounded-lg my-2 bg-dark-brown text-white">Donate Item</button>
        </a>
    </div>
    <div id="monetary" class="my-16">
        <h2 id="paragraph4" class="text-3xl font-bold">Monetary Donations</h2>
        <p id="paragraph5" class="text-2xl my-6">Monetary donations are always graciously accepted throughout the school year. If you have already donated, we thank you for your generosity and support.</p>
        <p id="paragraph6" class="text-2xl my-6">To donate, please bring the completed form and donation to Ms. Barbara Malenfant’s office, Room 117</p>
    </div>
</div>
</template>

<script setup>
import gsap from 'gsap';
onMounted(() => {
    var tl = gsap.timeline();
    tl.from("#title", {opacity: 0, y: 50, duration: 0.2})
      .from("#bake", {opacity: 0, y: 10, duration: 0.1})
      .from("#paragraph1", {opacity: 0, y: 10, duration: 0.1})
      .from("#paragraph2", {opacity: 0, y: 10, duration: 0.2})
      .from("#paragraph3", {opacity: 0, y: 10, duration: 0.2})
      .from("button", {opacity: 0, y: 10, duration: 0.2})
});
</script>

<style scoped>
</style>