<template>
    <div>
      <slot />
      <Resources/>
      <AppLayoutFooter />
    </div>
  </template>
  
  <script setup>
import Resources from '~/components/AppLayout/resources.vue';

</script>
  
  <style scoped></style>