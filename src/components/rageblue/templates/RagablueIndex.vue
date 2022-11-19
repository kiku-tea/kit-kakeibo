<template>
    <p>RagableuIndex</p>
    <main class="main">
        <div class="main__left-container">
            <PCNav/>
        </div>
        <div class="main__right-container">
            <BottomView></BottomView>
            <FooterView></FooterView>
        </div>
    </main>
</template>
<script>
 import PCNav from '../organisms/PCNav.vue';
 import BottomView from '../organisms/BottomView.vue';
 import FooterView from '../organisms/FooterView.vue';
 export default{
    components:{
        PCNav,
        BottomView,
        FooterView
    }
 }
</script>
<style scoped>
.main{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.main > div{
    flex-basis: 100%;
}
.main .main__right-container{
    margin: 0;
    padding: 0;
}
@media screen and (min-width: 769px){
    .main > div{
        flex-basis: 50%;
    }
    .main .main__right-container{
        width: 375px;
        margin: auto;
        max-width: 375px;
    }
}
</style>