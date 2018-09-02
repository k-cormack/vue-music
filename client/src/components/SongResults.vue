<template>
    <div>
      <div v-for="song in songResults" :key="song.id" class="card-deck">
        <div class="card border-dark mb-3">
          <img class="card-img-top img-responsive" src="${artist.albumArt}" alt="art"/>
          <div class="card-body">
              <h5 class="card-title">${artist.title}</h5>
              <p class="card-text">${artist.artist}</p>
              <p class="card-text">${artist.collection}</p>
              <p class="card-text">$${artist.price}</p>
          </div>
          <div class="card-footer">
          <audio controls class="audio-controls">
            <source src="${artist.preview}" type="audio/mpeg" />
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
        return{}
    },

    mounted: {

    },

    computed: {
      songResults() {
        return this.$store.state.songResults
      },

    },

    methods: {

    }


};
</script>

<style>
</style>

