<template>
  <a class="linkbtn-large" :href="link">
    <span class="linkbtn-large__text"><slot></slot></span>
    <svg class="linkbtn-large__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.75 7.813">
      <path class="cls-1" d="M6.75,3.908,0,7.813V0Z"></path>
    </svg>
  </a>
</template>
<script>
export default {
  props: {
    link: String
  }
}
</script>
<style scoped>
.linkbtn-large{
  position: relative;
  display: block;
  color: #fff;
  transition: color 100ms;
  height: 80px;
  background-color: #000;
}
.linkbtn-large::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f6ea02;
  transform: scaleX(0) translate3d(0,0,0);
  transform-origin: right;
  transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
}
.linkbtn-large .linkbtn-large__text{
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  background-color: transparent;
  font-family: urw-din-condersed, sans-serif;
  font-weight: 700;
  letter-spacing: 0.01em;
}

.linkbtn-large .linkbtn-large__arrow{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 6.77966%;
  margin: auto;
  width: 1.69492%;
  height: 5.625%;
  background-color: transparent;
}
.linkbtn-large .linkbtn-large__arrow .cls-1{
  fill: #fff;
  fill-rule: evenodd;
}

/** hover */
.linkbtn-large:hover::before{
  transform: scaleX(1) translate3d(0,0,0);
  transform-origin: left;
}
.linkbtn-large:hover .linkbtn-large__text{
  color: #000;
}
.linkbtn-large:hover .linkbtn-large__arrow .cls-1{
  fill: #000;
}
</style>