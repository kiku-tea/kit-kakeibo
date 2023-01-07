<script setup>
import { ref, defineProps, onMounted, onBeforeUnmount } from 'vue';
const props = defineProps({
  char: { type: String, default: ''},
  time: { type: Number, default: 20 },
  delay: {type: Number, default: 20}
});
const el = ref(); //当コンポーネントのDOMアクセス用
const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYG01234566789!#$%&()=~|,./<>?_;:][+*}{@';
const outputChar = ref(props.char);

/**
 * ランダムな１文字を生成
 * @return {character} 
 */
const generateRandomChar = ()=>{
  return randomChars.charAt(Math.floor(Math.random() * randomChars.length));
}

let start, prevTimestamp;
/**
 * animationの1ステップの処理
 * @param {float} timestamp - 実行時のタイムスタンプ
 */
const step = (timestamp) => {
  if(start === undefined) start = timestamp;//開始時間を記録
  const elapsed = timestamp - start;//経過時間
  if(prevTimestamp !== timestamp){//主な処理
    outputChar.value = generateRandomChar();
  }
  console.log(props.time);
  if(elapsed > props.time){ //終わりの処理
    outputChar.value = props.char
    return;
  }
  prevTimestamp = timestamp;
  window.requestAnimationFrame(step);
};

let once = false;
const onScroll = ()=>{
  const targetPosition = el.value.getBoundingClientRect().top;
  if(targetPosition <= window.innerHeight && !once){
    once = true;
    setTimeout(()=>{
      window.requestAnimationFrame(step);
    }, props.delay);
    
  }
};

onMounted(()=>{
  window.addEventListener('scroll', onScroll);
  onScroll();
});
onBeforeUnmount(()=>{
  window.removeEventListener('scroll', onScroll);
});

</script>
<template>
  <span class="char" ref="el">{{outputChar}}</span>
</template>
<style scoped></style>