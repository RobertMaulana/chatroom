<template lang="html">
  <div class="animated fadeIn">
    <h1>Login</h1>
    <el-row >
      <div class="form">
<<<<<<< HEAD
        <el-form label-width="120px" class="demo-ruleForm">
=======
        <el-form ref="ruleForm2" label-width="120px" class="demo-ruleForm">
>>>>>>> b1174e87c1ac4fd0a76302443f24617e4c42de86
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
      axios.post('http://localhost:3000/users/login', {
        username: self.user.username,
        password: self.user.password
      })
      .then((res) => {
        // console.log(res);
        window.localStorage.setItem('token', res.data.token);
        window.localStorage.setItem('user', res.data.user.name);
        console.log('-user from localStorage', window.localStorage.getItem('user'));
        console.log('---token from localStorage',window.localStorage.getItem('token'));
        self.user.id = res.data.user.id;
        self.user.username = res.data.user.username;
        self.user.name = res.data.user.name;
        // console.log(res.data.token);
        self.user.password = null;
        location.href="http://localhost:8080/#/chatroom";
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
