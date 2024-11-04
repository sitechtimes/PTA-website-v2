<template>
    <div id="container" class="mt-9 text-center flex flex-col justify-center">
        <h1 class="text-5xl font-bold ">CONTACTS</h1>
        <div id="buttons" class="text-3xl mt-8 font-semibold ">
            <button id="join" @click="buttonClick($event)"
                :class="{'bg-white': buttonType === 'join'}" 
                class="mx-1 hover:opacity-50 text-lg md:text-2xl xl:text-3xl w-3/12 md:w-2/12 py-2 rounded-xl xl:mx-20">Join Us</button>
            <button id="staff" @click="buttonClick($event)"
                :class="{'bg-white': buttonType === 'staff'}" 
                class="mx-1 hover:opacity-50 text-lg md:text-2xl xl:text-3xl w-3/12 md:w-2/12 py-2 rounded-xl xl:mx-20">Staff</button>
            <button id="slt" @click="buttonClick($event)"
                :class="{'bg-white': buttonType === 'slt'}" 
                class="mx-1 hover:opacity-50 text-lg md:text-2xl xl:text-3xl w-3/12 md:w-2/12 py-2 rounded-xl xl:mx-20">SLT</button>
        </div>
        <div class="flex justify-center my-6">
            <div v-if="buttonType === 'join'" class="bg-white rounded-3xl w-10/12 p-10">
                <p>Join us</p>
            </div>
            <div v-if="buttonType === 'staff'" class="bg-white rounded-3xl w-10/12 p-10">
                <p>Different staff</p>
            </div>
            <div v-if="buttonType === 'slt'" class="bg-white rounded-3xl w-10/12 p-10">
                <p>The SLT</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const buttonType = ref('join');
function buttonClick(event) {
    buttonType.value = event.target.id;
}
</script>

<style scoped></style>