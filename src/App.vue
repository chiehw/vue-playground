<script setup>
import MButton from '@/components/MButton.vue';

</script>

<template>
  <main-container class="flex font-sans bg-slate-100">
    <left-pane class="bg-white min-h-screen w-48 p-5">
      <MButton @click="$router.push('/')">HOME</MButton>
      <MButton @click="$router.push('/reactive')">Reactive</MButton>
    </left-pane>
    <right-pane class=" flex-1">
      <router-view></router-view>
    </right-pane>
  </main-container>
</template>

<style scoped>
*+* {
  margin-top: 1rem;
}
</style>
