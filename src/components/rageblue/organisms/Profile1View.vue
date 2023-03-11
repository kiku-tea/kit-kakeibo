<template>
    <LookIntro :num="1" firstName="" familyName="JOSIAH" occupation="モデル" insta="josiah.__.toshi">
        キャスティングやフォトグラファーとしても活躍<br />
        坊主ヘアがトレードマーク<br />
    </LookIntro>
    <div class="profile__caption"></div>
    <div class="profile__image">
        <SceneFigure :imgSrc="img1" :scene="'CYCLING'" :textColor="'white'"></SceneFigure>
    </div>
    <!-- 商品紹介 -->
    <ProductList :products="products" />
</template>
<script setup>
//import {ref} from 'vue';
import LookIntro from "../molecules/LookIntro.vue";
import ProductList from "../molecules/ProductList.vue";
import SceneFigure from "../molecules/SceneFigure.vue";
const img1 = require("@/assets/img/webp/look_1_1.webp");

const products = [
    { name: "T-Shirt", price: "3,190", link: "https://www.dot-st.com/m/rageblue/CSfMbGoodsPage_001.jsp?ITEM_CD=957635" },
    { name: "Short Pants", price: "4,950", link: "https://www.dot-st.com/m/rageblue/CSfMbGoodsPage_001.jsp?ITEM_CD=956252" },
    { name: "Socks", price: "1,100", link: "https://www.dot-st.com/m/rageblue/CSfMbGoodsPage_001.jsp?ITEM_CD=959207" },
    { name: "Shoes", price: "4,400", link: "https://www.dot-st.com/m/rageblue/CSfMbGoodsPage_001.jsp?ITEM_CD=956586" },
]
</script>
<style scoped>
.profile .profile__image {
    margin-top: 10.133%;
}
</style>