<template>
    <div class="flex flex-wrap flex-col">
    <div v-for="(profile, index) in profiles"
    :key="index"
     id="profile" class="content-center">
        <img src="/pfps/default-profile.webp" alt="pfp" class="w-1/4 rounded-full">
        <h2 class="text-sm">{{ profile.name }}</h2>
        <p class="text-sm">{{ profile.email }}</p>
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