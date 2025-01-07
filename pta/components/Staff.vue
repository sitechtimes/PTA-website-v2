<template>
    <div class="flex flex-wrap">
    <div v-for="(profile, index) in profiles"
    :key="index"
     id="profile" class="content-center md:w-1/2 2xl:w-1/3 my-4 flex items-center flex-col">
        <img :src="profile.pfp" alt="pfp" class="rounded-full w-5/12">
        <h2 class="text-base sm:text-xl my-4 font-bold">{{ profile.name }}</h2>
        <p class="text-base sm:text-xl mt-2 mb-6">{{ profile.position }}</p>
        <p class="text-sm sm:text-lg mt-2">{{ profile.email }}</p>
        <p class="text-sm sm:text-lg  mt-4 mb-6">{{ profile.phone }}</p>
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
        phone: "347-997-2381",
    },
    {
        name: "Yelena Mike",
        pfp: "/pfps/default-profile.webp",
        email: "yelena.mike@yahoo.com",
        position: "Co-Vice President",
        phone: "646-637-7711",
    },
    {
        name: "Miriam Nagornuk",
        pfp: "/pfps/default-profile.webp",
        email: "mimikngk@gmail.com",
        position: "Co-Vice President",
        phone: "347-596-5942",
    },
    {
        name: "Laura Sulem",
        pfp: "/pfps/default-profile.webp",
        email: "laurasulem@gmail.com",
        position: "Corresponding Secretary",
        phone: "646-322-6311",
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
        phone: "917-741-8797",
    },
    {
        name: "Barbara Malenfant",
        pfp: "/pfps/NycDoeLogo.png",
        email: "BMalenfant@schools.nyc.gov",
        position: "Parent Coordinator",
        phone: "347-563-4563",
    },
    {
        name: "Sylvia Pace-Diaz",
        pfp: "/pfps/default-profile.webp",
        email: "spacediaz@gmail.com",
        position: "Parliamentarian",
        phone: "917-854-7804",
    },
    {
        name: "Dennis Owens",
        pfp: "/pfps/buro.jpg",
        email: "pooh@aloha.net",
        position: "President",
        phone: "718-448-8408",
    },
    {
        name: "Jean-Marie Bruzzese",
        pfp: "/pfps/default-profile.webp",
        email: "jeanmb@gmail.com",
        position: "Recording Secretary",
        phone: "917-376-3048",
    },
    {
        name: "Julie Baskevich",
        pfp: "/pfps/default_pfp.svg.png",
        email: "JulieBaskevich@gmail.com",
        position: "Treasurer",
        phone: "718-938-9762",
    },
]
</script>