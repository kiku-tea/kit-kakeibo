<template>
  <div class="scene-figure">
    <figure class="scene-figure__fig-inner">
      <img :src="imgSrc" alt="">
    </figure>
    <p class="scene-figure__scene" :style="{color: textColor}">SCENE<span>|</span>{{scene}}</p>
  </div>
  
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
  imgSrc: String,
  scene: String,
  textColor: Object
});
</script>
<style scoped>
img{
  width: 100%;
}
.scene-figure{
  position: relative;
}
.scene-figure .scene-figure__fig-inner{
  height: 0;
  padding-bottom: 125%;
}
.scene-figure .scene-figure__scene{
  
  position: absolute;
  top: 0;
  margin-top: 4.67%;
  right: 4%;
  font-family: urw-din-condensed,sans-serif;
  writing-mode: vertical-rl;
  font-weight: 700;
  letter-spacing: 0.01em;
  font-size: 3.2vw;
}
@media screen and (min-width: 769px){
  .scene-figure .scene-figure__scene{
    font-size: 12px;
  }
}

.scene-figure .scene-figure__scene span{
  margin: 0.4em 0;
}
</style>