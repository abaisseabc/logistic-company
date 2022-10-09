import { createStore } from 'vuex'
import db from '../seeders/db.json'

export default createStore({
  state: {
    table: []
  },
  getters: {
    TABLE(state) {
      return state.table
    }
  },
  mutations: {
    SET_TABLE_TO_STATE: (state) => {
      state.table = db
    }
  },
  actions: {
    GET_TABLE_FROM_DB({commit}) {
      commit('SET_TABLE_TO_STATE', db.content)
    }
  },
  modules: {
  }
})
