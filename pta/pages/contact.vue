<template>
    <div id="container" class="mt-9 text-center flex flex-col justify-center">
        <h1 class="text-5xl font-bold ">CONTACTS</h1>
        <div id="buttons" class="text-3xl mt-8 font-semibold ">
            <button id="join" @click="buttonClick($event)"
                :class="{'bg-white': buttonType === 'join'}" 
                class="mx-20 hover:opacity-50 w-1/12 py-2 rounded-xl ">Join Us</button>
            <button id="staff" @click="buttonClick($event)"
                :class="{'bg-white': buttonType === 'staff'}" 
                class="mx-20 hover:opacity-50 w-1/12 py-2 rounded-xl">Staff</button>
            <button id="slt" @click="buttonClick($event)"
                :class="{'bg-white': buttonType === 'slt'}" 
                class="mx-20 hover:opacity-50 w-1/12 py-2 rounded-xl">SLT</button>
        </div>
        <div class="flex justify-center my-6">
            <div v-if="buttonType === 'join'" class="bg-white rounded-3xl w-6/12 p-12">
                <p>Join us</p>
            </div>
            <div v-if="buttonType === 'staff'" class="bg-white rounded-3xl w-6/12 p-12">
                <p>Different staff</p>
            </div>
            <div v-if="buttonType === 'slt'" class="bg-white rounded-3xl w-6/12 p-12">
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