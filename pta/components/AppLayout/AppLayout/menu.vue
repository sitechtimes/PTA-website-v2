<template>
    <div>
    <div class="menu">
      <input v-model="show" @click="toggle" type="checkbox"/>
      <div v-if="show">
        <NuxtLink to="/" @click="('page=index')" class="hover:opacity-50">
            <img class="size-12 icon" id="home" src="/public/navbarIcons/house.DbJtZ1kr.svg"> home
        </NuxtLink>
        
        <NuxtLink to="/events" class="hover:opacity-50">
            <img class="size-12 icon" id="events" src="/public/navbarIcons/calendar.D_Rrp8xJ.svg"> events
        </NuxtLink>

        <NuxtLink to="/contacts" class="hover:opacity-50">
            <img class="size-12 icon" id="contacts" src="/public/navbarIcons/envelope.BpFCkuaU.svg"> join us
        </NuxtLink>

        <NuxtLink to="/donate" class="hover:opacity-50">
            <img class="size-12 icon" id="donate" src="/public/navbarIcons/creditCard.svg"> donate
        </NuxtLink>
        
      </div>
  </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';
import { ref } from 'vue';

const show = ref(false)

function toggle(){
    show.value != show.value;

    console.log(show.value)
}


</script>

<style scoped>

</style>