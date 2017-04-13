<template lang="html">
  <div class="animated pulse chat-field">
    <el-row class="tac">
      <el-menu theme="light" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">Chat Area</el-menu-item>
        <el-menu-item style="float:right;" index="2"><i class="el-icon-setting"></i>Settings</el-menu-item>
      </el-menu>
    </el-row>
    <el-row class="tac space">
      <div class="chat-space">
        <ul>
          <li v-for="chat in chatbox"><b><i>{{ chat.name }}</i></b> : {{ chat.text }}</li>
        </ul>
      </div>
      <div class="input-chat">
          <el-input
            class="input-area"
            type="textarea"
            :autosize="{ minRows: 6, maxRows: 8}"
            placeholder="a simple Hi! , can change your life"
            v-model="chat.content">
          </el-input>
          <br>
          <br>
          <el-button class="btn-submit" type="success" @click="sendChat()" >Send</el-button>
      </div>
    </el-row>
  </div>

</template>

<script>
import API from '../var'
import axios from 'axios'
export default {
  props:['channelName'],
  data(){
    return {
      user: {
        username	: null,
        password  : null
      },
      chat: {
        content : ''
      },
      chatbox: []
    }
  },
  methods: {
    sendChat() {
      console.log(window.localStorage.getItem('user'))
      console.log(this.channelName);
      let self = this;
      axios.post('http://0f729622.ngrok.io/chats', {
        channel : this.channelName,
        text    : self.chat.content,
        user    : window.localStorage.getItem('id'),
        name    : window.localStorage.getItem('user')
      },{headers: {'token': window.localStorage.getItem('token')}})
      .then((res) => {
        self.clearChat()
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    getChat() {
      let self=this
      firebase.database().ref(`${this.channelName}`).on('value', function(snapshot) {
        console.log(snapshot.val());
        self.chatbox.push({
          text: snapshot.val().content_chat,
          name: snapshot.val().name
        })
      });
    },
    clearChat(){
      this.chat.content = ''
    }
  },
  mounted: function(){
    this.getChat()
  }
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
