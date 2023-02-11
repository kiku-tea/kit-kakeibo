<script setup>
import { ref, defineProps, onBeforeMount, onMounted, onBeforeUnmount } from 'vue';
import RandomChar from "../atoms/RandomChar.vue";
const props = defineProps({
  num: Number,
  firstName: String,
  familyName: String,
  occupation: String,
  insta: String,
});

const delay = ref(100);

onBeforeMount(()=>{
  delay.value = 1000 / (props.firstName.length + props.familyName.length);
});

let once = false;
const headingOcc = ref(); //当コンポーネントのDOMアクセス用
const onScroll = ()=>{
  console.log(headingOcc.value);
  const targetPosition = headingOcc.value.getBoundingClientRect().top;
  if(targetPosition <= window.innerHeight && !once){
    once = true;
    headingOcc.value.classList.add('is-show');
  }
}

onMounted(()=>{
  window.addEventListener('scroll', onScroll);
  onScroll();
});
onBeforeUnmount(()=>{
  window.removeEventListener('scroll', onScroll);
});

</script>
<template>
  <div class="look-intro">
    <h3 class="look-intro__heading">
      <p class="look-intro__heading-num">#{{num.toString().padStart(2,'0')}}</p>
      <p class="look-intro__heading-name">
        <RandomChar v-for="char,i in firstName.split('')" :key="i"
          :char="char" :time="500" :delay="i*delay" ></RandomChar>
        <span >&nbsp;</span>
        <RandomChar v-for="char,i in familyName.split('')" :key="i"
          :char="char" :time="500" :delay="(firstName.length*delay + i*delay)"></RandomChar>
      </p>
      <p class="look-intro__heading-occupation" ref="headingOcc"><span>{{occupation}}</span></p>
    </h3>
    <p class="look-intro__lead"><slot></slot></p>
    <div class="look-intro__insta">
      <a class="look-intro__insta-anchor" :href="'https://instagram.com/'+insta+'/'">
        <p >{{insta}}</p>
      </a>
    </div>
  </div>
</template>
<style scoped>
.look-intro{
  text-align: center;
}
.look-intro__insta-anchor{
  position: relative;
  display: inline-block;
  padding: 13px;
  padding-left: 32px;
  width: auto;
  font-family: Arial;
}
.look-intro__insta-anchor p{
  position: relative;
  z-index: 1;
}
.look-intro__insta-anchor::after{
  content: '';
  position: absolute;
  top: 3%;
  bottom: 0;
  left: 0;
  width: 32px;
  height: 32px;
  margin: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("@/assets/img/svg/ico_insta.svg");
}

.look-intro__heading-occupation{
  font-size: 12px;
  display: inline-block;
  position: relative;
  margin-top: 2.67%;
  font-weight: 600;
}
.look-intro__heading-occupation span{
  opacity: 0;
}
.look-intro__heading-occupation.is-show span{
  opacity: 1;
}
.look-intro__heading-occupation::after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  transform: scaleX(0) translate3d(0,0,0);
}
.look-intro__heading-occupation.is-show::after{
  animation: look_heading_occu 700ms cubic-bezier(0.19, 1, 0.22, 1) forwards;
}
@keyframes look_heading_occu {
  0% {
    transform: scaleX(0) translate3d(0,0,0);
    transform-origin: left;
  }
  50% {
    transform-origin: left;
  }
  51% {
    transform-origin: right;
  }
  50%,55%{
    transform: scaleX(1) translate3d(0,0,0);
  }
  100% {
    transform: scaleX(0) translate3d(0,0,0);
    transform-origin: right;
  }
}
</style>