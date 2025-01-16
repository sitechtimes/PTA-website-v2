<template>
    <div class="grid grid-rows-2 lg:grid-cols-2 my-4 mt-12 mx-2">
        <div class="mx-4 md:mx-16">
            <div class="font-normal opacity-0" id="PTA">Parent Teacher Association @</div>
            <div class="font-bold text-6xl md:text-7xl xl:text-8xl" id="SITHS">STATEN ISLAND TECHNICAL HIGH SCHOOL</div>
            <div class="font-normal my-4" id="address">485 Clawson Street, Staten Island, NY 10306</div>
        </div>
        <div class="bg-gradient-to-r from-cyan-500 to-blue-500 mx-4 md:mx-16 lg:mx-10">events</div>
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