<template>
  <a class="brandlink"
    :href="link" target="_blank" rel="noopener noreferrer">
    <figure class="brandlink__img">
      <img :src="src" :alt="alt">
    </figure>
  </a>
</template>
<script>
export default{
  props: {
    link: String,
    src: String,
    alt: String
  }
}
</script>
<style>
.brandlink{
  transition: opacity 130ms;
  display: block;
  width: 100%;
}
.brandlink .brandlink__img img{
  opacity: 1;
  transition: opacity 450ms;
  display: block;
  width: 100%;
}
/** hover */
.brandlink:hover{
  opacity: 0.65;
}
</style>