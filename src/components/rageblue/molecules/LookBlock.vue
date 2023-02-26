<template>
  <div class="look-block">
    <SectionDivider class="look-block__divider"></SectionDivider>
    <slot></slot>
  </div>
</template>
<script setup>
import SectionDivider from '../atoms/SectionDivider.vue';
</script>
<style scoped>
.look-block:nth-of-type(2n) .look-block__divider{
  transform: scale(1,-1);
}
</style>