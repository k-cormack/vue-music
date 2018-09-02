<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <div class="row">
      <form class="form-inline" onsubmit="app.controllers.itunesCtrl.getMusic(event)" id="artistForm">
            <!--DO NOT MODIFY THE ID OR ONCLICK ATTRIBUTES IN THIS FORM-->
            <div class="form-group">
                <input type="text" class="form-control m-2" name="artist" placeholder="Artist, Album, or Song Name" size="25" />
                <button type="submit" class="btn btn-primary m-2" id="get-music-button">Get Music</button>
            </div>
      </form>
      </div>
      <div class="row">
        <div class="col-4">
        <Songs/>
        </div>
        <div class="col-4">
        <Playlists/>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
