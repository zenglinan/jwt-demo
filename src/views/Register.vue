<template>
  <div id="register">
    <h1>This is an Register page</h1>
    <label class="input">
      <span>用户名：</span>
      <input type="text" v-model="username" @keyup.enter="register">
    </label>
    <label class="input">
      <span>密码：</span>
      <input type="text" v-model="password" @keyup.enter="register">
    </label>
    <button @click="register">Register</button>
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
    register(){
      if(this.validate()){
        this.$store.dispatch('register', { username: this.username, password: this.password })
          .then(res => this.$router.push('/login'))
          .catch(err => console.log(err))
      }else{
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
#register{
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
}

</style>