<template>
    <div class="flex flex-wrap">
    <div v-for="(profile, index) in profiles"
    :key="index"
     id="profile" class="content-center lg:w-1/2 2xl:w-1/3 my-4 flex items-center flex-col">
        <img :src="profile.pfp" alt="pfp" class="w-1/2 rounded-full">
        <h2 class="text-base md:text-xl my-4 font-bold">{{ profile.name }}</h2>
        <p class="text-base md:text-xl mt-2 mb-6">{{ profile.position }}</p>
        <p class="text-sm md:text-lg mt-2 mb-6">{{ profile.email }}</p>
    </div>
</div>
</template>

<script setup>
const profiles = [
    {
        name: "Diana Tedjo Chen",
        pfp: "/pfps/amongus.jpeg",
        email: "diana.tedjo@gmail.com",
        position: "Co-Vice President",
    },
    {
        name: "Amelia Ko",
        pfp: "/pfps/default-profile.webp",
        email: "nilar.n.tun@protonmail.com",
        position: "Co-Vice President",
    },
    {
        name: "Yelena Mike",
        pfp: "/pfps/default-profile.webp",
        email: "yelena.mike@yahoo.com",
        position: "Co-Vice President",
    },
    {
        name: "Miriam Nagornuk",
        pfp: "/pfps/default-profile.webp",
        email: "mimikngk@gmail.com",
        position: "Co-Vice President",
    },
    {
        name: "Laura Sulem",
        pfp: "/pfps/default-profile.webp",
        email: "laurasulem@gmail.com",
        position: "Corresponding Secretary",
    },
    {
        name: "Lorena Brown",
        pfp: "/pfps/ningguang.png",
        email: "lobillbro@yahoo.com",
        position: "Financial Secretary",
    },
    {
        name: "Sarah Celebi",
        pfp: "/pfps/NycDoeLogo.png",
        email: "sarah.a.celebi@gmail.com",
        position: "Freshmen Representative",
    },
    {
        name: "Barbara Malenfant",
        pfp: "/pfps/NycDoeLogo.png",
        email: "BMalenfant@schools.nyc.gov",
        position: "Parent Coordinator",
    },
    {
        name: "Sylvia Pace-Diaz",
        pfp: "/pfps/default-profile.webp",
        email: "spacediaz@gmail.com",
        position: "Parliamentarian",
    },
    {
        name: "Dennis Owens",
        pfp: "/pfps/buro.jpg",
        email: "pooh@aloha.net",
        position: "President",
    },
    {
        name: "Jean-Marie Bruzzese",
        pfp: "/pfps/default-profile.webp",
        email: "jeanmb@gmail.com",
        position: "Recording Secretary",
    },
    {
        name: "Julie Baskevich",
        pfp: "/pfps/default_pfp.svg.png",
        email: "JulieBaskevich@gmail.com",
        position: "Treasurer",
    },
]
</script>