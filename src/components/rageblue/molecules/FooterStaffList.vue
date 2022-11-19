<template>
  <ul class="footer-stafflist">
    <li v-for="(staff,index) in staffList"
      class="footer-stafflist__item"
      :key="index">{{staff}}</li>
  </ul>
</template>
<script>
export default{
  props:{
    staffList: Array
  }
}
</script>
<style>
.footer-stafflist{
  margin-top: 4.53%;
  text-align: center;
  list-style: none;
}
.footer-stafflist .footer-stafflist__item{
  font-size: 3.2vw;
  font-family: Arial, sans-serif;
  letter-spacing: 0.04em;
  line-height: 1.5;
}
.footer-stafflist .footer-stafflist__item:nth-child(n+2){
  margin-top: 1.125em;
}
@media screen and (min-width: 769px){
  .footer-stafflist .footer-stafflist__item{
    font-size: 12px;
  }
}
</style>