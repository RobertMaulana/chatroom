<template lang="html">
  <div class="">
    <el-row>
      <el-col :span="4">
        <left-bar></left-bar>
      </el-col>
      <el-col :span="16">
        <chat-space></chat-space>
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
  }
}
</script>

<style lang="css">
</style>
