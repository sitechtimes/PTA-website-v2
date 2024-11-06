<template>
    <div class="menu fixed top-0 left-0 right-0">
        <div class="check fixed lg:top-10 lg:left-85 lg:right-5 top-10 lg-left-60 right-20 z-10">
            <label for="check"></label>
            <!-- <i class="fa-solid fa-bars"></i> -->
            <input v-model="show" type="checkbox" value="check"/>
        </div>
    <Transition name="slide">
      
        <div v-if="show" class="justify-self-auto bg-gradient-to-b from-[#ffb393] via-[#fff1d7] to-[#fff] w-screen h-dvh absolute z-0">
            <div class="mt-36 ml-16 space-y-8">
            <NuxtLink to="/" @click="('page=index')" class="w-11 hover:opacity-50 flex flex-row self-center text-lg font-bold">
                <img class="icon" id="home" src="/public/navbarIcons/house.DbJtZ1kr.svg">
                <div class="self-center ml-2">HOME</div>
            </NuxtLink>
        
            <NuxtLink to="/events" class="w-11 hover:opacity-50 flex flex-row self-center text-lg font-bold">
                <img class="icon" id="events" src="/public/navbarIcons/calendar.D_Rrp8xJ.svg">
                <div class="self-center ml-2">EVENTS</div>
            </NuxtLink>

            <NuxtLink to="/contacts" class="w-11 hover:opacity-50 flex flex-row self-center text-lg font-bold">
                <img class=" icon" id="contacts" src="/public/navbarIcons/envelope.BpFCkuaU.svg">
                <div class="self-center ml-2 whitespace-nowrap">JOIN US</div>
            </NuxtLink>

            <NuxtLink to="/donate" class="w-11 hover:opacity-50 flex flex-row self-center text-lg font-bold">
                <img class="icon" id="donate" src="/public/navbarIcons/creditCard.svg">
                <div class="self-center ml-2">DONATE</div>
            </NuxtLink>
            </div>
        </div>
    
    </Transition>
  </div>
</template>

<script setup>
// import gsap from 'gsap';
import { ref } from 'vue';

const show = ref(false)

</script>


<style scoped>
@keyframes slide-right {
  0% {
    right: -100%;
  }
  50% {
    right: -100%;
  }
  100% {
    right: 0;
  }
}

@keyframes slide-left {
  0% {
    right: 0%;
  }
  100% {
    right: -100%;
  }
}


.slide-enter-active, .slide-leave-active {
  animation: slide-right 0.4s;
}

.slide-enter-from, .slide-leave-to {
  animation: slide-left 0.3s
}
</style>