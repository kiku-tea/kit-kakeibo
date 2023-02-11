<template>
    <p>RagableuIndex</p>
    <main class="main">
        <div class="main__left-container">
            <PCNav />
        </div>
        <div class="main__right-container">
            <HeaderView />
            <LookBlock>
                <Profile6View></Profile6View>
            </LookBlock>
            <LookBlock>
                <BottomView></BottomView>
                <FooterView></FooterView>
            </LookBlock>
        </div>
    </main>
</template>
<script>
import PCNav from '../organisms/PCNav.vue';
import BottomView from '../organisms/BottomView.vue';
import FooterView from '../organisms/FooterView.vue';
import Profile6View from '../organisms/Profile6View.vue';
import HeaderView from '../organisms/HeaderView.vue';
import LookBlock from '../molecules/LookBlock.vue';

export default {
    components: {
        PCNav,
        BottomView,
        FooterView,
        LookBlock,
        Profile6View,
        HeaderView
    }
}
</script>
<style scoped>
.main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.main>div {
    flex-basis: 100%;
}

.main__left-container {
    height: 100vh;
    position: sticky;
    top: 0;
}

.main .main__right-container {
    margin: 0;
    padding: 0;
}

@media screen and (min-width: 769px) {
    .main>div {
        flex-basis: 50%;
    }

    .main .main__right-container {
        width: 375px;
        margin: auto;
        max-width: 375px;
    }


}

@media screen and (max-width: 768px) {
    .main__left-container {
        position: relative;
    }
}
</style>