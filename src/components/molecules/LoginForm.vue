<style scoped>
.form-item {
  margin: 0 auto;
  text-align: center;
}

label {
  display: block;
}

input {
  width: 50%;
  padding: .5em;
  font: inherit;
}

button {
  padding: 0.5em;
  margin: 1em;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

<template>
  <div class="login">
    <div class="form-item">
      <label for="email">Email</label>
      <input
        id="email"
        autocomplete="off"
        type="text"
        v-model="this.$store.state.mailAddress"
      >
    </div>
    <div class="form-item">
      <label for="password">Password</label>
      <input
        id="password"
        autocomplete="off"
        type="password"
        v-model="password"
      >
    </div>
    <div class="form-item">
      <!-- <button class="button" @click="handle()">Button</button>
      <MainButton v-bind:text="title" v-bind:onClickProp2="alertTest"
        bgColor="#f0f" v-bind:isCloseProp="isClose"
        v-bind:styleObject="styleObj"><span style="color: red;">けんてぃ</span></MainButton> -->
      <div class="flex">
        <MainButton v-bind:text="ボタン1"></MainButton>
        <MainButton v-bind:text="ボタン2"></MainButton>
        <MainButton v-bind:text="ボタン3"></MainButton>
        <MainButton v-bind:text="ボタン4"></MainButton>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import crypto from 'crypto-js';
import MainButton from '@/components/atoms/MainButton.vue';


export default defineComponent({
  name: 'LoginForm',
  components: {
    MainButton
  },
  data () {
    return {
      email: '',
      password: '',
      title: 'ボタン',
      isClose: false,
      styleObj: {
        backgroundColor: '#0f0',
        color: '#FFF'
      },
    }
  },
  props: {
    login: {
      type: Function,
      required: true
    }
  },
  methods: {
    handle () {
      this.ecrypt()
      return this.login({
        'user': {
          'email': this.email,
          'password': this.password,
        }
      })
      .catch(err => { throw err })
    },
    alertTest(){
      alert("アラートテスト")
      console.log("アラートテスト");
    },

    //cookieの暗号化概要
    //・LoginForm.vue store/index.js/this.$store.state.mailAddress
    //暗号化メソッド
    ecrypt(){
      const ecrypted = crypto.AES.encrypt(this.$store.state.mailAddress, '任意の暗号化フレーズ');
      this.$cookies.set("karidata", ecrypted.toString(), 10 * 1 * 1 * 1)
    },
    //復号化メソッド
     decrypt(){
      const ecryptedData = this.$cookies.get("karidata")
      const decrypted = crypto.AES.decrypt(ecryptedData, '任意の暗号化フレーズ');
      this.$store.state.mailAddress = decrypted.toString(crypto.enc.Utf8)
     },
  },

  mounted: function() {
    console.log("正常です")
    this.decrypt()
  },

});
</script>

