<template>
  <a class="iconlinkbtn" :href="link" target="_blank">
    <figure class="iconlinkbtn__icon">
      <img :src="src" :alt="alt">
    </figure>
  </a>
</template>
<script>
export default {
  props: {
    link: String,
    src: String,
    alt: String
  }
}
</script>
<style>
.iconlinkbtn{
  display: block;
  width: 100%;
}
.iconlinkbtn .iconlinkbtn__icon{
  height: 0;
  padding-bottom: 100%;
}
.iconlinkbtn .iconlinkbtn__icon img{
  display: block;
  width: 100%;
  opacity: 1;
  transition: opacity 450ms;
}
.iconlinkbtn:hover .iconlinkbtn__icon img{
  animation: mo_push 550ms cubic-bezier(0.175, 0.855, 0.32, 1.275) forwards;
}
@keyframes mo_push{
  12%{
    transform: scale(1.15);
  }
  100%{
    transform: scale(1);
  }
}
</style>