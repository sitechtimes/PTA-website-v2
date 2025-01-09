<template>
<div class="">
    <div class="grid grid-rows-2 md:grid-cols-2 gap-12 m-8 mt-16">
        <div class="rows-2">
            <div class="">
                <div class="font-extrabold text-7xl self-center">EVENTS</div>
                <div class="font-extrabold text-3xl self-center my-6">UPCOMING EVENTS</div>
            </div>
        
            <div class="overflow-auto max-h-60">
                <div class="flex flex-col gap-y-8">
                    <div class="bg-white shadow-lg md:w-4/5" @click="wow">hsdjadsha</div>
                    <div class="bg-white shadow-lg md:w-4/5">hsdjadsha</div>
                    <div class="bg-white shadow-lg md:w-4/5">hsdjadsha</div>
                    <div class="bg-white shadow-lg md:w-4/5">hsdjadsha</div>
                    <div class="bg-white shadow-lg md:w-4/5">hsdjadsha</div>
                </div>
            </div>
        </div>
        <div class="bg-gradient-to-r from-cyan-500 to-blue-500">
            calendar
        </div>
    </div>

    <div v-if="appear" class="fixed inset-y-1/4 w-svw">
        <div class="bg-white h-96">
            <input type="button">
                <div>
                    event name
                </div>
                <div>
                    event date
                </div>
                <div>

                </div>
            <div>

            </div>
        
        </div>
    </div>
</div>
</template>

<script setup>
const appear = ref(true)

function wow(){
    appear.value = true
}


</script>

<style scoped>
</style>