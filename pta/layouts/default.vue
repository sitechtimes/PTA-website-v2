<template>
    <div>
      <Landing/>
      <slot />
      <AppLayoutFooter />
    </div>
  </template>
  
  <script setup>
import Landing from '~/components/AppLayout/landing.vue';

</script>
  
  <style scoped></style>