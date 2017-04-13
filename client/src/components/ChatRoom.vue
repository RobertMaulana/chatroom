<template lang="html">
  <div class="">
    <el-row>
      <el-col :span="4">
        <left-bar @pindah="gantiChannel" ></left-bar>
      </el-col>
      <el-col :span="16">
        <chat-space :channel-name="channel"></chat-space>
      </el-col>
      <el-col :span="4">
        <right-bar></right-bar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import ChatSpace from './ChatSpace';

export default {
  components: {
    LeftBar,
    RightBar,
    ChatSpace
  },
  data(){
    return {
      channel: 'ibu-ibu salon'
    }
  },
  methods:{
    gantiChannel(channel){

      this.channel = channel.name
      // console.log(this.channel);
    }

  }
}
</script>

<style lang="css">
</style>
