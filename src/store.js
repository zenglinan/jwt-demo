import Vue from 'vue'
import Vuex from 'vuex'
import { login, verify, register } from './api/sign'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    setUser(state, username){
      state.username = username
    }
  },
  actions: {
    async login({ commit }, user){
      const { data } = await login(user)
      if(data.code === -1){
        return Promise.reject(data)
      }else {
        commit('setUser', data.username)
        return Promise.resolve(data.token)
      }
    },
    async register({ commit }, user){
      const {data} = await register(user)
      if(data.code === -1){
        
        return Promise.reject(data.msg)
      }else {
        return Promise.resolve(true)
      }
    },
    async verify({ state, commit }){
      const { data } = await verify()
      if(data.code === -1){
        return Promise.reject(data)
      }else {
        commit('setUser', data.username)
        return Promise.resolve(data.token)
      }
    }
  }
})
