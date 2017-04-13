<template lang="html">
  <div class="animated fadeIn">
    <h1>Login</h1>
    <el-row >
      <div class="form">
        <el-form label-width="120px" class="demo-ruleForm">
          <el-form-item label="Username" prop="username">
            <el-input type="text" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="pass">
            <el-input type="password" auto-complete="off"></el-input>
          </el-form-item>
          <el-button class="btn-login" type="primary" @click="signIn()">Login</el-button>
        </el-form>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datauser: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn() {
      // console.log(this.datauser);
      let self = this
      axios.post('http://localhost:3000/users', self.datauser)
           .then(function(res) {
             console.log(res.data);
             alert("Success");
           })
           .catch(function(err) {
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
