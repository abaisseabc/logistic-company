<template>

  <div class="filter">
    <div class="filter__header">
        Фильтрация:
    </div>
    <select name="" id="" v-model="column">
        <option value="name">Название</option>
        <option value="amount">Количество</option>
        <option value="distance">Расстояние</option>
    </select>
    <select name="" id="" v-model="condition">
        <option value="=">Равно</option>
        <option value="contains">Содержит</option>
        <option value=">">Больше</option>
        <option value="<">Меньше</option>
    </select>
    <input type="text" v-model="input">
    <button @click="formOut(column, condition, input)">
        Отфильтровать
    </button>
  </div>

  <div class="table">
    <div class="table__header">
      <p>Дата</p>
      <p>Название</p>
      <p>Количество</p>
      <p>Расстояние</p>
    </div>
    <div class="table__body">
      <vTableRow 
        v-for="row in paginationTableRecords"
        :key="row.id"
        :row_data="row"
      />
    </div>
    <div class="table__pagination">
      <div 
        class="table-page"
        v-for="page in pages"
        :key="page"
        @click="pageClick(page)"
      >
        {{page}}
      </div>
    </div>
  </div>
</template>

<script>
import vTableRow from '@/components/v-table-row.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    vTableRow
  },
  props: {
    table_data: {
      type: Array
    }
  },
  data() {
    return {
      pageNumber: 1,
      numberOfTableEntries: 5,
      column: '',
      condition: '',
      input: ''
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.table_data.length / 5)
    },
    paginationTableRecords() {
      let from = (this.pageNumber - 1) * this.numberOfTableEntries;
      let to = from + this.numberOfTableEntries;
      return this.table_data.slice(from, to)
    }
  },
  methods: {
    ...mapActions([
      'GET_FILTER_CONDITIONS'
    ]),
    pageClick(page) {
      this.pageNumber = page
    },
    formOut(column, condition, input) {
      let filterObj = 
      {
        column: column,
        condition: condition,
        input: input
      }
      this.GET_FILTER_CONDITIONS(filterObj)
    }
  }
}
</script>

<style>
  .table {
    max-width: 700px;
    margin: 0 auto;
  }
  .table p {
    flex-basis: 15%;
    text-align: left;
  }
  .table__header {
    display: flex;
    justify-content: space-around;
  }
  .table__pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .table-page {
    cursor: pointer;
    margin-right: 10px;
    margin-top: 50px;
  }
</style>