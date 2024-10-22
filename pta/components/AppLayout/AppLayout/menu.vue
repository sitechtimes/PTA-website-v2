<template>
    <div>
    <div class="menu">
        <input v-model="checked" @click="toggle" type="checkbox" id="active" />
        <!-- <label for="active" class="menu-btn"><span></span></label>
        <label for="active" class="close"></label> -->
      <div v-if="show" class="wrapper">
        <NuxtLink to="/" @click="('page=index')" class="hover:opacity-50">
            <img class="icon" id="home" src="/public/navbarIcons/house.DbJtZ1kr.svg"> home
        </NuxtLink>
        
        <NuxtLink to="/events" class="hover:opacity-50">
            <img class="icon" id="events" src="/public/navbarIcons/calendar.D_Rrp8xJ.svg"> events
        </NuxtLink>

        <NuxtLink to="/contacts" class="hover:opacity-50">
            <img class="icon" id="contacts" src="/public/navbarIcons/envelope.BpFCkuaU.svg"> join us
        </NuxtLink>

        <NuxtLink to="/donate" class="hover:opacity-50">
            <img class="icon" id="donate" src="/public/navbarIcons/creditCard.svg"> donate
        </NuxtLink>
        
      </div>
  </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false)
const checked = ref(false)

function toggle(){
    show.value != show.value;
    checked.value != checked.value;
}
</script>

<style scoped>

</style>