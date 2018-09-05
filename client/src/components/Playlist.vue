<template>
    <div>
      <!-- <div>
        <button>Create New Playlist</button>
      </div> -->
      <div v-for="song in playList" :key="song._id" class="card-deck">
        <div class="card border-dark mb-3">
          <!-- <img class="card-img-top img-responsive" :src="song.artworkUrl100" alt="art"/> -->
          <div class="card-body">
              <h5 class="card-title">{{song.artistName}}</h5>
              <p class="card-text">{{song.trackName}}</p>
              <button @click="removeFromPlayList(song)" >Remove From Playlist</button>
              <!-- <p class="card-text">{{song.collectionName}}</p>
              <p class="card-text">${{song.collectionPrice}}</p> -->
          </div>
          <div class="card-footer">
          <audio controls class="audio-controls">
            <source :src="song.previewUrl" type="audio/mpeg" />
          </audio>
          </div>
        </div>
      </div>
      <!-- <div>
      <router-link to="/">Home</router-link>
    </div> -->
    </div>
</template>


<script>
export default {
    name: "Playlist",
    data(){
        return{};
    },

    mounted() {
      this.$store.dispatch('getPlaylist')
    },

    computed: {
      playList() {
        return this.$store.state.playList;
        debugger
      },

    },

    methods: {
      removeFromPlayList(song){
        this.$store.dispatch('removeFromPlayList', song)
      }

    }


};
</script>

<style>
</style>