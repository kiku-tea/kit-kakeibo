<template>
    <div></div>
    <div class="contents">
        <PCNavContent v-for="content in contents" :key="content"  :text="content.text" :backgroud-image="content.backgroudImage"/>
    </div>
</template>
<style lang="scss" scoped>
 .contents{
    display: flex;
    gap: 0; 
    flex-wrap: wrap;
    width: 50vw;
    height: 100vh;
 }
</style>
<script>
import PCNavContent from '../molecules/PCNavContent.vue';
export default{
    components:{
        PCNavContent
    },
    data(){
        return{
            contents:[
                {text: "JOSIAH-MODEL",backgroudImage: "/img/human/human1.webp"},
                {text: "ABE SHUNICHIRO-DANCER",backgroudImage: "/img/human/human2.webp"},
                {text: "ZAIKE KONATSU",backgroudImage: "/img/human/human3.webp"},
                {text: "MAYUKI-VINTAGE SHOP STAFF",backgroudImage: "/img/human/human4.webp"},
                {text: "MOCHIZUKI TAKUYA-RAGEBLUE STAFF",backgroudImage: "/img/human/human5.webp"},
                {text: "SASAKI TAKANE-HAIR STYLIST",backgroudImage: "/img/human/human6.webp"},
            ]
        }
    }
}
</script>