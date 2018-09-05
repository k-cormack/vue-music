<template>
  <div class="home">
    <!-- <div>
      <router-link to="/Playlists">Playlists</router-link>
    </div> -->
      <div class="row">
      <form class="form-inline" @submit.prevent="getSongResults" id='artistForm'>
            <!--DO NOT MODIFY THE ID OR ONCLICK ATTRIBUTES IN THIS FORM-->
            
                <input type="text" v-model="searchArtist" class="form-control m-2" name="artist" placeholder="Artist, Album, or Song Name" size="25" required/>
                <button type="submit" class="btn btn-primary m-2" id="get-music-button">Get Music</button>
            
      </form>
      </div>
      <div class="row">
        <div class="col-4">
        <SongResults/>
        </div>
        <div class="col-4">
        <Playlist/>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import SongResults from '@/components/SongResults';
import Playlist from '@/components/Playlist'


export default {
  name: 'home',
  data() {
    return {
      searchArtist: this.searchArtist
      // searchConfig: {
      // }
    }
  },
  
  // name: 'home',
  // components: {
  //   HelloWorld
  // }
  // mounted() {

  //   },

  methods: {
    getSongResults() {
      
      this.$store.dispatch('getSongResults', this.searchArtist);
    },

    addToPlaylist() {
      this.$store.dispatch('addToPlaylist', this.songId)
    },
    
  },

  computed: {
    songResults() {
      return this.$store.state.songResults;
    },
    songId() {
      return this.$store.state.songId;
    },

  },

  components: {
    SongResults,
    Playlist
  }
}
</script>
