<template>
    <section class="Main is-active fInview--infinite--enter" id="Main">
        <div class="Main__label PC">
            <a class="anchor" href="https://www.dot-st.com/m/rageblue/" target="_blank"></a>
        </div>
        <div class="Main__visual">
            <!-- <ul class="list SP">
                <li class="list__item">
                    <ul class="images images--1">
                        <li class="image is-scale" style="z-index: 0; transition: none 0s ease 0s; width: 0px;">
                            <figure>
                                <img src="/static/docs/rageblue/pages/college_tshirt/assets/images/mv_1_1.jpg" alt="">
                            </figure>
                        </li>
                        <li class="image is-scale" style="width: 0px; z-index: 0; transition: none 0s ease 0s;">
                            <figure>
                                <img src="/static/docs/rageblue/pages/college_tshirt/assets/images/mv_1_2.jpg" alt="">
                            </figure>
                        </li>
                        <li class="image"
                            style="width: 100%; z-index: 1; transition: width 520ms cubic-bezier(0.33, 1, 0.68, 1) 0s;">
                            <figure>
                                <img src="/static/docs/rageblue/pages/college_tshirt/assets/images/mv_1_3.jpg" alt="">
                            </figure>
                        </li>
                    </ul>
                </li>
                <li class="list__item">
                    <ul class="images images--2">
                        <li class="image is-scale" style="z-index: 0; transition: none 0s ease 0s; width: 0px;">
                            <figure><img src="/static/docs/rageblue/pages/college_tshirt/assets/images/mv_2_1.jpg"
                                    alt=""></figure>
                        </li>
                        <li class="image is-scale" style="width: 0px; z-index: 0; transition: none 0s ease 0s;">
                            <figure><img src="/static/docs/rageblue/pages/college_tshirt/assets/images/mv_2_2.jpg"
                                    alt=""></figure>
                        </li>
                        <li class="image"
                            style="width: 100%; z-index: 1; transition: width 520ms cubic-bezier(0.33, 1, 0.68, 1) 0s;">
                            <figure><img src="/static/docs/rageblue/pages/college_tshirt/assets/images/mv_2_3.jpg"
                                    alt=""></figure>
                        </li>
                    </ul>
                </li>
            </ul> -->
            <h1 class="title">
                <picture>
                    <source media="(max-width:768px)" srcset="/assets/img/svg/main_title-sp.svg"><img
                        src="/assets/img/svg/main_title.svg" alt="FEELS LIKE SUMMER">
                </picture>
            </h1>
            <h2 class="catch">
                <p class="inner"><span class="en">6</span>人が着る、夏のカレッジ<span class="en">T</span>。</p>
            </h2>
        </div>
        <p class="Main__lead">
            今季のレイジブルーのイチオシ、<br>ロゴデザインが特徴のカレッジT！<br>一枚でサマになる夏に最適なアイテムです。<br>そこで今回は、さまざまな男女6名に<br>カレッジTを着こなしてもらいました。</p>
        <div class="Main__scroll f-din PC"><a class="anchor mScroll" href="#Look">
                <p class="text">SCROLL DOWN</p><span class="arrow"></span>
            </a></div>
    </section>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FooterView',
    data: function () {
        return {

        };
    }
});
</script>
<style>
.Main__visual {
    position: relative;
    overflow: hidden;
}

.Main__visual .title {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 84.4vw;
    margin: auto;
    width: 15.6vw;
    height: 137.85333vw;
    z-index: 5;
}

.Main__visual .catch {
    position: absolute;
    bottom: 6vw;
    left: 5.06667vw;
    color: #fff;
    font-size: 6.26667vw;
    font-weight: 600;
    letter-spacing: 0.03em;
    z-index: 3;
}

.Main.is-active .Main__visual .catch .inner {
    opacity: 1;
    -webkit-transition: opacity 0ms 1300ms;
    transition: opacity 0ms 1300ms;
}

.Main__visual .catch .inner {
    opacity: 0;
}

.Main__visual .catch .en {
    font-size: 7.2vw;
    font-weight: 400;
}

.Main.is-active .Main__visual .catch:after {
    -webkit-animation: main_catch 1050ms cubic-bezier(0.19, 1, 0.22, 1) 750ms forwards;
    animation: main_catch 1050ms cubic-bezier(0.19, 1, 0.22, 1) 750ms forwards;
}

.Main__lead {
    margin-top: 11.86667%;
    text-align: center;
    font-size: 3.73333vw;
    letter-spacing: 0.06em;
    line-height: 1.8;
}

.f-din {
    font-family: urw-din-condensed, sans-serif;
    -webkit-font-smoothing: antialiased;
}

@media screen and (min-width: 769px) {
    .Main__label .anchor {
        height: 100%;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url(../../../assets/img/svg/logo_rb.svg);
    }

    .Main__label {
        position: absolute;
        top: 3.77358vh;
        left: 0;
        right: 0;
        margin: auto;
        width: 120px;
        height: 16px;
        z-index: 3;
    }

    .Main {
        position: relative;
        height: 100vh;
        min-height: 680px;
    }

    .Main__visual {
        padding-top: 18.21731vh;
        text-align: center;
    }

    .Main__visual .title {
        position: static;
        margin: auto;
        width: 350px;
        height: 173px;
    }

    .Main__visual .catch {
        display: inline-block;
        position: relative;
        bottom: auto;
        left: auto;
        margin-top: 3.90371vh;
        color: #000;
        font-size: 19px;
    }

    .Main.is-active .Main__visual .catch .inner {
        -webkit-transition: opacity 0ms 1350ms;
        transition: opacity 0ms 1350ms;
    }

    .Main__visual .catch .en {
        font-size: 22px;
    }

    .Main__visual .catch .inner:after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #000;
    }

    .Main.is-active .Main__visual .catch:after {
        -webkit-animation-delay: 800ms;
        animation-delay: 800ms;
    }

    .Main__lead {
        margin-top: 5.27001vh;
        font-size: 14px;
        opacity: 0;
    }

    .Main.is-active .Main__lead {
        opacity: 1;
        -webkit-transition: opacity 700ms 1350ms;
        transition: opacity 700ms 1350ms;
    }

    .Main__scroll {
        position: absolute;
        bottom: 8.58816vh;
        left: 0;
        width: 100%;
        opacity: 0;
    }

    .Main.is-active .Main__scroll {
        opacity: 1;
        -webkit-transition: opacity 800ms 1350ms;
        transition: opacity 800ms 1350ms;
    }

    .Main__scroll .anchor {
        width: 54px;
        height: 54px;
        margin: auto;
        background-color: #f6ea02;
        border-radius: 50%;
    }

    .Main.is-active .Main__scroll .anchor:before {
        -webkit-animation: main_scroll 1700ms cubic-bezier(0.165, 0.84, 0.44, 1) 2100ms infinite;
        animation: main_scroll 1700ms cubic-bezier(0.165, 0.84, 0.44, 1) 2100ms infinite;
    }


    .Main__scroll .anchor:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 54px;
        height: 54px;
        background-color: #f6ea02;
        border-radius: 50%;
    }

    .Main__scroll .text {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 14px;
        font-weight: 700;
        pointer-events: none;
    }

    .Main__scroll .arrow {
        position: absolute;
        top: 47px;
        left: 0;
        right: 0;
        margin: auto;
        width: 1px;
        height: 32px;
        background-color: #000;
    }

    .Main__scroll .arrow:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: -3px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 6px 4px 0 4px;
        border-color: #000000 transparent transparent transparent;
    }

}
</style>