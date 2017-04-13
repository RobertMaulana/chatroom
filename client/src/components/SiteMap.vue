<template lang="html">
  <div class="">
    <el-row :span="24">
      <div class="welcome-img">

          <h1 id="tag" class="animated zoomIn">Connecting People</h1>

        <img class="animated slideInUp" src="http://i.imgur.com/pZoYjKN.jpg" alt="home-picture">
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  h1{
    font-family: Lato;
  }
  .welcome-img {
    width: 80%;
    margin: 0 auto;
  }
  img {
    width: 100%;
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s
  }
</style>
