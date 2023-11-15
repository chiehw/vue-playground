<script setup>
import MButton from '@/components/MButton.vue'
const state = {
    count: 0,
};
const increase = () => {
    state.count++;
    console.log(state.count);
};
</script>

<template>
    <m-button class="w-32" @click="increase()">increase</m-button>

    <div>
        {{ state.count }}
    </div>
</template>