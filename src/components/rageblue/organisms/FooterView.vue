<template>
  <footer class="footer">
    <div>
      <FooterSnsList :snsList="snsList"></FooterSnsList>
    </div>
    <div class="footer__brandlink">
      <BrandLink :link="`/rageblue`" :src="require('@/assets/img/svg/logo_rb.svg')" :alt="`RAGEBLUE`"></BrandLink>
    </div>
    <p class="footer__copyright">Copyright © kitlab All rights reserved</p>
  </footer>
</template>
<script>
import { defineComponent } from 'vue';
import FooterSnsList from '../molecules/FooterSnsList.vue';
import BrandLink from '../atoms/BrandLink.vue';

export default defineComponent({
  name: 'FooterView',
  components:{
    FooterSnsList,
    BrandLink
},
  data: function(){
    return {
      snsList: [
        { link: '', src: require('@/assets/img/svg/ico_ds.svg'), alt: 'dot-st' },
        { link: '', src: require('@/assets/img/svg/ico_tw.svg'), alt: 'Twitter' },
        { link: '', src: require('@/assets/img/svg/ico_line.svg'), alt: 'LINE' },
        { link: '', src: require('@/assets/img/svg/ico_insta.svg'), alt: 'instagram' }
      ],
    };
  }
});
</script>
<style>
.footer{
  position: relative;
  z-index: 2;
  margin-top: 13.2%;
  padding-bottom: 14.6667%;
}
.footer__brandbtn{
  position: relative;
  width: 78.7%;
  height: 0;
  padding-bottom: 21.3%;
  margin: 13.2% auto 0;
  font-size: 6.13vw;
  font-weight: 700;
  letter-spacing: 0.01;
}

.footer__brandlink{
  width: 43.8667%;
  margin: 10.2667% auto 0;
}
.footer__copyright{
  margin-top: 16.133%;
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 2.667vm;
  letter-spacing: 0.03em;
}

@media screen and (min-width: 769px){
  .footer__brandbtn{
    font-size: 23px;
  }
  .footer__copyright{
    font-size: 13px;
  }
}
</style>