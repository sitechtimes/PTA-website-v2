<template>
    <div id="container" class="mt-9 text-center">
        <h1 class="text-5xl font-bold ">CONTACTS</h1>
        <div id="buttons" class="text-3xl mt-8 font-semibold ">
            <button id="join" @click="buttonClick($event)" class="mx-28 hover:opacity-50 focus:bg-white px-12 py-2 rounded-xl ">Join Us</button>
            <button id="staff" @click="buttonClick($event)" class="mx-28 hover:opacity-50 focus:bg-white px-12 py-2 rounded-xl">Staff</button>
            <button id="slt" @click="buttonClick($event)" class="mx-28 hover:opacity-50 focus:bg-white px-12 py-2 rounded-xl">SLT</button>
        </div>
        <div v-if="buttonType===staff" class="bg-white rounded-xl rounded-xl w-6/12">
            <p>Different staff</p>
        </div>
        <div v-if="buttonType===slt" class="bg-white rounded-xl rounded-xl w-6/12">
            <p>The SLT</p>
        </div>
        <div v-if="buttonType===join" class="bg-white rounded-xl rounded-xl w-6/12">
            <p>Join us</p>
        </div>
    </div>
</template>

<script setup>
function buttonClick(event) {
    const buttonType = event.target.getAttribute("id");
    console.log(buttonType);
}
</script>

<style scoped></style>