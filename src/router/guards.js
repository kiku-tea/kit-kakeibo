import store from '../store'

export const authorizeToken = (to, from, next) => {
  if(to.matched.some(page => page.meta.loginForm) && (store.state.auth.token !== null)){
    next('/inputList/:id')
  }else if (to.matched.some(page => page.meta.requiresAuth) && (store.state.auth.token === null)) {
    next('/login')
  } else {
    next()
  }
}