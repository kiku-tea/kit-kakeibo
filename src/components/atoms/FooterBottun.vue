<template>
  <a class="footerbottun" :href="link">
    <span>BRAND TOP</span>
    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.75 7.813"><path class="cls-1" d="M6.75,3.908,0,7.813V0Z"></path></svg>
  </a>
</template>
<script>
export default {
  data(){
    return {
      link: '/home-page/rageblue'
    }
  }
}
</script>
<style scoped>
a.footerbutton{
  display: block;
  color: #fff;
  transition: color 100ms;
}
</style>