<template>
    <div class="header">
        <!-- ロゴ img-->
        <p>ロゴimg</p>
        <!-- ボタン -->
        <div class="flex">
            <MainButton v-bind:text="text1"></MainButton>
            <MainButton v-bind:text="text2"></MainButton>
            <MainButton v-bind:text="text3"></MainButton>
            <MainButton v-bind:text="text4"></MainButton>
        </div>
        <!-- SNSシェア -->
        <div class="share_buttons">
            <SharingButtom v-bind:link="toTwitterLink" v-bind:icon="twitterIcon" />
            <SharingButtom v-bind:link="toLineLink" v-bind:icon="lineIcon" />
        </div>
    </div>



</template>
<script>
import SharingButtom from "@/components/atoms/SharingButtom.vue";
import MainButton from '@/components/atoms/MainButton.vue';
export default {
    components: {
        SharingButtom,
        MainButton,
    },
    data() {
        return {
            toTwitterLink: "http://twitter.com/share?text=きっと家計簿ぜひ使ってみてね&hashtags=家計簿&url=http://localhost:8080/assests",
            twitterIcon: require("@/assets/img/png/twitterIconCircleBlue.png"),
            toLineLink: "//timeline.line.me/social-plugin/share?url=シェアするページのURL&text=サンプルテキスト",
            lineIcon: require("@/assets/img/png/lineIconCircleGreen.png"),
            text1: '記録',
            text2: '分析',
            text3: '履歴',
            text4: 'マイページ',
        }
    },
}
</script>
<style scoped>
.header{
    display:flex;
}
.share_buttons {
    display: flex;
}
/* リセット */
button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    margin: 0;
    padding: 0;
    appearance: none;
}


.flex {
    display: flex;
    gap: 6px;
}
</style>