<template>
<div>
    <div class="grid grid-rows-2 md:grid-cols-2 gap-6 m-8 mt-16">
        <div class="rows-2">
            <div class="">
                <div class="font-extrabold text-7xl self-center">EVENTS</div>
                <div class="font-extrabold text-3xl self-center my-6">UPCOMING EVENTS</div>
            </div>
        
            <div class="overflow-auto max-h-60">
                <div class="flex flex-col gap-y-8">
                    <div class="bg-white shadow-lg md:w-11/12 rounded-md shadow-xl p-4" @click="show">
                        <div class="grid grid-flow-col grid-cols-2">
                            <div class="text-md md:text-lg">
                                event name
                            </div>
                            <div class="text-md md:text-lg justify-self-end">
                                event date
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white shadow-lg md:w-11/12 rounded-md shadow-xl p-4" @click="show">
                        <div class="grid grid-flow-col grid-cols-2">
                            <div class="text-md md:text-lg">
                                event name
                            </div>
                            <div class="text-md md:text-lg justify-self-end">
                                event date
                            </div>
                        </div>
                    </div>

                    <div class="bg-white shadow-lg md:w-11/12 rounded-md shadow-xl p-4" @click="show">
                        <div class="grid grid-flow-col grid-cols-2">
                            <div class="text-md md:text-lg">
                                event name
                            </div>
                            <div class="text-md md:text-lg justify-self-end">
                                event date
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gradient-to-r from-cyan-500 to-blue-500">
            calendar
        </div>
    </div>

    <div v-if="appear">
        <div class="bg-black/60 h-full w-full fixed top-0">
        <div class="m-48">
            <div class="bg-white h-96 justify-self-center rounded-lg p-4">
                <!-- md:w-1/2 lg:w-1/3  -->
                <div @click="notShow" class="justify-self-end font-extrabold text-xl">
                    ✖
                </div>
                <div class="flex flex-col whitespace-nowrap w-64 md:w-80 gap-4">
                    <div class="font-extrabold text-xl flex-none">
                        event name
                    </div>
                    <div class="font-semibold">
                        event date
                    </div>
                    <div class="font-semibold">
                        event details
                    </div>
                    <div class="flex flex-row gap-x-4">
                        <div class="bg-light-brown w-1/3 p-2 rounded-md hover:bg-dark-brown hover:transition-ease-in duration-300">
                            <NuxtLink to="/events">
                                <!-- og site doesnt link to anything -->
                                <div class="font-semibold text-white justify-self-center">Volunteer</div>
                            </NuxtLink>
                        </div>
                        <div class="bg-light-brown w-1/3 p-2 rounded-md hover:bg-dark-brown hover:transition-ease-in duration-300">
                            <NuxtLink to="/events">
                                <!-- og site doesnt link to anything -->
                                <div class="font-semibold text-white justify-self-center ">Donate</div>
                            </NuxtLink>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    </div>
</div>


</template>

<script setup>

const appear = ref(false)

function show(){
    appear.value = true
}

function notShow(){
    appear.value = false
}


</script>

<style scoped>
</style>