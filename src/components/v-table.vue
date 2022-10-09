<template>
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
      numberOfTableEntries: 5
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
    pageClick(page) {
      this.pageNumber = page
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