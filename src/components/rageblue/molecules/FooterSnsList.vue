<template>
  <ul class="footer-snslist">
    <li v-for="(sns, index) in snsList"
      :key="index"
      class="footer-snslist__item">
      <IconLinkButton :link="sns.link" :src="sns.src" :alt="sns.alt"></IconLinkButton>
    </li>
  </ul>
</template>
<script>
import IconLinkButton from '../atoms/IconLinkButton.vue';
export default{
  components:{
    IconLinkButton
},
  props:{
    snsList: Array
  }
}
</script>
<style>
.footer-snslist{
  display: flex;
  justify-content: space-between;
  width: 63.86%;
  margin: auto;
  list-style: none;
}
.footer-snslist .footer-snslist__item{
  width: 19.83299%;
}
</style>