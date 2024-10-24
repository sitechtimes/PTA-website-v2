<script setup>
import gsap from 'gsap';
import { ref } from 'vue';

const show = ref(false)
// const menuList = ref(null)

function toggle(){
    // show.value != show.value;

    // console.log(show.value)

    if (!show.value){
        openMenu()
    }
}

function openMenu(){
    gsap.from(".menuList", {
        x: 1000,
    })
}

</script>

<template>
    <div class="menu fixed top-0 left-0 right-0">
        <div class="check fixed lg:top-10 lg:left-85 lg:right-5 top-10 lg-left-60 right-20">
            <input v-model="show" @click="toggle" type="checkbox"/>
        </div>

      <div class="menuList">
        <div v-if="show" class="justify-self-auto bg-gradient-to-r from-cyan-500 to-blue-500 w-screen h-dvh absolute">
            <div class="mt-16 :mt-36 space-y-8">
            <NuxtLink to="/" @click="('page=index')" class="hover:opacity-50 flex flex-row self-center text-lg font-bold">
                <img class="size-12 icon" id="home" src="/public/navbarIcons/house.DbJtZ1kr.svg">
                <div class="self-center ml-2">HOME</div>
            </NuxtLink>
        
            <NuxtLink to="/events" class="hover:opacity-50 flex flex-row self-center text-lg font-bold">
                <img class="size-12 icon" id="events" src="/public/navbarIcons/calendar.D_Rrp8xJ.svg">
                <div class="self-center ml-2">EVENTS</div>
            </NuxtLink>

            <NuxtLink to="/contacts" class="hover:opacity-50 flex flex-row self-center text-lg font-bold">
                <img class="size-12 icon" id="contacts" src="/public/navbarIcons/envelope.BpFCkuaU.svg">
                <div class="self-center ml-2 whitespace-nowrap">JOIN US</div>
            </NuxtLink>

            <NuxtLink to="/donate" class="hover:opacity-50 flex flex-row self-center text-lg font-bold">
                <img class="size-12 icon" id="donate" src="/public/navbarIcons/creditCard.svg">
                <div class="self-center ml-2">DONATE</div>
            </NuxtLink>
            </div>
        </div>
    </div>
  </div>
</template>


<style scoped>

</style>