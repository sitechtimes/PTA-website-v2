<script setup>
import Menu from './menu.vue';
</script>

<template>
    <header id="navbar" class="grid grid-cols-2">
        <div id="logoContainer">
            <NuxtLink to="/" @click="('page=index')">
                <img class="ml-6 mt-4 scale-75" id="ptaLogo" src="/public/navbarIcons/pta-logo.B2o53BpU.png">
            </NuxtLink>
        </div>

        <div id="naV" class="grid grid-cols-5">
            <NuxtLink to="/" @click="('page=index')" class="hover:opacity-50">
                <img class="size-8 mt-10 icon" id="home" src="/public/navbarIcons/house.DbJtZ1kr.svg"> home
            </NuxtLink>
            

            
            <NuxtLink to="/events" class="hover:opacity-50">
                <img class="size-8 mt-10 icon" id="events" src="/public/navbarIcons/calendar.D_Rrp8xJ.svg"> events
            </NuxtLink>
            

            
            <NuxtLink to="/contacts" class="hover:opacity-50">
                <img class="size-8 mt-10 icon" id="contacts" src="/public/navbarIcons/envelope.BpFCkuaU.svg"> join us
            </NuxtLink>
            

          
            <NuxtLink to="/donate" class="hover:opacity-50">
                <img class="size-8 mt-10 icon" id="donate" src="/public/navbarIcons/creditCard.svg"> donate
            </NuxtLink>

            <Menu></Menu>
        </div>
    </header>
    
</template>

<style scoped>

</style>