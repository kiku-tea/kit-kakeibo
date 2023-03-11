<script setup>
import { defineProps } from 'vue';

defineProps({
  src: String,
})
</script>
<template>
  <figure>
        <video class="loop-movie"
          :src="src" :data-original="src"
          muted="muted" autoplay="autoplay" loop="loop" playsinline="playsinline"></video>
      </figure>
</template>
<style scoped>
.loop-movie{
  width: 100%;
  display: block;
}
</style>