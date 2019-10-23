import axios from '../lib/axios'

export const login = ({ username, password }) => axios.request({
  url: '/login',
  method: 'POST',
  data: { username, password } 
})

export const verify = () => axios.request({ url: '/verify' })

export const register = ({ username, password }) => axios.request({
  url: '/register',
  method: 'POST',
  data: { username, password }
})
