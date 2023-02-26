<template>
  <div class="divider"></div>
</template>
<script setup>
</script>
<style scoped>
.divider{
  position: relative;
  padding-top: 26.8%;
  margin-top: 10.8%;
}
.divider::before{
  content: '';
  position: absolute;
  top: 0;
  width: 104%;
  height: 1px;
  background-color: black;
  left: 0;
  transform-origin: left;
  transform: rotate(15deg);
}

</style>