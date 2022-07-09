<template>
  <button @click="openModal">Click</button>
  <modal v-show="showContent" v-on:form-child="closeModal">aaa</modal>
  <input type="text" v-model="keyword">
  <table>
    <tr v-for="user in filteredUsers" :key="user.id">
      <td v-text="user.id"></td>
      <td v-text="user.name"></td>
      <td v-text="user.email"></td>
    </tr>
  </table>
</template>
<script>
import modal from '@/components/modal/TestModal.vue'
// import { USERWHITESPACABLE_TYPES } from '@babel/types';
export default{
  components:{
    modal,
  },
  data(){
    return{
      showContent: false,
      keyword:'',
      users: [
                {
                    id: 1,
                    name: '鈴木太郎',
                    email: 'suzukitaro@example.com'
                },
                {
                    id: 2,
                    name: '佐藤二郎',
                    email: 'satoujiro@example.com'
                },
                {
                    id: 3,
                    name: '田中三郎',
                    email: 'tanakasaburo@example.com'
                },
                {
                    id: 4,
                    name: '山本四郎',
                    email: 'yamamotoshiro@example.com'
                },
                {
                    id: 5,
                    name: '高橋五郎',
                    email: 'takahashigoro@example.com'
                },
            ]
    }
     
  },
  computed:{
    filteredUsers: function(){

      var users = [];
      for(var i in this.users){
        var user = this.users[i];
        if(user.name.indexOf(this.keyword) !== -1){
          users.push(user);
        }
      }
      return users;
    }
  },
  methods:{
    openModal:function(){
      this.showContent = true
    },
    closeModal:function(){
      this.showContent = false
    }
  }
}

</script>
<style>
#overlay{
  /* 要素を重ねた時の順番 */
  z-index:1;

  /* 画面全体を覆う設定 */
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);

  /* 画面の中央に要素を表示させる設定 */
  display: flex;
  align-items: center;
  justify-content: center;

}

#content{
  z-index:2;
  width:50%;
  padding: 1em;
  background:#fff;
}

</style>