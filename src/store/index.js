import { createStore } from 'vuex'
import db from '../seeders/db.json'

export default createStore({
  state: {
    table: [],
    filteredTable: []
  },
  getters: {
    TABLE(state) {
      return state.table
    },
    FILTEREDTABLE(state) {
      return state.filteredTable
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
            movingElements(el)
          }
          if (el.distance == filterObj.input) {
            movingElements(el)
          }
          if (el.amount == filterObj.input) {
            movingElements(el)
          }
        } else if (filterObj.condition == '>') {
          if (el.name > filterObj.input && filterObj.column == 'name') {
            movingElements(el)
          }
          if (Number(el.distance) > Number(filterObj.input) && filterObj.column == 'distance') {
            movingElements(el)
          }
          if (Number(el.amount) > Number(filterObj.input) && filterObj.column == 'amount') {
            movingElements(el)
          }
        } else if (filterObj.condition == '<') {
          if (el.name < filterObj.input && filterObj.column == 'name') {
            movingElements(el)
          }
          if (Number(el.distance) < Number(filterObj.input) && filterObj.column == 'distance') {
            movingElements(el)
          }
          if (Number(el.amount) < Number(filterObj.input) && filterObj.column == 'amount') {
            movingElements(el)
          }
        } else if (filterObj.condition == 'contains') {
          if(el.name.includes(filterObj.input) && filterObj.column == 'name') {
            movingElements(el)
          }
          if(el.distance.includes(filterObj.input) && filterObj.column == 'distance') {
            console.log(el)
          }
          if (el.amount.includes(filterObj.input) && filterObj.column == 'amount') {
            movingElements(el)
          }
        }
      })

      function movingElements(desiredValue) {
        state.table.sort(function(x,y){ 
          return x == desiredValue ? -1 : y == desiredValue ? 1 : 0; 
        });
      }
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
