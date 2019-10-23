import axios from 'axios'

class Axios {
  constructor(){
    this.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/'
  }
  request(config){
    const instance = axios.create({
      baseURL: this.baseURL
    })
    instance.interceptors.request.use((config) => {
      const token = localStorage.getItem('token')
      if(token){
        config.headers.authentication = token
      }
      return config
    }, err => Promise.reject(err))
    return instance(config)
  }
}

export default new Axios()