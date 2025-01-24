<template>
    <div class="flex flex-wrap px-2">
    <div v-for="(profile, index) in profiles"
    :key="index"
     id="profile" class="content-center w-1/2 2xl:w-1/3 my-4 flex items-center text-center text-wrap flex-col">
        <img :src="`/pfps/default-profile.webp`" :alt="profile.name" class="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36">
        <h2 class="text-sm sm:text-xl mt-2 font-bold">{{ profile.name }}</h2>
        <p class="text-xs sm:text-lg mt-2 text-wrap">{{ profile.email }}</p>
    </div>
</div>
</template>

<script setup>
const profiles = [
    {
        name: "Inga Smolyar",
        email: "IngaSmolyar @gmail.com",
    },
    {
        name: "Lai Wan",
        email: "100110601 @gmail.com",
    },
    {
        name: "Melina Gontha",
        email: "melinagontha @gmail.com",
    },
    {
        name: "Michael Shmulsenson",
        email: "MichaelShmulsenson @gmail.com",
    },
    {
        name: "Mike Nguyen",
        email: "MikeNguyen @gmail.com",
    },
]
</script>