<script setup>
import Menu from './menu.vue';
// import { ref } from 'vue';

</script>

<template>
    <header id="navbar" class="grid grid-cols-5">
        <div id="logoContainer" class="col-span-2">
            <NuxtLink to="/" @click="('page=index')">
                <img class="ml-2 mt-1 sm:mt-2 sm:ml-6 scale-75" id="ptaLogo" src="/public/navbarIcons/pta-logo.B2o53BpU.png">
            </NuxtLink>
        </div>
        <div id="naV" class="grid grid-cols-4 invisible lg:visible col-span-3"> 
             <div>
                <NuxtLink to="/" @click="('page=index')" class="hover:opacity-50 flex flex-row text-lg font-bold">
                    <img class="size-8 mt-10 icon" id="home" src="/public/navbarIcons/house.DbJtZ1kr.svg"> 
                    <div class="self-end ml-2">HOME</div>
                </NuxtLink>
             </div>

            <div>
                <NuxtLink to="/events" class="size-8 mt-10 hover:opacity-50 flex flex-row text-lg font-bold">
                <img class="icon" id="events" src="/public/navbarIcons/calendar.D_Rrp8xJ.svg">
                <div class="self-end ml-2">EVENTS</div>
            </NuxtLink>
            </div>
            
            <div>
                <NuxtLink to="/contacts" class="size-8 mt-10 hover:opacity-50 flex flex-row text-lg font-bold whitespace-nowrap">
                    <img class="icon" id="contacts" src="/public/navbarIcons/envelope.BpFCkuaU.svg">
                    <div class="self-center ml-2">JOIN US</div>
                </NuxtLink>
            </div>

            <div>
                <NuxtLink to="/donate" class="size-8 mt-10 hover:opacity-50 flex flex-row text-lg font-bold">
                    <img class="icon" id="donate" src="/public/navbarIcons/creditCard.svg">
                    <div class="self-end ml-2">DONATE</div>
                </NuxtLink>
            </div>  
        </div>
        <Menu class="visible lg:invisible"></Menu>
    </header>
</template>

<style scoped>

</style>