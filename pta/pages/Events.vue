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

    <div v-if="appear" class="fixed inset-y-1/4 w-full">
            <div class="bg-white h-96 w-2/3 md:w-1/2 lg:w-1/3 justify-self-center rounded-lg backdrop-blur-xl">
                <div @click="notShow" class="">
                    x
                </div>
                <div class="grid grid-rows-3 gap-4">
                    <div class="font-bold font-lg">
                        event name
                    </div>
                    <div class="">
                        event date
                    </div>
                    <div>
                        event details
                    </div>
                </div>
            </div>
    </div>

    <div v-if="appear" class="bg-black h-60">

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