<template lang="html">
  <el-menu theme="dark" :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <router-link to="/"><el-menu-item index="1">Ngerumpi</el-menu-item></router-link>
    <router-link to="chatroom"><el-menu-item style="float:right;" index="2">Chatroom</el-menu-item></router-link>
    <router-link to="signup"><el-menu-item style="float:right;" index="3">Sign Up</el-menu-item></router-link>
    <router-link to="login"><el-menu-item style="float:right;" index="4">Login</el-menu-item></router-link>

  </el-menu>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
