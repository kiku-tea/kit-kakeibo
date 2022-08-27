<template>
	<button class="button" v-bind:style="{ backgroundColor: bgColor}">{{ text }}<slot></slot></button>
  <button v-bind:class="{close: isCloseProp}" >{{ text }}<slot></slot>1</button>
  <button v-bind:class="{close: isCloseProp2}" >{{ text }}<slot></slot>2</button>
  <button v-bind:style="styleObject" onClick="{{onClick}}">{{ text }}<slot></slot></button>
</template>

<style scoped>
	.button {
		margin: 0;
		padding: 0.5em 0;
		width: 147px;
		/* background-color: #2C3E50; */
    background-color: #fff;
		color: #fff;
	}
  .close{
    background-color: #000;
    color: #f0f;
  }
</style>

<script>
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
// 	name : MainButton,
// })

export default{
  data(){
    return{

    }
  },
  props: ['text', 'bgColor', 'isCloseProp', 'styleObject', 'isCloseProp2', 'onClickProp'],
  methods:{
    clickEvent(){
        this.$emit('form-child')
    },
    stopEvent: function(){
        event.stopPropagation()
    },
    onClick: this.onClickProp
  }
}

</script>
