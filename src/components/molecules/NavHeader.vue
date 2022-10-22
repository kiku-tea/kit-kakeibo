<template>
    <div class="header">
        <!-- ロゴ img-->
        <p>ロゴimg</p>
        <!-- ボタン -->
        <button>ボタン1</button>
        <button>ボタン2</button>
        <button>ボタン3</button>
        <button>ボタン4</button>
        <!-- SNSシェア -->
        <div class="share_buttons">
            <SharingButtom v-bind:link="toTwitterLink" v-bind:icon="twitterIcon" />
            <SharingButtom v-bind:link="toLineLink" v-bind:icon="lineIcon" />
        </div>
    </div>



</template>
<script>
import SharingButtom from "@/components/atoms/SharingButtom.vue"
export default {
    components: {
        SharingButtom,
    },
    data() {
        return {
            toTwitterLink: "http://twitter.com/share?text=きっと家計簿ぜひ使ってみてね&hashtags=家計簿&url=http://localhost:8080/assests",
            twitterIcon: require("@/assets/img/png/twitterIconCircleBlue.png"),
            toLineLink: "//timeline.line.me/social-plugin/share?url=シェアするページのURL&text=サンプルテキスト",
            lineIcon: require("@/assets/img/png/lineIconCircleGreen.png"),
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
</style>