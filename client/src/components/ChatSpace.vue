<template lang="html">
  <div class="animated pulse chat-field">
    <el-row class="tac">
      <el-menu theme="light" :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Chat Area</el-menu-item>
        <el-menu-item style="float:right;" index="2"><i class="el-icon-setting"></i>Settings</el-menu-item>
      </el-menu>
    </el-row>
    <el-row class="tac space">
      <div class="chat-space">
        <ul>
          <li>User 1 : test</li>
          <li>User 2 : test</li>
          <li>User 3 : test</li>

        </ul>
      </div>
      <div class="input-chat">
          <el-input
            class="input-area"
            type="textarea"
            :autosize="{ minRows: 6, maxRows: 8}"
            placeholder="a simple Hi! , can change your life"
            v-model="textarea3">
          </el-input>
          <br>
          <br>
          <el-button class="btn-submit" type="success">Send</el-button>
      </div>
    </el-row>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.tac ul {
  text-align: left;
}
  .chat-field {
    border-left: 1px solid white;
    border-right: 1px solid white;
  }

  .el-menu {
    background-color: white;

  }
  .space {
    background-color: #eef1f6;
  }

  .chat-space {
    width: 100%;
    height: 500px;
  }

  .input-chat {
    width: 98%;
    /*border: 1px solid black;*/
    padding: 10px 10px;
    text-align: right;
    text-align: right;
  }

</style>
