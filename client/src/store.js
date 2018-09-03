import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let songListApi = Axios.create({
  baseURL: 'https://itunes.apple.com/search?term=',
  timeout: 3000
})


export default new Vuex.Store({
  state: {
    songResults: {},
    song: {},
    playLists: [],
    playList: {},
    playListId:{},
    songId: {},


  },
  mutations: {
    setSongResults(state, data) {
      state.songResults = data
    },

  },
  actions: {
    getSongResults({ commit, dispatch}, data) {
     
      songListApi.get('' + data)
      .then(res => {
        commit('setSongResults', res.data.results)
      })
    }

  }
})
