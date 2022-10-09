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
    },
    SET_TABLE_WITH_FILTER: (state, filterObj) => {
      state.table.filter( el  => {

        if (filterObj.condition == '=') {
          if (el.name == filterObj.input) {
            console.log(el)
          }
          if (el.distance == filterObj.input) {
            console.log(el)
          }
          if (el.amount == filterObj.input) {
            console.log(el)
          }
        } else if (filterObj.condition == '>') {
          if (el.name > filterObj.input && filterObj.column == 'name') {
            console.log(el)
          }
          if (Number(el.distance) > Number(filterObj.input) && filterObj.column == 'distance') {
            console.log(el)
          }
          if (Number(el.amount) > Number(filterObj.input) && filterObj.column == 'amount') {
              console.log(el)
          }
        } else if (filterObj.condition == '<') {
          if (el.name < filterObj.input && filterObj.column == 'name') {
            console.log(el)
          }
          if (Number(el.distance) < Number(filterObj.input) && filterObj.column == 'distance') {
            console.log(el)
          }
          if (Number(el.amount) < Number(filterObj.input) && filterObj.column == 'amount') {
              console.log(el)
          }
        } else if (filterObj.condition == 'contains') {
          if(el.name.includes(filterObj.input) && filterObj.column == 'name') {
            console.log(el)
          }
          if(el.distance.includes(filterObj.input) && filterObj.column == 'distance') {
            console.log(el)
          }
          if (el.amount.includes(filterObj.input) && filterObj.column == 'amount') {
            console.log(el)
          }
        }

      })
    },
  },
  actions: {
    GET_TABLE_FROM_DB({commit}) {
      commit('SET_TABLE_TO_STATE', db.content)
    },
    GET_FILTER_CONDITIONS({commit}, filterObj) {
      commit('SET_TABLE_WITH_FILTER', filterObj)
    }
  },
  modules: {
  }
})
