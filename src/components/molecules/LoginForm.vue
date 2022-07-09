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
      <button class="button" @click="handle()">Button</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import crypto from 'crypto-js';



export default defineComponent({
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: ''
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
</style>