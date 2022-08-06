<template>
	<button class="button">{{ text }}<slot></slot></button>
</template>

<style scoped>
	.button {
		margin: 0;
		padding: 0.5em 0;
		width: 147px;
		background-color: #2C3E50;
		color: #fff;
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
  props: ['text'],
  methods:{
    clickEvent(){
        this.$emit('form-child')
    },
    stopEvent: function(){
        event.stopPropagation()
    }
  }
}

</script>
