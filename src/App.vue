<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login-test">LoginTest</router-link>|
    <!-- analysis -->
    <router-link to="/analysis/:id">分析</router-link> |
    <!-- input-list -->
    <router-link to="/input-list/:id">入力一覧</router-link> |
    <!-- login -->
    <router-link to="/login">ログ:メイン</router-link> |
    <router-link to="/login/mailaddress-form/complete">ログ:メール送信完</router-link> |
    <router-link to="/login/mailaddress-form">ログ:メアド入力</router-link> |
    <router-link to="/login/resetting-password">ログ:パス再設定</router-link> |
    <!-- mypage -->
    <router-link to="/mypage/mailaddress-form/complete">マイ:メール送信完</router-link> |
    <router-link to="/mypage/mailaddress-form">マイ:メアド入力</router-link> |
    <router-link to="/mypage/:id">マイ:メイン</router-link> |
    <router-link to="/mypage/:id/edit">マイ:編集</router-link> |
    <router-link to="/mypage/:id/edit/confirmation">マイ:編集確認</router-link> |
    <router-link to="/mypage/:id/resetting-password">マイ:パス再設定</router-link> |
    <!-- record -->
    <router-link to="/record">記録</router-link> |
    <!-- register -->
    <router-link to="/register/mailaddress-form">新-登:メアド入力</router-link> |
    <router-link to="/register/mailaddress-form/complete">新-登:メール送信完</router-link> |
    <router-link to="/register/confirmation">新-登:入力確認</router-link> |
    <router-link to="/register">新-登:入力</router-link> |
    <router-link to="/register">新-登:入力</router-link> |


  </nav>
  <router-view>
  </router-view>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
