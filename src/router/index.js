import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/organisms/LoginView.vue'
import Top from '../components/organisms/TopView.vue'
// import { authorizeToken } from './guards'
//analysis
import  analysis from '../views/analysis/AnalysisMain.vue'
//input-list
import  inputList from '../views/input-list/InputList.vue'
//login
import loginForm  from '../views/login/LoginForm.vue'
import loginMailAddressComplete  from '../views/login/MailAddressComplete.vue'
import loginMailAddressForm from '../views/login/MailAddressForm.vue'
import loginResetPassword  from '../views/login/ResetPassword.vue'
//mypage
import myPageMailAddressComplete from '../views/mypage/MailAddressComplete.vue'
import myPageMailAddressForm from '../views/mypage/MailAddressForm.vue'
import myPage from '../views/mypage/MyPage.vue'
import myPageEdit from '../views/mypage/MyPageEdit.vue'
import myPageEditConfirmation from '../views/mypage/MyPageEditConfirmation.vue'
import myPageResetPassword from '../views/mypage/ResetPassword.vue'
//record
import record from '../views/record/RecordMain.vue'
//register
import registerMailAddressComplete from '../views/register/MailAddressComplete.vue'
import registerMailaddressForm from '../views/register/MailAddressForm.vue'
import registerConfirmation from '../views/register/RegisterConfirmation.vue'
import registerForm from '../views/register/RegisterForm.vue'

const routes = [

  //ログイン機能テスト
  {
    path: '/',
    name: 'Top',
    component: Top,
    meta: {
      requiresAuth: true
    }

  },
  {
    path: '/login-test',
    name: 'LoginTest',
    component: Login
  },
  //analysis
  {
    path: '/analysis/:id' ,
    name: 'AnalysisMain' ,
    component: analysis
  },
  //input-list
  {
    path: '/input-list/:id' ,
    name:  'InputList',
    component: inputList
  },
  
  //login
  {
    path: '/login' ,
    name:  'LoginForm',
    component: loginForm,
    meta:{
      loginForm: true
    }
  },
  {
    path: '/login/mailaddress-form/complete' ,
    name:  'LoginMailAddressComplete',
    component: loginMailAddressComplete
  },
  {
    path: '/login/mailaddress-form' ,
    name:  'LoginMailAddressForm',
    component: loginMailAddressForm
  },
  {
    path: '/login/resetting-password' ,
    name:  'LoginResetPassword',
    component: loginResetPassword
  },
  //mypage
  {
    path: '/mypage/mailaddress-form/complete' ,
    name:  'MyPageMailAddressComplete',
    component: myPageMailAddressComplete
  },
  {
    path: '/mypage/mailaddress-form' ,
    name:  'MyPageMailAddressForm',
    component: myPageMailAddressForm
  },
  {
    path:  '/mypage/:id',
    name:  'MyPage',
    component: myPage
  },
  {
    path: '/mypage/:id/edit' ,
    name: 'MyPageEdit' ,
    component: myPageEdit
  },
  {
    path: '/mypage/:id/edit/confirmation' ,
    name: 'MyPageEditConfirmation' ,
    component: myPageEditConfirmation
  },
  {
    path: '/mypage/:id/resetting-password' ,
    name: 'MyPageResetPassword' ,
    component: myPageResetPassword
  },
  //record
  {
    path: '/record' ,
    name: 'RecordMain' ,
    component: record
  },
  //register
  {
    path: '/register/mailaddress-form/complete' ,
    name: 'RegisterMailAddressComplete' ,
    component: registerMailAddressComplete
  },
  {
    path: '/register/mailaddress-form' ,
    name: 'RegisterMailaddressForm' ,
    component: registerMailaddressForm
  },
  {
    path: '/register/confirmation' ,
    name: 'RegisterConfirmation' ,
    component: registerConfirmation
  },
  {
    path: '/register' ,
    name: 'RegisterForm' ,
    component: registerForm
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// router.beforeEach(authorizeToken)

export default router