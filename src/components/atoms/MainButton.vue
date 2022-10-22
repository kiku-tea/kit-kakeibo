<template>
  <button class="button" v-on:click="onClick">{{text}}</button>
</template>

<style scoped>
	.button {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		width: 184px;
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2C3E50;
		color: #fff;
    border-radius: 100vh;
    transition: all .2s;
    border: 2px solid transparent;
	}
  .button:hover {
    color: #2C3E50;
    background-color: #fff;
    border: 2px solid currentColor;

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
