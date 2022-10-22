<template>
	<div class="img_wrapper">
		<a v-bind:href="shareLink" target="_blank">
			<img class="sns_img" v-bind:src="shareIcon" alt="">
		</a>
	</div>
</template>
<script>
export default {
	data() {
		return {
			shareLink: this.link,
			shareIcon: this.icon
		}
	},
	props: {
		link: String,
		icon: String,
	},
}
</script>
<style scoped>
.img_wrapper {
	padding-left:10px;

}
.sns_img {
	border-radius: 50%;
	height: 50px;
	width: 50px;
}
</style>
