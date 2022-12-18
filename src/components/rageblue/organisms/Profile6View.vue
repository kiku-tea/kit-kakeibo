<template>
  <div class="profile profile-6">
    <div class="profile__intro" >

    </div>
    <div class="profile__movie">

    </div>
    <div class="profile__caption"></div>
    <div class="profile__image">
      <SceneFigure :imgSrc="img1" :scene="'FISHING'" :textColor="'white'"></SceneFigure>
    </div>
    <div class="profile__item-credits"></div>
    <div class="profile__image">
      <figure><img src="" alt=""></figure>
    </div>
    <div class="profile__cordinate-credits"></div>
  </div>
</template>
<script setup>
import SceneFigure from "../molecules/SceneFigure.vue";
const img1 = require("@/assets/img/webp/look_6_1.webp");

</script>
<style scoped>
.profile .profile__image{
  margin-top: 10.133%;
}
</style>