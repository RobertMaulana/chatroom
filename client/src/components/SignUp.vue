<template lang="html">
  <div class="animated fadeIn">
    <h1>Sign up</h1>
    <el-row>
      <div class="form">
        <el-form label-width="120px" class="demo-ruleForm">
          <el-form-item label="Username" prop="username">
            <el-input type="text" auto-complete="off" v-model="datauser.username"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="pass">
            <el-input type="password" auto-complete="off" v-model="datauser.password"></el-input>
          </el-form-item>
          <el-form-item label="Name" prop="name">
            <el-input type="text" auto-complete="off" v-model="datauser.name"></el-input>
          </el-form-item>
          <el-form-item label="Phone" prop="phone">
            <el-input type="text" auto-complete="off" v-model="datauser.phone"></el-input>
          </el-form-item>
          <el-form-item label="Birthdate" prop="birthdate">
            <el-date-picker
              class="datenih"
              v-model="datauser.birthdate"
              type="date"
              placeholder="Pick a day">
            </el-date-picker>
          </el-form-item>

          <el-button class="btn-login" type="primary" @click="signUp()">Sign up</el-button>
        </el-form>
      </div>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      datauser: {
        username: '',
        password: '',
        name:'',
        phone:'',
        birthdate:''
      }
    }
  },
  methods: {
    signUp() {
      // console.log(this.datauser);
      let self = this
      axios.post('http://localhost:3000/users', self.datauser)
           .then(function(res) {
             console.log(res.data);
             location.href="http://localhost:8080/#"
           })
           .catch(function(err) {
             alert(err);
           })
    }
  }
}
</script>

<style lang="css">
  .datenih{
    float: left;
  }
</style>
