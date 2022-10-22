<template>
    <div class="header">
        <!-- ロゴ img-->
        <p>ロゴimg</p>
        <!-- ボタン -->
        <div v-for="nav in navs" :key="nav.text" >
            <MainButton :text="nav.text" :onClick="nav.onClick"/>
        </div>
        <!-- SNSシェア -->
        <div class="share_buttons">
            <SharingButton v-bind:link="toTwitterLink" v-bind:icon="twitterIcon" />
            <SharingButton v-bind:link="toLineLink" v-bind:icon="lineIcon" />
        </div>
    </div>
</template>
<script>
import SharingButton from "@/components/atoms/SharingButton.vue"
import MainButton from "@/components/atoms/MainButton.vue"
export default {
    components: {
        SharingButton,
        MainButton,
    },
    data() {
        return {
            toTwitterLink: "http://twitter.com/share?text=きっと家計簿ぜひ使ってみてね&hashtags=家計簿&url=http://localhost:8080/assests",
            twitterIcon: require("@/assets/img/png/twitterIconCircleBlue.png"),
            toLineLink: "//timeline.line.me/social-plugin/share?url=シェアするページのURL&text=サンプルテキスト",
            lineIcon: require("@/assets/img/png/lineIconCircleGreen.png"),
            navs:[
                {text:"入力", onClick:() => this.toInput()},
                {text:"分析", onClick:() => this.toAnalysis()},
                {text:"履歴", onClick:() => this.toRecord()},
                {text:"マイページ", onClick: () => this.toMypage()},
            ]
        }
    },
    methods:{
        toInput(){
            this.$router.push("/input-list/:id")
        },
        toAnalysis(){
            this.$router.push("/analysis/:id")
        },
        toRecord(){
            this.$router.push("/record")
        },
        toMypage(){
            this.$router.push("/mypage/:id")
        }
    }
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