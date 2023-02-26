<template>
    <LookIntro :num="1" firstName="" familyName="JOSIAH" occupation="モデル" insta="josiah.__.toshi">
        キャスティングやフォトグラファーとしても活躍<br />
        坊主ヘアがトレードマーク<br />
    </LookIntro>
    <div class="profile__caption"></div>
    <div class="profile__image">
        <SceneFigure :imgSrc="img1" :scene="'CYCLING'" :textColor="'white'"></SceneFigure>
    </div>
</template>
<script setup>
//import {ref} from 'vue';
import LookIntro from "../molecules/LookIntro.vue";
import SceneFigure from "../molecules/SceneFigure.vue";
const img1 = require("@/assets/img/webp/look_1_1.webp");
</script>
<style scoped>
.profile .profile__image {
    margin-top: 10.133%;
}
</style>