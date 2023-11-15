<script setup>
import MButton from '@/components/MButton.vue';

</script>

<template>
  <main-container class="flex font-sans bg-white">
    <left-pane class="bg-slate-100 min-h-screen w-1/6 p-5 space-y-3 overflow-y-scroll">
      <MButton class="w-full " :class="{ 'bg-slate-700': $route.path == '/' }" @click="$router.push('/')">HOME
      </MButton>
      <MButton class="w-full" :class="{ 'bg-slate-700': $route.path == '/reactive' }" @click="$router.push('/reactive')">
        Reactive</MButton>
    </left-pane>
    <right-pane class="flex-1 p-5">
      <router-view></router-view>
    </right-pane>
  </main-container>
</template>

<style scoped></style>
