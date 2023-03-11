<script setup>
</script>
<template>
  <div class="caption-horizontal">
    <p><slot></slot></p>
  </div>
</template>
<style scoped>
.caption-horizontal{
  text-align: left;
  display: inline-block;
}
.caption-horizontal p{
  position: relative;
  text-align: left;
  display: inline-block;
  padding-left: 3em;
  text-indent: -3em;
}
.caption-horizontal p::before{
  content: '';
  position: absolute;
  top: -6px;
  left: -12px;
  width: 5px;
  height: 14px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("@/assets/img/webp/look_caption_deco.webp");
  transform: rotate(45deg);
}

.caption-horizontal p::after{
  content: '';
  position: absolute;
  bottom: -6px;
  right: -12px;
  width: 5px;
  height: 14px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("@/assets/img/webp/look_caption_deco.webp");
  transform: rotate(45deg);
}

</style>