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
}
.divider:nth-of-type(2n)::before{
  left: 0;
  transform-origin: left;
  transform: rotate(15deg);
}
.divider:nth-of-type(2n+1)::before{
  right: 0;
  transform-origin: right;
  transform: rotate(-15deg);
}
</style>