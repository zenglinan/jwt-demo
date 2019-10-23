<template>
  <div class="login">
    <h1>This is an Login page</h1>
    <label class="input">
      <span>用户名：</span>
      <input type="text" v-model="username" @keyup.enter="login">
    </label>
    <label class="input">
      <span>密码：</span>
      <input type="text" v-model="password" @keyup.enter="login">
    </label>
    <button @click="login">login</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login(){
      if(this.validate()){
        this.$store.dispatch('login', { username: this.username, password: this.password })
          .then(token => {
            this.$router.push('/center')
            localStorage.setItem('token', token)
          }).catch(err => console.log(err))
      }else {
        alert('请填写完整的用户名和密码')
      }
    },
    validate(){
      return this.username.replace(/\s/g, '') && this.password.replace(/\s/g, '')
    }
  }
}
</script>

<style lang="scss" scoped>
  label.input {
    width: 26%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    input {
      width: 80%;
    }
    span{
      display: block;
      width: 20%;
      text-align-last: justify;
    }
  }
</style>
