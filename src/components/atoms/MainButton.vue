<template>
  <button class="button" v-on:click="onClick" > {{text}}</button>
</template>

<style scoped>
	.button {
		padding: 0.5em 0;
		width: 147px;
    background-color: #2C3E50;
		color: #fff;
	}
</style>

<script>


export default{
  data(){
    return{
    }
  },
  props: {
    text:String, 
    onClick:Function
  },
}

</script>
