<template>
    <header id="navbar" class="grid grid-cols-5 z-80">
        <div id="logoContainer" class="col-span-2">
            <NuxtLink to="/">
                <img class="ml-2 mt-1 sm:mt-2 sm:ml-6 scale-75" id="ptaLogo" src="/public/navbarIcons/pta-logo.png">
            </NuxtLink>
        </div>
        <div id="naV" class="hidden lg:grid grid-cols-4 col-span-3"> 
             <div>
                <NuxtLink to="/" 
                    class="w-8 mt-10 hover:opacity-80 hover:transition-ease-in hover:underline hover:underline-offset-2 duration-150 flex flex-row text-lg font-bold">
                    <img class="icon" id="home" src="/public/navbarIcons/house.svg"> 
                    <div class="self-end ml-2">HOME</div>
                </NuxtLink>
             </div>
            <div>
                <NuxtLink to="/events" 
                    class="w-8 mt-10 hover:opacity-80 hover:transition-ease-in hover:underline hover:underline-offset-2 duration-150 flex flex-row text-lg font-bold">
                    <img class="icon" id="events" src="/public/navbarIcons/calendar.svg">
                    <div class="self-end ml-2">EVENTS</div>
            </NuxtLink>
            </div>
            <div>
                <NuxtLink to="/contacts" 
                    class="w-8 mt-10 hover:opacity-80 hover:transition-ease-in hover:underline hover:underline-offset-2 duration-150 flex flex-row text-lg font-bold whitespace-nowrap">
                    <img class="icon" id="contacts" src="/public/navbarIcons/envelope.svg">
                    <div class="self-center ml-2">JOIN US</div>
                </NuxtLink>
            </div>
            <div>
                <NuxtLink to="/donate" 
                    class="w-8 mt-10 hover:opacity-80 hover:underline hover:underline-offset-2 hover:transition-ease-in flex flex-row text-lg font-bold">
                    <img class="icon" id="donate" src="/public/navbarIcons/creditCard.svg">
                    <div class="self-end ml-2">DONATE</div>
                </NuxtLink>
            </div>  
        </div>
        <AppLayoutMenu class="lg:hidden"></AppLayoutMenu>
    </header>
</template>

<script setup>

</script>

<style scoped>

</style>