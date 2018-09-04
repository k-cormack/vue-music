import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
// import Song from './models/Song.js'


Vue.use(Vuex)

// @ts-ignore
let songListApi = Axios.create({
  baseURL: "https://itunes.apple.com/search?term=",
  timeout: 3000
})

// @ts-ignore
let playListApi = Axios.create({
  baseURL: "//localhost:3000/api/songs",
  timeout: 3000
})


export default new Vuex.Store({
  state: {
    songResults: {},
    song: {},
    playLists: {},
    playList: [],
    playListId:{},
    songId: {},


  },
  mutations: {
    setSongResults(state, data) {
      state.songResults = data
    },
    setPlayList(state, data) {
      state.playList = data
      debugger
    }

  },
  actions: {
    getSongResults({ commit, dispatch}, data) {
     
      songListApi.get('' + data)
      .then(res => {
        commit('setSongResults', res.data.results)
      })
    },

    getPlaylist({ commit, dispatch}, data) {
      playListApi.get('', data)
      .then(res => {
        commit('setPlayList', res.data)
      })
    },
  
    addToPlayList({ commit, dispatch }, song) {
      playListApi.post('', song)
      .then(res => {
        commit('setPlayList', res.data)
        debugger
        
      })
    },
    
    removeFromPlayList({commit, dispatch}, song) {
      playListApi.delete('', song)
      .then(res => {
        commit('setPlayList', res.data)
      })
    },

    // addToLocalStorage(localSong) {
    //     localStorage.setItem('songInfo', JSON.stringify(localSong))
    // },

    // loadSongs() {
    //   let playListSongs = []
    //   playListSongs = JSON.parse(localStorage.getItem('songInfo')) || []
    // },

    newPlayList({ commit, dispatch}, playListConfig) {
      playListApi.post('', {playListConfig})
      .then(res => {
        commit('setPlayLists', res.data)
      })
    },




  }
})
