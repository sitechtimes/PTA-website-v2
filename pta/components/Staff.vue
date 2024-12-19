<template>
    <div class="flex flex-wrap">
    <div v-for="(profile, index) in profiles"
    :key="index"
     id="profile" class="content-center lg:w-1/2 2xl:w-1/3 my-4 flex items-center flex-col">
        <img :src="profile.pfp" alt="pfp" class="w-1/4 rounded-full">
        <h2 class="text-base md:text-xl my-4 font-bold">{{ profile.name }}</h2>
        <p class="text-base md:text-xl mt-2 mb-6">{{ profile.email }}</p>
    </div>
</div>
</template>

<script setup>
const profiles = [
    {
        name: "Diana Tedjo Chen",
        pfp: "/pfps/amongus.jpeg",
        email: "diana.tedjo@gmail.com",
    },
    {
        name: "Amelia Ko",
        pfp: "/pfps/default-profile.webp",
        email: "nilar.n.tun@protonmail.com",
    },
    {
        name: "Yelena Mike",
        pfp: "/pfps/default-profile.webp",
        email: "yelena.mike@yahoo.com",
    },
    {
        name: "Miriam Nagornuk",
        pfp: "/pfps/default-profile.webp",
        email: "mimikngk@gmail.com",
    },
    {
        name: "Laura Sulem",
        pfp: "/pfps/default-profile.webp",
        email: "laurasulem@gmail.com",
    },
]
</script>