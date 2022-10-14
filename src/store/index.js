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
      state.table.filter( el  => {

        switch (filterObj.condition) {
          case '=':
            if (el['name_company'] == filterObj.input) {
              checkElemInArray(el);
            }
            if (el.distance == filterObj.input) {
              checkElemInArray(el);
            }
            if (el.amount == filterObj.input) {
              checkElemInArray(el);
            }
            break;
          case '>':
            if (el['name_company'] > filterObj.input && filterObj.column == 'name') {
              checkElemInArray(el);
            }
            if (Number(el.distance) > Number(filterObj.input) && filterObj.column == 'distance') {
              checkElemInArray(el);
            }
            if (Number(el.amount) > Number(filterObj.input) && filterObj.column == 'amount') {
              checkElemInArray(el);
            }
            break;
          case '<':
            if (el['name_company'] < filterObj.input && filterObj.column == 'name') {
              checkElemInArray(el);
            }
            if (Number(el.distance) < Number(filterObj.input) && filterObj.column == 'distance') {
              checkElemInArray(el);
            }
            if (Number(el.amount) < Number(filterObj.input) && filterObj.column == 'amount') {
              checkElemInArray(el);
            }
            break;
          case 'contains':
            if(el['name_company'].includes(filterObj.input) && filterObj.column == 'name') {
              checkElemInArray(el);
            }
            if(el.distance.includes(filterObj.input) && filterObj.column == 'distance') {
              checkElemInArray(el);
            }
            if (el.amount.includes(filterObj.input) && filterObj.column == 'amount') {
              checkElemInArray(el);
            }
            break;
          default: 
            return state.table
        }

        function checkElemInArray(el) {
          if (state.filter_table.length === 0) {
            state.filter_table.push(el);
          } else {
            state.filter_table.forEach(item => {

              if (item.id !== el.id) {
                state.filter_table = [];
                if (item.id !== el.id) 
                {
                  state.filter_table.push(el);
                }
              }
            })
          }
        }

      })
    },
  },
  actions: {
    GET_TABLE_FROM_DB({commit}) {
      commit('SET_TABLE_TO_STATE', db.content);
    },
    GET_FILTER_CONDITIONS({commit}, filterObj) {
      commit('SET_TABLE_WITH_FILTER', filterObj);
    }
  },
})
