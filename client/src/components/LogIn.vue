<template lang="html">
  <div class="animated fadeIn">
    <h1>Login</h1>
    <el-row >
      <div class="form">
        <el-form label-width="120px" class="demo-ruleForm">
          <el-form-item label="Username" prop="username">
            <el-input type="text" auto-complete="off" v-model="user.username"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="pass">
            <el-input type="password" auto-complete="off" v-model="user.password"></el-input>
          </el-form-item>
          <el-button class="btn-login" type="primary" @click="signIn()">Login</el-button>
        </el-form>
      </div>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      user: {
        username	: null,
        password: null
      }
    }
  },
  methods: {
    signIn() {
      console.log('---signIn');
      var self = this;
      axios.post('http://0f729622.ngrok.io/users/login', {
        username: self.user.username,
        password: self.user.password
      })
      .then((res) => {
        // console.log(res);
        window.localStorage.setItem('token', res.data.token);
        window.localStorage.setItem('id', res.data.user.id);
        window.localStorage.setItem('user', res.data.user.name);
        console.log('-user from localStorage', window.localStorage.getItem('user'));
        console.log('---token from localStorage',window.localStorage.getItem('token'));
        // console.log(res.data.token);
        self.user.password = null;
        location.href="/#/chatroom";
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="css">
  .btn-login {
    float: right;
  }

  .form{
    width: 60%;
    margin: 0 auto;
  }
</style>
