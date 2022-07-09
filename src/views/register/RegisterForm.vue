<template>
  <header>ショムカン.</header>

    <h1 class="na">アカウント新規登録</h1>

  <Form @submit="submit" v-bind:validation-schema="schema" v-slot:default="{ errors }">

      <p>名前</p>
      姓：<Field type="text" v-model="lastName" name="lastName"
        class="form-control" v-bind:class="{ 'is-invalid': errors.lastName }" placeholder="システナ"/>
      <div class="invalid-feedback">{{errors}}</div>
      名：<Field type="text" v-model="firstName" name="firstName"
        class="form-control" :class="{ 'is-invalid': errors.firstName }" placeholder="太郎"/>
      <div class="invalid-feedback">{{errors.firstName}}</div>
      <br>
      
      <!-- <p>フリガナ</p>
      セイ：<Field type="text" v-model="lastNameKana" name="lastNameKana"
        class="form-control" :class="{ 'is-invalid': errors.lastNameKana }" placeholder="システナ"/>
      <div class="invalid-feedback">{{errors.lastNameKana}}</div>
      メイ：<Field type="text" v-model="firstNameKana" name="firstNameKana"
        class="form-control" :class="{ 'is-invalid': errors.firstNameKana }" placeholder="タロウ"/>
      <div class="invalid-feedback">{{errors.firstNameKana}}</div>

      <p>社員番号</p>
      <Field type="text" v-model="userId" name="userId"
        class="form-control" :class="{ 'is-invalid': errors.userId }" placeholder="20xxx"/>
      <div class="invalid-feedback">{{errors.userId}}</div>

      <p>所属部署</p>
      <select v-model="departmentId">
        <option  v-for="sdhonbu in info" :key="sdhonbu.departmentName" v-bind:value="sdhonbu.departmentId"> {{sdhonbu.departmentName}}</option>
      </select>

      <p>メールアドレス</p>
      <Field type="email" v-model="mailAddress" name="mailAddress"
        class="form-control" :class="{ 'is-invalid': errors.mailAddress }" placeholder="xxxx@systena.co.jp"/>
      <div class="invalid-feedback">{{errors.mailAddress}}</div>

      <p>パスワード</p>
      <Field type="password" v-model="password" name="password"
        class="form-control" :class="{ 'is-invalid': errors.password }" />
      <div class="invalid-feedback">{{errors.password}}</div>

      <p>パスワード再入力</p>
      <Field type="password" v-model="rePassword" name="rePassword"
        class="form-control" :class="{ 'is-invalid': errors.rePassword }" />
      <div class="invalid-feedback">{{errors.rePassword}}</div> -->

    <div class="error_process">
      <p v-show="errorFlagInput">入力エラー</p>
      <p v-show="errorFlagDuplicate">入力された社員番号は登録済みです</p>
      <p v-show="errorFlagOthers">サーバとの通信にエラーが発生しています</p>
    </div>

      <div class="btn_trs">
        <button type="submit" id="submitbutton"   >登録</button>
        <input type="submit" value="送信する">
      </div>
  
  </Form>
  
</template>

<script>
import axios from 'axios';
import { Form,Field } from 'vee-validate';
import * as Yup from 'yup';

export default {
  components:{
    Form,
    Field
  },
  data(){
    const schema = Yup.object().shape({
        lastName: Yup.string()
            .required('入力必須'),
        firstName: Yup.string()
            .required('入力必須'),
        lastNameKana: Yup.string()
            .matches(/^([ァ-ン]|ー)+$/,'カタカナで入力してください')
            .required('入力必須'),
        firstNameKana: Yup.string()
            .matches(/^([ァ-ン]|ー)+$/,'カタカナで入力してください')
            .required('入力必須'),
        userId: Yup.string()
            .matches(/^[0-9]+$/,'半角で入力してください')
            .required('入力必須'),
        mailAddress: Yup.string()
            .email('無効のメールアドレスです')
            .required('入力必須'),
        password: Yup.string()
          .min(8, 'パスワードは8文字以上')
          .required('入力必須'),
        rePassword: Yup.string()
          .oneOf([Yup.ref('password'), null], '一致していません')
          .required('入力必須')
      });

    return{
      info: null,
      lastName:"",
      firstName:"",
      lastNameKana:"",
      firstNameKana:"",
      userId:"",
      department_id:"",
      mailAddress:"",
      password:"",

      schema,

      errorFlagInput:false,
      errorFlagDuplicate:false,
      errorFlagOthers:false
    }
  },

  created(){
    const departmentsPath = process.env.VUE_APP_HOST + '/departments'
    axios
      .get(departmentsPath)
      .then(response => (this.info = response.data))
  },


  methods:{
    submit(){
      const usersPath = process.env.VUE_APP_HOST + '/users'
      axios.post(usersPath, {
        lastName: this.lastName,
        firstName: this.firstName,
        lastNameKana: this.lastNameKana,
        firstNameKana: this.firstNameKana,
        userId: this.userId,
        departmentId: this.departmentId,
        mailAddress: this.mailAddress,
        password: this.password
            }).then(response => {
                console.log(response);
              if(response.status==201){
                this.$router.push('/')
              }   

            })
              .catch(error => {
                console.log(error)
                switch (error.response.status) {
                  case 400:
                    this.errorFlagInput = true;
                  break;
                  case 409:
                    this.errorFlagDuplicate = true;
                  break;
                  default:
                    this.errorFlagOthers = true;
                }
            })
    },
  }
}
</script>

<style scoped lang="scss">
header{
  font-size:30px;
  padding:20px;
  background-color:#9fca99;
}
h1.na{
  padding:20px;
  width:480px;
  background-color:#dddddd;
  border:solid 1px #dddddd;
  margin-left:auto;
  margin-right:auto;
  margin-bottom: 0 
}
Form p{
    font-weight:900; 
    font-size:18px;
}
form{
  padding:20px;
  width:480px;
  border:solid 1px #dddddd;
  margin-left:auto;
  margin-right:auto;
  margin-top: 0;
  margin-bottom: 0 ;
}
#submitbutton{
  font-size:18px;
  margin-left:auto;
  margin-right:auto;
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  padding: 1rem 3rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  background-color:#a6eaf2;
  border-radius: 0.5rem;
  border:none;
}
#submitbutton:hover{
  color: #fff;
  background:#70ddeb;
}
.btn_trs{
  text-align:right;
  margin-right:20px;
}
.invalid-feedback{
  color:red;
}
.error_process{
  color:red;
  font-weight:900; 
  font-size:18px;
  text-align:center;
  margin-top:5px;
}
</style>