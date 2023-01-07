<script setup>
import { ref, defineProps, onBeforeMount } from 'vue';
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
      <p class="look-intro__heading-occupation">{{occupation}}</p>
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
</style>