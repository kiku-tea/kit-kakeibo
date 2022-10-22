<template>
    <div class="flexbox">
      <p class="input_title">メールアドレス</p>
      <input class="input" type="email">
    </div>
</template>
<script>

export default {
    data() {
        return{

        }
    },
}
</script>

<style scoped>
.flexbox{
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.input_title, .input{
  margin: 0 10px ;
}
</style>
