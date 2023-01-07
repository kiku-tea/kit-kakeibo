<template>
  <div class="profile profile-6">
    <div class="profile__intro" >
      <LookIntro :num="6" firstName="TAKANE" familyName="SASAKI" occupation="美容師"
        insta="tane.___">
        釣り好きの美容師。<br/>
        去年、友人とともにフィッシングブランド<br/>
        「Metropolis Fishing」を立ち上げたことが話題に。
      </LookIntro>
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
//import {ref} from 'vue';
import LookIntro from "../molecules/LookIntro.vue";
import SceneFigure from "../molecules/SceneFigure.vue";
const img1 = require("@/assets/img/webp/look_6_1.webp");
</script>
<style scoped>
.profile .profile__image{
  margin-top: 10.133%;
}
</style>