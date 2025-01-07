<template>
    <div class="flex flex-wrap">
    <div v-for="(profile, index) in profiles"
    :key="index"
     id="profile" class="content-center md:w-1/2 2xl:w-1/3 my-4 flex items-center flex-col">
        <img src="/pfps/default-profile.webp" alt="pfp" class="w-5/12 rounded-full">
        <h2 class="text-base sm:text-xl my-4 font-bold">{{ profile.name }}</h2>
        <p class="text-sm sm:text-lg mt-2 mb-6">{{ profile.email }}</p>
    </div>
</div>
</template>

<script setup>
const profiles = [
    {
        name: "Inga Smolyar",
        email: "IngaSmolyar@gmail.com",
    },
    {
        name: "Lai Wan",
        email: "100110601@gmail.com",
    },
    {
        name: "Melina Gontha",
        email: "melinagontha@gmail.com",
    },
    {
        name: "Michael Shmulsenson",
        email: "MichaelShmulsenson@gmail.com",
    },
    {
        name: "Mike Nguyen",
        email: "MikeNguyen@gmail.com",
    },
]
</script>