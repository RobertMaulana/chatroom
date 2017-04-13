<template lang="html">
  <el-row class="tac">
      <h5>Channels</h5>
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-menu-item index="2" v-for="channel in channels" @click="pindahChannel(channel)"></i>{{ channel.name }}</el-menu-item>
      </el-menu>
  </el-row>
</template>
<script>
import API from '../var'
import axios from 'axios'
export default {
  data(){
    return {
      channels: []
    }
  },
  methods: {
    getChannel(){
      let self=this
      axios.get(API.url+'/channels',{headers: {'token': window.localStorage.getItem('token')}})
      .then(res => {
        self.channels = res.data;
      })
      .catch(err => {
        console.log(err)
      })
    },
    pindahChannel(channel){
      this.$emit('pindah',channel)
    }
  },
  mounted(){
    this.getChannel()
  }
}
</script>

<style lang="css">
</style>
