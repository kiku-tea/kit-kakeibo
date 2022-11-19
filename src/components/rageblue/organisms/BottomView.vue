<template>
  <section class="bottom">
    <FooterStaffList :staffList="staffList"></FooterStaffList>
    <!--<FooterBottun>{{text}}</FooterBottun>-->
    <div class="bottom__brandbtn">
      <LargeLinkButton>{{linkButtonText}}</LargeLinkButton>
    </div>
  </section>
  
</template>
<script>
import FooterStaffList from '../molecules/FooterStaffList.vue';
import LargeLinkButton from '../atoms/LargeLinkButton.vue';

export default{
  name: 'BottomView',
  components:{
    FooterStaffList,
    LargeLinkButton
  },
  data(){
    return {
      linkButtonText: 'BRAND TOP',
      staffList: [
        'Photo & Movie_Jun Okada［BE NATURAL］',
        'Styling_Tomoya Yagi',
        'Hair & Make-up_Yuka Toyama［mod’s hair］',
        'Web Development_Yusuke Fukunaga'
      ],
    }
  }
}
</script>
<style>
.bottom__brandbtn{
  position: relative;
  width: 78.7%;
  height: 0;
  padding-bottom: 21.3%;
  margin: 13.2% auto 0;
  font-size: 6.13vw;
  font-weight: 700;
  letter-spacing: 0.01;
}
@media screen and (min-width: 769px){
  .bottom__brandbtn{
    font-size: 23px;
  }
}
</style>