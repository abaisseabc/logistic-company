import { createStore } from 'vuex'
import db from '../seeders/db.json'

export default createStore({
  state: {
    table: [],
    filter_table: [],
  },
  getters: {
    TABLE(state) {
      return state.table
    },
    FILTER_TABLE(state) {
      return state.filter_table
    }
  },
  mutations: {
    SET_TABLE_TO_STATE: (state) => {
      state.table = db
    },
    SET_TABLE_WITH_FILTER: (state, filterObj) => {
      state.filter_table = []
      state.table.filter( el  => {

        switch (filterObj.condition) {
          case '=':
            if (String(el['name_company']) === String(filterObj.input)) {
              checkElemInArray(el);
            }
            if (Number(el.distance) === Number(filterObj.input)) {
              checkElemInArray(el);
            }
            if (Number(el.amount) === Number((filterObj.input))) {
              checkElemInArray(el);
            }
            break;
          case '>':
            if (String(el['name_company']) > String(filterObj.input) && String(filterObj.column) === 'name') {
              checkElemInArray(el);
            }
            if (Number(el.distance) > Number(filterObj.input) && String(filterObj.column) === 'distance') {
              checkElemInArray(el);
            }
            if (Number(el.amount) > Number(filterObj.input) && String(filterObj.column) === 'amount') {
              checkElemInArray(el);
            }
            break;
          case '<':
            if (String(el['name_company']) < String(filterObj.input) && String(filterObj.column) === 'name') {
              checkElemInArray(el);
            }
            if (Number(el.distance) < Number(filterObj.input) && String(filterObj.column) === 'distance') {
              checkElemInArray(el);
            }
            if (Number(el.amount) < Number(filterObj.input) && String(filterObj.column) === 'amount') {
              checkElemInArray(el);
            }
            break;
          case 'contains':
            if(el['name_company'].includes(filterObj.input) && String(filterObj.column) === 'name') {
              checkElemInArray(el);
            }
            if(el.distance.includes(filterObj.input) && String(filterObj.column) === 'distance') {
              checkElemInArray(el);
            }
            if (el.amount.includes(filterObj.input) && String(filterObj.column) === 'amount') {
              checkElemInArray(el);
            }
            break;
          default: 
            return state.table
        }
      });

      function checkElemInArray(el) {
        state.filter_table.push(el)
      }
    },
    RETURN_TABLE_IN_INITIAL_STATE: (state) => {
      state.filter_table = []
    }
  },
  actions: {
    GET_TABLE_FROM_DB({commit}) {
      commit('SET_TABLE_TO_STATE', db.content);
    },
    GET_FILTER_CONDITIONS({commit}, filterObj) {
      commit('SET_TABLE_WITH_FILTER', filterObj);
    },
    DELETE_FROM_INPUT({commit}) {
      commit('RETURN_TABLE_IN_INITIAL_STATE')
    }
  },
})
