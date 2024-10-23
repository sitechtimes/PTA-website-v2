<script setup>
import Menu from './menu.vue';
// import { ref } from 'vue';


</script>

<template>
    <header id="navbar" class="grid grid-cols-2">
        <div id="logoContainer">
            <NuxtLink to="/" @click="('page=index')">
                <img class="ml-2 mt-2 sm:mt-4 sm:ml-6 scale-75" id="ptaLogo" src="/public/navbarIcons/pta-logo.B2o53BpU.png">
            </NuxtLink>
        </div>

        <div id="naV" class="grid grid-cols-4"> 
             <div>
                <NuxtLink to="/" @click="('page=index')" class="hover:opacity-50 max-[1100px]:invisible flex flex-row">
                    <img class="size-8 mt-10 icon" id="home" src="/public/navbarIcons/house.DbJtZ1kr.svg"> 
                    <div class="self-end">home</div>
                </NuxtLink>
             </div>

            <div>
                <NuxtLink to="/events" class="size-8 mt-10 hover:opacity-50 max-[1100px]:invisible flex flex-row">
                <img class="icon" id="events" src="/public/navbarIcons/calendar.D_Rrp8xJ.svg"> events
            </NuxtLink>
            </div>
            
            <div>
                <NuxtLink to="/contacts" class="size-8 mt-10 hover:opacity-50 max-[1100px]:invisible flex flex-row">
                    <img class="icon" id="contacts" src="/public/navbarIcons/envelope.BpFCkuaU.svg"> join us
                </NuxtLink>
            </div>

            <div>
                <NuxtLink to="/donate" class="size-8 mt-10 hover:opacity-50 max-[1100px]:invisible flex flex-row">
                    <img class="icon" id="donate" src="/public/navbarIcons/creditCard.svg"> donate
                </NuxtLink>
            </div>
        </div>
        <Menu class="invisible max-[1100px]:visible"></Menu>
    </header>
    
</template>

<style scoped>

</style>