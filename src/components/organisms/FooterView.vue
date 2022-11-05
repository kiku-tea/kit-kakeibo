<template>
  <footer>
    <FooterStaffList></FooterStaffList>
    <FooterBottun>{{text}}</FooterBottun>
  </footer>
</template>
<script>
import { defineComponent } from 'vue';
import FooterBottun from '@/components/atoms/FooterBottun.vue';
import FooterStaffList from '@/components/molecules/FooterStaffList.vue';

export default defineComponent({
  name: 'FooterView',
  components:{
    FooterBottun,
    FooterStaffList
},
  data: function(){
    return {
      text: 'BRAND TOP'
    };
  }
});
</script>