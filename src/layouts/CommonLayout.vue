<template>
  <div class="flex flex-col bg-baccent h-full">
    <div class="flex-1">
        <slot></slot>
    </div>
    <PageFooter />
  </div>
</template>


<script setup>
import PageFooter from './footer/PageFooter.vue'
</script>
