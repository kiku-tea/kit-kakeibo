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
      <LoopMovie
          src="https://movie.dot-st.com/static2/rageblue/college_tshirt/6.mp4"></LoopMovie>
    </div>
    <div class="profile__caption">
      <CaptionHorizontal>狙った獲物が釣れた時<br/>あの瞬間がたまらない</CaptionHorizontal>
    </div>
    <div class="profile__image">
      <SceneFigure :imgSrc="img1" :scene="'FISHING'" :textColor="'white'"></SceneFigure>
    </div>
    <div class="profile__item-credits"></div>
    <div class="profile__image">
      <figure><img src="" alt=""></figure>
    </div>
    <div class="profile__cordinate-credits">
      <CoordinateList></CoordinateList>
    </div>
  </div>
</template>
<script setup>
//import {ref} from 'vue';
import LookIntro from "../molecules/LookIntro.vue";
import SceneFigure from "../molecules/SceneFigure.vue";
import CoordinateList from "../molecules/CoordinateList.vue";
import LoopMovie from "../atoms/LoopMovie.vue";
import CaptionHorizontal from "../atoms/CaptionHorizontal.vue";
const img1 = require("@/assets/img/webp/look_6_1.webp");
</script>
<style scoped>
.profile .profile__image{
  margin-top: 10.133%;
}
.profile .profile__movie{
  width: 78.7%;
  margin: 5.6% auto 0;
}
.profile .profile__caption{
  margin-top: 11.333%;
  text-align: center;
}
</style>