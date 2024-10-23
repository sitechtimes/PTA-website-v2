<script setup>
import gsap from 'gsap';
import { ref } from 'vue';

const show = ref(false)
// const menuList = ref(null)

function toggle(){
    show.value != show.value;

    console.log(show.value)

    if (!show.value){
        openMenu()
    }
}

function openMenu(){
    gsap.from(".menuList", {
        x: 40,
    })

console.log('hi')
}



</script>

<template>
    <div class="menu">
      <input v-model="show" @click="toggle" type="checkbox"/>
      <div class="menuList">
        <div v-if="show" class="grid grid-rows-4 space-y-4">
            <NuxtLink to="/" @click="('page=index')" class="hover:opacity-50 flex flex-row">
                <img class="size-12 icon" id="home" src="/public/navbarIcons/house.DbJtZ1kr.svg"> home
            </NuxtLink>
        
            <NuxtLink to="/events" class="hover:opacity-50 flex flex-row">
                <img class="size-12 icon" id="events" src="/public/navbarIcons/calendar.D_Rrp8xJ.svg"> events
            </NuxtLink>

            <NuxtLink to="/contacts" class="hover:opacity-50 flex flex-row">
                <img class="size-12 icon" id="contacts" src="/public/navbarIcons/envelope.BpFCkuaU.svg"> join us
            </NuxtLink>

            <NuxtLink to="/donate" class="hover:opacity-50 flex flex-row">
                <img class="size-12 icon" id="donate" src="/public/navbarIcons/creditCard.svg"> donate
            </NuxtLink>
        </div>
    </div>
  </div>
</template>


<style scoped>

</style>