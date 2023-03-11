<template>
    <div class="itemCredits f-din" v-for="(product, index) in products" :key="index">
        <div class="itemCredits__item">
            <a class="anchor" v-bind:href="`${product.link}`" target="_blank">
                <span class="name">{{ product.name }}</span>
                <span class="price">¥{{ product.price }}(tax in)</span>
            </a>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
    products: Array,
});
</script>
<style scoped>
.Look__block .itemCredits {
    margin-top: 4.53333%;
    text-align: center;
}

.itemCredits {
    margin-top: 4.53333%;
    text-align: center;
}

.f-din {
    font-family: urw-din-condensed, sans-serif;
    -webkit-font-smoothing: antialiased;
}

/* .Look__block  */
.itemCredits__item:nth-of-type(odd) {
    margin-right: 0.4em;
}


/* .Look__block  */
.itemCredits__item {
    position: relative;
    display: inline-block;
    font-size: 3.2vw;
}


/* .Look__block */
.itemCredits .anchor {
    position: relative;
    padding: 0.3em;
}

a {
    text-decoration: inherit;
    color: inherit;
    display: block;
    width: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/* .Look__block  */
.itemCredits .anchor:not(.disable):before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f6ea02;
    -webkit-transform: scaleX(0);
    -ms-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: right;
    -ms-transform-origin: right;
    transform-origin: right;
    -webkit-transition: -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
    transition: -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
    transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
    transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

/* .Look__block  */
.itemCredits .anchor:after {
    content: '';
    position: absolute;
    bottom: 0.1em;
    left: 0;
    width: 97%;
    height: 1px;
    background-color: #000;
    -webkit-transition: opacity 150ms;
    transition: opacity 150ms;
}

/* .Look__block  */
.itemCredits .name {
    font-weight: 700;
}

/* .Look__block  */
.itemCredits__item:nth-of-type(odd):after {
    content: '/';
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: -0.3em;
}

/* .Look__block */
.itemCredits span {
    position: relative;
}

.Look__block .itemCredits .price {
    margin-left: 0.4em;
}

.Look__block .itemCredits span {
    position: relative;
}

@media screen and (min-width: 769px) {

    /* .Look__block  */
    .itemCredits__item {
        font-size: 12px;
    }
}
</style>