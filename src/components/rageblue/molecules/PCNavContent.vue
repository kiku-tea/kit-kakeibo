<template>
    <div class="card" >
        <img :src="backgroudImage" alt="">
        <div class="text">
            <ShuffleText :originalText="text"/>
        </div>
    </div>
</template>
<style lang="scss" scoped>

img{
    object-fit: cover;
    width: 100%;
    height: 101%;
}
.card {
    width: 50%;
    height: 33%;
    position: relative;
}

.text {
    position: absolute;
    top: 0px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: fit-content;
    height: fit-content;
}
</style>
<script>
import ShuffleText from '../atoms/ShuffleText.vue';
export default {
    props:{
        text: {
            type: String,
            default: "",
        },
        backgroudImage: {
            type: String,
            default: "",
        }
    },
    components: {
        ShuffleText
    },
    data() {
        return {
            test: "ABCD-MODEL"
        }
    },
}
</script>