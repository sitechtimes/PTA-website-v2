<template>
    <div class="grid grid-rows-2 lg:grid-cols-2 my-4 mt-12 mx-2">
        <div class="mx-4 md:mx-16">
            <h2 class="font-normal lg:text-2xl md:xl" id="PTA">Parent Teacher Association @</h2>
            <h1 class="font-bold tracking-tight text-6xl md:text-7xl xl:text-8xl" id="SITHS">STATEN ISLAND TECHNICAL HIGH SCHOOL</h1>
            <p class="font-normal my-4 lg:text-2xl md:xl" id="address">485 Clawson Street, Staten Island, NY 10306</p>
        </div>
        <p class="bg-gradient-to-r from-cyan-500 to-blue-500 mx-4 md:mx-16 lg:mx-10">events</p>
    </div>
</template>

<script setup>
import gsap from 'gsap';

onMounted(() => {
    gsap.fromTo("#PTA", { 
        opacity: 0,
        x:-100,
    }, { 
        opacity: 1, 
        x:0,
        duration: 1 
    });

    gsap.fromTo("#SITHS", { 
        opacity: 0,
        x:-100,
    }, { 
        opacity: 1, 
        x:0,
        duration: 1 
    });

    gsap.fromTo("#address", { 
        opacity: 0,
        x:-100,
    }, { 
        opacity: 1, 
        x:0,
        duration: 1 
    });
});
</script>

<style scoped>

</style>