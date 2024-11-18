<template>
    <div>
      <NavBar/>
      <slot />
    </div>
  </template>
  
  <script setup>
import NavBar from '~/components/AppLayout/AppLayout/NavBar.vue';
</script>
  
  <style scoped></style>