<template>
    <div>
      <div v-for="song in songResults" :key="song.trackId" class="card-deck">
        <div class="card border-dark mb-3">
          <img class="card-img-top img-responsive" :src="song.artworkUrl100" alt="art"/>
          <div class="card-body">
              <h5 class="card-title">{{song.trackName}}</h5>
              <p class="card-text">{{song.artistName}}</p>
              <p class="card-text">{{song.collectionName}}</p>
              <p class="card-text">${{song.collectionPrice}}</p>
              <!-- <button>Add to Playlist</button> -->
              <form class="form" @submit.prevent="addToPlayList(song)">
                <button type="submit" class="btn-floating">
                  <i class="fa fa-plus">
                  </i>
                </button>
                    Add to Playlist
              </form>
          </div>
          <div class="card-footer">
          <audio controls class="audio-controls">
            <source :src="song.previewUrl" type="audio/mpeg" />
          </audio>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
export default {
    name: "SongResults",
    data(){
        return{
          newSong: this.song
        };
    },

    // mounted: {

    // },

    computed: {
      songResults() {
        return this.$store.state.songResults;
      },

    },

    methods: {
      addToPlayList(song) {
        debugger
        this.$store.dispatch('addToPlayList', song)
      }

    },


};
</script>

<style>
</style>

