<template lang="html">
  <div class="animated fadeIn">
    <h1>Sign up</h1>
    <el-row>
      <div class="form">
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
          <el-form-item label="Username" prop="username">
            <el-input type="text" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="pass">
            <el-input type="password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="Confirm" prop="pass">
            <el-input type="password" auto-complete="off"></el-input>
          </el-form-item>
          <el-button class="btn-login" type="primary" @click="submitForm('ruleForm2')">Sign up</el-button>
        </el-form>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
